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

    function getTodayDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}${month}${day}`;
    }

    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    }

    function getTeamLogo(team) {
        return team.logo || team.logos?.[0]?.href || "";
    }

    function getLiveMatches(events, league) {
        return events.flatMap(event => {
            const competition = event.competitions?.[0];
            if (competition?.status?.type?.state !== "in") return [];
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
                clock: competition.status.displayClock,
                phase: competition.status.type.shortDetail || competition.status.type.detail || "Jonli",
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
            createElement("span", "", "Jonli statistika"),
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
            grid.append(createElement("p", "match-detail-empty", "Bu uchrashuv statistikasi hozircha mavjud emas."));
        }
        return grid;
    }

    function renderLineups(summary, match) {
        const container = createElement("div", "match-lineups");
        const rosterGroups = [
            { side: "home", team: match.home },
            { side: "away", team: match.away }
        ];
        let hasLineup = false;
        rosterGroups.forEach(({ side, team }) => {
            const rosterData = summary.rosters?.find(roster => roster.homeAway === side);
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
            container.append(createElement("p", "match-detail-empty", "Boshlang‘ich tarkiblar hozircha e’lon qilinmagan."));
        }
        return container;
    }

    function renderMatchDetails(panel, summary, match, activeTab = "stats") {
        panel.replaceChildren();
        const tabs = createElement("div", "match-detail-tabs");
        const content = createElement("div", "match-detail-content");
        const views = {
            stats: renderStatistics(summary, match),
            lineups: renderLineups(summary, match)
        };
        [
            { id: "stats", label: "Statistika" },
            { id: "lineups", label: "Tarkiblar" }
        ].forEach(tab => {
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
            renderMatchDetails(panel, cached.summary, match);
            return;
        }
        if (!detailRequests.has(cacheKey)) {
            const controller = new AbortController();
            detailControllers.set(cacheKey, controller);
            const request = fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${match.league}/summary?event=${encodeURIComponent(match.id)}`, {
                cache: "no-store",
                signal: controller.signal
            }).then(response => {
                if (!response.ok) throw new Error(`server ${response.status}`);
                return response.json();
            }).then(summary => {
                if (!summary.boxscore) throw new Error("uchrashuv statistikasi topilmadi");
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
            renderMatchDetails(panel, summary, match);
        } catch (error) {
            if (!active || !expandedMatches.has(cacheKey) || !panel.isConnected) return;
            panel.replaceChildren(createElement("p", "match-detail-empty is-error", "Statistika va tarkibni yuklab bo‘lmadi. Qayta ochib urinib ko‘ring."));
            console.error(`Live match details failed for ${match.id}:`, error);
        }
    }

    function createMatchCard(match) {
        const cacheKey = `${match.league}:${match.id}`;
        const card = createElement("article", "live-match-card");
        const header = createElement("div", "live-match-card-header");
        const league = createElement("div", "live-match-league");
        appendImage(league, match.leagueLogo, "", "live-match-league-logo");
        league.append(createElement("span", "", match.name));
        const phase = createElement("span", "live-match-phase", match.clock || match.phase);
        header.append(league, phase);

        const scoreboard = createElement("div", "live-match-scoreboard");
        const home = createElement("div", "live-match-team");
        appendImage(home, match.home.logo, "", "live-match-team-logo");
        home.append(createElement("span", "live-match-team-name", match.home.name));
        const away = createElement("div", "live-match-team is-away");
        appendImage(away, match.away.logo, "", "live-match-team-logo");
        away.append(createElement("span", "live-match-team-name", match.away.name));
        const score = createElement("div", "live-match-score", `${match.home.score ?? "0"} – ${match.away.score ?? "0"}`);
        score.setAttribute("aria-label", `${match.home.name} ${match.home.score ?? 0}, ${match.away.score ?? 0} ${match.away.name}`);
        scoreboard.append(home, score, away);

        const toggle = createElement("button", "live-match-details-toggle", expandedMatches.has(cacheKey) ? "Statistika va tarkibni yashirish" : "Statistika va tarkib");
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", String(expandedMatches.has(cacheKey)));
        const cardBody = createElement("div", "live-match-card-body");
        card.append(header, scoreboard, toggle, cardBody);
        toggle.addEventListener("click", () => {
            const isExpanded = expandedMatches.has(cacheKey);
            if (isExpanded) {
                expandedMatches.delete(cacheKey);
                card.classList.remove("is-expanded");
                toggle.textContent = "Statistika va tarkib";
                toggle.setAttribute("aria-expanded", "false");
                cardBody.replaceChildren();
                return;
            }
            expandedMatches.add(cacheKey);
            card.classList.add("is-expanded");
            toggle.textContent = "Statistika va tarkibni yashirish";
            toggle.setAttribute("aria-expanded", "true");
            cardBody.replaceChildren(createElement("p", "match-detail-loading", "Jonli statistika yuklanmoqda…"));
            fetchMatchSummary(match, cardBody);
        });
        if (expandedMatches.has(cacheKey)) {
            card.classList.add("is-expanded");
            cardBody.replaceChildren(createElement("p", "match-detail-loading", "Jonli statistika yangilanmoqda…"));
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
                    ? "Hozirda Top-5 ligalarda jonli uchrashuv yo‘q"
                    : `${leagueNames[selectedLeague]}da hozir jonli uchrashuv yo‘q`),
                createElement("span", "", "O‘yinlar boshlanganda bu yerda avtomatik ko‘rinadi.")
            );
            matchList.append(empty);
            return;
        }
        const grouped = new Map();
        visibleMatches.forEach(match => {
            if (!grouped.has(match.league)) grouped.set(match.league, []);
            grouped.get(match.league).push(match);
        });
        grouped.forEach((leagueMatches, league) => {
            const group = createElement("section", "live-match-league-group");
            const heading = createElement("h2", "live-match-group-heading");
            appendImage(heading, leagueAssets[league], "", "live-match-league-logo");
            heading.append(createElement("span", "", leagueNames[league]));
            heading.append(createElement("span", "live-match-count", String(leagueMatches.length)));
            const grid = createElement("div", "live-match-grid");
            leagueMatches.forEach(match => grid.append(createMatchCard(match)));
            group.append(heading, grid);
            matchList.append(group);
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
            const date = getTodayDate();
            const responses = await Promise.allSettled(leagues.map(async league => {
                const endpoint = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${date}&limit=100`;
                const response = await fetch(endpoint, { signal, cache: "no-store" });
                if (!response.ok) throw new Error(`${leagueNames[league]}: server ${response.status}`);
                const data = await response.json();
                if (!Array.isArray(data.events)) throw new Error(`${leagueNames[league]}: noto‘g‘ri javob`);
                return getLiveMatches(data.events, league);
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
            const updatedAt = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit" }).format(new Date());
            setStatus(`${matches.length} ta jonli o‘yin · ${updatedAt} da yangilandi${failed.length ? ` · ${failed.length} liga ma’lumoti yo‘q` : ""}`, failed.length > 0);
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
