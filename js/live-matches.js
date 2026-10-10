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
    const matchDetailView = document.getElementById("live-match-detail-view");
    const matchDetailHeading = document.getElementById("live-match-detail-heading");
    const matchDetailContent = document.getElementById("live-match-detail-content");
    const clubProfileView = document.getElementById("club-profile-view");
    const clubProfileHeading = document.getElementById("club-profile-heading");
    const clubProfileContent = document.getElementById("club-profile-content");
    const clubSearchToggle = document.getElementById("club-search-toggle");
    const clubSearchPanel = document.getElementById("club-search-panel");
    const clubSearchInput = document.getElementById("club-search-input");
    const clubSearchStatus = document.getElementById("club-search-status");
    const clubSearchResults = document.getElementById("club-search-results");
    const status = document.getElementById("live-matches-status");
    const statusText = document.getElementById("live-matches-status-text");
    const refreshButton = document.getElementById("live-matches-refresh");
    const filters = [...document.querySelectorAll(".live-match-filter")];
    const stateFilters = [...document.querySelectorAll(".live-match-state-filter")];
    if (!matchView || !matchList || !refreshButton || !filters.length || !clubProfileView ||
        !clubSearchToggle || !clubSearchPanel ||
        !clubProfileHeading || !clubProfileContent || !clubSearchInput || !clubSearchStatus || !clubSearchResults) return;

    const detailsCache = new Map();
    const clubRosterCache = new Map();
    const clubEventsCache = new Map();
    let selectedLeague = "all";
    let selectedMatchState = "live";
    let matches = [];
    let active = false;
    let refreshTimer = 0;
    let requestGeneration = 0;
    let activeController = null;
    let matchPageGeneration = 0;
    let matchPageController = null;
    let matchPageRefreshTimer = 0;
    let matchClockTimer = 0;
    let currentMatchRoute = null;
    let currentClubRoute = null;
    let clubProfileGeneration = 0;
    let clubProfileController = null;
    let clubDirectoryController = null;
    let clubDirectory = [];
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

    function parseMatchDate(value) {
        if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
        if (typeof value === "number") {
            const timestamp = value < 1e12 ? value * 1000 : value;
            const date = new Date(timestamp);
            return Number.isNaN(date.getTime()) ? null : date;
        }
        if (typeof value !== "string" || !value.trim()) return null;
        const dateOnly = value.match(/^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/);
        if (dateOnly) {
            const date = new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]));
            return date.getFullYear() === Number(dateOnly[1]) &&
                date.getMonth() === Number(dateOnly[2]) - 1 &&
                date.getDate() === Number(dateOnly[3]) ? date : null;
        }
        const date = new Date(value);
        if (!Number.isNaN(date.getTime())) return date;
        const normalized = new Date(value.replace(/(\d{1,2}\/\d{1,2})\s*-\s*/, "$1 "));
        return Number.isNaN(normalized.getTime()) ? null : normalized;
    }

    function hasExactMatchTime(value) {
        if (value instanceof Date || typeof value === "number") return true;
        return typeof value === "string" && /(?:T|\s)\d{1,2}:\d{2}(?::\d{2})?/i.test(value);
    }

    function getMatchCalendarDate(value) {
        if (typeof value === "string") {
            const isoDate = value.match(/^\s*(\d{4})-(\d{1,2})-(\d{1,2})/);
            const shortDate = value.match(/^\s*(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/);
            const parts = isoDate
                ? { year: Number(isoDate[1]), month: Number(isoDate[2]), day: Number(isoDate[3]) }
                : shortDate
                    ? { year: shortDate[3] ? Number(shortDate[3]) : new Date().getFullYear(), month: Number(shortDate[1]), day: Number(shortDate[2]) }
                    : null;
            if (parts) {
                if (parts.year < 100) parts.year += 2000;
                const date = new Date(parts.year, parts.month - 1, parts.day);
                if (date.getFullYear() !== parts.year || date.getMonth() !== parts.month - 1 || date.getDate() !== parts.day) return null;
                if (!isoDate && !shortDate[3]) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    if (date < today) date.setFullYear(date.getFullYear() + 1);
                }
                return date;
            }
        }
        const date = parseMatchDate(value);
        if (!date) return null;
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function getDaysUntilMatch(value) {
        const matchDate = getMatchCalendarDate(value);
        if (!matchDate) return null;
        const today = new Date();
        const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        const matchUtc = Date.UTC(matchDate.getFullYear(), matchDate.getMonth(), matchDate.getDate());
        return Math.max(0, Math.round((matchUtc - todayUtc) / 86400000));
    }

    function formatMatchDate(value, includeYear = false) {
        const date = parseMatchDate(value);
        if (!date) return "Vaqt noma’lum";
        const months = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];
        return `${date.getDate()} ${months[date.getMonth()]}${includeYear ? ` ${date.getFullYear()}` : ""}`;
    }

    function formatKickoff(value) {
        const date = parseMatchDate(value);
        if (!date) {
            const rawTime = typeof value === "string"
                ? value.match(/\b\d{1,2}:\d{2}\s*(?:AM|PM)?(?:\s+[A-Z]{2,5})?\b/i)?.[0]
                : null;
            return rawTime || "Vaqt noma’lum";
        }
        const now = new Date();
        const sameDay = date.getFullYear() === now.getFullYear() &&
            date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
        const time = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
        return sameDay ? `Bugun · ${time}` : `${formatMatchDate(date)} · ${time}`;
    }

    function getTeamLogo(team) {
        return team.logo || team.logos?.[0]?.href || "";
    }

    function normalizeClubSearch(value) {
        return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLocaleLowerCase();
    }

    async function fetchClubDirectory(signal) {
        if (clubDirectory.length) return clubDirectory;
        const startYear = getCurrentSeasonStartYear();
        const responses = await Promise.allSettled(leagues.map(async league => {
            const seasonData = await fetchClubSeasonData(league, startYear, signal);
            const clubs = new Map();
            seasonData.events.forEach(event => {
                (event.competitions?.[0]?.competitors || []).forEach(competitor => {
                    const team = competitor.team;
                    if (!team?.id) return;
                    const id = String(team.id);
                    if (!clubs.has(id)) {
                        clubs.set(id, {
                            id,
                            league,
                            name: team.displayName || team.name || "Noma’lum klub",
                            logo: getTeamLogo(team)
                        });
                    }
                });
            });
            return [...clubs.values()];
        }));
        const successful = responses.filter(result => result.status === "fulfilled");
        const failed = responses.filter(result => result.status === "rejected");
        if (!successful.length) {
            throw new AggregateError(failed.map(result => result.reason), "Klublar ro‘yxatini yuklab bo‘lmadi.");
        }
        if (failed.length) {
            failed.forEach(result => console.error("A Top-5 league club directory failed:", result.reason));
        }
        clubDirectory = successful.flatMap(result => result.value).sort((first, second) =>
            first.name.localeCompare(second.name) || leagues.indexOf(first.league) - leagues.indexOf(second.league)
        );
        return clubDirectory;
    }

    function renderClubSearch() {
        const query = normalizeClubSearch(clubSearchInput.value);
        clubSearchResults.replaceChildren();
        if (!clubDirectory.length) {
            clubSearchStatus.textContent = "Klublar ro‘yxati hozircha mavjud emas.";
            return;
        }
        if (!query) {
            clubSearchStatus.textContent = "Klubni qidirish uchun nomini yozing.";
            return;
        }
        const matchingClubs = clubDirectory.filter(club => normalizeClubSearch(club.name).includes(query));
        const results = matchingClubs.slice(0, 12);
        clubSearchStatus.textContent = results.length
            ? `${matchingClubs.length} ta klub topildi${matchingClubs.length > results.length ? " (birinchi 12 tasi ko‘rsatilmoqda)" : ""}.`
            : "Bu nom bo‘yicha klub topilmadi.";
        results.forEach(club => {
            const link = createElement("a", "club-search-result");
            link.href = `#/club/${encodeURIComponent(club.league)}/${encodeURIComponent(club.id)}`;
            link.setAttribute("role", "listitem");
            link.setAttribute("aria-label", `${club.name}, ${leagueNames[club.league]} klub sahifasini ochish`);
            appendImage(link, club.logo, "", "club-search-logo");
            const text = createElement("span", "club-search-result-copy");
            text.append(
                createElement("strong", "", club.name),
                createElement("small", "", leagueNames[club.league])
            );
            link.append(text, createElement("span", "club-search-arrow", "→"));
            clubSearchResults.append(link);
        });
    }

    function getMatches(events, league, includeInactive = false) {
        return events.flatMap(event => {
            const competition = event.competitions?.[0];
            const state = competition?.status?.type?.state;
            const kickoff = Date.parse(event.date);
            const isLive = state === "in";
            const isUpcoming = state === "pre" && Number.isFinite(kickoff) &&
                kickoff >= Date.now() && kickoff <= Date.now() + upcomingWindowMs;
            if (!includeInactive && !isLive && !isUpcoming) return [];
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
                isLive,
                isPre: state === "pre",
                isUpcoming,
                isCompleted: state === "post",
                clock: competition.status.displayClock,
                phase: competition.status.type.shortDetail || competition.status.type.detail || "Jonli",
                venue: competition.venue?.fullName || "",
                home: {
                    id: home.team.id,
                    name: home.team.displayName || home.team.name || "Uy jamoasi",
                    logo: getTeamLogo(home.team),
                    primaryColor: home.team.uniform?.color || home.team.color || "",
                    score: home.score
                },
                away: {
                    id: away.team.id,
                    name: away.team.displayName || away.team.name || "Mehmon jamoa",
                    logo: getTeamLogo(away.team),
                    primaryColor: away.team.uniform?.color || away.team.color || "",
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

    function getPlayerPosition(player) {
        return String(player.position?.abbreviation || player.athlete?.position?.abbreviation || "").toUpperCase();
    }

    function getPlayerLine(position) {
        if (/^(G|GK|KEEPER)$/.test(position)) return "goalkeeper";
        if (/^(D|DF|CD|CB|LCB|RCB|LB|RB|FB|WB|LWB|RWB|SW)(-|$)/.test(position)) return "defense";
        if (/^(AM|CAM)(-|$)/.test(position)) return "attacking-midfield";
        if (/^(F|FW|FWD|ST|CF|LW|RW|SS|LF|RF)(-|$)/.test(position)) return "attack";
        if (/^(M|MF|DM|CDM|CM|LCM|RCM|AM|CAM|LM|RM|LWM|RWM)(-|$)/.test(position)) return "midfield";
        return "midfield";
    }

    function getPlayerSide(position) {
        if (/(^|[-\s])L(?:B|M|W|F|CB|CM)?($|[-\s])|LEFT/.test(position)) return 0;
        if (/(^|[-\s])R(?:B|M|W|F|CB|CM)?($|[-\s])|RIGHT/.test(position)) return 2;
        return 1;
    }

    function getPlayerDisplayName(player) {
        const athlete = player.athlete || player;
        return athlete.displayName || athlete.fullName || athlete.name || "Noma’lum futbolchi";
    }

    function createPlayerMarker(player, team) {
        const athlete = player.athlete || player;
        const marker = createElement("div", "match-pitch-player");
        const number = athlete.jersey || athlete.displayJersey || player.jersey || "";
        const shirt = createElement("span", "match-pitch-shirt", number || "●");
        const kitColor = String(team.primaryColor || "").replace(/^#/, "");
        if (/^[\da-f]{6}$/i.test(kitColor)) {
            const red = Number.parseInt(kitColor.slice(0, 2), 16);
            const green = Number.parseInt(kitColor.slice(2, 4), 16);
            const blue = Number.parseInt(kitColor.slice(4, 6), 16);
            const textColor = red * 299 + green * 587 + blue * 114 >= 150000 ? "#202536" : "#fff";
            shirt.style.setProperty("--match-kit-color", `#${kitColor}`);
            shirt.style.setProperty("--match-kit-text-color", textColor);
        }
        shirt.setAttribute("aria-hidden", "true");
        const name = createElement("span", "match-pitch-player-name", getPlayerDisplayName(player));
        marker.title = `${getPlayerDisplayName(player)}${number ? ` · #${number}` : ""}`;
        marker.append(shirt, name);
        return marker;
    }

    function createLineupPitch(teamLineups) {
        const pitch = createElement("div", "match-lineup-pitch");
        pitch.setAttribute("role", "group");
        pitch.setAttribute("aria-label", "Ikkala jamoaning asosiy tarkibi bitta futbol maydonida");
        teamLineups.forEach(({ team, rosterData, starters, side }) => {
            const half = createElement("section", `match-pitch-half is-${side}`);
            half.setAttribute("aria-label", `${team.name} asosiy tarkibi`);
            const heading = createElement("div", "match-pitch-team-label");
            appendImage(heading, team.logo, "", "match-pitch-team-logo");
            heading.append(createElement("strong", "", team.name));
            if (rosterData.formation) {
                heading.append(createElement("span", "match-pitch-formation", rosterData.formation));
            }
            const lines = side === "home"
                ? ["goalkeeper", "defense", "midfield", "attacking-midfield", "attack"]
                : ["attack", "attacking-midfield", "midfield", "defense", "goalkeeper"];
            if (side === "home") half.append(heading);
            lines.forEach(line => {
                const row = createElement("div", `match-pitch-line is-${line}`);
                starters
                    .filter(player => getPlayerLine(getPlayerPosition(player)) === line)
                    .sort((first, second) => getPlayerSide(getPlayerPosition(first)) - getPlayerSide(getPlayerPosition(second)))
                    .forEach(player => row.append(createPlayerMarker(player, team)));
                if (row.childElementCount) half.append(row);
            });
            if (side === "away") half.append(heading);
            pitch.append(half);
        });
        return pitch;
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

    function getMatchEvents(summary, match) {
        const keyEvents = Array.isArray(summary.keyEvents) ? summary.keyEvents : [];
        const commentaryEvents = Array.isArray(summary.commentary)
            ? summary.commentary.map(item => item.play || item)
            : [];
        const source = keyEvents.length ? keyEvents : commentaryEvents;
        return source.flatMap((event, index) => {
            const eventType = String(event.type?.type || event.type?.text || "").toLowerCase();
            const eventLabel = String(event.type?.text || "").toLowerCase();
            let category = "";
            if (/red.?card|second.?yellow/.test(eventType) || /red card|second yellow/.test(eventLabel)) {
                category = "red-card";
            } else if (/yellow.?card/.test(eventType) || /yellow card/.test(eventLabel)) {
                category = "yellow-card";
            } else if (/substitution/.test(eventType) || /substitution/.test(eventLabel)) {
                category = "substitution";
            } else if (/goal/.test(eventType) || /goal/.test(eventLabel) || event.scoringPlay) {
                category = "goal";
            }
            if (!category) return [];
            const participants = (Array.isArray(event.participants) ? event.participants : [])
                .map(participant => participant.athlete?.displayName || participant.athlete?.fullName || "")
                .filter(Boolean);
            const clock = event.clock?.displayValue || event.time?.displayValue ||
                (Number.isFinite(Number(event.clock?.value)) ? `${Math.floor(Number(event.clock.value) / 60)}′` : "");
            const detail = category === "substitution"
                ? participants.length > 1
                    ? `Maydonga: ${participants[0]} · Maydondan: ${participants[1]}`
                    : participants[0] || event.shortText || event.text || "Almashtirish"
                : category === "goal"
                    ? participants.length > 1
                        ? `Gol: ${participants[0]} · Pas: ${participants[1]}`
                        : participants[0] || event.shortText || event.text || "Gol"
                    : participants[0] || event.shortText || event.text || "Kartochka";
            const eventTeamId = event.team?.id;
            const eventTeamName = String(event.team?.displayName || event.team?.name || "").trim().toLocaleLowerCase();
            const homeName = match.home.name.trim().toLocaleLowerCase();
            const awayName = match.away.name.trim().toLocaleLowerCase();
            const reportedSide = event.homeAway || event.team?.homeAway || event.competitor?.homeAway;
            const side = eventTeamId != null && String(eventTeamId) === String(match.home.id) ||
                eventTeamName && eventTeamName === homeName || reportedSide === "home"
                ? "home"
                : eventTeamId != null && String(eventTeamId) === String(match.away.id) ||
                    eventTeamName && eventTeamName === awayName || reportedSide === "away"
                    ? "away"
                    : "neutral";
            return [{
                id: event.id || `${category}-${clock}-${index}`,
                category,
                side,
                clock: clock || "—",
                team: event.team?.displayName || event.team?.name || "",
                detail,
                text: event.text || ""
            }];
        });
    }

    function renderMatchEvents(summary, match) {
        const section = createElement("section", "match-events");
        section.setAttribute("aria-label", "Uchrashuv voqealari");
        const heading = createElement("h3", "match-events-heading", "O‘yin voqealari");
        const events = getMatchEvents(summary, match);
        section.append(heading);
        if (!events.length) {
            section.append(createElement("p", "match-events-empty", "Gol, kartochka yoki almashtirish voqealari hozircha mavjud emas."));
            return section;
        }
        const list = createElement("ol", "match-events-list");
        events.forEach(event => {
            const item = createElement("li", `match-event is-${event.category} is-${event.side}`);
            const minute = createElement("time", "match-event-minute", event.clock);
            const markerText = event.category === "goal" ? "⚽"
                : event.category === "yellow-card" ? "🟨"
                    : event.category === "red-card" ? "🟥" : "↔";
            const marker = createElement("span", "match-event-marker", markerText);
            marker.setAttribute("aria-hidden", "true");
            const copy = createElement("div", "match-event-copy");
            const title = event.category === "goal" ? "Gol"
                : event.category === "yellow-card" ? "Sariq kartochka"
                    : event.category === "red-card" ? "Qizil kartochka" : "Almashtirish";
            copy.append(createElement("strong", "match-event-title", title));
            if (event.team) copy.append(createElement("span", "match-event-team", event.team));
            copy.append(createElement("span", "match-event-detail", event.detail));
            if (event.detail === event.text && event.text) {
                copy.querySelector(".match-event-detail").classList.add("is-source-text");
            }
            item.append(minute, marker, copy);
            item.dataset.eventId = String(event.id);
            list.append(item);
        });
        section.append(list);
        return section;
    }

    function renderStatistics(summary, match) {
        const homeStats = getTeamStatistics(summary, "home");
        const awayStats = getTeamStatistics(summary, "away");
        const grid = createElement("div", "match-statistics");
        if (match.isLive || match.isCompleted) grid.append(renderMatchEvents(summary, match));
        const heading = createElement("div", "match-statistics-heading");
        heading.append(
            createElement("span", "", match.home.name),
            createElement("span", "", match.isUpcoming ? "O‘yinoldi statistika" : match.isLive ? "Jonli statistika" : "Uchrashuv statistikasi"),
            createElement("span", "", match.away.name)
        );
        grid.append(heading);
        const otherStatsGrid = createElement("div", "match-stat-secondary-grid");

        const knownKeys = new Set(statDefinitions.map(definition => definition.key));
        const additionalDefinitions = [...homeStats, ...awayStats]
            .filter(stat => stat.name && !knownKeys.has(stat.name))
            .reduce((definitions, stat) => {
                if (definitions.some(definition => definition.key === stat.name)) return definitions;
                const label = stat.displayName || stat.name
                    .replace(/([A-Z])/g, " $1")
                    .replace(/Pct$/, " %")
                    .replace(/^./, character => character.toUpperCase())
                    .trim();
                definitions.push({
                    key: stat.name,
                    label,
                    percent: stat.unit === "percent" || String(stat.displayValue || "").includes("%")
                });
                return definitions;
            }, []);
        let availableStats = 0;
        [...statDefinitions, ...additionalDefinitions].forEach(definition => {
            let home = getStatValue(homeStats, definition.key);
            let away = getStatValue(awayStats, definition.key);
            if (match.isLive && definition.key === "possessionPct" &&
                (!home || !away || !Number.isFinite(home.numeric) || !Number.isFinite(away.numeric) ||
                    home.numeric + away.numeric <= 0)) {
                home = { display: "50%", numeric: 50 };
                away = { display: "50%", numeric: 50 };
            }
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
            if (definition.key === "possessionPct") {
                row.classList.add("is-possession");
                grid.append(row);
            } else {
                otherStatsGrid.append(row);
            }
        });

        if (otherStatsGrid.childElementCount) grid.append(otherStatsGrid);
        if (!availableStats) {
            grid.append(createElement("p", "match-detail-empty", match.isUpcoming
                ? "O‘yin boshlanmagani uchun joriy o‘yin statistikasi hali mavjud emas."
                : "Bu uchrashuv statistikasi hozircha mavjud emas."));
        }
        return grid;
    }

    function renderLineups(summary, match) {
        const container = createElement("div", "match-lineups");
        const officialRosters = match.isUpcoming
            ? summary.officialRosters
            : getOfficialLineups(summary, match, false);
        const lineupRosters = officialRosters || (match.isUpcoming ? summary.estimatedRosters : summary.rosters) || [];
        if (match.isUpcoming && !officialRosters && Array.isArray(summary.estimatedRosters)) {
            const sourceNote = createElement("p", "match-detail-note", "Taxminlar jamoalarning eng so‘nggi e’lon qilingan boshlang‘ich tarkiblariga asoslangan; rasmiy tarkib emas.");
            container.append(sourceNote);
        } else if (officialRosters) {
            container.append(createElement("p", "match-detail-note", "Rasmiy asosiy tarkiblar e’lon qilindi."));
        }
        const rosterGroups = [
            { side: "home", team: match.home },
            { side: "away", team: match.away }
        ];
        const lineupData = [];
        rosterGroups.forEach(({ side, team }) => {
            const rosterData = lineupRosters.find(roster => roster.homeAway === side);
            const roster = Array.isArray(rosterData?.roster) ? rosterData.roster : [];
            const starters = getStartingPlayers(rosterData);
            if (starters.length) lineupData.push({ side, team, rosterData, starters });
            const substitutes = roster.filter(player =>
                !starters.includes(player) &&
                (player.active === true || player.athlete?.active === true || player.substitute === true)
            );
            if (substitutes.length) {
                const group = createElement("section", `match-lineup-team is-${side}`);
                const heading = createElement("h4", "match-lineup-heading");
                appendImage(heading, team.logo, "", "match-team-logo");
                heading.append(createElement("span", "", team.name));
                const substitutesHeading = createElement("h5", "match-lineup-substitutes-heading", "Zaxira");
                const substitutesList = createElement("ul", "match-lineup-list is-substitutes");
                substitutes.forEach(player => {
                    const athlete = player.athlete || player;
                    const position = player.position?.abbreviation || athlete.position?.abbreviation || "";
                    const name = getPlayerDisplayName(player);
                    const item = createElement("li", "match-lineup-player");
                    item.append(createElement("span", "match-lineup-position", position), createElement("span", "match-lineup-name", name));
                    substitutesList.append(item);
                });
                group.append(heading, substitutesHeading, substitutesList);
                container.append(group);
            }
        });
        if (lineupData.length) container.prepend(createLineupPitch(lineupData));
        if (!lineupData.length) {
            container.append(createElement("p", "match-detail-empty", match.isUpcoming
                ? "Asosiy tarkib e’lon qilinishini kuting. Hozircha taxminiy tarkib topilmadi."
                : "Boshlang‘ich tarkiblar hozircha e’lon qilinmagan."));
        }
        return container;
    }

    function getStartingPlayers(rosterData) {
        const roster = Array.isArray(rosterData?.roster) ? rosterData.roster : [];
        return roster.filter(player =>
            player.starter === true ||
            player.starter === "true" ||
            player.athlete?.starter === true ||
            player.status?.type?.name === "Starter"
        );
    }

    function getOfficialLineups(summary, match, enforceAnnouncementWindow = true) {
        if (enforceAnnouncementWindow) {
            const kickoff = parseMatchDate(match.date);
            if (!kickoff || kickoff.getTime() - Date.now() > 60 * 60 * 1000) return null;
        }
        const rosters = [match.home, match.away].map((team, index) => {
            const homeAway = index === 0 ? "home" : "away";
            const roster = summary.rosters?.find(item =>
                String(item.team?.id) === String(team.id) ||
                item.homeAway === homeAway
            );
            if (getStartingPlayers(roster).length < 11) return null;
            return { ...roster, homeAway };
        });
        return rosters.every(Boolean) ? rosters : null;
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

    function getCurrentSeasonStartYear() {
        const now = new Date();
        return now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
    }

    async function fetchClubSeasonEvents(league, year, signal) {
        const key = `${league}:${year}`;
        if (!clubEventsCache.has(key)) {
            const request = (async () => {
                const response = await fetch(
                    `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${year}&limit=1000`,
                    { signal, cache: "no-store" }
                );
                if (!response.ok) throw new Error(`${leagueNames[league]} ${year}: server ${response.status}`);
                const data = await response.json();
                if (!Array.isArray(data.events)) throw new Error(`${leagueNames[league]} ${year}: o‘yinlar ro‘yxati noto‘g‘ri`);
                return data.events;
            })();
            clubEventsCache.set(key, request);
            request.catch(() => clubEventsCache.delete(key));
        }
        return clubEventsCache.get(key);
    }

    async function fetchClubSeasonData(league, startYear, signal) {
        const results = await Promise.allSettled([
            fetchClubSeasonEvents(league, startYear, signal),
            fetchClubSeasonEvents(league, startYear + 1, signal)
        ]);
        const successful = results.filter(result => result.status === "fulfilled");
        const failed = results.filter(result => result.status === "rejected");
        if (!successful.length) throw new AggregateError(failed.map(result => result.reason), "Liga o‘yinlari jadvalini yuklab bo‘lmadi.");
        return {
            events: [...new Map(successful.flatMap(result => result.value).map(event => [event.id, event])).values()],
            failed
        };
    }

    async function fetchClubRoster(league, teamId, startYear, signal) {
        const key = `${league}:${teamId}:${startYear}`;
        if (clubRosterCache.has(key)) return clubRosterCache.get(key);
        const response = await fetch(
            `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/teams/${encodeURIComponent(teamId)}/roster?season=${startYear}`,
            { signal, cache: "no-store" }
        );
        if (!response.ok) throw new Error(`${leagueNames[league]}: tarkib serverdan olinmadi (${response.status})`);
        const data = await response.json();
        if (!Array.isArray(data.athletes)) throw new Error(`${leagueNames[league]}: tarkib javobi noto‘g‘ri`);
        clubRosterCache.set(key, data);
        return data;
    }

    function getClubSeasonStandings(events, startYear) {
        const seasonPrefix = `${startYear}-${String(startYear + 1).slice(-2)}`;
        const teams = new Map();
        events.forEach(event => {
            const competition = event.competitions?.[0];
            const eventYear = new Date(event.date).getFullYear();
            if (event.season?.slug
                ? !event.season.slug.startsWith(seasonPrefix)
                : eventYear < startYear || eventYear > startYear + 1) return;
            const competitors = competition?.competitors || [];
            if (competitors.length !== 2) return;
            competitors.forEach(({ team }) => {
                if (!team?.id || teams.has(String(team.id))) return;
                teams.set(String(team.id), {
                    id: String(team.id),
                    name: team.displayName || team.name || "Noma’lum klub",
                    logo: getTeamLogo(team),
                    played: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    points: 0
                });
            });
            if (!["post", "in"].includes(competition.status?.type?.state)) return;
            const parsed = competitors.map(competitor => ({
                competitor,
                score: Number.parseInt(competitor.score, 10)
            }));
            if (parsed.some(item => !Number.isFinite(item.score))) return;
            const home = parsed.find(item => item.competitor.homeAway === "home") || parsed[0];
            const away = parsed.find(item => item !== home) || parsed[1];
            const homeTeam = teams.get(String(home.competitor.team.id));
            const awayTeam = teams.get(String(away.competitor.team.id));
            if (!homeTeam || !awayTeam) return;
            homeTeam.played += 1;
            awayTeam.played += 1;
            homeTeam.goalsFor += home.score;
            homeTeam.goalsAgainst += away.score;
            awayTeam.goalsFor += away.score;
            awayTeam.goalsAgainst += home.score;
            if (home.score > away.score) {
                homeTeam.wins += 1;
                homeTeam.points += 3;
                awayTeam.losses += 1;
            } else if (away.score > home.score) {
                awayTeam.wins += 1;
                awayTeam.points += 3;
                homeTeam.losses += 1;
            } else {
                homeTeam.draws += 1;
                awayTeam.draws += 1;
                homeTeam.points += 1;
                awayTeam.points += 1;
            }
        });
        return [...teams.values()].sort((first, second) =>
            second.points - first.points ||
            (second.goalsFor - second.goalsAgainst) - (first.goalsFor - first.goalsAgainst) ||
            second.goalsFor - first.goalsFor ||
            first.name.localeCompare(second.name)
        );
    }

    function createClubPanel(title, description = "") {
        const panel = createElement("section", "club-profile-panel");
        const heading = createElement("div", "club-profile-panel-heading");
        heading.append(createElement("h2", "", title));
        if (description) heading.append(createElement("p", "", description));
        panel.append(heading);
        return panel;
    }

    function getClubOpponent(event, clubId) {
        const competitors = event.competitions?.[0]?.competitors || [];
        return competitors.find(competitor => String(competitor.team?.id) !== String(clubId)) || null;
    }

    function getClubScore(event, competitor) {
        const score = competitor?.score;
        if (score && typeof score === "object") return score.displayValue || score.value || "—";
        return score ?? "—";
    }

    function renderClubMatchCard(event, club, signal, generation) {
        const competition = event.competitions?.[0];
        const competitors = competition?.competitors || [];
        const clubEntry = competitors.find(competitor => String(competitor.team?.id) === String(club.id));
        const opponent = getClubOpponent(event, club.id);
        const card = createElement("article", "club-match-card");
        const isLive = competition?.status?.type?.state === "in";
        if (isLive) card.classList.add("is-live");
        const link = createElement("a", "club-match-link");
        link.href = `#/match/${encodeURIComponent(club.league)}/${encodeURIComponent(event.id)}`;
        link.setAttribute("aria-label", `${club.name} va ${opponent?.team?.displayName || "raqib"} uchrashuvi${isLive ? ", jonli" : ""}. Tafsilotlarni ochish`);
        appendImage(link, getTeamLogo(opponent?.team || {}), "", "club-match-opponent-logo");
        const info = createElement("span", "club-match-info");
        const isHome = clubEntry?.homeAway === "home";
        info.append(
            createElement("strong", "", `${isHome ? "Uyda" : "Safarda"} · ${opponent?.team?.displayName || "Raqib"}`),
            createElement("small", "", isLive
                ? `Jonli o‘yin · ${competition.status.displayClock || competition.status.type.shortDetail || "Hozir"}`
                : `${formatMatchDate(event.date, true)} · ${formatKickoff(event.date).split(" · ").pop()}`)
        );
        const score = competition?.status?.type?.state === "pre"
            ? "VS"
            : isHome
                ? `${getClubScore(event, clubEntry)} – ${getClubScore(event, opponent)}`
                : `${getClubScore(event, opponent)} – ${getClubScore(event, clubEntry)}`;
        link.append(info, createElement("strong", "club-match-score", score));
        card.append(link);
        if (isLive) return card;

        const details = createElement("details", "club-match-details");
        const summaryLabel = createElement("summary", "", "To‘liq statistika");
        const stats = createElement("div", "club-match-statistics");
        details.append(summaryLabel, stats);
        details.addEventListener("toggle", async () => {
            if (!details.open || details.dataset.loaded) return;
            details.dataset.loaded = "true";
            if (competition?.status?.type?.state === "pre") {
                stats.append(createElement("p", "match-detail-empty", "Uchrashuv boshlanmagan. Statistika o‘yin tugagach mavjud bo‘ladi."));
                return;
            }
            stats.append(createElement("p", "match-detail-loading", "Uchrashuv statistikasi yuklanmoqda…"));
            try {
                const match = getMatches([event], club.league, true)[0];
                if (!match) throw new Error("Uchrashuv jamoalari topilmadi.");
                match.isUpcoming = false;
                const summaryData = await fetchMatchSummaryData(club.league, event.id, signal);
                if (generation !== clubProfileGeneration || signal.aborted) return;
                stats.replaceChildren(renderStatistics(summaryData, match));
            } catch (error) {
                if (signal.aborted || generation !== clubProfileGeneration) return;
                stats.replaceChildren(createElement("p", "match-detail-empty is-error", "Uchrashuv statistikasini yuklab bo‘lmadi."));
                console.error(`Club match statistics failed for ${club.league}:${event.id}:`, error);
            }
        });
        card.append(details);
        return card;
    }

    function renderClubMatchList(events, club, signal, generation, emptyText) {
        const list = createElement("div", "club-match-list");
        if (!events.length) {
            list.append(createElement("p", "match-detail-empty", emptyText));
            return list;
        }
        events.forEach(event => list.append(renderClubMatchCard(event, club, signal, generation)));
        return list;
    }

    function collectClubTopPlayers(events, summaries, clubId) {
        const players = new Map();
        summaries.forEach(summary => {
            if (!summary) return;
            const roster = summary.rosters?.find(item => String(item.team?.id) === String(clubId));
            roster?.roster?.forEach(player => {
                const athlete = player.athlete || player;
                if (!athlete.id) return;
                if (!players.has(String(athlete.id))) {
                    players.set(String(athlete.id), {
                        id: String(athlete.id),
                        name: getPlayerDisplayName(player),
                        appearances: 0,
                        goals: 0,
                        assists: 0
                    });
                }
                const totals = players.get(String(athlete.id));
                const stats = player.stats || [];
                const getNumber = key => {
                    const stat = stats.find(item => item.name === key);
                    const value = Number.parseFloat(stat?.value);
                    return Number.isFinite(value) ? value : 0;
                };
                totals.appearances += getNumber("appearances") || 1;
                totals.goals += getNumber("totalGoals");
                totals.assists += getNumber("goalAssists");
            });
        });
        return [...players.values()].sort((first, second) =>
            (second.goals + second.assists) - (first.goals + first.assists) ||
            second.goals - first.goals ||
            second.appearances - first.appearances ||
            first.name.localeCompare(second.name)
        ).slice(0, 8);
    }

    function renderClubTopPlayers(panel, players, failedCount) {
        const table = createElement("div", "club-player-table-wrap");
        if (!players.length) {
            table.append(createElement("p", "match-detail-empty", "So‘nggi uchrashuvlar bo‘yicha futbolchi statistikasi topilmadi."));
        } else {
            const playerTable = createElement("table", "club-player-table");
            const head = createElement("thead");
            const headerRow = createElement("tr");
            ["Futbolchi", "O‘yin", "Gol", "Assist", "Ball (G+A)"].forEach(label => headerRow.append(createElement("th", "", label)));
            head.append(headerRow);
            const body = createElement("tbody");
            players.forEach(player => {
                const row = createElement("tr");
                row.append(
                    createElement("th", "", player.name),
                    createElement("td", "", String(player.appearances)),
                    createElement("td", "", String(player.goals)),
                    createElement("td", "", String(player.assists)),
                    createElement("td", "club-player-points", String(player.goals + player.assists))
                );
                body.append(row);
            });
            playerTable.append(head, body);
            table.append(playerTable);
        }
        if (failedCount) {
            table.append(createElement("p", "club-profile-warning", `${failedCount} ta uchrashuv statistikasi yuklanmadi.`));
        }
        panel.replaceChildren(...[panel.firstElementChild, table]);
    }

    function renderClubProfile(club, rosterData, events, eventsFailed, signal, generation) {
        const heading = createElement("header", "club-profile-header");
        appendImage(heading, club.logo, "", "club-profile-logo");
        const title = createElement("div", "club-profile-title-copy");
        const clubTitle = createElement("h1", "", club.name);
        clubTitle.id = "club-profile-title";
        title.append(
            createElement("span", "home-eyebrow", leagueNames[club.league]),
            clubTitle,
            createElement("p", "", "Klub profili · joriy mavsum")
        );
        heading.append(title);
        clubProfileHeading.replaceChildren(heading);
        clubProfileContent.replaceChildren();

        const startYear = getCurrentSeasonStartYear();
        const standings = events ? getClubSeasonStandings(events, startYear) : [];
        const tablePosition = standings.findIndex(team => team.id === String(club.id));
        const clubStats = tablePosition >= 0 ? standings[tablePosition] : null;
        const clubEvents = (events || []).filter(event =>
            (event.competitions?.[0]?.competitors || []).some(team => String(team.team?.id) === String(club.id))
        ).sort((first, second) => Date.parse(first.date) - Date.parse(second.date));
        const now = Date.now();
        const live = clubEvents.filter(event =>
            event.competitions?.[0]?.status?.type?.state === "in"
        );
        const previous = clubEvents.filter(event =>
            event.competitions?.[0]?.status?.type?.state === "post" && Date.parse(event.date) <= now
        ).slice(-5).reverse();
        const next = clubEvents.filter(event =>
            event.competitions?.[0]?.status?.type?.state === "pre" && Date.parse(event.date) >= now
        ).slice(0, 5);

        const overview = createElement("div", "club-profile-overview");
        const standingsPanel = createClubPanel("Chempionatdagi o‘rni");
        if (eventsFailed) {
            standingsPanel.append(createElement("p", "club-profile-warning", "Liga jadvalini to‘liq yuklab bo‘lmadi; ko‘rsatilgan o‘rin mavjud ma’lumotlar asosida hisoblangan."));
        }
        if (clubStats) {
            const position = createElement("div", "club-standing-position");
            position.append(
                createElement("strong", "", `#${tablePosition + 1}`),
                createElement("span", "", `${clubStats.points} ochko · ${clubStats.played} o‘yin`)
            );
            const record = createElement("p", "club-standing-record",
                `${clubStats.wins} g‘alaba · ${clubStats.draws} durang · ${clubStats.losses} mag‘lubiyat · to‘plar farqi ${clubStats.goalsFor - clubStats.goalsAgainst}`);
            standingsPanel.append(position, record);
        } else {
            standingsPanel.append(createElement("p", "match-detail-empty", "Joriy mavsum jadvalidan klub o‘rni topilmadi."));
        }
        const nextPanel = createClubPanel(live.length ? "Jonli o‘yini" : "Keyingi o‘yini");
        if (live.length) {
            nextPanel.classList.add("club-live-match-panel");
            nextPanel.append(renderClubMatchCard(live[0], club, signal, generation));
        } else if (next.length) {
            const nextCard = renderClubMatchCard(next[0], club, signal, generation);
            nextPanel.append(nextCard);
        } else if (events) {
            nextPanel.append(createElement("p", "match-detail-empty", "Keyingi o‘yin jadvali hozircha e’lon qilinmagan."));
        } else {
            nextPanel.append(createElement("p", "club-profile-warning", "Keyingi o‘yinni yuklab bo‘lmadi."));
        }
        overview.append(standingsPanel, nextPanel);
        clubProfileContent.append(overview);

        const rosterPanel = createClubPanel("Klub tarkibi", "Joriy mavsumdagi asosiy jamoa futbolchilari");
        if (!rosterData) {
            rosterPanel.append(createElement("p", "club-profile-warning", "Klub tarkibini yuklab bo‘lmadi."));
        } else if (!rosterData.athletes.length) {
            rosterPanel.append(createElement("p", "match-detail-empty", "Klub futbolchilari ro‘yxati mavjud emas."));
        } else {
            const roster = createElement("div", "club-roster-grid");
            rosterData.athletes.forEach(athlete => {
                const player = createElement("article", "club-roster-player");
                const nameText = athlete.displayName || athlete.fullName || "Noma’lum futbolchi";
                const number = createElement("span", "club-roster-number", athlete.jersey || "—");
                const info = createElement("span", "club-roster-info");
                info.append(
                    createElement("strong", "", nameText),
                    createElement("small", "", `${athlete.position?.abbreviation || athlete.position?.displayName || "Pozitsiya noma’lum"}${athlete.age ? ` · ${athlete.age} yosh` : ""}`)
                );
                player.append(number, info);
                roster.append(player);
            });
            rosterPanel.append(roster);
        }
        clubProfileContent.append(rosterPanel);

        const topPlayersPanel = createClubPanel("Eng yaxshi futbolchilar", "Ballar so‘nggi 5 ta yakunlangan o‘yindagi gol + assist bo‘yicha hisoblanadi.");
        topPlayersPanel.append(createElement("p", "match-detail-loading", "Futbolchilar statistikasi yuklanmoqda…"));
        clubProfileContent.append(topPlayersPanel);

        const recentPanel = createClubPanel("Avvalgi 5 ta uchrashuv", "O‘yinni tanlab, uning batafsil statistikasini oching");
        recentPanel.append(renderClubMatchList(previous, club, signal, generation, events
            ? "Avvalgi uchrashuvlar topilmadi."
            : "Avvalgi uchrashuvlarni yuklab bo‘lmadi."));
        clubProfileContent.append(recentPanel);

        const upcomingPanel = createClubPanel("Keyingi 5 ta uchrashuv", "Har bir o‘yin uchun to‘liq statistika o‘yin yakunlangach ko‘rinadi");
        upcomingPanel.append(renderClubMatchList(next, club, signal, generation, events
            ? "Keyingi uchrashuvlar jadvali hali e’lon qilinmagan."
            : "Keyingi uchrashuvlarni yuklab bo‘lmadi."));
        clubProfileContent.append(upcomingPanel);
        return { previous, topPlayersPanel };
    }

    async function openClubPage(route) {
        currentClubRoute = route;
        const generation = ++clubProfileGeneration;
        clubProfileController?.abort();
        clubProfileController = new AbortController();
        const { signal } = clubProfileController;
        clubProfileHeading.replaceChildren();
        clubProfileContent.replaceChildren(createElement("p", "match-detail-loading", "Klub ma’lumotlari yuklanmoqda…"));
        if (!leagueNames[route?.league] || !route.id) {
            clubProfileContent.replaceChildren(createElement("p", "match-detail-empty is-error", "Klub manzili noto‘g‘ri."));
            return;
        }

        const startYear = getCurrentSeasonStartYear();
        const directoryTeam = clubDirectory.find(team =>
            team.league === route.league && team.id === String(route.id)
        );
        const requests = await Promise.allSettled([
            fetchClubRoster(route.league, route.id, startYear, signal),
            fetchClubSeasonData(route.league, startYear, signal)
        ]);
        if (generation !== clubProfileGeneration || signal.aborted) return;
        const rosterData = requests[0].status === "fulfilled" ? requests[0].value : null;
        const seasonData = requests[1].status === "fulfilled" ? requests[1].value : null;
        const clubData = rosterData?.team;
        const club = directoryTeam || {
            id: String(route.id),
            league: route.league,
            name: clubData?.displayName || clubData?.name || "Klub",
            logo: getTeamLogo(clubData || {})
        };
        if (requests[0].status === "rejected" && !seasonData) {
            clubProfileContent.replaceChildren(createElement("p", "match-detail-empty is-error",
                "Klub ma’lumotlarini yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring."));
            console.error(`Club profile failed for ${route.league}:${route.id}:`, requests[0].reason, requests[1].reason);
            return;
        }
        const profile = renderClubProfile(
            club,
            rosterData,
            seasonData?.events || null,
            Boolean(seasonData?.failed.length),
            signal,
            generation
        );
        if (requests[0].status === "rejected") {
            console.error(`Club roster failed for ${route.league}:${route.id}:`, requests[0].reason);
        }
        if (requests[1].status === "rejected") {
            console.error(`Club schedule failed for ${route.league}:${route.id}:`, requests[1].reason);
        } else if (seasonData.failed.length) {
            seasonData.failed.forEach(result => console.error(`Club schedule year failed for ${route.league}:${route.id}:`, result.reason));
        }
        const summaryResults = await Promise.allSettled(profile.previous.map(event =>
            fetchMatchSummaryData(route.league, event.id, signal)
        ));
        if (generation !== clubProfileGeneration || signal.aborted) return;
        const summaryFailures = summaryResults.filter(result => result.status === "rejected");
        summaryFailures.forEach(result => console.error(`Club player statistics failed for ${route.league}:${route.id}:`, result.reason));
        const topPlayers = collectClubTopPlayers(
            profile.previous,
            summaryResults.map(result => result.status === "fulfilled" ? result.value : null),
            route.id
        );
        renderClubTopPlayers(profile.topPlayersPanel, topPlayers, summaryFailures.length);
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
        const views = {
            stats: renderStatistics(summary, match),
            lineups: renderLineups(summary, match),
            h2h: renderHeadToHead(summary, match),
            form: renderRecentForm(summary, match)
        };
        const tabDefinitions = [
            { id: "stats", label: "Barcha statistika" },
            { id: "lineups", label: match.isUpcoming
                ? summary.officialRosters ? "Asosiy tarkiblar" : "Taxminiy tarkib"
                : "Asosiy tarkiblar" },
            { id: "h2h", label: "O‘zaro o‘yinlar" },
            { id: "form", label: "So‘nggi forma" }
        ];
        tabDefinitions.forEach(tab => {
            const button = createElement("button", "match-detail-tab", tab.label);
            button.type = "button";
            button.dataset.matchTab = tab.id;
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

    function renderMatchPageHeading(match) {
        const header = createElement("header", "live-match-detail-header");
        const league = createElement("div", "live-match-detail-league");
        appendImage(league, match.leagueLogo, "", "live-match-league-logo");
        league.append(createElement("span", "", match.name));
        const phase = createElement("span", `live-match-phase${match.isUpcoming ? " is-upcoming" : ""}`,
            match.isUpcoming ? formatKickoff(match.date) : match.clock || match.phase);
        league.append(phase);

        const scoreboard = createElement("div", "live-match-detail-scoreboard");
        const home = createElement("div", "live-match-detail-team");
        appendImage(home, match.home.logo, "", "live-match-detail-team-logo");
        home.append(createElement("strong", "", match.home.name));
        const away = createElement("div", "live-match-detail-team is-away");
        appendImage(away, match.away.logo, "", "live-match-detail-team-logo");
        away.append(createElement("strong", "", match.away.name));
        const center = createElement("div", "live-match-detail-center");
        const score = createElement("strong", "live-match-detail-score",
            `${match.home.score ?? "0"} – ${match.away.score ?? "0"}`);
        const clockPanel = createElement("div", `match-clock-panel${match.isLive ? " is-live" : match.isPre ? " is-countdown" : ""}`);
        clockPanel.dataset.matchClock = "";
        if (match.isLive) {
            const baseClock = String(match.clock || "").match(/^(\d+)(?:\+(\d+))?(?::(\d+))?/);
            if (baseClock) {
                clockPanel.dataset.clockBaseSeconds = String((Number(baseClock[1]) + Number(baseClock[2] || 0)) * 60 + Number(baseClock[3] || 0));
                clockPanel.dataset.clockStartedAt = String(Date.now());
            }
        }
        if (match.isLive || match.isCompleted) center.append(score);
        center.append(clockPanel);
        scoreboard.append(home, center, away);

        const metadata = createElement("p", "live-match-detail-meta",
            `${formatMatchDate(match.date, true)}${match.venue ? ` · ${match.venue}` : ""}`);
        header.append(league, scoreboard, metadata);
        matchDetailHeading.replaceChildren(header);
        updateMatchClock(match, clockPanel);
    }

    function updateMatchClock(match, panel) {
        panel.replaceChildren();
        const label = createElement("span", "match-clock-label");
        const value = createElement("strong", "match-clock-value");
        if (match.isLive) {
            label.textContent = "Jonli o‘yin";
            const isPaused = /half|halftime|break|tanaffus|ht/i.test(match.phase || "");
            const baseSeconds = Number(panel.dataset.clockBaseSeconds);
            if (Number.isFinite(baseSeconds) && panel.dataset.clockStartedAt) {
                const elapsedSeconds = isPaused ? 0 : Math.max(0, Math.floor((Date.now() - Number(panel.dataset.clockStartedAt)) / 1000));
                value.textContent = `${Math.max(1, Math.floor((baseSeconds + elapsedSeconds) / 60))}′`;
            } else {
                value.textContent = match.phase || "Jonli";
            }
        } else if (match.isPre) {
            label.textContent = "Boshlanishiga qoldi";
            panel.dataset.kickoff = match.date;
            if (!hasExactMatchTime(match.date)) {
                const daysUntil = getDaysUntilMatch(match.date);
                if (daysUntil !== null) {
                    value.classList.add("is-days");
                    value.textContent = daysUntil === 0 ? "Bugun" : `${daysUntil} kun qoldi`;
                    value.setAttribute("aria-label", value.textContent);
                    panel.append(label, value);
                    return;
                }
            }
            const kickoff = parseMatchDate(match.date);
            if (!kickoff) {
                value.textContent = formatKickoff(match.date);
                value.setAttribute("aria-label", value.textContent);
                panel.append(label, value);
                return;
            }
            const remainingSeconds = Math.max(0, Math.floor((kickoff.getTime() - Date.now()) / 1000));
            const days = Math.floor(remainingSeconds / 86400);
            const hours = Math.floor((remainingSeconds % 86400) / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;
            const clock = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            if (remainingSeconds > 172800) {
                value.classList.add("is-days");
                value.textContent = `${days} kun · ${clock}`;
                value.setAttribute("aria-label", `${days} kun ${hours} soat ${minutes} daqiqa ${seconds} soniya`);
            } else {
                value.textContent = `${String(Math.floor(remainingSeconds / 3600)).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
                value.setAttribute("aria-label", `${Math.floor(remainingSeconds / 3600)} soat ${minutes} daqiqa ${seconds} soniya`);
            }
        } else if (match.isCompleted) {
            label.textContent = "O‘yin holati";
            value.textContent = "Yakunlangan";
        } else {
            label.textContent = "O‘yin vaqti";
            value.textContent = match.phase || "Vaqt noma’lum";
        }
        panel.append(label, value);
    }

    async function resolveMatchFromScoreboard(league, eventId, signal) {
        const responses = await Promise.allSettled([-1, 0, 1].map(async offset => {
            const endpoint = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${getDate(offset)}&limit=100`;
            const response = await fetch(endpoint, { signal, cache: "no-store" });
            if (!response.ok) throw new Error(`${leagueNames[league]}: server ${response.status}`);
            const data = await response.json();
            if (!Array.isArray(data.events)) throw new Error(`${leagueNames[league]}: noto‘g‘ri javob`);
            return data.events;
        }));
        const events = responses.flatMap(result => result.status === "fulfilled" ? result.value : []);
        return getMatches(events, league, true).find(match => String(match.id) === String(eventId)) || null;
    }

    async function openMatchPage(route, activeTab = "stats", refresh = false) {
        currentMatchRoute = route;
        const generation = ++matchPageGeneration;
        matchPageController?.abort();
        matchPageController = new AbortController();
        const { signal } = matchPageController;
        window.clearInterval(matchPageRefreshTimer);
        window.clearInterval(matchClockTimer);
        if (!refresh) {
            matchDetailHeading.replaceChildren();
            matchDetailContent.replaceChildren(createElement("p", "match-detail-loading", "Uchrashuv ma’lumotlari yuklanmoqda…"));
        }

        try {
            if (!leagueNames[route?.league] || !route.id) {
                throw new Error("Uchrashuv manzili noto‘g‘ri.");
            }
            let match = matches.find(item => item.league === route.league && String(item.id) === String(route.id));
            if (!match || refresh) {
                match = await resolveMatchFromScoreboard(route.league, route.id, signal) || match;
            }
            const cached = detailsCache.get(`${route.league}:${route.id}`);
            let summary = !refresh && cached && Date.now() - cached.time < 25000 ? cached.summary : null;
            if (!summary) {
                summary = await fetchMatchSummaryData(route.league, route.id, signal, refresh);
            }
            if (!match && summary.header) {
                match = getMatches([summary.header], route.league, true)
                    .find(item => String(item.id) === String(route.id)) || null;
            }
            if (!match) throw new Error("Uchrashuv scoreboard ma’lumotlaridan topilmadi.");
            if (!summary.boxscore) throw new Error("Uchrashuv statistikasi topilmadi.");
            summary.officialRosters = match.isUpcoming
                ? getOfficialLineups(summary, match)
                : null;
            if (match.isUpcoming && !summary.officialRosters) {
                summary.estimatedRosters = await loadEstimatedLineups(summary, match, signal);
            }
            if (generation !== matchPageGeneration || signal.aborted) return;
            detailsCache.set(`${match.league}:${match.id}`, { summary, time: Date.now() });
            renderMatchPageHeading(match);
            renderMatchDetails(matchDetailContent, summary, match, activeTab);
            if (match.isPre || match.isLive) {
                matchClockTimer = window.setInterval(() => {
                    const clockPanel = matchDetailHeading.querySelector("[data-match-clock]");
                    if (clockPanel) updateMatchClock(match, clockPanel);
                }, 1000);
            }
            if (!match.isCompleted) {
                matchPageRefreshTimer = window.setInterval(() => {
                    const selectedTab = matchDetailContent.querySelector(".match-detail-tab[aria-pressed='true']")?.dataset.matchTab || "stats";
                    openMatchPage(route, selectedTab, true);
                }, 30000);
            }
        } catch (error) {
            if (generation !== matchPageGeneration || signal.aborted) return;
            if (!refresh) {
                matchDetailContent.replaceChildren(createElement("p", "match-detail-empty is-error",
                    "Uchrashuvning to‘liq ma’lumotlarini yuklab bo‘lmadi. Internetni tekshirib, qayta urinib ko‘ring."));
            } else if (!signal.aborted) {
                matchPageRefreshTimer = window.setInterval(() => openMatchPage(route, activeTab, true), 30000);
            }
            console.error(`Live match page failed for ${route?.league}:${route?.id}:`, error);
        }
    }

    async function fetchMatchSummaryData(league, eventId, signal, forceRefresh = false) {
        const cacheKey = `${league}:${eventId}`;
        const cached = detailsCache.get(cacheKey);
        if (!forceRefresh && cached && Date.now() - cached.time < 5 * 60 * 1000) return cached.summary;
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/summary?event=${encodeURIComponent(eventId)}`, {
            cache: "no-store",
            signal
        });
        if (!response.ok) throw new Error(`server ${response.status}`);
        const summary = await response.json();
        detailsCache.set(cacheKey, { summary, time: Date.now() });
        return summary;
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
        const card = createElement("a", "live-match-card");
        card.href = `#/match/${encodeURIComponent(match.league)}/${encodeURIComponent(match.id)}`;
        card.setAttribute("aria-label", `${match.home.name} va ${match.away.name} uchrashuvi tafsilotlari`);
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
        card.append(header, scoreboard, createElement("span", "live-match-card-action", "Barcha ma’lumotlar →"));
        return card;
    }

    function renderMatches() {
        const leagueMatches = selectedLeague === "all" ? matches : matches.filter(match => match.league === selectedLeague);
        const visibleMatches = selectedMatchState === "live"
            ? leagueMatches.filter(match => match.isLive)
            : selectedMatchState === "upcoming"
                ? leagueMatches.filter(match => match.isUpcoming)
                : leagueMatches;
        matchList.replaceChildren();
        if (!visibleMatches.length) {
            const empty = createElement("div", "live-match-empty");
            const emptyMessage = selectedMatchState === "live"
                ? selectedLeague === "all"
                    ? "Hozir jonli o‘yin yo‘q"
                    : `${leagueNames[selectedLeague]}da hozir jonli o‘yin yo‘q`
                : selectedMatchState === "upcoming"
                    ? selectedLeague === "all"
                        ? "Kelasi 24 soat ichida o‘yin yo‘q"
                        : `${leagueNames[selectedLeague]}da kelasi 24 soat ichida o‘yin yo‘q`
                    : selectedLeague === "all"
                        ? "Jonli yoki kelasi 24 soatga belgilangan o‘yin yo‘q"
                        : `${leagueNames[selectedLeague]}da jonli yoki kelasi 24 soatga belgilangan o‘yin yo‘q`;
            empty.append(
                createElement("span", "live-match-empty-icon", "◷"),
                createElement("strong", "", emptyMessage),
                createElement("span", "", selectedMatchState === "live"
                    ? "Jonli uchrashuv boshlansa, shu yerda darhol ko‘rinadi. Kelasi o‘yinlarni yuqoridagi filtrdan tanlang."
                    : "Uchrashuvlar jadvali yangilanganda bu yerda avtomatik ko‘rinadi.")
            );
            matchList.append(empty);
            return;
        }
        const liveMatches = visibleMatches.filter(match => match.isLive);
        const upcomingMatches = visibleMatches.filter(match => match.isUpcoming);
        [
            { title: "Jonli uchrashuvlar", items: liveMatches, className: "is-live" },
            { title: "Keyingi 24 soat", items: upcomingMatches, className: "is-upcoming" }
        ].forEach(sectionData => {
            if (!sectionData.items.length) return;
            const section = createElement("section", `live-match-section ${sectionData.className}`);
            section.append(createElement("h2", "live-match-section-heading", sectionData.title));
            if (sectionData.className === "is-live") {
                const grid = createElement("div", "live-match-grid");
                sectionData.items.forEach(match => grid.append(createMatchCard(match)));
                section.append(grid);
                matchList.append(section);
                return;
            }
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
        setStatus("O‘yinlar yuklanmoqda…");
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
            setStatus("O‘yinlarni yuklab bo‘lmadi. Qayta urinib ko‘ring.", true);
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

    stateFilters.forEach(button => {
        button.addEventListener("click", () => {
            selectedMatchState = button.dataset.matchState || "live";
            stateFilters.forEach(filter => {
                const selected = filter === button;
                filter.classList.toggle("is-active", selected);
                filter.setAttribute("aria-pressed", String(selected));
            });
            renderMatches();
        });
    });

    clubSearchToggle.addEventListener("click", () => {
        const isOpening = clubSearchPanel.hidden;
        clubSearchPanel.hidden = !isOpening;
        clubSearchToggle.setAttribute("aria-expanded", String(isOpening));
        if (isOpening) clubSearchInput.focus();
    });
    clubSearchPanel.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        clubSearchPanel.hidden = true;
        clubSearchToggle.setAttribute("aria-expanded", "false");
        clubSearchToggle.focus();
    });
    clubSearchInput.addEventListener("input", renderClubSearch);
    refreshButton.addEventListener("click", refreshLiveMatches);
    window.addEventListener("pitchplan:sectionchange", event => {
        active = event.detail.section === "matches";
        window.clearInterval(refreshTimer);
        if (event.detail.section === "match") {
            currentClubRoute = null;
            clubProfileGeneration += 1;
            clubProfileController?.abort();
            openMatchPage(event.detail.match);
            requestGeneration += 1;
            activeController?.abort();
            return;
        }
        if (event.detail.section === "club") {
            currentMatchRoute = null;
            matchPageGeneration += 1;
            matchPageController?.abort();
            window.clearInterval(matchPageRefreshTimer);
            window.clearInterval(matchClockTimer);
            currentClubRoute = event.detail.club;
            clubProfileController?.abort();
            requestGeneration += 1;
            activeController?.abort();
            clubDirectoryController?.abort();
            openClubPage(event.detail.club);
            return;
        }
        currentClubRoute = null;
        clubProfileGeneration += 1;
        clubProfileController?.abort();
        clubDirectoryController?.abort();
        currentMatchRoute = null;
        matchPageGeneration += 1;
        matchPageController?.abort();
        window.clearInterval(matchPageRefreshTimer);
        window.clearInterval(matchClockTimer);
        if (active) {
            refreshLiveMatches();
            refreshTimer = window.setInterval(refreshLiveMatches, 30000);
            if (!clubDirectory.length) {
                clubDirectoryController = new AbortController();
                const { signal } = clubDirectoryController;
                clubSearchStatus.textContent = "Klublar ro‘yxati yuklanmoqda…";
                fetchClubDirectory(signal).then(() => {
                    if (!signal.aborted && active) renderClubSearch();
                }).catch(error => {
                    if (signal.aborted) return;
                    clubSearchStatus.textContent = "Klublar ro‘yxatini yuklab bo‘lmadi. Sahifani yangilab qayta urinib ko‘ring.";
                    console.error("Top-5 league club directory failed:", error);
                });
            } else {
                renderClubSearch();
            }
        } else {
            requestGeneration += 1;
            activeController?.abort();
        }
    });
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            window.clearInterval(refreshTimer);
            window.clearInterval(matchPageRefreshTimer);
            window.clearInterval(matchClockTimer);
        } else if (currentMatchRoute) {
            const selectedTab = matchDetailContent.querySelector(".match-detail-tab[aria-pressed='true']")?.dataset.matchTab || "stats";
            openMatchPage(currentMatchRoute, selectedTab, true);
        } else if (currentClubRoute) {
            openClubPage(currentClubRoute);
        } else if (active) {
            refreshLiveMatches();
            refreshTimer = window.setInterval(refreshLiveMatches, 30000);
        }
    });
})();
