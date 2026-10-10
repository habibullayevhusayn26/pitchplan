(() => {
    const leagueNames = {
        "eng.1": "Premier League",
        "esp.1": "LaLiga",
        "ita.1": "Serie A",
        "ger.1": "Bundesliga",
        "fra.1": "Ligue 1"
    };
    const standingsBody = document.getElementById("standings-body");
    const leagueName = document.getElementById("standings-league-name");
    const seasonLabel = document.getElementById("standings-season");
    const statusText = document.getElementById("standings-status-text");
    const status = document.getElementById("standings-status");
    const tabs = [...document.querySelectorAll(".live-league-tab")];
    const liveView = document.getElementById("live-view");
    const downloadButton = document.getElementById("standings-download");
    const railTitle = document.getElementById("standings-rail-title");
    const railSeason = document.getElementById("standings-rail-season");
    const leagueLogo = document.getElementById("standings-league-logo");
    const leagueAssets = {
        "eng.1": "./images/ligalar/english-premier-league.ee1e9b08.png",
        "esp.1": "./images/ligalar/LaLiga_logo_2023.svg.webp",
        "ita.1": "./images/ligalar/serie_a-brandlogo.net_-512x512.png",
        "ger.1": "./images/ligalar/Bundesliga_logo_(2017).svg.webp",
        "fra.1": "./images/ligalar/ligue-1.webp"
    };
    if (!standingsBody || !liveView || !tabs.length) return;

    let selectedLeague = "eng.1";
    let isActive = false;
    let refreshTimer = 0;
    let requestGeneration = 0;
    let activeController = null;
    let lastSuccessfulUpdate = null;
    let currentRows = [];

    function getCurrentSeasonStartYear() {
        const now = new Date();
        return now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
    }

    function formatSeason(startYear) {
        return `${startYear}/${String(startYear + 1).slice(-2)}`;
    }

    function getLiveStandings(events, startYear) {
        const seasonPrefix = `${startYear}-${String(startYear + 1).slice(-2)}`;
        const teams = new Map();
        let liveMatches = 0;

        events.forEach(event => {
            if (!event.season?.slug?.startsWith(seasonPrefix)) return;
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
        return { rows, liveMatches };
    }

    function setStatus(message, isError = false) {
        statusText.textContent = message;
        status.classList.toggle("is-error", isError);
        status.classList.toggle("is-loading", !isError && (message.includes("yuklan") || message.includes("tayyorlan")));
    }

    function renderStandings(rows) {
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

    function createStandingsPoster(rows, logos, brandLogo, leagueBadge, league, season) {
        const canvas = document.createElement("canvas");
        const width = 1000;
        const railWidth = 132;
        const panelX = 166;
        const panelY = 42;
        const panelWidth = width - panelX - 38;
        const height = 1375;
        const headerHeight = 52;
        const rowHeight = Math.min(62, (height - panelY - 112 - headerHeight) / rows.length);
        const panelHeight = headerHeight + rows.length * rowHeight;
        const outputScale = 2.16;
        canvas.width = Math.round(width * outputScale);
        canvas.height = Math.round(height * outputScale);
        const context = canvas.getContext("2d");
        context.scale(outputScale, outputScale);

        context.fillStyle = "#f4f6f2";
        context.fillRect(0, 0, width, height);
        const railGradient = context.createLinearGradient(0, 0, railWidth, height);
        railGradient.addColorStop(0, "#caff27");
        railGradient.addColorStop(.52, "#8cf21e");
        railGradient.addColorStop(1, "#19d16d");
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
        context.fillStyle = "#00aa75";
        context.beginPath();
        context.moveTo(0, height * .78);
        context.lineTo(railWidth, height * .62);
        context.lineTo(railWidth, height);
        context.closePath();
        context.fill();
        context.restore();

        if (brandLogo) {
            context.drawImage(brandLogo, (railWidth - 68) / 2, 20, 68, 68);
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
        context.fillStyle = "#17271b";
        context.font = "850 48px Segoe UI, Arial, sans-serif";
        context.textBaseline = "middle";
        const logoSize = leagueBadge ? 56 : 0;
        const logoGap = leagueBadge ? 14 : 0;
        const maxTitleWidth = height - 185;
        const maxTextWidth = maxTitleWidth - logoSize - logoGap;
        const textWidth = Math.min(context.measureText(league).width, maxTextWidth);
        const combinedWidth = logoSize + logoGap + textWidth;
        const textX = -combinedWidth / 2 + logoSize + logoGap;
        context.textAlign = "left";
        if (leagueBadge) {
            const scale = Math.min(logoSize / leagueBadge.width, logoSize / leagueBadge.height);
            const badgeWidth = leagueBadge.width * scale;
            const badgeHeight = leagueBadge.height * scale;
            context.drawImage(leagueBadge, -combinedWidth / 2 + (logoSize - badgeWidth) / 2, -badgeHeight / 2, badgeWidth, badgeHeight);
        }
        context.fillText(league, textX, 0, maxTextWidth);
        context.restore();
        context.save();
        context.translate(railWidth / 2, height - 46);
        context.rotate(-Math.PI / 2);
        context.fillStyle = "#17271b";
        context.font = "800 17px Segoe UI, Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(season, 0, 0, railWidth - 18);
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

    function isTelegramInAppBrowser() {
        const userAgent = navigator.userAgent || "";
        return userAgent.includes("Telegram") || (window.Telegram && typeof window.Telegram.WebView !== "undefined");
    }

    async function downloadStandingsPoster() {
        if (!currentRows.length) {
            setStatus("Avval jadval ma’lumotlari yuklanishini kuting.", true);
            return;
        }
        const exportRows = currentRows.slice();
        const exportLeagueCode = selectedLeague;
        const exportLeague = leagueName.textContent;
        const exportSeason = seasonLabel.textContent;
        downloadButton.disabled = true;
        setStatus("PNG yuklab olishga tayyorlanmoqda…");
        try {
            const [brandLogo, leagueBadge, ...logos] = await Promise.all([
                loadExportLogo(new URL("./images/pitchplan.png", document.baseURI).href),
                loadExportLogo(new URL(leagueAssets[exportLeagueCode], document.baseURI).href),
                ...exportRows.map(team => loadExportLogo(team.logo))
            ]);
            const canvas = createStandingsPoster(exportRows, logos, brandLogo, leagueBadge, exportLeague, exportSeason);
            const blob = await new Promise((resolve, reject) => {
                canvas.toBlob(result => result ? resolve(result) : reject(new Error("PNG faylini yaratib bo‘lmadi.")), "image/png");
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.rel = "noopener";
            link.style.display = "none";
            const safeLeague = exportLeague.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            if (isTelegramInAppBrowser()) {
                document.body.append(link);
                const newTab = window.open(url, "_blank", "noopener,noreferrer");
                if (newTab) {
                    setStatus("Jadval rasmi yangi tabda ochildi. Saqlash uchun rasmni bosib turing.");
                } else {
                    link.target = "_blank";
                    link.click();
                    setStatus("Rasm yangi tabda ochildi. Saqlash uchun rasmni bosib turing.");
                }
                link.remove();
            } else {
                link.download = `${safeLeague || "liga"}-${seasonLabel.textContent}-jadvali.png`;
                document.body.append(link);
                link.click();
                link.remove();
                setStatus("Turnir jadvali PNG formatida yuklab olindi.");
            }
            window.setTimeout(() => URL.revokeObjectURL(url), 3000);
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
        leagueName.textContent = leagueNames[selectedLeague];
        seasonLabel.textContent = formatSeason(startYear);
        railTitle.textContent = leagueNames[selectedLeague];
        railSeason.textContent = formatSeason(startYear);
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
            const { rows, liveMatches } = getLiveStandings([...eventsById.values()], startYear);
            renderStandings(rows);
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
