(() => {
    const leagueNames = {
        "eng.1": "Premier League",
        "esp.1": "LaLiga",
        "ita.1": "Serie A",
        "ger.1": "Bundesliga",
        "fra.1": "Ligue 1"
    };
    const leagues = Object.keys(leagueNames);
    const leagueAssets = {
        "eng.1": "./images/ligalar/english-premier-league.ee1e9b08.png",
        "esp.1": "./images/ligalar/LaLiga_logo_2023.svg.webp",
        "ita.1": "./images/ligalar/serie_a-brandlogo.net_-512x512.png",
        "ger.1": "./images/ligalar/Bundesliga_logo_(2017).svg.webp",
        "fra.1": "./images/ligalar/ligue-1.webp"
    };
    const matchView = document.getElementById("live-matches-view");
    const matchList = document.getElementById("live-match-list");
    const status = document.getElementById("live-matches-status");
    const statusText = document.getElementById("live-matches-status-text");
    const refreshButton = document.getElementById("live-matches-refresh");
    const filters = [...document.querySelectorAll(".live-match-filter")];
    if (!matchView || !matchList || !refreshButton || !filters.length) return;

    const detailsCache = new Map();
    const detailRequests = new Map();
    const detailControllers = new Map();
    const expandedMatches = new Set();
    let selectedLeague = "all";
    let matches = [];
    let active = false;
    let refreshTimer = 0;
    let requestGeneration = 0;
    let activeController = null;
    const upcomingWindowMs = 24 * 60 * 60 * 1000;

    const statDefinitions = [
        { key: "possessionPct", label: "To‘p nazorati", percent: true },
        { key: "totalShots", label: "Zarbalar" },
        { key: "shotsOnTarget", label: "Darvozaga aniq zarbalar" },
        { key: "wonCorners", label: "Burchak to‘plari" },
        { key: "accuratePasses", secondaryKey: "totalPasses", label: "Aniq paslar" },
        { key: "foulsCommitted", label: "Qoidabuzarliklar" },
        { key: "yellowCards", label: "Sariq kartochkalar" },
        { key: "redCards", label: "Qizil kartochkalar" },
        { key: "saves", label: "Darvozabon seyvlar" }
    ];

    function setStatus(message, isError = false) {
        statusText.textContent = message;
        status.classList.toggle("is-error", isError);
        status.classList.toggle("is-loading", !isError && message.includes("yuklan"));
    }

    function getDate(offsetDays = 0) {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}${month}${day}`;
    }

    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    }

    function formatMatchDate(value, includeYear = false) {
        const date = new Date(value);
        const months = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];
        return `${date.getDate()} ${months[date.getMonth()]}${includeYear ? ` ${date.getFullYear()}` : ""}`;
    }

    function formatKickoff(value) {
        const date = new Date(value);
        const now = new Date();
        const sameDay = date.getFullYear() === now.getFullYear() &&
            date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
        const time = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
        return sameDay ? `Bugun · ${time}` : `${formatMatchDate(date)} · ${time}`;
    }

    function getTeamLogo(team) {
        return team.logo || team.logos?.[0]?.href || "";
    }

    function getMatches(events, league) {
        return events.flatMap(event => {
            const competition = event.competitions?.[0];
            const state = competition?.status?.type?.state;
            const kickoff = Date.parse(event.date);
            const isLive = state === "in";
            const isUpcoming = state === "pre" && Number.isFinite(kickoff) &&
                kickoff >= Date.now() && kickoff <= Date.now() + upcomingWindowMs;
            if (!isLive && !isUpcoming) return [];
            const competitors = competition.competitors || [];
            const home = competitors.find(team => team.homeAway === "home") || competitors[0];
            const away = competitors.find(team => team.homeAway === "away") || competitors[1];
            if (!home?.team || !away?.team) return [];
            return [{
                id: event.id,
                league,
                name: leagueNames[league],
                leagueLogo: leagueAssets[league],
                date: event.date,
                isUpcoming,
                clock: competition.status.displayClock,
                phase: competition.status.type.shortDetail || competition.status.type.detail || "Jonli",
                venue: competition.venue?.fullName || "",
                home: {
                    id: home.team.id,
                    name: home.team.displayName || home.team.name || "Uy jamoasi",
                    logo: getTeamLogo(home.team),
                    score: home.score
                },
                away: {
                    id: away.team.id,
                    name: away.team.displayName || away.team.name || "Mehmon jamoa",
                    logo: getTeamLogo(away.team),
                    score: away.score
                }
            }];
        });
    }

    function appendImage(parent, source, alt, className) {
        if (!source) return;
        const image = createElement("img", className);
        image.src = source;
        image.alt = alt;
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener("error", () => image.remove(), { once: true });
        parent.append(image);
    }

    function getTeamStatistics(summary, homeAway) {
        return summary.boxscore?.teams?.find(team => team.homeAway === homeAway)?.statistics || [];
    }

    function getStatValue(statistics, key) {
        const stat = statistics.find(item => item.name === key);
        if (!stat) return null;
        const parsed = Number.parseFloat(stat.value);
        return {
            display: stat.displayValue || (Number.isFinite(parsed) ? String(parsed) : "—"),
            numeric: Number.isFinite(parsed) ? parsed : Number.parseFloat(stat.displayValue)
        };
    }

    function renderStatistics(summary, match) {
        const homeStats = getTeamStatistics(summary, "home");
        const awayStats = getTeamStatistics(summary, "away");
        const grid = createElement("div", "match-statistics");
        const heading = createElement("div", "match-statistics-heading");
        heading.append(
            createElement("span", "", match.home.name),
            createElement("span", "", match.isUpcoming ? "O‘yinoldi statistika" : "Jonli statistika"),
            createElement("span", "", match.away.name)
        );
        grid.append(heading);

        let availableStats = 0;
        statDefinitions.forEach(definition => {
            const home = getStatValue(homeStats, definition.key);
            const away = getStatValue(awayStats, definition.key);
            if (!home && !away) return;
            availableStats += 1;
            const row = createElement("div", "match-stat-row");
            const homeDisplay = home && definition.secondaryKey
                ? `${home.display}/${getStatValue(homeStats, definition.secondaryKey)?.display ?? "—"}`
                : home?.display ?? "—";
            const awayDisplay = away && definition.secondaryKey
                ? `${away.display}/${getStatValue(awayStats, definition.secondaryKey)?.display ?? "—"}`
                : away?.display ?? "—";
            const homeValue = createElement("span", "match-stat-value", homeDisplay);
            const label = createElement("span", "match-stat-label", definition.label);
            const awayValue = createElement("span", "match-stat-value", awayDisplay);
            const bar = createElement("div", "match-stat-bar");
            const homeBar = createElement("span", "match-stat-bar-home");
            const awayBar = createElement("span", "match-stat-bar-away");
            const homeNumber = home?.numeric;
            const awayNumber = away?.numeric;
            let homeRatio = .5;
            let awayRatio = .5;
            if (Number.isFinite(homeNumber) && Number.isFinite(awayNumber)) {
                if (definition.percent) {
                    homeRatio = Math.max(0, Math.min(1, homeNumber / 100));
                    awayRatio = Math.max(0, Math.min(1, awayNumber / 100));
                } else if (homeNumber + awayNumber > 0) {
                    homeRatio = homeNumber / (homeNumber + awayNumber);
                    awayRatio = awayNumber / (homeNumber + awayNumber);
                }
            }
            homeBar.style.width = `${homeRatio * 100}%`;
            awayBar.style.width = `${awayRatio * 100}%`;
            bar.append(homeBar, awayBar);
            row.append(homeValue, label, awayValue, bar);
            grid.append(row);
        });

        if (!availableStats) {
            grid.append(createElement("p", "match-detail-empty", match.isUpcoming
                ? "O‘yin boshlanmagani uchun joriy o‘yin statistikasi hali mavjud emas."
                : "Bu uchrashuv statistikasi hozircha mavjud emas."));
        }
        return grid;
    }

    function renderLineups(summary, match) {
        const container = createElement("div", "match-lineups");
        if (match.isUpcoming && Array.isArray(summary.estimatedRosters)) {
            const sourceNote = createElement("p", "match-detail-note", "Taxminlar jamoalarning eng so‘nggi e’lon qilingan boshlang‘ich tarkiblariga asoslangan; rasmiy tarkib emas.");
            container.append(sourceNote);
        }
        const rosterGroups = [
            { side: "home", team: match.home },
            { side: "away", team: match.away }
        ];
        let hasLineup = false;
        rosterGroups.forEach(({ side, team }) => {
            const rosterData = match.isUpcoming
                ? summary.estimatedRosters?.find(roster => roster.homeAway === side)
                : summary.rosters?.find(roster => roster.homeAway === side);
            const roster = Array.isArray(rosterData?.roster) ? rosterData.roster : [];
            const starters = roster.filter(player =>
                player.starter === true ||
                player.starter === "true" ||
                player.athlete?.starter === true ||
                player.status?.type?.name === "Starter"
            );
            if (!starters.length) return;
            hasLineup = true;
            const group = createElement("section", "match-lineup-team");
            const heading = createElement("h4", "match-lineup-heading");
            appendImage(heading, team.logo, "", "match-team-logo");
            heading.append(createElement("span", "", team.name));
            const formation = rosterData.formation ? ` · ${rosterData.formation}` : "";
            heading.append(createElement("span", "match-lineup-formation", formation));
            if (rosterData.sourceDate) {
                heading.append(createElement("span", "match-lineup-source", ` · ${formatMatchDate(rosterData.sourceDate)} dagi tarkib`));
            }
            const list = createElement("ol", "match-lineup-list");
            starters.forEach(player => {
                const athlete = player.athlete || player;
                const position = player.position?.abbreviation || athlete.position?.abbreviation || "";
                const name = athlete.displayName || athlete.fullName || athlete.name || "Noma’lum futbolchi";
                const item = createElement("li", "match-lineup-player");
                item.append(createElement("span", "match-lineup-position", position), createElement("span", "match-lineup-name", name));
                list.append(item);
            });
            group.append(heading, list);
            const substitutes = roster.filter(player =>
                !starters.includes(player) &&
                (player.active === true || player.athlete?.active === true || player.substitute === true)
            );
            if (substitutes.length) {
                const substitutesHeading = createElement("h5", "match-lineup-substitutes-heading", "Zaxira");
                const substitutesList = createElement("ul", "match-lineup-list is-substitutes");
                substitutes.forEach(player => {
                    const athlete = player.athlete || player;
                    const position = player.position?.abbreviation || athlete.position?.abbreviation || "";
                    const name = athlete.displayName || athlete.fullName || athlete.name || "Noma’lum futbolchi";
                    const item = createElement("li", "match-lineup-player");
                    item.append(createElement("span", "match-lineup-position", position), createElement("span", "match-lineup-name", name));
                    substitutesList.append(item);
                });
                group.append(substitutesHeading, substitutesList);
            }
            container.append(group);
        });
        if (!hasLineup) {
            container.append(createElement("p", "match-detail-empty", match.isUpcoming
                ? "Taxminiy tarkibni tuzish uchun so‘nggi tasdiqlangan tarkib topilmadi."
                : "Boshlang‘ich tarkiblar hozircha e’lon qilinmagan."));
        }
        return container;
    }

    function getTeamRecentGames(summary, team) {
        return summary.lastFiveGames?.find(item => String(item.team?.id) === String(team.id))?.events || [];
    }

    function renderRecentForm(summary, match) {
        const container = createElement("div", "match-preview-section");
        [
            { team: match.home, games: getTeamRecentGames(summary, match.home) },
            { team: match.away, games: getTeamRecentGames(summary, match.away) }
        ].forEach(({ team, games }) => {
            const group = createElement("section", "match-form-team");
            const heading = createElement("h4", "match-lineup-heading");
            appendImage(heading, team.logo, "", "match-team-logo");
            heading.append(createElement("span", "", `${team.name} · so‘nggi ${games.length} o‘yin`));
            group.append(heading);
            if (!games.length) {
                group.append(createElement("p", "match-detail-empty", "So‘nggi o‘yinlar ma’lumoti mavjud emas."));
            } else {
                const list = createElement("ul", "match-form-list");
                games.slice(0, 5).forEach(game => {
                    const result = game.gameResult === "W" ? "G" : game.gameResult === "D" ? "D" : game.gameResult === "L" ? "M" : "—";
                    const row = createElement("li", `match-form-item is-${result === "G" ? "win" : result === "D" ? "draw" : result === "M" ? "loss" : "unknown"}`);
                    const date = game.gameDate ? formatMatchDate(game.gameDate) : "";
                    row.append(
                        createElement("span", "match-form-result", result),
                        createElement("span", "match-form-opponent", game.opponent?.displayName || "Raqib"),
                        createElement("span", "match-form-score", game.score || "—"),
                        createElement("span", "match-form-date", date)
                    );
                    list.append(row);
                });
                group.append(list);
            }
            container.append(group);
        });
        return container;
    }

    function renderHeadToHead(summary, match) {
        const container = createElement("div", "match-preview-section");
        const series = summary.seasonseries?.[0];
        if (!series) {
            container.append(createElement("p", "match-detail-empty", "Bu jamoalarning o‘zaro uchrashuvlari hozircha topilmadi."));
            return container;
        }
        if (series.summary || series.shortSummary) {
            container.append(createElement("p", "match-series-summary", series.summary || series.shortSummary));
        }
        const events = (series.events || []).filter(event =>
            (event.competitors || []).some(team => String(team.team?.id) === String(match.home.id)) &&
            (event.competitors || []).some(team => String(team.team?.id) === String(match.away.id))
        );
        if (!events.length) {
            container.append(createElement("p", "match-detail-empty", "Mavsum doirasida o‘zaro o‘yin qayd etilmagan."));
            return container;
        }
        const list = createElement("ul", "match-h2h-list");
        events.forEach(event => {
            const row = createElement("li", "match-h2h-item");
            const home = event.competitors.find(team => String(team.team?.id) === String(match.home.id));
            const away = event.competitors.find(team => String(team.team?.id) === String(match.away.id));
            const date = event.date ? formatMatchDate(event.date, true) : "";
            row.append(
                createElement("span", "match-h2h-date", date),
                createElement("span", "match-h2h-home", home?.team?.displayName || match.home.name),
                createElement("strong", "match-h2h-score", `${home?.score ?? "—"} – ${away?.score ?? "—"}`),
                createElement("span", "match-h2h-away", away?.team?.displayName || match.away.name)
            );
            list.append(row);
        });
        container.append(list);
        return container;
    }

    function renderMatchDetails(panel, summary, match, activeTab = "stats") {
        panel.replaceChildren();
        const tabs = createElement("div", "match-detail-tabs");
        const content = createElement("div", "match-detail-content");
        const views = match.isUpcoming
            ? {
                lineups: renderLineups(summary, match),
                h2h: renderHeadToHead(summary, match),
                form: renderRecentForm(summary, match),
                stats: renderStatistics(summary, match)
            }
            : {
                stats: renderStatistics(summary, match),
                lineups: renderLineups(summary, match)
            };
        const tabDefinitions = match.isUpcoming
            ? [
                { id: "lineups", label: "Taxminiy tarkib" },
                { id: "h2h", label: "O‘zaro o‘yinlar" },
                { id: "form", label: "So‘nggi forma" },
                { id: "stats", label: "Statistika" }
            ]
            : [
                { id: "stats", label: "Statistika" },
                { id: "lineups", label: "Tarkiblar" }
            ];
        tabDefinitions.forEach(tab => {
            const button = createElement("button", "match-detail-tab", tab.label);
            button.type = "button";
            button.setAttribute("aria-pressed", String(tab.id === activeTab));
            button.addEventListener("click", () => {
                tabs.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
                content.replaceChildren(views[tab.id]);
            });
            tabs.append(button);
        });
        content.append(views[activeTab]);
        panel.append(tabs, content);
    }

    async function fetchMatchSummary(match, panel) {
        const cacheKey = `${match.league}:${match.id}`;
        const cached = detailsCache.get(cacheKey);
        if (cached && Date.now() - cached.time < 25000) {
            renderMatchDetails(panel, cached.summary, match, match.isUpcoming ? "lineups" : "stats");
            return;
        }
        if (!detailRequests.has(cacheKey)) {
            const controller = new AbortController();
            detailControllers.set(cacheKey, controller);
            const request = fetchMatchSummaryData(match.league, match.id, controller.signal).then(async summary => {
                if (!summary.boxscore) throw new Error("uchrashuv statistikasi topilmadi");
                if (match.isUpcoming) {
                    summary.estimatedRosters = await loadEstimatedLineups(summary, match, controller.signal);
                }
                detailsCache.set(cacheKey, { summary, time: Date.now() });
                return summary;
            }).finally(() => {
                detailRequests.delete(cacheKey);
                detailControllers.delete(cacheKey);
            });
            detailRequests.set(cacheKey, request);
        }
        try {
            const summary = await detailRequests.get(cacheKey);
            if (!active || !expandedMatches.has(cacheKey) || !panel.isConnected) return;
            renderMatchDetails(panel, summary, match, match.isUpcoming ? "lineups" : "stats");
        } catch (error) {
            if (!active || !expandedMatches.has(cacheKey) || !panel.isConnected) return;
            panel.replaceChildren(createElement("p", "match-detail-empty is-error", "Statistika va tarkibni yuklab bo‘lmadi. Qayta ochib urinib ko‘ring."));
            console.error(`Live match details failed for ${match.id}:`, error);
        }
    }

    async function fetchMatchSummaryData(league, eventId, signal) {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/summary?event=${encodeURIComponent(eventId)}`, {
            cache: "no-store",
            signal
        });
        if (!response.ok) throw new Error(`server ${response.status}`);
        return response.json();
    }

    async function loadEstimatedLineups(summary, match, signal) {
        const previousMatches = [
            { side: "home", team: match.home },
            { side: "away", team: match.away }
        ].map(({ side, team }) => {
            const teamForm = summary.lastFiveGames?.find(item => String(item.team?.id) === String(team.id));
            const latestGame = teamForm?.events?.find(event => event.id);
            return latestGame ? { side, team, eventId: latestGame.id, sourceDate: latestGame.gameDate } : null;
        }).filter(Boolean);

        const results = await Promise.allSettled(previousMatches.map(async previous => {
            const previousSummary = await fetchMatchSummaryData(match.league, previous.eventId, signal);
            const teamRoster = previousSummary.rosters?.find(roster => String(roster.team?.id) === String(previous.team.id));
            if (!teamRoster?.roster?.some(player =>
                player.starter === true || player.starter === "true" ||
                player.athlete?.starter === true || player.status?.type?.name === "Starter"
            )) return null;
            return { ...teamRoster, homeAway: previous.side, sourceDate: previous.sourceDate };
        }));

        const failures = results.filter(result => result.status === "rejected");
        failures.forEach(result => console.warn("Could not load recent lineup for upcoming match:", result.reason));
        return results.flatMap(result => result.status === "fulfilled" && result.value ? [result.value] : []);
    }

    function createMatchCard(match) {
        const cacheKey = `${match.league}:${match.id}`;
        const card = createElement("article", "live-match-card");
        const header = createElement("div", "live-match-card-header");
        const league = createElement("div", "live-match-league");
        appendImage(league, match.leagueLogo, "", "live-match-league-logo");
        league.append(createElement("span", "", match.name));
        const phaseText = match.isUpcoming ? formatKickoff(match.date) : match.clock || match.phase;
        const phase = createElement("span", `live-match-phase${match.isUpcoming ? " is-upcoming" : ""}`, phaseText);
        header.append(league, phase);

        const scoreboard = createElement("div", "live-match-scoreboard");
        const home = createElement("div", "live-match-team");
        appendImage(home, match.home.logo, "", "live-match-team-logo");
        home.append(createElement("span", "live-match-team-name", match.home.name));
        const away = createElement("div", "live-match-team is-away");
        appendImage(away, match.away.logo, "", "live-match-team-logo");
        away.append(createElement("span", "live-match-team-name", match.away.name));
        const score = createElement("div", `live-match-score${match.isUpcoming ? " is-fixture" : ""}`, match.isUpcoming ? "VS" : `${match.home.score ?? "0"} – ${match.away.score ?? "0"}`);
        score.setAttribute("aria-label", match.isUpcoming ? `${match.home.name} va ${match.away.name} uchrashuvi` : `${match.home.name} ${match.home.score ?? 0}, ${match.away.score ?? 0} ${match.away.name}`);
        scoreboard.append(home, score, away);

        const toggleLabel = match.isUpcoming ? "Tahlil va taxminiy tarkib" : "Statistika va tarkib";
        const toggle = createElement("button", "live-match-details-toggle", expandedMatches.has(cacheKey) ? "Tahlilni yashirish" : toggleLabel);
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", String(expandedMatches.has(cacheKey)));
        const cardBody = createElement("div", "live-match-card-body");
        card.append(header, scoreboard, toggle, cardBody);
        toggle.addEventListener("click", () => {
            const isExpanded = expandedMatches.has(cacheKey);
            if (isExpanded) {
                expandedMatches.delete(cacheKey);
                card.classList.remove("is-expanded");
                toggle.textContent = toggleLabel;
                toggle.setAttribute("aria-expanded", "false");
                cardBody.replaceChildren();
                return;
            }
            expandedMatches.add(cacheKey);
            card.classList.add("is-expanded");
            toggle.textContent = "Tahlilni yashirish";
            toggle.setAttribute("aria-expanded", "true");
            cardBody.replaceChildren(createElement("p", "match-detail-loading", match.isUpcoming
                ? "O‘yinoldi ma’lumotlari va taxminiy tarkib yuklanmoqda…"
                : "Jonli statistika yuklanmoqda…"));
            fetchMatchSummary(match, cardBody);
        });
        if (expandedMatches.has(cacheKey)) {
            card.classList.add("is-expanded");
            cardBody.replaceChildren(createElement("p", "match-detail-loading", match.isUpcoming
                ? "O‘yinoldi ma’lumotlari yuklanmoqda…"
                : "Jonli statistika yangilanmoqda…"));
            fetchMatchSummary(match, cardBody);
        }
        return card;
    }

    function renderMatches() {
        const visibleMatches = selectedLeague === "all" ? matches : matches.filter(match => match.league === selectedLeague);
        [...expandedMatches].forEach(id => {
            if (!matches.some(match => `${match.league}:${match.id}` === id)) expandedMatches.delete(id);
        });
        matchList.replaceChildren();
        if (!visibleMatches.length) {
            const empty = createElement("div", "live-match-empty");
            empty.append(
                createElement("span", "live-match-empty-icon", "◷"),
                createElement("strong", "", selectedLeague === "all"
                    ? "Jonli yoki kelasi 24 soatga belgilangan uchrashuv yo‘q"
                    : `${leagueNames[selectedLeague]}da jonli yoki kelasi 24 soatga belgilangan uchrashuv yo‘q`),
                createElement("span", "", "Uchrashuvlar jadvali yangilanganda bu yerda avtomatik ko‘rinadi.")
            );
            matchList.append(empty);
            return;
        }
        const liveMatches = visibleMatches.filter(match => !match.isUpcoming);
        const upcomingMatches = visibleMatches.filter(match => match.isUpcoming);
        [
            { title: "Jonli uchrashuvlar", items: liveMatches, className: "is-live" },
            { title: "Keyingi 24 soat", items: upcomingMatches, className: "is-upcoming" }
        ].forEach(sectionData => {
            if (!sectionData.items.length) return;
            const section = createElement("section", `live-match-section ${sectionData.className}`);
            section.append(createElement("h2", "live-match-section-heading", sectionData.title));
            const grouped = new Map();
            sectionData.items.forEach(match => {
                if (!grouped.has(match.league)) grouped.set(match.league, []);
                grouped.get(match.league).push(match);
            });
            grouped.forEach((leagueMatches, league) => {
                const group = createElement("section", "live-match-league-group");
                const heading = createElement("h3", "live-match-group-heading");
                appendImage(heading, leagueAssets[league], "", "live-match-league-logo");
                heading.append(createElement("span", "", leagueNames[league]));
                heading.append(createElement("span", "live-match-count", String(leagueMatches.length)));
                const grid = createElement("div", "live-match-grid");
                leagueMatches.forEach(match => grid.append(createMatchCard(match)));
                group.append(heading, grid);
                section.append(group);
            });
            matchList.append(section);
        });
    }

    async function refreshLiveMatches() {
        if (!active) return;
        const generation = ++requestGeneration;
        activeController?.abort();
        activeController = new AbortController();
        const { signal } = activeController;
        refreshButton.disabled = true;
        setStatus("Jonli uchrashuvlar yuklanmoqda…");
        try {
            const dates = [getDate(), getDate(1)];
            const responses = await Promise.allSettled(leagues.map(async league => {
                const dailyResponses = await Promise.all(dates.map(async date => {
                    const endpoint = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${date}&limit=100`;
                    const response = await fetch(endpoint, { signal, cache: "no-store" });
                    if (!response.ok) throw new Error(`${leagueNames[league]}: server ${response.status}`);
                    const data = await response.json();
                    if (!Array.isArray(data.events)) throw new Error(`${leagueNames[league]}: noto‘g‘ri javob`);
                    return data.events;
                }));
                const uniqueEvents = new Map(dailyResponses.flat().map(event => [event.id, event]));
                return getMatches([...uniqueEvents.values()], league);
            }));
            if (generation !== requestGeneration) return;
            const successful = responses.filter(result => result.status === "fulfilled");
            const failed = responses.filter(result => result.status === "rejected");
            if (!successful.length) throw new AggregateError(failed.map(result => result.reason), "Barcha ligalarning jonli o‘yinlarini olish muvaffaqiyatsiz tugadi.");
            failed.forEach(result => console.error("A Top-5 league live scoreboard failed:", result.reason));
            matches = successful.flatMap(result => result.value).sort((first, second) =>
                leagues.indexOf(first.league) - leagues.indexOf(second.league) ||
                new Date(first.date) - new Date(second.date)
            );
            renderMatches();
            const liveCount = matches.filter(match => !match.isUpcoming).length;
            const upcomingCount = matches.filter(match => match.isUpcoming).length;
            const updatedAt = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit" }).format(new Date());
            setStatus(`${liveCount} ta jonli · ${upcomingCount} ta keyingi 24 soatda · ${updatedAt} da yangilandi${failed.length ? ` · ${failed.length} liga ma’lumoti yo‘q` : ""}`, failed.length > 0);
        } catch (error) {
            if (generation !== requestGeneration) return;
            setStatus("Jonli uchrashuvlarni yuklab bo‘lmadi. Qayta urinib ko‘ring.", true);
            console.error("Live matches refresh failed:", error);
        } finally {
            if (generation === requestGeneration) refreshButton.disabled = false;
        }
    }

    filters.forEach(button => {
        button.addEventListener("click", () => {
            selectedLeague = button.dataset.matchLeague || "all";
            filters.forEach(filter => {
                const selected = filter === button;
                filter.classList.toggle("is-active", selected);
                filter.setAttribute("aria-pressed", String(selected));
            });
            renderMatches();
        });
    });

    refreshButton.addEventListener("click", refreshLiveMatches);
    window.addEventListener("pitchplan:sectionchange", event => {
        active = event.detail.section === "matches";
        window.clearInterval(refreshTimer);
        if (active) {
            refreshLiveMatches();
            refreshTimer = window.setInterval(refreshLiveMatches, 30000);
        } else {
            requestGeneration += 1;
            activeController?.abort();
            detailControllers.forEach(controller => controller.abort());
            detailControllers.clear();
        }
    });
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            window.clearInterval(refreshTimer);
        } else if (active) {
            refreshLiveMatches();
            refreshTimer = window.setInterval(refreshLiveMatches, 30000);
        }
    });
})();
