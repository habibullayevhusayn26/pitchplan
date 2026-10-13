(() => {
    const leagueNames = {
        "eng.1": "Premier League",
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
    const logoCircleInput = document.getElementById("standings-logo-circle");
    const logoShapeControl = document.querySelector(".standings-logo-shape-control");
    const railTitle = document.getElementById("standings-rail-title");
    const railSeason = document.getElementById("standings-rail-season");
    const railRound = document.getElementById("standings-rail-round");
    const leagueLogo = document.getElementById("standings-league-logo");
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
        else brandLogoPreview.src = "./images/pitchplan.png";
    }
    const leagueAssets = {
        "eng.1": "./images/ligalar/english-premier-league.ee1e9b08.png",
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
        "ksa.1": { start: "#0d593f", middle: "#12945f", end: "#9bcc42", accent: "#08633e", glow: "rgba(13,104,67,.9)", text: "#ffffff" }
    };
    if (!standingsBody || !liveView || !tabs.length) return;

    let selectedLeague = "eng.1";
    let isActive = false;
    let refreshTimer = 0;
    let requestGeneration = 0;
    let activeController = null;
    let lastSuccessfulUpdate = null;
    let currentRows = [];
    let currentRound = null;

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

    function renderStandings(rows, liveTeamIds) {
        currentRows = rows;
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

    function createStandingsPoster(rows, logos, brandLogo, leagueBadge, league, season, round, leagueCode, customBrandLogo, customBrandLogoCircle) {
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
        context.fillText(round ? `${round}-TUR` : "TUR —", 0, 0, railWidth - 18);
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

            context.fillStyle = index < 4 ? "#303933" : "#626a63";
            context.font = "750 18px Segoe UI, Arial, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(String(index + 1), panelX + 31, y + rowHeight / 2);
            drawExportLogo(context, logos[index], team.name, panelX + 50, y + (rowHeight - 40) / 2, 40);
            context.fillStyle = "#282d29";
            context.font = `${index < 4 ? "700" : "550"} 20px Segoe UI, Arial, sans-serif`;
            context.textAlign = "left";
            context.fillText(team.name, panelX + 102, y + rowHeight / 2, Math.max(30, statStartX - panelX - 114));
            const values = [team.played, `${team.goalsFor}:${team.goalsAgainst}`, team.points];
            values.forEach((value, valueIndex) => {
                context.fillStyle = valueIndex === 2 ? "#222a23" : "#555c56";
                context.font = `${valueIndex === 2 ? "800" : "550"} 18px Segoe UI, Arial, sans-serif`;
                context.textAlign = "center";
                context.fillText(String(value), statStartX + statWidth * valueIndex + statWidth / 2, y + rowHeight / 2);
            });
        });
        context.restore();

        context.fillStyle = "#737970";
        context.font = "600 16px Segoe UI, Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Natijalar pitchplan.netlify.app orqali yuklab olindi", width / 2, height - 24);
        return canvas;
    }

    async function downloadStandingsPoster() {
        if (!currentRows.length) {
            setStatus("Avval jadval ma’lumotlari yuklanishini kuting.", true);
            return;
        }
        const exportTopSix = topSixInput.checked;
        const exportRows = exportTopSix ? currentRows.slice(0, 6) : currentRows.slice();
        const exportLeagueCode = selectedLeague;
        const exportLeague = leagueName.textContent;
        const exportSeason = seasonLabel.textContent;
        const exportRound = currentRound;
        const exportBrandLogoSource = customBrandLogoSource || new URL("./images/pitchplan.png", document.baseURI).href;
        const exportCustomBrandLogo = Boolean(customBrandLogoSource);
        const exportBrandLogoCircle = exportCustomBrandLogo && logoCircleInput.checked;
        downloadButton.disabled = true;
        setStatus("PNG yuklab olishga tayyorlanmoqda…");
        try {
            const [brandLogo, leagueBadge, ...logos] = await Promise.all([
                loadExportLogo(exportBrandLogoSource),
                loadExportLogo(new URL(leagueAssets[exportLeagueCode], document.baseURI).href),
                ...exportRows.map(team => loadExportLogo(team.logo))
            ]);
            const canvas = createStandingsPoster(exportRows, logos, brandLogo, leagueBadge, exportLeague, exportSeason, exportRound, exportLeagueCode, exportCustomBrandLogo, exportBrandLogoCircle);
            const blob = await new Promise((resolve, reject) => {
                canvas.toBlob(result => result ? resolve(result) : reject(new Error("PNG faylini yaratib bo‘lmadi.")), "image/png");
            });
            const safeLeague = exportLeague.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            const filename = `${safeLeague || "liga"}-${exportSeason}${exportTopSix ? "-top-6" : ""}-jadvali.png`;
            const result = await window.pitchplanSaveImage(blob, filename);
            setStatus(result.method === "share"
                ? "Jadval ulashish oynasi ochildi. Galereyaga saqlash amalini tanlang."
                : result.method === "cancelled"
                    ? "Jadvalni saqlash bekor qilindi."
                    : result.method === "preview"
                        ? "Jadval rasmi yangi oynada ochildi. Uni uzoq bosib, galereyaga saqlang."
                        : `Turnir jadvali${exportTopSix ? " Top 6" : ""} PNG formatida yuklab olindi.`);
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
        applyLeagueRailTheme(selectedLeague);
        leagueName.textContent = leagueNames[selectedLeague];
        seasonLabel.textContent = formatSeason(startYear);
        railTitle.textContent = leagueNames[selectedLeague];
        railSeason.textContent = formatSeason(startYear);
        currentRound = null;
        railRound.textContent = "TUR —";
        leagueLogo.src = leagueAssets[selectedLeague];
        leagueLogo.alt = `${leagueNames[selectedLeague]} logosi`;
        downloadButton.disabled = true;
        setStatus("Jonli jadval yuklanmoqda…");
        standingsBody.innerHTML = '<tr><td colspan="10" class="standings-placeholder">Turnir jadvali yuklanmoqda…</td></tr>';

        const timeout = window.setTimeout(() => controller.abort(), 18000);
        try {
            const eventGroups = await Promise.all([
                fetchLeagueEvents(selectedLeague, startYear, signal),
                fetchLeagueEvents(selectedLeague, startYear + 1, signal)
            ]);
            if (generation !== requestGeneration) return;
            const eventsById = new Map(eventGroups.flat().map(event => [event.id, event]));
            const events = [...eventsById.values()];
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
                standingsBody.innerHTML = '<tr><td colspan="10" class="standings-placeholder">Jadvalni hozircha yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring.</td></tr>';
                setStatus("Jadvalni yuklab bo‘lmadi.", true);
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
    logoUploadButton.addEventListener("click", () => logoInput.click());
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
