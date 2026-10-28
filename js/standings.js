(() => {
    const leagueNames = {
        "eng.1": "Premier League",
        "eng.fa": "Angliya kubogi",
        "eng.league_cup": "Angliya Liga kubogi",
        "esp.1": "LaLiga",
        "ita.1": "Serie A",
        "ger.1": "Bundesliga",
        "fra.1": "Ligue 1",
        "uefa.champions": "UEFA Champions League",
        "ksa.1": "Saudi Pro League"
    };
    const standingsBody = document.getElementById("standings-body");
    const leagueName = document.getElementById("standings-league-name");
    const seasonLabel = document.getElementById("standings-season");
    const statusText = document.getElementById("standings-status-text");
    const status = document.getElementById("standings-status");
    const tabs = [...document.querySelectorAll(".live-league-tab")];
    const liveView = document.getElementById("live-view");
    const downloadButton = document.getElementById("standings-download");
    const topSixInput = document.getElementById("standings-top-six");
    const logoInput = document.getElementById("standings-logo-input");
    const logoUploadButton = document.getElementById("standings-logo-upload");
    const logoPasswordDialog = document.getElementById("standings-logo-password-dialog");
    const logoPasswordForm = document.getElementById("standings-logo-password-form");
    const logoPasswordInput = document.getElementById("standings-logo-password-input");
    const logoPasswordError = document.getElementById("standings-logo-password-error");
    const logoCircleInput = document.getElementById("standings-logo-circle");
    const logoShapeControl = document.querySelector(".standings-logo-shape-control");
    const railTitle = document.getElementById("standings-rail-title");
    const railSeason = document.getElementById("standings-rail-season");
    const railRound = document.getElementById("standings-rail-round");
    const leagueLogo = document.getElementById("standings-league-logo");
    const standingsTable = document.querySelector(".standings-table");
    const defaultTableHead = standingsTable.querySelector("thead").cloneNode(true);
    const brandLogoPreview = document.getElementById("standings-brand-logo");
    const brandLogoStorageKey = "pitchplan-standings-channel-logo";
    const brandLogoCircleStorageKey = "pitchplan-standings-channel-logo-circle";
    let customBrandLogoSource = "";

    function updateBrandLogoPreview(source) {
        const hasCustomLogo = Boolean(source);
        brandLogoPreview.classList.toggle("is-custom", hasCustomLogo);
        brandLogoPreview.classList.toggle("is-circle", hasCustomLogo && logoCircleInput.checked);
        brandLogoPreview.alt = hasCustomLogo ? "Kanal logosi" : "PitchPlan";
        logoCircleInput.disabled = !hasCustomLogo;
        logoShapeControl.classList.toggle("is-disabled", !hasCustomLogo);
        if (source) brandLogoPreview.src = source;
        else brandLogoPreview.src = "./images/Pitch.png";
    }
    const leagueAssets = {
        "eng.1": "./images/ligalar/english-premier-league.ee1e9b08.png",
        "eng.fa": "./images/ligalar/fa-cup-badge.svg",
        "eng.league_cup": "./images/ligalar/efl-cup-badge.svg",
        "esp.1": "./images/ligalar/LaLiga_logo_2023.svg.webp",
        "ita.1": "./images/ligalar/serie_a-brandlogo.net_-512x512.png",
        "ger.1": "./images/ligalar/Bundesliga_logo_(2017).svg.webp",
        "fra.1": "./images/ligalar/ligue-1.webp",
        "uefa.champions": "./images/ligalar/UEFA_Champions_League-ucl.svg",
        "ksa.1": "./images/ligalar/Roshn_Saudi_League_Logo.png"
    };
    const leagueRailThemes = {
        "eng.1": { start: "#caff27", middle: "#8cf21e", end: "#19d16d", accent: "#00aa75", glow: "rgba(8,175,111,.92)", text: "#12251a" },
        "esp.1": { start: "#ff3158", middle: "#ff633e", end: "#ffb52e", accent: "#d8274c", glow: "rgba(216,39,76,.88)", text: "#fffaf3" },
        "ita.1": { start: "#1649b8", middle: "#087aca", end: "#10b6d3", accent: "#103f8f", glow: "rgba(16,63,143,.9)", text: "#ffffff" },
        "ger.1": { start: "#f01836", middle: "#d5092b", end: "#960c2f", accent: "#790a26", glow: "rgba(121,10,38,.9)", text: "#ffffff" },
        "fra.1": { start: "#142b83", middle: "#2851b6", end: "#7d4ae0", accent: "#102364", glow: "rgba(16,35,100,.9)", text: "#ffffff" },
        "uefa.champions": { start: "#111f5c", middle: "#263a91", end: "#5368c9", accent: "#15266d", glow: "rgba(34,53,143,.9)", text: "#ffffff" },
        "ksa.1": { start: "#0d593f", middle: "#12945f", end: "#9bcc42", accent: "#08633e", glow: "rgba(13,104,67,.9)", text: "#ffffff" },
        "eng.fa": { start: "#132858", middle: "#315ba4", end: "#6588c2", accent: "#19386f", glow: "rgba(25,56,111,.9)", text: "#ffffff" },
        "eng.league_cup": { start: "#087b59", middle: "#21ae7b", end: "#83d7ae", accent: "#086a4d", glow: "rgba(8,106,77,.9)", text: "#ffffff" }
    };
    if (!standingsBody || !liveView || !tabs.length) return;

    let selectedLeague = "eng.1";
    let isActive = false;
    let refreshTimer = 0;
    let requestGeneration = 0;
    let activeController = null;
    let lastSuccessfulUpdate = null;
    let currentRows = [];
    let currentCupMatches = [];
    let currentRound = null;

    const cupLeagues = new Set(["eng.fa", "eng.league_cup"]);
    const cupStageLabels = {
        "preliminary-round": "Dastlabki bosqich",
        "extra-preliminary-round": "Qo‘shimcha dastlabki bosqich",
        "first-round": "1-bosqich",
        "second-round": "2-bosqich",
        "third-round": "3-bosqich",
        "fourth-round": "4-bosqich",
        "fifth-round": "5-bosqich",
        "quarterfinals": "Chorak final",
        "semifinals": "Yarim final",
        "final": "Final"
    };
    const cupStageOrder = [
        "extra-preliminary-round", "preliminary-round", "first-round", "second-round",
        "third-round", "fourth-round", "fifth-round", "quarterfinals", "semifinals", "final"
    ];

    function isCupLeague(league) {
        return cupLeagues.has(league);
    }

    function getCupStageOrder(stage) {
        const index = cupStageOrder.indexOf(stage);
        return index === -1 ? cupStageOrder.length : index;
    }

    function getCupStageLabel(stage) {
        return cupStageLabels[stage] || String(stage || "Bosqich").replace(/-/g, " ");
    }

    function applyLeagueRailTheme(league) {
        const rail = document.querySelector(".standings-brand-rail");
        if (!rail) return;
        const theme = leagueRailThemes[league] || leagueRailThemes["eng.1"];
        rail.style.setProperty("--league-rail-start", theme.start);
        rail.style.setProperty("--league-rail-middle", theme.middle);
        rail.style.setProperty("--league-rail-end", theme.end);
        rail.style.setProperty("--league-rail-accent", theme.accent);
        rail.style.setProperty("--league-rail-glow", theme.glow);
        rail.style.setProperty("--league-rail-text", theme.text);
    }

    function getCurrentSeasonStartYear() {
        const now = new Date();
        return now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
    }

    function formatSeason(startYear) {
        return `${startYear}/${String(startYear + 1).slice(-2)}`;
    }

    function isCurrentSeasonEvent(event, startYear, league) {
        if (isCupLeague(league)) return Number(event.season?.year) === startYear;
        if (league === "uefa.champions") {
            return Number(event.season?.year) === startYear && event.season?.slug === "league-phase";
        }
        return event.season?.slug?.startsWith(`${startYear}-${String(startYear + 1).slice(-2)}`);
    }

    function getCurrentRound(rows, events, startYear, liveMatches, league) {
        if (!rows.length) return null;
        const scheduledGames = new Map();
        events.forEach(event => {
            if (!isCurrentSeasonEvent(event, startYear, league)) return;
            const competitors = event.competitions?.[0]?.competitors || [];
            competitors.forEach(({ team }) => {
                if (!team?.id) return;
                scheduledGames.set(team.id, (scheduledGames.get(team.id) || 0) + 1);
            });
        });
        const maxScheduledGames = Math.max(0, ...scheduledGames.values());
        if (!maxScheduledGames) return null;
        const maxPlayed = Math.max(...rows.map(team => team.played));
        const activeRound = maxPlayed + (liveMatches ? 0 : 1);
        return Math.min(activeRound, maxScheduledGames);
    }

    function getLiveStandings(events, startYear, league) {
        const teams = new Map();
        const liveTeamIds = new Set();
        let liveMatches = 0;

        events.forEach(event => {
            if (!isCurrentSeasonEvent(event, startYear, league)) return;
            const competition = event.competitions?.[0];
            const competitors = competition?.competitors || [];
            if (competitors.length !== 2) return;

            competitors.forEach(competitor => {
                const team = competitor.team;
                if (!team?.id || teams.has(team.id)) return;
                teams.set(team.id, {
                    id: team.id,
                    name: team.displayName || team.name || "Noma’lum jamoa",
                    logo: team.logo || team.logos?.[0]?.href || "",
                    played: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    points: 0
                });
            });

            const state = competition?.status?.type?.state;
            if (state === "in") {
                competitors.forEach(({ team }) => {
                    if (team?.id) liveTeamIds.add(String(team.id));
                });
            }
            if (state !== "post" && state !== "in") return;
            const parsed = competitors.map(competitor => ({
                competitor,
                score: Number.parseInt(competitor.score, 10)
            }));
            if (parsed.some(item => !Number.isFinite(item.score))) return;

            const home = parsed.find(item => item.competitor.homeAway === "home") || parsed[0];
            const away = parsed.find(item => item !== home) || parsed[1];
            if (state === "in") liveMatches += 1;

            const homeTeam = teams.get(home.competitor.team?.id);
            const awayTeam = teams.get(away.competitor.team?.id);
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

        const rows = [...teams.values()].sort((first, second) =>
            second.points - first.points ||
            (second.goalsFor - second.goalsAgainst) - (first.goalsFor - first.goalsAgainst) ||
            second.goalsFor - first.goalsFor ||
            first.name.localeCompare(second.name)
        );
        return { rows, liveMatches, liveTeamIds };
    }

    function setStatus(message, isError = false) {
        statusText.textContent = message;
        status.classList.toggle("is-error", isError);
        status.classList.toggle("is-loading", !isError && (message.includes("yuklan") || message.includes("tayyorlan")));
    }

    function getCupMatches(events, startYear, league) {
        return events.flatMap(event => {
            if (!isCurrentSeasonEvent(event, startYear, league)) return [];
            const competition = event.competitions?.[0];
            const competitors = competition?.competitors || [];
            const home = competitors.find(team => team.homeAway === "home") || competitors[0];
            const away = competitors.find(team => team.homeAway === "away") || competitors[1];
            if (!home?.team || !away?.team) return [];
            const stage = event.season?.slug || "";
            const parseScore = value => {
                const score = Number.parseInt(value, 10);
                return Number.isFinite(score) ? score : null;
            };
            return [{
                id: event.id,
                stage,
                stageLabel: getCupStageLabel(stage),
                stageOrder: getCupStageOrder(stage),
                date: event.date,
                state: competition.status?.type?.state || "pre",
                home: {
                    name: home.team.displayName || home.team.name || "Uy jamoasi",
                    logo: home.team.logo || home.team.logos?.[0]?.href || ""
                },
                away: {
                    name: away.team.displayName || away.team.name || "Mehmon jamoa",
                    logo: away.team.logo || away.team.logos?.[0]?.href || ""
                },
                homeScore: parseScore(home.score),
                awayScore: parseScore(away.score)
            }];
        }).sort((first, second) =>
            first.stageOrder - second.stageOrder || Date.parse(first.date) - Date.parse(second.date)
        );
    }

    function createCupTeam(team) {
        const element = document.createElement("span");
        element.className = "standings-cup-team";
        if (team.logo) {
            const image = document.createElement("img");
            image.src = team.logo;
            image.alt = "";
            image.loading = "lazy";
            image.decoding = "async";
            image.addEventListener("error", () => image.remove(), { once: true });
            element.append(image);
        }
        const name = document.createElement("span");
        name.textContent = team.name;
        element.append(name);
        return element;
    }

    function setCupTableHeader() {
        standingsTable.classList.add("is-cup-table");
        const head = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Bosqich", "Uchrashuv", "Sana", "Hisob", "Holat"].forEach(label => {
            const cell = document.createElement("th");
            cell.scope = "col";
            cell.textContent = label;
            headerRow.append(cell);
        });
        head.append(headerRow);
        standingsTable.querySelector("thead").replaceWith(head);
    }

    function renderCupMatches(matches, league) {
        currentRows = [];
        currentCupMatches = matches;
        downloadButton.disabled = matches.length === 0;
        topSixInput.closest("label").hidden = true;
        setCupTableHeader();
        standingsBody.replaceChildren();

        if (!matches.length) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.colSpan = 5;
            cell.className = "standings-placeholder";
            cell.textContent = `${leagueNames[league]} uchun joriy mavsum uchrashuvlari topilmadi.`;
            row.append(cell);
            standingsBody.append(row);
            return;
        }

        let currentStage = "";
        matches.forEach(match => {
            if (match.stage !== currentStage) {
                currentStage = match.stage;
                const stageRow = document.createElement("tr");
                stageRow.className = "standings-cup-round";
                const stageCell = document.createElement("th");
                stageCell.colSpan = 5;
                stageCell.scope = "rowgroup";
                stageCell.textContent = match.stageLabel;
                stageRow.append(stageCell);
                standingsBody.append(stageRow);
            }

            const row = document.createElement("tr");
            if (match.state === "in") row.classList.add("is-live-team");
            const stage = document.createElement("td");
            stage.textContent = match.stageLabel;
            const fixture = document.createElement("td");
            fixture.className = "standings-cup-fixture";
            fixture.append(
                createCupTeam(match.home),
                document.createTextNode(" – "),
                createCupTeam(match.away)
            );
            const date = document.createElement("td");
            const kickoff = new Date(match.date);
            date.textContent = Number.isNaN(kickoff.getTime())
                ? "—"
                : new Intl.DateTimeFormat("uz-UZ", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(kickoff);
            const score = document.createElement("td");
            score.className = "standings-cup-score";
            score.textContent = match.homeScore === null || match.awayScore === null
                ? "—"
                : `${match.homeScore} – ${match.awayScore}`;
            const state = document.createElement("td");
            state.textContent = match.state === "post" ? "Yakunlandi" : match.state === "in" ? "Jonli" : "Rejalashtirilgan";
            row.append(stage, fixture, date, score, state);
            standingsBody.append(row);
        });
    }

    function renderStandings(rows, liveTeamIds) {
        currentCupMatches = [];
        currentRows = rows;
        topSixInput.closest("label").hidden = false;
        standingsTable.classList.remove("is-cup-table");
        standingsTable.querySelector("thead").replaceWith(defaultTableHead.cloneNode(true));
        downloadButton.disabled = rows.length === 0;
        standingsBody.replaceChildren();
        if (!rows.length) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.colSpan = 10;
            cell.className = "standings-placeholder";
            cell.textContent = "Bu mavsum uchun jadval ma’lumoti topilmadi.";
            row.append(cell);
            standingsBody.append(row);
            return;
        }

        rows.forEach((team, index) => {
            const row = document.createElement("tr");
            if (liveTeamIds.has(String(team.id))) row.classList.add("is-live-team");
            const rank = document.createElement("td");
            rank.className = "standings-rank";
            rank.textContent = String(index + 1);
            const nameCell = document.createElement("td");
            nameCell.className = "standings-team";
            if (team.logo) {
                const logo = document.createElement("img");
                logo.src = team.logo;
                logo.alt = "";
                logo.loading = "lazy";
                logo.decoding = "async";
                logo.addEventListener("error", () => logo.remove(), { once: true });
                nameCell.append(logo);
            }
            const name = document.createElement("span");
            name.textContent = team.name;
            nameCell.append(name);
            const values = [
                team.played,
                team.wins,
                team.draws,
                team.losses,
                team.goalsFor,
                team.goalsAgainst,
                team.goalsFor - team.goalsAgainst,
                team.points
            ];
            row.append(rank, nameCell);
            values.forEach((value, valueIndex) => {
                const cell = document.createElement("td");
                cell.textContent = String(value);
                if (valueIndex === values.length - 1) cell.className = "standings-points";
                if (valueIndex === 6 && value > 0) cell.className = "positive-difference";
                row.append(cell);
            });
            standingsBody.append(row);
        });
    }

    function loadExportLogo(source) {
        if (!source) return Promise.resolve(null);
        return new Promise(resolve => {
            const image = new Image();
            let settled = false;
            const finish = result => {
                if (settled) return;
                settled = true;
                window.clearTimeout(timeout);
                resolve(result);
            };
            const timeout = window.setTimeout(() => finish(null), 4500);
            image.crossOrigin = "anonymous";
            image.onload = () => finish(image);
            image.onerror = () => finish(null);
            image.src = source;
        });
    }

    function drawExportRoundRect(context, x, y, width, height, radius, color) {
        context.beginPath();
        context.roundRect(x, y, width, height, radius);
        context.fillStyle = color;
        context.fill();
    }

    function drawExportLogo(context, image, name, x, y, size) {
        context.save();
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
        context.fillStyle = "#f0f2f8";
        context.fill();
        context.clip();
        if (image) {
            const scale = Math.min((size - 8) / image.width, (size - 8) / image.height);
            const width = image.width * scale;
            const height = image.height * scale;
            context.drawImage(image, x + (size - width) / 2, y + (size - height) / 2, width, height);
        } else {
            context.fillStyle = "#6354b7";
            context.font = "800 16px Segoe UI, Arial, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(name.slice(0, 1).toUpperCase(), x + size / 2, y + size / 2);
        }
        context.restore();
    }

    function createStandingsPoster(rows, logos, brandLogo, leagueBadge, league, season, round, leagueCode, customBrandLogo, customBrandLogoCircle, cupMatches = null) {
        const isCupPoster = Array.isArray(cupMatches);
        const canvas = document.createElement("canvas");
        const width = 1000;
        const railWidth = 132;
        const panelX = 166;
        const panelWidth = width - panelX - 38;
        const height = 1375;
        const headerHeight = 52;
        const rowHeight = Math.min(rows.length <= 6 ? 96 : 62, (height - 42 - 112 - headerHeight) / rows.length);
        const panelHeight = headerHeight + rows.length * rowHeight;
        const panelY = rows.length <= 6 ? (height - panelHeight) / 2 : 42;
        const outputScale = 2.16;
        canvas.width = Math.round(width * outputScale);
        canvas.height = Math.round(height * outputScale);
        const context = canvas.getContext("2d");
        context.scale(outputScale, outputScale);

        context.fillStyle = "#f4f6f2";
        context.fillRect(0, 0, width, height);
        const railTheme = leagueRailThemes[leagueCode] || leagueRailThemes["eng.1"];
        const railGradient = context.createLinearGradient(0, 0, railWidth, height);
        railGradient.addColorStop(0, railTheme.start);
        railGradient.addColorStop(.52, railTheme.middle);
        railGradient.addColorStop(1, railTheme.end);
        context.fillStyle = railGradient;
        context.fillRect(0, 0, railWidth, height);
        context.save();
        context.globalAlpha = .19;
        context.fillStyle = "#fff";
        context.beginPath();
        context.moveTo(0, height * .45);
        context.lineTo(railWidth, height * .31);
        context.lineTo(railWidth, height * .68);
        context.closePath();
        context.fill();
        context.fillStyle = railTheme.accent;
        context.beginPath();
        context.moveTo(0, height * .78);
        context.lineTo(railWidth, height * .62);
        context.lineTo(railWidth, height);
        context.closePath();
        context.fill();
        context.restore();

        if (brandLogo && customBrandLogo) {
            const logoSize = 56;
            const logoX = (railWidth - logoSize) / 2;
            const logoY = 24;
            const radius = customBrandLogoCircle ? logoSize / 2 : 12;
            context.save();
            context.beginPath();
            context.roundRect(logoX, logoY, logoSize, logoSize, radius);
            context.shadowColor = "rgba(19,44,31,.5)";
            context.shadowBlur = 12;
            context.shadowOffsetY = 4;
            context.fillStyle = "#fff";
            context.fill();
            context.shadowColor = "transparent";
            context.clip();
            const scale = Math.max(logoSize / brandLogo.width, logoSize / brandLogo.height);
            const logoWidth = brandLogo.width * scale;
            const logoHeight = brandLogo.height * scale;
            context.drawImage(brandLogo, logoX + (logoSize - logoWidth) / 2, logoY + (logoSize - logoHeight) / 2, logoWidth, logoHeight);
            context.restore();
            context.save();
            context.beginPath();
            context.roundRect(logoX, logoY, logoSize, logoSize, radius);
            context.strokeStyle = "rgba(255,255,255,.96)";
            context.lineWidth = 3;
            context.shadowColor = "rgba(19,44,31,.35)";
            context.shadowBlur = 8;
            context.shadowOffsetY = 3;
            context.stroke();
            context.restore();
        } else if (brandLogo) {
            const scale = Math.min(108 / brandLogo.width, 44 / brandLogo.height);
            const brandWidth = brandLogo.width * scale;
            const brandHeight = brandLogo.height * scale;
            context.drawImage(brandLogo, (railWidth - brandWidth) / 2, 24 + (44 - brandHeight) / 2, brandWidth, brandHeight);
        } else {
            drawExportRoundRect(context, (railWidth - 68) / 2, 20, 68, 68, 19, "#fff");
            context.fillStyle = "#6554bb";
            context.font = "900 27px Segoe UI, Arial, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("PP", railWidth / 2, 54);
        }
        context.save();
        context.translate(railWidth / 2, height / 2 + 10);
        context.rotate(-Math.PI / 2);
        context.fillStyle = railTheme.text;
        context.font = "850 48px Segoe UI, Arial, sans-serif";
        context.textBaseline = "middle";
        const logoSize = leagueBadge ? 68 : 0;
        const logoGap = leagueBadge ? 14 : 0;
        const maxTitleWidth = height - 185;
        const maxTextWidth = maxTitleWidth - logoSize - logoGap;
        const textWidth = Math.min(context.measureText(league).width, maxTextWidth);
        const combinedWidth = logoSize + logoGap + textWidth;
        const textX = -combinedWidth / 2 + logoSize + logoGap;
        context.textAlign = "left";
        if (leagueBadge) {
            const badgeX = -combinedWidth / 2;
            drawExportRoundRect(context, badgeX, -logoSize / 2, logoSize, logoSize, 13, "#ffffff");
            context.strokeStyle = "rgba(23,39,27,.16)";
            context.lineWidth = 1;
            context.beginPath();
            context.roundRect(badgeX, -logoSize / 2, logoSize, logoSize, 13);
            context.stroke();
            const badgeInnerSize = logoSize - 12;
            const scale = Math.min(badgeInnerSize / leagueBadge.width, badgeInnerSize / leagueBadge.height);
            const badgeWidth = leagueBadge.width * scale;
            const badgeHeight = leagueBadge.height * scale;
            context.drawImage(leagueBadge, badgeX + (logoSize - badgeWidth) / 2, -badgeHeight / 2, badgeWidth, badgeHeight);
        }
        context.fillText(league, textX, 0, maxTextWidth);
        context.restore();
        context.save();
        context.translate(railWidth / 2, height - 106);
        context.rotate(-Math.PI / 2);
        context.fillStyle = railTheme.text;
        context.font = "850 22px Segoe UI, Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(season, 0, 0, railWidth - 18);
        context.restore();
        context.save();
        context.translate(railWidth / 2, height - 38);
        context.rotate(-Math.PI / 2);
        context.fillStyle = railTheme.text;
        context.font = "850 18px Segoe UI, Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(round ? isCupPoster ? round : `${round}-TUR` : "TUR —", 0, 0, railWidth - 18);
        context.restore();

        drawExportRoundRect(context, panelX, panelY, panelWidth, panelHeight, 18, "#ffffff");
        context.save();
        context.beginPath();
        context.roundRect(panelX, panelY, panelWidth, panelHeight, 18);
        context.clip();
        context.fillStyle = "#f1f0e9";
        context.fillRect(panelX, panelY, panelWidth, headerHeight);
        context.fillStyle = "#737970";
        context.font = "750 17px Segoe UI, Arial, sans-serif";
        context.textBaseline = "middle";
        if (isCupPoster) {
            context.textAlign = "left";
            context.fillText("Bosqich", panelX + 18, panelY + headerHeight / 2);
            context.fillText("Uchrashuv", panelX + 145, panelY + headerHeight / 2);
            context.textAlign = "center";
            context.fillText("Hisob", panelX + 402, panelY + headerHeight / 2);
            context.fillText("Sana", panelX + 738, panelY + headerHeight / 2);
        } else {
            context.textAlign = "center";
            context.fillText("Pos", panelX + 31, panelY + headerHeight / 2);
            context.textAlign = "left";
            context.fillText("Klub", panelX + 100, panelY + headerHeight / 2);
            const statWidth = 68;
            const statStartX = panelX + panelWidth - statWidth * 3;
            ["P", "GF:GA", "Pts"].forEach((label, index) => {
                context.textAlign = "center";
                context.fillText(label, statStartX + statWidth * index + statWidth / 2, panelY + headerHeight / 2);
            });
        }

        rows.forEach((team, index) => {
            const y = panelY + headerHeight + index * rowHeight;
            if (index === 0) {
                context.fillStyle = "#f1f0e9";
                context.fillRect(panelX, y, panelWidth, rowHeight);
            } else if (index % 2 === 1) {
                context.fillStyle = "#fbfcfa";
                context.fillRect(panelX, y, panelWidth, rowHeight);
            }
            if (index < rows.length - 1) {
                context.strokeStyle = "#edf0ed";
                context.lineWidth = 1;
                context.beginPath();
                context.moveTo(panelX + 14, y + rowHeight);
                context.lineTo(panelX + panelWidth - 14, y + rowHeight);
                context.stroke();
            }

            context.textBaseline = "middle";
            if (isCupPoster) {
                context.fillStyle = "#626a63";
                context.font = "650 14px Segoe UI, Arial, sans-serif";
                context.textAlign = "left";
                context.fillText(team.stageLabel, panelX + 18, y + rowHeight / 2, 112);
                drawExportLogo(context, logos[index * 2], team.home.name, panelX + 116, y + (rowHeight - 28) / 2, 28);
                context.fillStyle = "#282d29";
                context.font = "650 16px Segoe UI, Arial, sans-serif";
                context.fillText(team.home.name, panelX + 150, y + rowHeight / 2, 142);
                context.fillStyle = "#222a23";
                context.font = "800 17px Segoe UI, Arial, sans-serif";
                context.textAlign = "center";
                context.fillText(team.homeScore === null || team.awayScore === null
                    ? "—"
                    : `${team.homeScore} – ${team.awayScore}`, panelX + 402, y + rowHeight / 2, 86);
                drawExportLogo(context, logos[index * 2 + 1], team.away.name, panelX + 453, y + (rowHeight - 28) / 2, 28);
                context.fillStyle = "#282d29";
                context.font = "650 16px Segoe UI, Arial, sans-serif";
                context.textAlign = "left";
                context.fillText(team.away.name, panelX + 487, y + rowHeight / 2, 176);
                context.fillStyle = "#555c56";
                context.font = "550 14px Segoe UI, Arial, sans-serif";
                context.textAlign = "center";
                const matchDate = new Date(team.date);
                context.fillText(Number.isNaN(matchDate.getTime())
                    ? "—"
                    : new Intl.DateTimeFormat("uz-UZ", { day: "2-digit", month: "short" }).format(matchDate),
                panelX + 738, y + rowHeight / 2, 92);
            } else {
                context.fillStyle = index < 4 ? "#303933" : "#626a63";
                context.font = "750 18px Segoe UI, Arial, sans-serif";
                context.textAlign = "center";
                context.fillText(String(index + 1), panelX + 31, y + rowHeight / 2);
                drawExportLogo(context, logos[index], team.name, panelX + 50, y + (rowHeight - 40) / 2, 40);
                context.fillStyle = "#282d29";
                context.font = `${index < 4 ? "700" : "550"} 20px Segoe UI, Arial, sans-serif`;
                context.textAlign = "left";
                const statWidth = 68;
                const statStartX = panelX + panelWidth - statWidth * 3;
                context.fillText(team.name, panelX + 102, y + rowHeight / 2, Math.max(30, statStartX - panelX - 114));
                const values = [team.played, `${team.goalsFor}:${team.goalsAgainst}`, team.points];
                values.forEach((value, valueIndex) => {
                    context.fillStyle = valueIndex === 2 ? "#222a23" : "#555c56";
                    context.font = `${valueIndex === 2 ? "800" : "550"} 18px Segoe UI, Arial, sans-serif`;
                    context.textAlign = "center";
                    context.fillText(String(value), statStartX + statWidth * valueIndex + statWidth / 2, y + rowHeight / 2);
                });
            }
        });
        context.restore();

        context.fillStyle = "#737970";
        context.font = "600 16px Segoe UI, Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Natijalar pitchplan.uz orqali yuklab olindi", width / 2, height - 24);
        return canvas;
    }

    async function downloadStandingsPoster() {
        const cupPoster = isCupLeague(selectedLeague);
        if (cupPoster ? !currentCupMatches.length : !currentRows.length) {
            setStatus("Avval jadval ma’lumotlari yuklanishini kuting.", true);
            return;
        }
        const exportTopSix = !cupPoster && topSixInput.checked;
        const latestCupStage = cupPoster
            ? Math.max(...currentCupMatches.map(match => match.stageOrder))
            : -1;
        const exportCupMatches = cupPoster
            ? currentCupMatches.filter(match => match.stageOrder === latestCupStage)
            : null;
        const exportRows = cupPoster
            ? exportCupMatches
            : exportTopSix ? currentRows.slice(0, 6) : currentRows.slice();
        const exportLeagueCode = selectedLeague;
        const exportLeague = leagueName.textContent;
        const exportSeason = seasonLabel.textContent;
        const exportRound = currentRound;
        const exportBrandLogoSource = customBrandLogoSource || new URL("./images/Pitch.png", document.baseURI).href;
        const exportCustomBrandLogo = Boolean(customBrandLogoSource);
        const exportBrandLogoCircle = exportCustomBrandLogo && logoCircleInput.checked;
        downloadButton.disabled = true;
        setStatus("PNG yuklab olishga tayyorlanmoqda…");
        try {
            const [brandLogo, leagueBadge, ...logos] = await Promise.all([
                loadExportLogo(exportBrandLogoSource),
                loadExportLogo(new URL(leagueAssets[exportLeagueCode], document.baseURI).href),
                ...(cupPoster
                    ? exportRows.flatMap(match => [loadExportLogo(match.home.logo), loadExportLogo(match.away.logo)])
                    : exportRows.map(team => loadExportLogo(team.logo)))
            ]);
            const canvas = createStandingsPoster(exportRows, logos, brandLogo, leagueBadge, exportLeague, exportSeason, exportRound, exportLeagueCode, exportCustomBrandLogo, exportBrandLogoCircle, exportCupMatches);
            const blob = await new Promise((resolve, reject) => {
                canvas.toBlob(result => result ? resolve(result) : reject(new Error("PNG faylini yaratib bo‘lmadi.")), "image/png");
            });
            const safeLeague = exportLeague.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            const filename = `${safeLeague || "liga"}-${exportSeason}${exportTopSix ? "-top-6" : ""}-${cupPoster ? "bosqichlari" : "jadvali"}.png`;
            const result = await window.pitchplanSaveImage(blob, filename);
            setStatus(result.method === "share"
                ? `${cupPoster ? "Kubok bosqichlari" : "Jadval"} ulashish oynasi ochildi. Galereyaga saqlash amalini tanlang.`
                : result.method === "cancelled"
                    ? "Jadvalni saqlash bekor qilindi."
                    : result.method === "preview"
                        ? "Jadval rasmi yangi oynada ochildi. Uni uzoq bosib, galereyaga saqlang."
                        : `${cupPoster ? "Kubok bosqichlari" : `Turnir jadvali${exportTopSix ? " Top 6" : ""}`} PNG formatida yuklab olindi.`);
        } catch (error) {
            setStatus("Jadval rasmini yuklab bo‘lmadi. Qayta urinib ko‘ring.", true);
            console.error("Standings poster export failed:", error);
        } finally {
            downloadButton.disabled = false;
        }
    }

    async function fetchLeagueEvents(league, year, signal) {
        const endpoint = `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${year}&limit=1000`;
        const response = await fetch(endpoint, { signal, cache: "no-store" });
        if (!response.ok) throw new Error(`${leagueNames[league]}: server ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data.events)) throw new Error(`${leagueNames[league]}: noto‘g‘ri javob`);
        return data.events;
    }

    async function refreshStandings() {
        if (!isActive) return;
        const generation = ++requestGeneration;
        if (activeController) activeController.abort();
        const controller = new AbortController();
        activeController = controller;
        const { signal } = controller;
        const startYear = getCurrentSeasonStartYear();
        const cupCompetition = isCupLeague(selectedLeague);
        applyLeagueRailTheme(selectedLeague);
        leagueName.textContent = leagueNames[selectedLeague];
        seasonLabel.textContent = formatSeason(startYear);
        railTitle.textContent = leagueNames[selectedLeague];
        railSeason.textContent = formatSeason(startYear);
        currentRound = null;
        railRound.textContent = "TUR —";
        leagueLogo.src = leagueAssets[selectedLeague];
        leagueLogo.alt = `${leagueNames[selectedLeague]} logosi`;
        currentRows = [];
        currentCupMatches = [];
        topSixInput.closest("label").hidden = cupCompetition;
        if (cupCompetition) setCupTableHeader();
        else standingsTable.querySelector("thead").replaceWith(defaultTableHead.cloneNode(true));
        downloadButton.disabled = true;
        setStatus(cupCompetition ? "Kubok uchrashuvlari yuklanmoqda…" : "Jonli jadval yuklanmoqda…");
        standingsBody.innerHTML = `<tr><td colspan="${cupCompetition ? 5 : 10}" class="standings-placeholder">${cupCompetition ? "Kubok bosqichlari yuklanmoqda…" : "Turnir jadvali yuklanmoqda…"}</td></tr>`;

        const timeout = window.setTimeout(() => controller.abort(), 18000);
        try {
            const eventGroups = await Promise.all([
                fetchLeagueEvents(selectedLeague, startYear, signal),
                fetchLeagueEvents(selectedLeague, startYear + 1, signal)
            ]);
            if (generation !== requestGeneration) return;
            const eventsById = new Map(eventGroups.flat().map(event => [event.id, event]));
            const events = [...eventsById.values()];
            if (cupCompetition) {
                const cupMatches = getCupMatches(events, startYear, selectedLeague);
                currentRound = cupMatches.length
                    ? cupMatches.reduce((latest, match) => match.stageOrder > latest.stageOrder ? match : latest).stageLabel
                    : null;
                railRound.textContent = currentRound || "BOSQICH —";
                renderCupMatches(cupMatches, selectedLeague);
                lastSuccessfulUpdate = new Date();
                const updatedAt = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit" }).format(lastSuccessfulUpdate);
                const liveMatches = cupMatches.filter(match => match.state === "in").length;
                setStatus(`${cupMatches.length} ta uchrashuv · ${liveMatches ? `${liveMatches} ta jonli · ` : ""}${updatedAt} da yangilandi`);
                return;
            }
            const { rows, liveMatches, liveTeamIds } = getLiveStandings(events, startYear, selectedLeague);
            currentRound = getCurrentRound(rows, events, startYear, liveMatches, selectedLeague);
            railRound.textContent = currentRound ? `${currentRound}-TUR` : "TUR —";
            renderStandings(rows, liveTeamIds);
            lastSuccessfulUpdate = new Date();
            const updatedAt = new Intl.DateTimeFormat("uz-UZ", { hour: "2-digit", minute: "2-digit" }).format(lastSuccessfulUpdate);
            setStatus(`${liveMatches ? `${liveMatches} ta o‘yin jonli · ` : ""}${updatedAt} da yangilandi`);
        } catch (error) {
            if (generation !== requestGeneration) return;
            if (lastSuccessfulUpdate) {
                setStatus("Yangilashda xatolik. Oxirgi olingan jadval ko‘rsatilmoqda.", true);
            } else {
                standingsBody.innerHTML = `<tr><td colspan="${cupCompetition ? 5 : 10}" class="standings-placeholder">${cupCompetition ? "Kubok uchrashuvlarini hozircha yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring." : "Jadvalni hozircha yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring."}</td></tr>`;
                setStatus(cupCompetition ? "Kubok uchrashuvlarini yuklab bo‘lmadi." : "Jadvalni yuklab bo‘lmadi.", true);
            }
            console.error("League standings refresh failed:", error);
        } finally {
            window.clearTimeout(timeout);
        }
    }

    function setActive(active) {
        isActive = active;
        window.clearInterval(refreshTimer);
        if (active) {
            refreshStandings();
            refreshTimer = window.setInterval(refreshStandings, 60000);
        } else {
            requestGeneration += 1;
            if (activeController) activeController.abort();
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            selectedLeague = tab.dataset.liveLeague;
            tabs.forEach(item => {
                const selected = item === tab;
                item.classList.toggle("is-active", selected);
                item.setAttribute("aria-pressed", String(selected));
            });
            refreshStandings();
        });
    });

    document.getElementById("standings-refresh").addEventListener("click", refreshStandings);
    downloadButton.addEventListener("click", downloadStandingsPoster);
    logoUploadButton.addEventListener("click", () => {
        logoPasswordInput.value = "";
        logoPasswordError.hidden = true;
        logoPasswordDialog.showModal();
        logoPasswordInput.focus();
    });
    logoPasswordForm.addEventListener("submit", event => {
        event.preventDefault();
        if (logoPasswordInput.value !== "1728") {
            logoPasswordError.hidden = false;
            logoPasswordInput.select();
            return;
        }
        logoPasswordDialog.close();
        logoInput.click();
    });
    document.getElementById("standings-logo-password-close").addEventListener("click", () => {
        logoPasswordDialog.close();
    });
    logoCircleInput.addEventListener("change", () => {
        updateBrandLogoPreview(customBrandLogoSource);
        try {
            localStorage.setItem(brandLogoCircleStorageKey, String(logoCircleInput.checked));
        } catch (error) {
            console.error("Could not save the standings logo shape:", error);
            setStatus("Logo shakli o‘zgardi, ammo brauzer xotirasida saqlanmadi.", true);
        }
    });
    logoInput.addEventListener("change", () => {
        const file = logoInput.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setStatus("Kanal logosi uchun rasm faylini tanlang.", true);
            logoInput.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result !== "string") {
                setStatus("Kanal logosi faylini o‘qib bo‘lmadi.", true);
                return;
            }
            const image = new Image();
            image.onload = () => {
                customBrandLogoSource = reader.result;
                updateBrandLogoPreview(customBrandLogoSource);
                try {
                    localStorage.setItem(brandLogoStorageKey, customBrandLogoSource);
                } catch (error) {
                    console.error("Could not save the standings channel logo:", error);
                    setStatus("Logo yuklandi, ammo brauzer xotirasida saqlanmadi.", true);
                }
            };
            image.onerror = () => {
                setStatus("Tanlangan kanal logosi ochilmadi.", true);
                logoInput.value = "";
            };
            image.src = reader.result;
        };
        reader.onerror = () => {
            setStatus("Kanal logosi faylini o‘qib bo‘lmadi.", true);
            logoInput.value = "";
        };
        reader.readAsDataURL(file);
    });
    try {
        const storedLogo = localStorage.getItem(brandLogoStorageKey);
        logoCircleInput.checked = localStorage.getItem(brandLogoCircleStorageKey) === "true";
        if (storedLogo) {
            customBrandLogoSource = storedLogo;
        }
        updateBrandLogoPreview(customBrandLogoSource);
    } catch (error) {
        console.error("Could not restore the standings channel logo:", error);
        setStatus("Saqlangan kanal logosini o‘qib bo‘lmadi.", true);
        updateBrandLogoPreview("");
    }
    window.addEventListener("pitchplan:sectionchange", event => setActive(event.detail.section === "live"));
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            window.clearInterval(refreshTimer);
        } else if (isActive) {
            refreshStandings();
            refreshTimer = window.setInterval(refreshStandings, 60000);
        }
    });
})();
