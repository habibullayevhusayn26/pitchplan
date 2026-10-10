const examples = {
    jf: {
        title: "BUGUN BO'LIB O'TADIGAN ASOSIY UCHRASHUVLAR RO'YXATI",
        date: "9-OKTABR",
        caption: "PITCHPLAN",
        logoPlacement: "Logo postering tepasida va pastida chiqadi.",
        rows: [
            ["PAXTAKOR", "19:00", "BUNYODKOR"],
            ["BUXORO", "19:00", "ANDIJON"],
            ["NASAF", "19:30", "DINAMO"],
            ["AL NASR", "23:00", "AL DIRIYA"],
            ["BORUSSIYA D", "23:30", "VERDER"]
        ]
    },
    sf: {
        title: "BUGUNGI UCHRASHUVLAR",
        date: "9-OKTABR",
        caption: "RED STAR FUTBOL",
        logoPlacement: "Logo pastki qismda yozuv ustida joylashadi.",
        rows: [
            ["REAL MADRID", "18:00", "SEVILYA"],
            ["CHELSI", "19:00", "ARSENAL"],
            ["ROMA", "20:30", "INTER"],
            ["BAYERN", "21:00", "DORTMUND"],
            ["MILAN", "22:00", "NAPOLI"],
            ["BARSELONA", "23:00", "ATLETIKO"]
        ]
    },
    pro: {
        title: "BUGUNGI UCHRASHUVLAR",
        date: "9-OKTABR  ·  MATCHDAY",
        caption: "PITCHPLAN PRO",
        logoPlacement: "Logo sarlavha yonida, yuqori o‘ng burchakda joylashadi.",
        rows: [
            ["MANCHESTER CITY", "18:00", "ARSENAL"],
            ["REAL MADRID", "19:30", "BARSELONA"],
            ["LIVERPUL", "21:00", "CHELSI"],
            ["BAYERN", "22:30", "DORTMUND"],
            ["INTER", "23:00", "MILAN"]
        ]
    },
    result: {
        title: "",
        date: "",
        caption: "PITCHPLAN",
        logoPlacement: "PitchPlan logosi rasmning yuqori chap burchagida joylashadi.",
        rows: [
            ["MAN UNITED", "3 - 2", "IPSWICH"]
        ]
    },
    matchday: {
        title: "MATCHDAY",
        date: "20 OKTYABR · 16:00",
        caption: "PITCHPLAN",
        logoPlacement: "PitchPlan logosi MATCHDAY posteri yuqori qismida ko‘rinadi.",
        venue: "ETIHAD STADIUM · MANCHESTER",
        competition: "PREMIER LEAGUE · 13-TUR",
        rows: [
            ["MANCHESTER CITY", "16:00", "ARSENAL"]
        ]
    },
    matchlist: {
        title: "BUNDESLIGA UCHRASHUVLARI",
        date: "10–11 OKTABR · MATCHDAY",
        caption: "PITCHPLAN",
        logoPlacement: "Standart PitchPlan logosi sarlavha va poster pastida ko‘rinadi.",
        rows: [
            ["DORTMUND", "18:30", "LEVERKUSEN"],
            ["BAYERN", "18:30", "AUGSBURG"],
            ["FRAYBURG", "20:30", "MAINZ"],
            ["GAMBURG", "21:30", "STUTTGART"],
            ["BREMEN", "16:30", "HOFFENHEIM"],
            ["UNION BERLIN", "18:30", "VOLFSBURG"],
            ["LEYPSIG", "20:30", "KOLN"],
            ["FRANKFURT", "21:30", "BORUSSIYA M."]
        ]
    }
};
const themes = {
    jf: { bg: "#ffffff", row: "#ffffff", timeBg: "#52d719", accent: "#52d719", textColors: { title: "#171717", date: "#52cf18", team: "#171717", time: "#101510", brand: "#171717" } },
    sf: { bg: "#740000", row: "#f7f2ed", timeBg: "#b50b05", accent: "#e8b7b7", textColors: { title: "#ffffff", date: "#ffd6d6", team: "#262329", time: "#ffffff", brand: "#ffffff" } },
    pro: { bg: "#f3f6fa", row: "#ffffff", timeBg: "#e3f3f1", accent: "#248b83", textColors: { title: "#172b3d", date: "#64798d", team: "#23384a", time: "#18786f", brand: "#18786f" } },
    result: { bg: "#111722", row: "#121721", timeBg: "#d8e449", accent: "#d8e449", textColors: { title: "#ffffff", date: "#e2e6eb", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    matchday: { bg: "#10171b", row: "#141a20", timeBg: "#f0d84a", accent: "#f0d84a", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#17191d", brand: "#ffffff" } },
    matchlist: { bg: "#670b0d", row: "#202020", timeBg: "#101010", accent: "#f5eeee", textColors: { title: "#ffffff", date: "#f2caca", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } }
};
const leagueLogoFiles = {
    "premier-league": [
        ["AFC Bournemouth", "AFC_Bournemouth_(2013).svg.webp"],
        ["Arsenal", "Arsenal_FC.svg.webp"],
        ["Aston Villa", "Aston_Villa_FC_new_crest.svg"],
        ["Brighton & Hove Albion", "Brighton_and_Hove_Albion_FC_crest.svg.webp"],
        ["Brentford", "Brentford_FC_crest.svg"],
        ["Cardiff City", "Cardiff_City_crest.svg.webp"],
        ["Chelsea", "Chelsea_FC.svg.webp"],
        ["Coventry City", "Coventry_City_FC_crest.svg"],
        ["Crystal Palace", "Crystal_Palace_FC_logo_(2022).svg"],
        ["Everton", "Everton_FC_logo.svg.webp"],
        ["Fulham", "Fulham_FC_(shield).svg"],
        ["Hull City", "Hull_City_A.F.C._logo.svg"],
        ["Ipswich Town", "Ipswich_Town.svg"],
        ["Leeds United", "Leeds_United_F.C._logo.svg"],
        ["Liverpool", "Liverpool-FC-logo-PNG-transparent-1024x1871.png"],
        ["Manchester City", "Manchester_City_FC_badge.svg.webp"],
        ["Manchester United", "Manchester_United_FC_crest.svg"],
        ["Newcastle United", "Newcastle_United_Logo.png"],
        ["Nottingham Forest", "Nottingham_Forest_F.C._logo.svg.webp"],
        ["Sunderland", "Logo_Sunderland.svg.webp"],
        ["Tottenham Hotspur", "tottenham-hotspur-logo-icon-only-footylogos.png"]
    ],
    laliga: [
        "athletic-club", "atletico-madrid", "barcelona", "celta", "deportivo-la-coruna",
        "deportivo", "elche", "espanyol", "getafe", "levante", "malaga", "osasuna",
        "racing", "rayo-vallecano", "real-betis", "real-madrid", "real-sociedad",
        "sevilla", "valencia", "villarreal"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "serie-a": [
        "atalanta", "bologna", "cagliari", "como-1907", "fiorentina", "frosinone",
        "genoa", "inter", "juventus", "lazio", "lecce", "milan", "monza", "napoli",
        "parma", "roma", "sassuolo", "torino", "udinese", "venezia"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "ligue-1": [
        "angers", "as-monaco", "auxerre", "brest", "le-havre-ac", "le-mans", "lille",
        "lorient", "lyon", "marseille", "nice", "paris-fc", "paris-saint-germain",
        "rc-lens", "rc-strasbourg-alsace", "rennes", "toulouse", "troyes"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    bundesliga: [
        "augsburg", "bayer-leverkusen", "bayern-munchen", "borussia-dortmund",
        "borussia-monchengladbach", "eintracht-frankfurt", "freiburg", "hamburger-sv",
        "hoffenheim", "koln", "mainz-05", "paderborn", "rb-leipzig", "schalke-04",
        "sv-elversberg", "union-berlin", "vfb-stuttgart", "werder-bremen"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "saudi-pro-league": [
        "abha", "al-ahli", "al-ettifaq", "al-faisaly-fc", "al-fateh", "al-fayha",
        "al-hazem", "al-hilal", "al-ittihad", "al-khaleej", "al-kholood", "al-nassr",
        "al-qadsiah", "al-riyadh", "al-shabab", "al-taawoun", "diriyah-club", "neom"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "europa-league": [
        "anderlecht", "ararat-armenia", "az-alkmaar", "bayer-leverkusen", "benfica",
        "besiktas", "bournemouth", "celje", "celta", "celtic", "crystal-palace",
        "dinamo-zagreb", "ferencvaros", "hapoel-beer-sheva", "hoffenheim", "jagiellonia",
        "juventus", "lech-poznan", "levski", "lillestrom", "lyon", "marseille", "milan",
        "nec-nijmegen", "ofi", "olympiacos", "omonoia", "real-sociedad", "rennes",
        "salzburg", "sparta-praha", "sturm-graz", "sunderland", "torreense",
        "union-saint-gilloise", "viktoria-plzen"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "conference-league": [
        "agf", "ajax", "as-monaco", "atalanta", "borac", "brann", "brighton",
        "copenhagen", "crvena-zvezda", "cska-sofia", "egnatia", "freiburg", "gent",
        "getafe", "hajduk-split", "hearts", "iberia", "inter-escaldes", "jablonec",
        "kairat", "kauno-zalgiris", "kups", "lincoln-red-imps", "lugano", "midtjylland",
        "mjallby", "nordsjaelland", "pafos", "panathinaikos", "riga", "sc-braga",
        "sint-truidense", "thun", "trabzonspor", "twente", "u-craiova"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "turkiye-super-lig": [
        "alanyaspor", "amed", "basaksehir", "besiktas", "corum", "erzurumspor",
        "eyupspor", "fenerbahce", "galatasaray", "gaziantep", "genclerbirligi",
        "goztepe-izmir", "kasimpasa", "kocaelispor", "konyaspor", "rizespor",
        "samsunspor", "trabzonspor"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    ucl: [
        "aek-athens", "arsenal", "aston-villa", "atletico-madrid", "barcelona",
        "bayern-munchen", "bodo-glimt", "borussia-dortmund", "club-brugge", "como-1907",
        "fc-porto", "fenerbahce", "feyenoord", "galatasaray", "inter", "lask", "lille",
        "liverpool", "manchester-city", "manchester-united", "napoli", "paris-saint-germain",
        "psv", "rb-leipzig", "rc-lens", "real-betis", "real-madrid", "roma",
        "s-bratislava", "sabah", "shakhtar", "slavia-praha", "sporting-cp", "vfb-stuttgart",
        "viking", "villarreal"
    ].map(name => [name, `${name}.football-logos.cc.png`]),
    "world-cup": [
        "algeria", "argentina", "australia", "austria", "belgium", "bosnia-and-herzegovina",
        "brazil", "cabo-verde", "canada", "colombia", "congo-dr", "cote-d-ivoire",
        "croatia", "curacao", "czech-republic", "dutch", "ecuador", "egypt", "england",
        "france", "germany", "ghana", "haiti", "iran", "iraq", "japan", "jordan",
        "mexico", "morocco", "new-zealand", "norway", "panama", "paraguay",
        "portuguese-football-federation", "qatar", "saudi-arabia", "scotland", "senegal",
        "south-africa", "south-korea", "spain", "sweden", "switzerland", "tunisia",
        "turkey", "uruguay", "usa", "uzbekistan"
    ].map(name => [name, name === "portuguese-football-federation" ?
        `${name}.football-logos.cc.png` : `${name}-national-team.football-logos.cc.png`])
};
const leagueLogoFolders = {
    "premier-league": "epl",
    laliga: "laliga",
    "serie-a": "a-seria",
    "ligue-1": "liga1",
    bundesliga: "bundesliga",
    "saudi-pro-league": "Saudia-Pro-Liga",
    "europa-league": "yevropa-liga",
    "conference-league": "Konferensiya",
    "turkiye-super-lig": "Turkiya Ligasi",
    ucl: "UCL",
    "world-cup": "WorldCup"
};
function getClubDisplayName(name) {
    if (name === "dutch") return "Netherlands";
    if (name === "usa") return "United States";
    if (name === "congo-dr") return "Congo DR";
    if (name === "cote-d-ivoire") return "Côte d’Ivoire";
    if (name === "portuguese-football-federation") return "Portugal";
    if (name === "bosnia-and-herzegovina") return "Bosnia and Herzegovina";
    return name.split("-").map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(" ")
        .replace(/\bAs\b/, "AS")
        .replace(/\bFc\b/gi, "FC")
        .replace(/\bAc\b/gi, "AC");
}
        const canvas = document.getElementById("poster");
        const ctx = canvas.getContext("2d");
        const textEntrySelector = "input:not([type='button']):not([type='submit']):not([type='reset']):not([type='file']):not([type='color']):not([type='range']), textarea, [contenteditable='true']";
        function isTextEntry(target) {
            return target instanceof Element && target.closest(textEntrySelector) !== null;
        }
        document.addEventListener("copy", event => {
            if (isTextEntry(event.target) || isTextEntry(document.activeElement)) return;
            event.preventDefault();
        });
        document.addEventListener("contextmenu", event => {
            if (!isTextEntry(event.target)) event.preventDefault();
        });
        const canvasOriginalParent = canvas.parentElement;
        const expandedPreview = document.getElementById("expanded-preview");
        const expandedCanvasStage = document.getElementById("expanded-canvas-stage");
        const inlineEditor = document.getElementById("canvas-inline-editor");
        const homeView = document.getElementById("home-view");
        const templatesView = document.getElementById("templates-view");
        const liveView = document.getElementById("live-view");
        const liveMatchesView = document.getElementById("live-matches-view");
        const liveMatchDetailView = document.getElementById("live-match-detail-view");
        const clubProfileView = document.getElementById("club-profile-view");
        const editorView = document.getElementById("editor-view");
        const rowsEl = document.getElementById("match-list");
        const clubPickerDialog = document.getElementById("club-picker");
        const clubLogoGrid = document.getElementById("club-logo-grid");
        const clubPickerContent = document.querySelector(".club-picker-content");
        const clubSearchInput = document.getElementById("club-search");
        const clubPickerNote = document.getElementById("club-picker-note");
        const deviceLogoInput = document.getElementById("device-logo-input");
        const titleInput = document.getElementById("poster-title");
        const dateInput = document.getElementById("poster-date");
        const statusEl = document.getElementById("status");
        const backgroundColorInput = document.getElementById("background-color");
        const rowColorInput = document.getElementById("row-color");
        const timeBackgroundColorInput = document.getElementById("time-background-color");
        const backgroundImageInput = document.getElementById("background-image");
        const backgroundOpacityInput = document.getElementById("background-opacity");
        const opacityValue = document.getElementById("opacity-value");
        const brandLogoInput = document.getElementById("brand-logo");
        const brandLogoPreview = document.getElementById("brand-logo-preview");
        const leagueLogoInput = document.getElementById("league-logo");
        const leagueLogoPreview = document.getElementById("league-logo-preview");
        const brandCaptionInput = document.getElementById("brand-caption");
        const goalScorersInput = document.getElementById("goal-scorers");
        const matchdayVenueInput = document.getElementById("matchday-venue");
        const matchdayCompetitionInput = document.getElementById("matchday-competition");
        const brandLogoSizeInput = document.getElementById("brand-logo-size");
        const brandLogoSizeValue = document.getElementById("brand-logo-size-value");
        const textColorInputs = {
            title: document.getElementById("title-color"),
            date: document.getElementById("date-color"),
            team: document.getElementById("team-color"),
            time: document.getElementById("time-color"),
            brand: document.getElementById("brand-color")
        };
        let currentTemplate = "jf";
        let rows = [];
        let backgroundImage = null;
        let brandLogo = null;
        let leagueLogo = null;
        let customBrandLogo = false;
        let customBackgroundColor = false;
        let nonResultBackgroundOpacity = backgroundOpacityInput.value;
        const customTextColors = new Set();
        let posterHitRegions = [];
        let activeInlineTarget = null;
        let workspaceInitialized = false;
        let workspaceSaveTimer = 0;
        let workspaceSaveQueue = Promise.resolve();
        let workspaceDatabasePromise = null;
        let activeLogoPickerTarget = null;
        let selectedLeague = "all";
        const defaultBrandLogo = new Image();
        let clubRenderTimer = 0;
        let clubRenderGeneration = 0;
        let templatePreviewsRendered = false;
        let templatePreviewRenderScheduled = false;
        const clubBatchCallbacks = new WeakMap();
        const clubLogoObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const loadNextBatch = clubBatchCallbacks.get(entry.target);
                if (loadNextBatch) {
                    clubLogoObserver.unobserve(entry.target);
                    entry.target.remove();
                    loadNextBatch();
                    return;
                }
                const image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute("data-src");
                clubLogoObserver.unobserve(image);
            });
        }, { root: clubPickerContent, rootMargin: "900px 0px" }) : null;
        defaultBrandLogo.onload = () => {
            if (!customBrandLogo) brandLogo = defaultBrandLogo;
            rows.forEach(row => {
                if (!row.homeLogo) row.homeLogo = defaultBrandLogo;
                if (!row.awayLogo) row.awayLogo = defaultBrandLogo;
            });
            updateLogoPreview(brandLogoPreview, brandLogo, "PP");
            if (workspaceInitialized) {
                templatePreviewsRendered = false;
                scheduleTemplatePreviews();
                drawPoster();
            }
        };
        defaultBrandLogo.onerror = () => {
            statusEl.textContent = "Standart PitchPlan logosi yuklanmadi. O‘z logongizni yuklashingiz mumkin.";
        };
        defaultBrandLogo.src = "./images/pitchplan.png";

        function setTemplate(name) {
            const previousTemplate = currentTemplate;
            const photoTemplate = name === "result" || name === "matchday";
            const previousPhotoTemplate = previousTemplate === "result" || previousTemplate === "matchday";
            if (photoTemplate && !previousPhotoTemplate) {
                nonResultBackgroundOpacity = backgroundOpacityInput.value;
            }
            if (!photoTemplate && previousPhotoTemplate) {
                backgroundOpacityInput.value = nonResultBackgroundOpacity;
                opacityValue.textContent = `${nonResultBackgroundOpacity}%`;
            }
            currentTemplate = name;
            const example = examples[name];
            if (!example) return;
            canvas.width = 1000;
            canvas.height = photoTemplate ? 1000 : 1200;
            canvas.style.aspectRatio = photoTemplate ? "1 / 1" : "5 / 6";
            document.getElementById("preview-dimensions").textContent = photoTemplate ?
                "PNG · 2160 × 2160 px · 1:1" : "PNG · 2160 × 2592 px · 5:6";
            const templatePreview = document.querySelector(`[data-template="${name}"] .template-preview`);
            if (templatePreview) {
                templatePreview.width = 500;
                templatePreview.height = photoTemplate ? 500 : 600;
                templatePreview.style.aspectRatio = photoTemplate ? "1 / 1" : "5 / 6";
            }
            titleInput.value = example.title;
            dateInput.value = example.date;
            const defaultTeamLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            rows = example.rows.map(([home, time, away]) => ({ home, time, away, homeLogo: defaultTeamLogo, awayLogo: defaultTeamLogo }));
            brandCaptionInput.value = example.caption;
            const resultTemplate = name === "result";
            const matchdayTemplate = name === "matchday";
            document.getElementById("result-controls").hidden = !resultTemplate;
            document.getElementById("matchday-venue-field").hidden = !matchdayTemplate;
            document.getElementById("matchday-competition-field").hidden = !matchdayTemplate;
            matchdayVenueInput.value = example.venue || "";
            matchdayCompetitionInput.value = example.competition || "";
            document.getElementById("matches-hint").textContent = resultTemplate ? "Klub nomi, hisob va logo" :
                matchdayTemplate ? "Ikki klub logosi, nomi va boshlanish vaqti" : "Jamoa nomi, vaqt va logo";
            document.getElementById("add-row").hidden = photoTemplate;
            ["row-color-field", "time-background-field"].forEach(id => {
                document.getElementById(id).hidden = photoTemplate;
            });
            document.getElementById("time-color-field").hidden = resultTemplate || matchdayTemplate;
            document.getElementById("brand-color-field").hidden = resultTemplate;
            document.getElementById("brand-caption-field").hidden = resultTemplate || matchdayTemplate;
            document.getElementById("brand-logo-size-field").hidden = resultTemplate || matchdayTemplate;
            document.getElementById("editor-hint").hidden = photoTemplate;
            document.getElementById("title-field").hidden = resultTemplate;
            document.getElementById("date-field").hidden = resultTemplate;
            document.getElementById("time-color-label").textContent = resultTemplate ? "Hisob rangi" :
                matchdayTemplate ? "Uchrashuv kartasi" : "O‘yin vaqti";
            document.getElementById("brand-logo-hint").textContent = resultTemplate ?
                "PitchPlan logosi suratdagi 433 belgisi o‘rnida chiqadi." :
                matchdayTemplate ? "PitchPlan logosi posterning yuqori qismida chiqadi." : example.logoPlacement;
            goalScorersInput.value = resultTemplate ?
                "22'  S. Morsy\n26'  M. de Ligt\n44'  P. Dorgu\n47'  H. Maguire\n|\nJ. Philogene  4'\nJ. Philogene  45+2'" : "";
            leagueLogo = null;
            leagueLogoInput.value = "";
            updateLogoPreview(leagueLogoPreview, null, "PL");
            customBackgroundColor = false;
            backgroundColorInput.value = themes[name].bg;
            rowColorInput.value = themes[name].row;
            timeBackgroundColorInput.value = themes[name].timeBg;
            if (photoTemplate) {
                backgroundOpacityInput.value = "100";
                opacityValue.textContent = "100%";
            }
            customTextColors.clear();
            Object.entries(themes[name].textColors).forEach(([key, color]) => {
                textColorInputs[key].value = color;
            });
            renderInputs();
            drawPoster();
        }

        function renderInputs() {
            rowsEl.replaceChildren();
            rows.forEach((row, index) => {
                const item = document.createElement("div");
                item.className = "match-row";
                const resultTemplate = currentTemplate === "result";
                item.innerHTML = `
                    <div class="match-team-control home-team">
                        <button type="button" class="logo-upload home-logo" title="Uy jamoasi logosini tanlang" aria-label="${index + 1}-uchrashuv uy jamoasi logosi">
                            <span class="logo-fallback"></span>
                        </button>
                        <input type="text" maxlength="22" value="${escapeHtml(row.home)}" aria-label="${index + 1}-uy jamoasi">
                    </div>
                    <input class="time-control" type="text" maxlength="10" value="${escapeHtml(row.time)}" aria-label="${index + 1}-${resultTemplate ? "match hisobi" : "uchrashuv vaqti"}">
                    <div class="match-team-control away-team">
                        <input type="text" maxlength="22" value="${escapeHtml(row.away)}" aria-label="${index + 1}-mehmon jamoa">
                        <button type="button" class="logo-upload away-logo" title="Mehmon jamoa logosini tanlang" aria-label="${index + 1}-uchrashuv mehmon jamoasi logosi">
                            <span class="logo-fallback"></span>
                        </button>
                    </div>
                    <button type="button" class="remove-row" aria-label="${index + 1}-uchrashuvni o‘chirish">×</button>`;
                const homeInput = item.querySelector(".home-team input[type='text']");
                const timeInput = item.querySelector(".time-control");
                const awayInput = item.querySelector(".away-team input[type='text']");
                const homeLogoLabel = item.querySelector(".home-logo");
                const awayLogoLabel = item.querySelector(".away-logo");
                item.querySelector(".remove-row").hidden = resultTemplate;
                homeInput.addEventListener("input", event => { row.home = event.target.value; homeLogoLabel.querySelector(".logo-fallback").textContent = row.home.slice(0, 2).toUpperCase(); drawPoster(); });
                timeInput.addEventListener("input", event => { row.time = event.target.value; drawPoster(); });
                awayInput.addEventListener("input", event => { row.away = event.target.value; awayLogoLabel.querySelector(".logo-fallback").textContent = row.away.slice(0, 2).toUpperCase(); drawPoster(); });
                homeLogoLabel.addEventListener("click", () => openClubLogoPicker(row, "homeLogo", homeLogoLabel));
                awayLogoLabel.addEventListener("click", () => openClubLogoPicker(row, "awayLogo", awayLogoLabel));
                item.querySelector(".remove-row").addEventListener("click", () => {
                    rows.splice(index, 1);
                    renderInputs();
                    drawPoster();
                });
                rowsEl.append(item);
                updateLogoPreview(homeLogoLabel, row.homeLogo, row.home);
                updateLogoPreview(awayLogoLabel, row.awayLogo, row.away);
            });
        }

        function escapeHtml(value) {
            return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
        }

        function updateLogoPreview(label, image, fallback) {
            if (!label) return;
            label.querySelector("img")?.remove();
            const text = label.querySelector(".logo-fallback");
            if (image) {
                if (text) text.hidden = true;
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = "Yuklangan logo";
                label.prepend(img);
            } else if (text) {
                text.hidden = false;
                text.textContent = fallback.slice(0, 2).toUpperCase();
            }
        }

        function renderClubLogoChoices() {
            window.clearTimeout(clubRenderTimer);
            clubLogoObserver?.disconnect();
            const generation = ++clubRenderGeneration;
            clubLogoGrid.replaceChildren();
            const query = clubSearchInput.value.trim().toLocaleLowerCase();
            const clubGroups = selectedLeague === "all" ?
                Object.entries(leagueLogoFiles) :
                [[selectedLeague, leagueLogoFiles[selectedLeague] || []]];
            const clubs = clubGroups.flatMap(([league, entries]) => entries.map(([name, file]) => ({
                name: league === "premier-league" ? name : getClubDisplayName(name),
                file,
                folder: leagueLogoFolders[league]
            })));
            const seenClubNames = new Set();
            const filteredClubs = clubs.filter(club => {
                if (!club.name.toLocaleLowerCase().includes(query)) return false;
                const normalizedName = club.name.normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase();
                if (seenClubNames.has(normalizedName)) return false;
                seenClubNames.add(normalizedName);
                return true;
            });
            const renderBatch = startIndex => {
                if (generation !== clubRenderGeneration) return;
                const batchEnd = Math.min(startIndex + 24, filteredClubs.length);
                for (let index = startIndex; index < batchEnd; index += 1) {
                    const club = filteredClubs[index];
                    const button = document.createElement("button");
                    button.type = "button";
                    button.className = "club-logo-choice";
                    button.setAttribute("aria-label", `${club.name} logosini tanlash`);
                    const image = document.createElement("img");
                    image.dataset.src = new URL(`./images/${club.folder}/${encodeURIComponent(club.file)}`, document.baseURI).href;
                    image.alt = "";
                    image.loading = "lazy";
                    image.decoding = "async";
                    image.addEventListener("error", () => {
                        button.remove();
                        if (!clubLogoGrid.childElementCount) {
                            clubPickerNote.textContent = "Bu bo‘limdagi logolarni yuklab bo‘lmadi. Qurilmangizdan rasm tanlab ko‘ring.";
                        }
                    }, { once: true });
                    const name = document.createElement("span");
                    name.textContent = club.name;
                    button.append(image, name);
                    button.addEventListener("click", () => {
                        const target = activeLogoPickerTarget;
                        if (!target) return;
                        loadImageSource(image.dataset.src || image.src).then(selectedImage => {
                            applyTeamLogo(target, selectedImage);
                            clubPickerDialog.close();
                        }).catch(error => {
                            clubPickerNote.textContent = `${club.name} logosini yuklab bo‘lmadi. Boshqa logo tanlang yoki qurilmangizdan yuklang.`;
                            console.error("Club logo load failed:", error);
                        });
                    });
                    clubLogoGrid.append(button);
                    if (clubLogoObserver) clubLogoObserver.observe(image);
                    else image.src = image.dataset.src;
                }
                if (batchEnd < filteredClubs.length) {
                    if (clubLogoObserver) {
                        const sentinel = document.createElement("div");
                        sentinel.className = "club-logo-load-sentinel";
                        sentinel.setAttribute("aria-hidden", "true");
                        clubBatchCallbacks.set(sentinel, () => renderBatch(batchEnd));
                        clubLogoGrid.append(sentinel);
                        clubLogoObserver.observe(sentinel);
                    } else {
                        clubRenderTimer = window.setTimeout(() => renderBatch(batchEnd), 50);
                    }
                }
            };
            renderBatch(0);
            clubPickerNote.textContent = filteredClubs.length ? "" :
                clubs.length ? "Qidiruv bo‘yicha logo topilmadi." : "Bu bo‘limda logo fayllari mavjud emas. Qurilmangizdan rasm tanlashingiz mumkin.";
        }

        function openClubLogoPicker(row, key, label) {
            activeLogoPickerTarget = { row, key, label };
            clubSearchInput.value = "";
            selectedLeague = "all";
            document.querySelectorAll(".league-tab").forEach(tab => {
                const active = tab.dataset.league === selectedLeague;
                tab.classList.toggle("is-active", active);
                tab.setAttribute("aria-pressed", String(active));
            });
            renderClubLogoChoices();
            clubPickerDialog.showModal();
        }

        function applyTeamLogo(target, image) {
            if (!target || !image) return;
            target.row[target.key] = image;
            updateLogoPreview(target.label, image, target.key === "homeLogo" ? target.row.home : target.row.away);
            drawPoster();
            statusEl.textContent = "Jamoa logosi posterga qo‘shildi.";
            activeLogoPickerTarget = null;
        }

        document.querySelectorAll(".league-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                selectedLeague = tab.dataset.league;
                document.querySelectorAll(".league-tab").forEach(item => {
                    const active = item === tab;
                    item.classList.toggle("is-active", active);
                    item.setAttribute("aria-pressed", String(active));
                });
                renderClubLogoChoices();
            });
        });
        clubSearchInput.addEventListener("input", renderClubLogoChoices);
        document.getElementById("club-picker-close").addEventListener("click", () => clubPickerDialog.close());
        clubPickerDialog.addEventListener("close", () => {
            activeLogoPickerTarget = null;
            deviceLogoInput.value = "";
        });
        document.getElementById("device-logo-button").addEventListener("click", () => deviceLogoInput.click());
        deviceLogoInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            const target = activeLogoPickerTarget;
            if (!file || !target) return;
            readImageFile(file, image => {
                applyTeamLogo(target, image);
                clubPickerDialog.close();
            }, event.target);
        });

        function readImageFile(file, onLoad, input) {
            if (!file.type.startsWith("image/")) {
                statusEl.textContent = "Iltimos, rasm formatidagi fayl tanlang.";
                input.value = "";
                return;
            }
            if (file.size > 10 * 1024 * 1024) {
                statusEl.textContent = "Rasm hajmi 10 MB dan oshmasligi kerak.";
                input.value = "";
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const image = new Image();
                image.onload = () => onLoad(image);
                image.onerror = () => {
                    statusEl.textContent = "Bu rasmni ochib bo‘lmadi. Boshqa faylni tanlang.";
                    input.value = "";
                };
                image.src = reader.result;
            };
            reader.onerror = () => {
                statusEl.textContent = "Rasmni o‘qib bo‘lmadi. Qayta urinib ko‘ring.";
                input.value = "";
            };
            reader.readAsDataURL(file);
        }

        function fitText(text, maxWidth, startSize, weight = 700, minSize = 11) {
            let size = startSize;
            ctx.font = `${weight} ${size}px "Segoe UI", Arial, sans-serif`;
            while (ctx.measureText(text).width > maxWidth && size > minSize) {
                size -= 1;
                ctx.font = `${weight} ${size}px "Segoe UI", Arial, sans-serif`;
            }
            return size;
        }

        function drawImageContain(image, x, y, width, height) {
            const scale = Math.min(width / image.width, height / image.height);
            const drawWidth = image.width * scale;
            const drawHeight = image.height * scale;
            ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
        }

        function drawImageCover(image, x, y, width, height) {
            const scale = Math.max(width / image.width, height / image.height);
            const drawWidth = image.width * scale;
            const drawHeight = image.height * scale;
            ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
        }

        function drawLogo(image, label, x, y, size, color, contain = false, labelColor = "#ffffff") {
            if (size <= 0) return;
            if (!image) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, size, size);
            }
            if (image) {
                if (size <= 10) {
                    drawImageContain(image, x, y, size, size);
                } else {
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x + 4, y + 4, size - 8, size - 8);
                    ctx.clip();
                    if (contain) drawImageContain(image, x + 4, y + 4, size - 8, size - 8);
                    else drawImageCover(image, x + 4, y + 4, size - 8, size - 8);
                    ctx.restore();
                }
            } else if (size > 5) {
                ctx.fillStyle = labelColor;
                ctx.font = `800 ${Math.max(2, size * .3)}px "Segoe UI", Arial, sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(label.slice(0, 2).toUpperCase() || "?", x + size / 2, y + size / 2 + 1);
            }
        }

        function addPosterHitRegion(type, x, y, width, height, rowIndex = -1) {
            posterHitRegions.push({ type, x, y, width, height, rowIndex });
        }

        function getGoalColumns() {
            const lines = goalScorersInput.value.split(/\r?\n/);
            const separatorIndex = lines.findIndex(line => line.trim() === "|");
            return {
                home: (separatorIndex < 0 ? lines : lines.slice(0, separatorIndex)).filter(line => line.trim()).join("\n"),
                away: separatorIndex < 0 ? "" : lines.slice(separatorIndex + 1).filter(line => line.trim()).join("\n")
            };
        }

        function getInlineTargetValue(target) {
            if (target.type === "title") return titleInput.value;
            if (target.type === "date") return dateInput.value;
            if (target.type === "caption") return brandCaptionInput.value;
            if (target.type === "goals") return goalScorersInput.value;
            if (target.type === "matchdayVenue") return matchdayVenueInput.value;
            if (target.type === "matchdayCompetition") return matchdayCompetitionInput.value;
            if (target.type === "homeGoals" || target.type === "awayGoals") return getGoalColumns()[target.type === "homeGoals" ? "home" : "away"];
            const row = rows[target.rowIndex];
            if (!row) return "";
            if (target.type === "home") return row.home;
            if (target.type === "away") return row.away;
            return row.time;
        }

        function updateInlineTarget(target, value) {
            if (target.type === "title") titleInput.value = value;
            else if (target.type === "date") dateInput.value = value;
            else if (target.type === "caption") brandCaptionInput.value = value;
            else if (target.type === "goals") goalScorersInput.value = value;
            else if (target.type === "matchdayVenue") matchdayVenueInput.value = value;
            else if (target.type === "matchdayCompetition") matchdayCompetitionInput.value = value;
            else if (target.type === "homeGoals" || target.type === "awayGoals") {
                const goals = getGoalColumns();
                goals[target.type === "homeGoals" ? "home" : "away"] = value;
                goalScorersInput.value = [goals.home, goals.away].filter(Boolean).join("\n|\n");
            }
            else {
                const row = rows[target.rowIndex];
                if (!row) return;
                row[target.type] = value;
                const rowElement = rowsEl.children[target.rowIndex];
                if (rowElement) {
                    const selector = target.type === "home" ? ".home-team input[type='text']" :
                        target.type === "away" ? ".away-team input[type='text']" : ".time-control";
                    rowElement.querySelector(selector).value = value;
                }
            }
            drawPoster();
        }

        function showInlineEditor(target, clientX, clientY) {
            activeInlineTarget = target;
            inlineEditor.value = getInlineTargetValue(target);
            inlineEditor.maxLength = target.type === "title" ? 80 :
                target.type === "date" ? 30 :
                target.type === "caption" ? 24 :
                target.type === "goals" || target.type === "homeGoals" || target.type === "awayGoals" ? 240 :
                target.type === "matchdayVenue" || target.type === "matchdayCompetition" ? 40 :
                target.type === "time" ? 10 : 22;
            inlineEditor.rows = target.type === "goals" || target.type === "homeGoals" || target.type === "awayGoals" ? 5 : 1;
            inlineEditor.classList.toggle("is-multiline", inlineEditor.rows > 1);
            const bodyRect = document.querySelector(".expanded-preview-body").getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();
            const hitX = canvasRect.left + (target.x + target.width / 2) * canvasRect.width / canvas.width;
            const hitY = canvasRect.top + (target.y + target.height / 2) * canvasRect.height / canvas.height;
            inlineEditor.style.left = `${hitX - bodyRect.left}px`;
            inlineEditor.style.top = `${hitY - bodyRect.top}px`;
            inlineEditor.style.fontSize = `${Math.max(13, Math.min(25, 18 * canvasRect.width / canvas.width * 2))}px`;
            inlineEditor.hidden = false;
            inlineEditor.focus();
            inlineEditor.select();
        }

        function closeInlineEditor(save = true) {
            if (!activeInlineTarget) return;
            if (save) updateInlineTarget(activeInlineTarget, inlineEditor.value);
            else inlineEditor.value = getInlineTargetValue(activeInlineTarget);
            activeInlineTarget = null;
            inlineEditor.hidden = true;
        }

        canvas.addEventListener("click", event => {
            if (!expandedPreview.open) return;
            const rect = canvas.getBoundingClientRect();
            const x = (event.clientX - rect.left) * canvas.width / rect.width;
            const y = (event.clientY - rect.top) * canvas.height / rect.height;
            const target = [...posterHitRegions].reverse().find(region =>
                x >= region.x && x <= region.x + region.width &&
                y >= region.y && y <= region.y + region.height
            );
            if (!target) {
                closeInlineEditor();
                return;
            }
            if (target.type === "brandLogo") {
                closeInlineEditor();
                brandLogoInput.click();
            } else if (target.type === "leagueLogo") {
                closeInlineEditor();
                leagueLogoInput.click();
            } else if (target.type === "homeLogo" || target.type === "awayLogo") {
                closeInlineEditor();
                const rowElement = rowsEl.children[target.rowIndex];
                const selector = target.type === "homeLogo" ? ".home-logo" : ".away-logo";
                openClubLogoPicker(rows[target.rowIndex], target.type, rowElement.querySelector(selector));
            } else {
                showInlineEditor(target, event.clientX, event.clientY);
            }
        });

        inlineEditor.addEventListener("input", () => {
            if (activeInlineTarget) updateInlineTarget(activeInlineTarget, inlineEditor.value);
        });
        inlineEditor.addEventListener("keydown", event => {
            if (event.key === "Enter" && activeInlineTarget && ["goals", "homeGoals", "awayGoals"].includes(activeInlineTarget.type) && !event.ctrlKey && !event.metaKey) return;
            if (event.key === "Enter") {
                event.preventDefault();
                inlineEditor.blur();
            } else if (event.key === "Escape") {
                event.preventDefault();
                closeInlineEditor(false);
            }
        });
        inlineEditor.addEventListener("blur", () => closeInlineEditor());

        function drawPoster() {
            const theme = themes[currentTemplate];
            const width = canvas.width;
            const height = canvas.height;
            posterHitRegions = [];
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = backgroundColorInput.value || theme.bg;
            ctx.fillRect(0, 0, width, height);

            if (backgroundImage) {
                ctx.save();
                ctx.globalAlpha = Number(backgroundOpacityInput.value) / 100;
                drawImageCover(backgroundImage, 0, 0, width, height);
                ctx.restore();
            }
            if (currentTemplate === "sf") drawSfPoster(theme, width, height);
            else if (currentTemplate === "pro") drawProPoster(theme, width, height);
            else if (currentTemplate === "result") drawResultPoster(theme, width, height);
            else if (currentTemplate === "matchday") drawMatchdayPoster(theme, width, height);
            else if (currentTemplate === "matchlist") drawMatchListPoster(theme, width, height);
            else drawJfPoster(theme, width, height);
            const thumbnail = document.querySelector(`[data-template="${currentTemplate}"] .template-preview`);
            if (thumbnail) {
                const thumbnailContext = thumbnail.getContext("2d");
                thumbnailContext.clearRect(0, 0, thumbnail.width, thumbnail.height);
                thumbnailContext.drawImage(canvas, 0, 0, thumbnail.width, thumbnail.height);
            }
            scheduleWorkspaceSave();
        }

        function openWorkspaceDatabase() {
            if (!window.indexedDB) return Promise.reject(new Error("Bu brauzerda avtomatik saqlash qo‘llab-quvvatlanmaydi."));
            if (!workspaceDatabasePromise) {
                workspaceDatabasePromise = new Promise((resolve, reject) => {
                    const request = window.indexedDB.open("pitchplan-workspace", 1);
                    request.onupgradeneeded = () => {
                        if (!request.result.objectStoreNames.contains("drafts")) {
                            request.result.createObjectStore("drafts");
                        }
                    };
                    request.onsuccess = () => resolve(request.result);
                    request.onerror = () => reject(request.error || new Error("Saqlash omborini ochib bo‘lmadi."));
                });
            }
            return workspaceDatabasePromise;
        }

        function saveWorkspaceSnapshot(snapshot) {
            return openWorkspaceDatabase().then(database => new Promise((resolve, reject) => {
                const transaction = database.transaction("drafts", "readwrite");
                transaction.objectStore("drafts").put(snapshot, "current");
                transaction.oncomplete = resolve;
                transaction.onerror = () => reject(transaction.error || new Error("Ishni saqlab bo‘lmadi."));
                transaction.onabort = () => reject(transaction.error || new Error("Ishni saqlash bekor qilindi."));
            }));
        }

        function readWorkspaceSnapshot() {
            return openWorkspaceDatabase().then(database => new Promise((resolve, reject) => {
                const request = database.transaction("drafts", "readonly").objectStore("drafts").get("current");
                request.onsuccess = () => resolve(request.result || null);
                request.onerror = () => reject(request.error || new Error("Saqlangan ishni o‘qib bo‘lmadi."));
            }));
        }

        function imageSource(image) {
            return image ? image.src : null;
        }

        function captureWorkspace() {
            return {
                template: currentTemplate,
                editorOpen: !editorView.hidden,
                title: titleInput.value,
                date: dateInput.value,
                caption: brandCaptionInput.value,
                goals: goalScorersInput.value,
                venue: matchdayVenueInput.value,
                competition: matchdayCompetitionInput.value,
                rows: rows.map(row => ({
                    home: row.home,
                    time: row.time,
                    away: row.away,
                    homeLogo: imageSource(row.homeLogo),
                    awayLogo: imageSource(row.awayLogo)
                })),
                background: backgroundColorInput.value,
                backgroundImage: imageSource(backgroundImage),
                backgroundOpacity: backgroundOpacityInput.value,
                nonResultBackgroundOpacity,
                row: rowColorInput.value,
                timeBackground: timeBackgroundColorInput.value,
                colors: Object.fromEntries(Object.entries(textColorInputs).map(([key, input]) => [key, input.value])),
                customBackground: customBackgroundColor,
                customText: Array.from(customTextColors),
                brandLogoSize: brandLogoSizeInput.value,
                customBrandLogo,
                brandLogo: customBrandLogo ? imageSource(brandLogo) : null,
                leagueLogo: imageSource(leagueLogo)
            };
        }

        function enqueueWorkspaceSave(snapshot) {
            workspaceSaveQueue = workspaceSaveQueue
                .then(() => saveWorkspaceSnapshot(snapshot))
                .catch(error => {
                    statusEl.textContent = "Avtomatik saqlash amalga oshmadi. Brauzer xotirasida joy borligini tekshiring.";
                    console.error("Workspace autosave failed:", error);
                });
        }

        function scheduleWorkspaceSave() {
            if (!workspaceInitialized) return;
            window.clearTimeout(workspaceSaveTimer);
            workspaceSaveTimer = window.setTimeout(() => enqueueWorkspaceSave(captureWorkspace()), 250);
        }

        function loadImageSource(source) {
            if (!source) return Promise.resolve(null);
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.onload = () => resolve(image);
                image.onerror = () => reject(new Error("Saqlangan logotip yoki fon rasmini yuklab bo‘lmadi."));
                image.src = source;
            });
        }

        async function restoreWorkspace(snapshot) {
            if (!snapshot || !examples[snapshot.template] || !Array.isArray(snapshot.rows)) {
                throw new Error("Saqlangan ish formati yaroqsiz.");
            }
            setTemplate(snapshot.template);
            const [savedBackground, savedBrand, savedLeague, ...rowLogos] = await Promise.all([
                loadImageSource(snapshot.backgroundImage),
                loadImageSource(snapshot.brandLogo),
                loadImageSource(snapshot.leagueLogo),
                ...snapshot.rows.flatMap(row => [loadImageSource(row.homeLogo), loadImageSource(row.awayLogo)])
            ]);
            currentTemplate = snapshot.template;
            titleInput.value = snapshot.title;
            dateInput.value = snapshot.date;
            brandCaptionInput.value = snapshot.caption;
            goalScorersInput.value = snapshot.goals;
            matchdayVenueInput.value = snapshot.venue;
            matchdayCompetitionInput.value = snapshot.competition;
            rows = snapshot.rows.map((row, index) => ({
                home: row.home,
                time: row.time,
                away: row.away,
                homeLogo: rowLogos[index * 2],
                awayLogo: rowLogos[index * 2 + 1]
            }));
            backgroundImage = savedBackground;
            brandLogo = snapshot.customBrandLogo ? savedBrand : (defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null);
            customBrandLogo = Boolean(snapshot.customBrandLogo);
            leagueLogo = savedLeague;
            backgroundColorInput.value = snapshot.background;
            backgroundOpacityInput.value = snapshot.backgroundOpacity;
            nonResultBackgroundOpacity = snapshot.nonResultBackgroundOpacity;
            opacityValue.textContent = `${snapshot.backgroundOpacity}%`;
            rowColorInput.value = snapshot.row;
            timeBackgroundColorInput.value = snapshot.timeBackground;
            brandLogoSizeInput.value = snapshot.brandLogoSize;
            brandLogoSizeValue.textContent = `${snapshot.brandLogoSize}%`;
            Object.entries(snapshot.colors).forEach(([key, value]) => {
                if (textColorInputs[key]) textColorInputs[key].value = value;
            });
            customBackgroundColor = Boolean(snapshot.customBackground);
            customTextColors.clear();
            snapshot.customText.forEach(key => customTextColors.add(key));
            updateLogoPreview(brandLogoPreview, brandLogo, "PP");
            updateLogoPreview(leagueLogoPreview, leagueLogo, "PL");
            showAppSection("home", { navigate: false });
            renderInputs();
            drawPoster();
        }

        function drawWatermark(width, height) {
            ctx.save();
            ctx.globalAlpha = .055;
            if (brandLogo) {
                drawImageContain(brandLogo, width * .12, height * .22, width * .76, height * .58);
            } else {
                ctx.fillStyle = textColorInputs.brand.value;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = `900 ${Math.min(width * .7, height * .55)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText("PP", width / 2, height * .56);
            }
            ctx.restore();
        }

        function drawBrandLogo(centerX, y, size) {
            if (brandLogo) {
                drawImageContain(brandLogo, centerX - size / 2, y, size, size);
                return;
            }
            ctx.save();
            ctx.lineWidth = Math.max(4, size * .09);
            ctx.strokeStyle = textColorInputs.brand.value;
            ctx.beginPath();
            ctx.arc(centerX, y + size / 2, size * .39, Math.PI * .62, Math.PI * 1.92);
            ctx.stroke();
            ctx.strokeStyle = themes[currentTemplate].accent;
            ctx.beginPath();
            ctx.arc(centerX, y + size / 2, size * .39, -Math.PI * .42, Math.PI * .42);
            ctx.stroke();
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `900 ${size * .48}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText("PP", centerX, y + size / 2 + 2);
            ctx.restore();
        }

        function wrapTitle(text, maxWidth, fontSize, maxLines) {
            ctx.font = `900 ${fontSize}px "Segoe UI", Arial, sans-serif`;
            const words = text.trim().split(/\s+/).filter(Boolean);
            const lines = [];
            let line = "";
            words.forEach(word => {
                const candidate = line ? `${line} ${word}` : word;
                if (line && ctx.measureText(candidate).width > maxWidth) {
                    lines.push(line);
                    line = word;
                } else {
                    line = candidate;
                }
            });
            if (line) lines.push(line);
            if (lines.length > maxLines) {
                const visibleLines = lines.slice(0, maxLines);
                visibleLines[maxLines - 1] = `${visibleLines[maxLines - 1].replace(/[.,;:\s]+$/, "")}…`;
                return visibleLines;
            }
            return lines;
        }

        function drawJfPoster(theme, width, height) {
            drawWatermark(width, height);
            const logoScale = Number(brandLogoSizeInput.value) / 100;
            const topLogoSize = 92 * logoScale;
            const bottomLogoSize = 64 * logoScale;
            const topLogoY = 24;
            drawBrandLogo(width / 2, topLogoY, topLogoSize);
            addPosterHitRegion("brandLogo", width / 2 - topLogoSize / 2, topLogoY, topLogoSize, topLogoSize);
            const title = titleInput.value.trim() || "UCHRASHUVLAR RO'YXATI";
            const titleLines = wrapTitle(title, width - 130, 48, 3);
            const titleStartY = topLogoY + topLogoSize + 32;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            titleLines.forEach((line, index) => {
                const size = fitText(line, width - 130, 48, 900, 18);
                ctx.fillStyle = textColorInputs.title.value;
                ctx.font = `900 ${size}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(line, width / 2, titleStartY + index * 43, width - 130);
                addPosterHitRegion("title", 65, titleStartY + index * 43 - 22, width - 130, 44);
            });
            const headerHeight = titleStartY + titleLines.length * 43 + 24;
            if (dateInput.value.trim()) {
                ctx.fillStyle = textColorInputs.date.value;
                const date = dateInput.value.trim().toUpperCase();
                ctx.font = `800 ${fitText(date, width - 100, 26, 800, 13)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(date, width / 2, headerHeight - 14, width - 100);
                addPosterHitRegion("date", 50, headerHeight - 32, width - 100, 36);
            }
            const leftMargin = rows.length > 10 ? 36 : 48;
            const footerHeight = bottomLogoSize + 26;
            const rowCount = Math.max(rows.length, 1);
            const columns = rows.length > 10 ? 2 : 1;
            const columnGap = columns === 2 ? 20 : 0;
            const cardWidth = (width - leftMargin * 2 - columnGap * (columns - 1)) / columns;
            const tableTop = headerHeight + 20;
            const availableHeight = height - tableTop - footerHeight;
            const gridRows = Math.ceil(rowCount / columns);
            const rowGap = Math.min(12, Math.max(2, availableHeight / (gridRows * 12)));
            const rowHeight = Math.min(columns === 2 ? 132 : 116, (availableHeight - rowGap * (gridRows - 1)) / gridRows);
            const contentHeight = gridRows * rowHeight + Math.max(0, gridRows - 1) * rowGap;
            const startY = tableTop + (availableHeight - contentHeight) / 2;
            rows.forEach((row, index) => {
                const column = index % columns;
                const gridRow = Math.floor(index / columns);
                const cardX = leftMargin + column * (cardWidth + columnGap);
                const y = startY + gridRow * (rowHeight + rowGap);
                const timeWidth = Math.min(cardWidth * .24, columns === 2 ? 118 : 210);
                const sideWidth = (cardWidth - timeWidth) / 2;
                const logoSize = Math.min(columns === 2 ? 48 : 68, rowHeight * .66);
                ctx.save();
                ctx.shadowColor = "rgba(0,0,0,.18)";
                ctx.shadowBlur = Math.min(12, rowHeight * .18);
                ctx.shadowOffsetY = Math.min(4, rowHeight * .07);
                ctx.fillStyle = rowColorInput.value;
                ctx.fillRect(cardX, y, cardWidth, rowHeight);
                ctx.restore();
                ctx.fillStyle = timeBackgroundColorInput.value;
                ctx.fillRect(cardX + sideWidth, y, timeWidth, rowHeight);
                const logoY = y + (rowHeight - logoSize) / 2;
                drawLogo(row.homeLogo, row.home, cardX + 8, logoY, logoSize, "#ffffff", true, textColorInputs.team.value);
                drawLogo(row.awayLogo, row.away, cardX + cardWidth - logoSize - 8, logoY, logoSize, "#ffffff", true, textColorInputs.team.value);
                addPosterHitRegion("homeLogo", cardX + 8, logoY, logoSize, logoSize, index);
                addPosterHitRegion("awayLogo", cardX + cardWidth - logoSize - 8, logoY, logoSize, logoSize, index);

                ctx.fillStyle = textColorInputs.team.value;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                const homeTextX = cardX + logoSize + 16;
                const homeTextWidth = Math.max(12, sideWidth - logoSize - 20);
                const homeSize = fitText(row.home, homeTextWidth, Math.min(columns === 2 ? 20 : 30, rowHeight * .32), 900, 8);
                ctx.font = `900 ${homeSize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.home.toUpperCase(), homeTextX + homeTextWidth / 2, y + rowHeight / 2, homeTextWidth);
                addPosterHitRegion("home", homeTextX, y, homeTextWidth, rowHeight, index);

                const awayX = cardX + sideWidth + timeWidth + 10;
                const awayTextWidth = Math.max(12, sideWidth - logoSize - 20);
                const awaySize = fitText(row.away, awayTextWidth, Math.min(columns === 2 ? 20 : 30, rowHeight * .32), 900, 8);
                ctx.font = `900 ${awaySize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.away.toUpperCase(), awayX + awayTextWidth / 2, y + rowHeight / 2, awayTextWidth);
                addPosterHitRegion("away", awayX, y, awayTextWidth, rowHeight, index);

                ctx.fillStyle = textColorInputs.time.value;
                const timeSize = fitText(row.time, timeWidth - 12, Math.min(columns === 2 ? 26 : 38, rowHeight * .4), 900, 9);
                ctx.font = `900 ${timeSize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.time, cardX + sideWidth + timeWidth / 2, y + rowHeight / 2);
                addPosterHitRegion("time", cardX + sideWidth, y, timeWidth, rowHeight, index);
            });
            if (!rows.length) {
                ctx.fillStyle = textColorInputs.team.value;
                ctx.font = '700 24px "Segoe UI", Arial, sans-serif';
                ctx.textAlign = "center";
                ctx.fillText("UCHRASHUV QO‘SHING", width / 2, startY + rowHeight / 2);
            }
            drawBrandLogo(width / 2, height - bottomLogoSize - 13, bottomLogoSize);
            addPosterHitRegion("brandLogo", width / 2 - bottomLogoSize / 2, height - bottomLogoSize - 13, bottomLogoSize, bottomLogoSize);
        }

        function fillRoundRect(x, y, width, height, radius, fill, stroke = null) {
            ctx.beginPath();
            ctx.roundRect(x, y, width, height, radius);
            ctx.fillStyle = fill;
            ctx.fill();
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.lineWidth = 3;
                ctx.stroke();
            }
        }

        function drawPosterHeading(width, y, titleWidth, titleColor, dateColor, fontSize = 38) {
            const title = titleInput.value.trim().toUpperCase();
            const lines = wrapTitle(title || "UCHRASHUVLAR RO'YXATI", titleWidth, fontSize, 2);
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            lines.forEach((line, index) => {
                const size = fitText(line, titleWidth, fontSize, 900, 16);
                ctx.fillStyle = titleColor;
                ctx.font = `900 ${size}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(line, width / 2, y + index * (fontSize * .9), titleWidth);
                addPosterHitRegion("title", width / 2 - titleWidth / 2, y + index * (fontSize * .9) - fontSize / 2, titleWidth, fontSize);
            });
            const dateY = y + lines.length * fontSize * .9 + 9;
            if (dateInput.value.trim()) {
                const date = dateInput.value.trim().toUpperCase();
                ctx.fillStyle = dateColor;
                ctx.font = `700 ${fitText(date, titleWidth, 22, 700, 13)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(date, width / 2, dateY, titleWidth);
                addPosterHitRegion("date", width / 2 - titleWidth / 2, dateY - 14, titleWidth, 28);
            }
            return dateY + 24;
        }

        function drawTemplateGrid(width, top, bottom, maxRowHeight, columnsGap = 18) {
            const columns = rows.length > 10 ? 2 : 1;
            const margin = columns === 2 ? 48 : 96;
            const columnGap = columns === 2 ? columnsGap : 0;
            const cardWidth = (width - margin * 2 - columnGap * (columns - 1)) / columns;
            const count = Math.max(1, Math.ceil(rows.length / columns));
            const available = Math.max(0, bottom - top);
            const rowGap = Math.min(13, Math.max(4, available / (count * 11)));
            const rowHeight = Math.min(maxRowHeight, (available - rowGap * (count - 1)) / count);
            const usedHeight = count * rowHeight + (count - 1) * rowGap;
            return { columns, margin, cardWidth, rowHeight, rowGap, startY: top + Math.max(0, (available - usedHeight) / 2) };
        }

        function drawMatchListPoster(theme, width, height) {
            const background = ctx.createLinearGradient(0, 0, width, height);
            background.addColorStop(0, "#b10c12");
            background.addColorStop(.46, "#420609");
            background.addColorStop(1, "#08090c");
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalAlpha = .2;
            [[0, 0, 520, 0, 0, 540], [width, 70, width, 640, width - 500, 430],
                [0, height - 420, 470, height, 0, height], [width, height - 540, width, height, width - 480, height]]
                .forEach(points => {
                    ctx.fillStyle = "#f32931";
                    ctx.beginPath();
                    ctx.moveTo(points[0], points[1]);
                    ctx.lineTo(points[2], points[3]);
                    ctx.lineTo(points[4], points[5]);
                    ctx.closePath();
                    ctx.fill();
                });
            ctx.restore();

            const title = titleInput.value.trim().toUpperCase() || "UCHRASHUVLAR";
            const logoSize = 48;
            const headerY = 56;
            drawBrandLogo(166, headerY, logoSize);
            addPosterHitRegion("brandLogo", 166 - logoSize / 2, headerY, logoSize, logoSize);
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = textColorInputs.title.value;
            const titleSize = fitText(title, width - 300, 43, 900, 18);
            ctx.font = `900 ${titleSize}px "Arial Narrow", "Segoe UI", sans-serif`;
            ctx.fillText(title, 215, headerY + 19, width - 290);
            addPosterHitRegion("title", 205, headerY - 5, width - 255, 54);
            ctx.fillStyle = textColorInputs.date.value;
            ctx.font = `600 ${fitText(dateInput.value.toUpperCase(), width - 300, 21, 600, 12)}px "Arial Narrow", "Segoe UI", sans-serif`;
            ctx.fillText(dateInput.value.toUpperCase(), 218, headerY + 54, width - 300);
            addPosterHitRegion("date", 205, headerY + 39, width - 255, 32);

            const cardX = 74;
            const cardY = 174;
            const cardWidth = width - cardX * 2;
            const footerSpace = 132;
            const availableHeight = height - cardY - footerSpace - 22;
            const rowHeight = Math.min(82, availableHeight / Math.max(rows.length, 1));
            const cardHeight = rowHeight * Math.max(rows.length, 1);
            const centerWidth = Math.min(132, cardWidth * .19);
            const sideWidth = (cardWidth - centerWidth) / 2;

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 28);
            ctx.clip();
            rows.forEach((row, index) => {
                const y = cardY + index * rowHeight;
                ctx.fillStyle = index % 2 ? "#343434" : "#1d1e20";
                ctx.fillRect(cardX, y, cardWidth, rowHeight);
                ctx.fillStyle = "#111214";
                ctx.fillRect(cardX + sideWidth, y, centerWidth, rowHeight);

                const logoSide = Math.min(50, rowHeight * .65);
                const logoY = y + (rowHeight - logoSide) / 2;
                const homeLogoX = cardX + sideWidth - logoSide - 18;
                const awayLogoX = cardX + sideWidth + centerWidth + 18;
                drawLogo(row.homeLogo, row.home, homeLogoX, logoY, logoSide, "#ffffff", true, textColorInputs.team.value);
                drawLogo(row.awayLogo, row.away, awayLogoX, logoY, logoSide, "#ffffff", true, textColorInputs.team.value);
                addPosterHitRegion("homeLogo", homeLogoX, logoY, logoSide, logoSide, index);
                addPosterHitRegion("awayLogo", awayLogoX, logoY, logoSide, logoSide, index);

                const nameSize = Math.min(31, rowHeight * .38);
                const homeMaxWidth = Math.max(10, sideWidth - logoSide - 40);
                const homeX = cardX + sideWidth - logoSide - 30;
                ctx.fillStyle = textColorInputs.team.value;
                ctx.textBaseline = "middle";
                ctx.textAlign = "right";
                ctx.font = `800 ${fitText(row.home.toUpperCase(), homeMaxWidth, nameSize, 800, 9)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.home.toUpperCase(), homeX, y + rowHeight / 2, homeMaxWidth);
                addPosterHitRegion("home", homeX - homeMaxWidth, y, homeMaxWidth, rowHeight, index);

                const awayX = awayLogoX + logoSide + 18;
                const awayMaxWidth = Math.max(10, sideWidth - logoSide - 40);
                ctx.textAlign = "left";
                ctx.font = `800 ${fitText(row.away.toUpperCase(), awayMaxWidth, nameSize, 800, 9)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.away.toUpperCase(), awayX, y + rowHeight / 2, awayMaxWidth);
                addPosterHitRegion("away", awayX, y, awayMaxWidth, rowHeight, index);

                ctx.fillStyle = textColorInputs.time.value;
                ctx.textAlign = "center";
                ctx.font = `900 ${fitText(row.time, centerWidth - 16, Math.min(34, rowHeight * .42), 900, 11)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.time, cardX + sideWidth + centerWidth / 2, y + rowHeight * .43, centerWidth - 12);
                ctx.fillStyle = textColorInputs.date.value;
                ctx.font = `500 ${fitText(dateInput.value.toUpperCase(), centerWidth - 12, Math.min(15, rowHeight * .2), 500, 8)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(dateInput.value.toUpperCase(), cardX + sideWidth + centerWidth / 2, y + rowHeight * .73, centerWidth - 10);
                addPosterHitRegion("time", cardX + sideWidth, y, centerWidth, rowHeight, index);
            });
            if (!rows.length) {
                ctx.fillStyle = "#ffffff";
                ctx.font = '700 27px "Segoe UI", Arial, sans-serif';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("UCHRASHUV QO‘SHING", width / 2, cardY + rowHeight / 2);
            }
            ctx.restore();

            const footerLogoSize = 76;
            const footerY = height - footerSpace + 15;
            drawBrandLogo(width / 2, footerY, footerLogoSize);
            addPosterHitRegion("brandLogo", width / 2 - footerLogoSize / 2, footerY, footerLogoSize, footerLogoSize);
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.font = '800 21px "Segoe UI", Arial, sans-serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const caption = brandCaptionInput.value.trim().toUpperCase() || "PITCHPLAN";
            ctx.fillText(caption, width / 2, footerY + footerLogoSize + 20, width - 100);
            addPosterHitRegion("caption", 50, footerY + footerLogoSize + 5, width - 100, 32);
        }

        function drawSfPoster(theme, width, height) {
            ctx.save();
            ctx.globalAlpha = .32;
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.font = `800 ${Math.max(20, width * .032)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const sideLabel = brandCaptionInput.value.trim().toUpperCase() || "RED STAR FUTBOL";
            const labelWidth = ctx.measureText(sideLabel).width;
            const labelStep = labelWidth + 14;
            [24, 58, width - 58, width - 24].forEach((x, index) => {
                ctx.save();
                ctx.translate(x, height / 2);
                ctx.rotate(index < 2 ? -Math.PI / 2 : Math.PI / 2);
                for (let y = -height / 2 - labelWidth; y < height / 2 + labelWidth; y += labelStep) {
                    ctx.fillText(sideLabel, y, 0);
                }
                ctx.restore();
            });
            ctx.restore();
            addPosterHitRegion("caption", 0, 0, 82, height);
            addPosterHitRegion("caption", width - 82, 0, 82, height);
            const headerBottom = drawPosterHeading(width, 83, width - 220, textColorInputs.title.value, textColorInputs.date.value, 40);
            const footerSpace = Math.min(200, height * .18);
            const grid = drawTemplateGrid(width, Math.max(225, headerBottom + 38), height - footerSpace, 92);
            rows.forEach((row, index) => {
                const column = index % grid.columns;
                const gridRow = Math.floor(index / grid.columns);
                const x = grid.margin + column * (grid.cardWidth + (grid.columns === 2 ? 18 : 0));
                const y = grid.startY + gridRow * (grid.rowHeight + grid.rowGap);
                const timeWidth = Math.min(142, grid.cardWidth * .23);
                const teamWidth = (grid.cardWidth - timeWidth) / 2;
                const logoSize = Math.min(50, grid.rowHeight * .64);
                fillRoundRect(x, y, grid.cardWidth, grid.rowHeight, 21, rowColorInput.value);
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(x + teamWidth, y, timeWidth, grid.rowHeight, 0);
                ctx.fillStyle = timeBackgroundColorInput.value;
                ctx.fill();
                ctx.restore();
                ctx.strokeStyle = textColorInputs.brand.value;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x + teamWidth, y + 7);
                ctx.lineTo(x + teamWidth, y + grid.rowHeight - 7);
                ctx.moveTo(x + teamWidth + timeWidth, y + 7);
                ctx.lineTo(x + teamWidth + timeWidth, y + grid.rowHeight - 7);
                ctx.stroke();
                drawLogo(row.homeLogo, row.home, x + 12, y + (grid.rowHeight - logoSize) / 2, logoSize, "#ffffff", true, textColorInputs.team.value);
                drawLogo(row.awayLogo, row.away, x + grid.cardWidth - logoSize - 12, y + (grid.rowHeight - logoSize) / 2, logoSize, "#ffffff", true, textColorInputs.team.value);
                addPosterHitRegion("homeLogo", x + 12, y + (grid.rowHeight - logoSize) / 2, logoSize, logoSize, index);
                addPosterHitRegion("awayLogo", x + grid.cardWidth - logoSize - 12, y + (grid.rowHeight - logoSize) / 2, logoSize, logoSize, index);
                ctx.fillStyle = textColorInputs.team.value;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                const leftTextX = x + logoSize + 18;
                const leftTextWidth = Math.max(20, teamWidth - logoSize - 24);
                const rightTextX = x + teamWidth + timeWidth + 8;
                const rightTextWidth = Math.max(20, teamWidth - logoSize - 24);
                const nameSize = Math.min(24, grid.rowHeight * .31);
                ctx.font = `800 ${fitText(row.home, leftTextWidth, nameSize, 800, 9)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.home, leftTextX + leftTextWidth / 2, y + grid.rowHeight / 2, leftTextWidth);
                addPosterHitRegion("home", leftTextX, y, leftTextWidth, grid.rowHeight, index);
                ctx.font = `800 ${fitText(row.away, rightTextWidth, nameSize, 800, 9)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.away, rightTextX + rightTextWidth / 2, y + grid.rowHeight / 2, rightTextWidth);
                addPosterHitRegion("away", rightTextX, y, rightTextWidth, grid.rowHeight, index);
                ctx.fillStyle = textColorInputs.time.value;
                ctx.font = `900 ${fitText(row.time, timeWidth - 12, Math.min(30, grid.rowHeight * .38), 900, 10)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.time, x + teamWidth + timeWidth / 2, y + grid.rowHeight / 2);
                addPosterHitRegion("time", x + teamWidth, y, timeWidth, grid.rowHeight, index);
            });
            const logoSize = 46 * Number(brandLogoSizeInput.value) / 100;
            const footerY = height - footerSpace + 12;
            drawBrandLogo(width / 2, footerY, logoSize);
            addPosterHitRegion("brandLogo", width / 2 - logoSize / 2, footerY, logoSize, logoSize);
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.font = `800 ${fitText(brandCaptionInput.value, width - 100, 25, 800, 12)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(brandCaptionInput.value.toUpperCase(), width / 2, footerY + logoSize + 24, width - 100);
            addPosterHitRegion("caption", 50, footerY + logoSize + 8, width - 100, 34);
        }

        function drawResultPoster(theme, width, height) {
            const match = rows[0] || { home: "CHELSEA", time: "4 - 0", away: "SOUTHAMPTON" };
            const scale = width / 1000;
            const panelX = 90 * scale;
            const panelY = 545 * scale;
            const panelWidth = width - panelX * 2;
            const panelHeight = height - panelY;
            const logoSize = 108 * scale;
            const panelRadius = 42 * scale;

            if (!backgroundImage) {
                ctx.fillStyle = "#111923";
                ctx.fillRect(0, 0, width, height);
            }

            const shade = ctx.createLinearGradient(0, 0, 0, height);
            shade.addColorStop(0, "rgba(0,0,0,.2)");
            shade.addColorStop(.48, "rgba(0,0,0,.02)");
            shade.addColorStop(.62, "rgba(0,0,0,.32)");
            shade.addColorStop(1, "rgba(0,0,0,.66)");
            ctx.fillStyle = shade;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(panelX + panelRadius, panelY);
            ctx.lineTo(width - panelX - panelRadius, panelY);
            ctx.quadraticCurveTo(width - panelX, panelY, width - panelX, panelY + panelRadius);
            ctx.lineTo(width - panelX, height);
            ctx.lineTo(panelX, height);
            ctx.lineTo(panelX, panelY + panelRadius);
            ctx.quadraticCurveTo(panelX, panelY, panelX + panelRadius, panelY);
            ctx.closePath();
            const panelFill = ctx.createLinearGradient(0, panelY, 0, height);
            panelFill.addColorStop(0, "rgba(8,10,16,.48)");
            panelFill.addColorStop(1, "rgba(8,10,16,.72)");
            ctx.fillStyle = panelFill;
            ctx.fill();
            const edge = ctx.createLinearGradient(panelX, 0, width - panelX, 0);
            edge.addColorStop(0, "#8c272e");
            edge.addColorStop(.5, "rgba(217,217,210,.5)");
            edge.addColorStop(1, "#384d65");
            ctx.strokeStyle = edge;
            ctx.lineWidth = 3 * scale;
            ctx.stroke();
            ctx.restore();

            const brandBox = { x: 31 * scale, y: 24 * scale, width: 115 * scale, height: 42 * scale };
            if (brandLogo) drawImageContain(brandLogo, brandBox.x, brandBox.y, brandBox.width, brandBox.height);
            else drawBrandLogo(brandBox.x + brandBox.width / 2, brandBox.y, brandBox.height);
            addPosterHitRegion("brandLogo", brandBox.x, brandBox.y, brandBox.width, brandBox.height);

            const leagueSize = 56 * scale;
            const leagueY = panelY - leagueSize * .45;
            ctx.save();
            ctx.shadowColor = "rgba(0,0,0,.45)";
            ctx.shadowBlur = 12 * scale;
            ctx.fillStyle = "#111820";
            ctx.beginPath();
            ctx.arc(width / 2, leagueY + leagueSize / 2, leagueSize / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            if (leagueLogo) {
                drawImageContain(leagueLogo, width / 2 - leagueSize / 2 + 4 * scale, leagueY + 4 * scale, leagueSize - 8 * scale, leagueSize - 8 * scale);
            } else {
                ctx.fillStyle = "#f4f4f0";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = `900 ${24 * scale}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText("PL", width / 2, leagueY + leagueSize / 2);
            }
            addPosterHitRegion("leagueLogo", width / 2 - leagueSize / 2 - 8 * scale, leagueY - 8 * scale, leagueSize + 16 * scale, leagueSize + 16 * scale);

            const homeCenter = width * .255;
            const awayCenter = width * .745;
            const crestY = panelY + 32 * scale;
            const drawCrest = (image, label, centerX, rowIndex, type) => {
                ctx.save();
                ctx.fillStyle = "rgba(255,255,255,.96)";
                ctx.beginPath();
                ctx.arc(centerX, crestY + logoSize / 2, logoSize / 2, 0, Math.PI * 2);
                ctx.fill();
                if (image) {
                    ctx.beginPath();
                    ctx.arc(centerX, crestY + logoSize / 2, logoSize / 2 - 5, 0, Math.PI * 2);
                    ctx.clip();
                    drawImageContain(image, centerX - logoSize / 2 + 8, crestY + 8, logoSize - 16, logoSize - 16);
                } else {
                    ctx.fillStyle = "#263343";
                    ctx.font = '900 32px "Segoe UI", Arial, sans-serif';
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(label.slice(0, 2).toUpperCase(), centerX, crestY + logoSize / 2);
                }
                ctx.restore();
                addPosterHitRegion(type, centerX - logoSize / 2, crestY, logoSize, logoSize, rowIndex);
            };
            drawCrest(match.homeLogo, match.home, homeCenter, 0, "homeLogo");
            drawCrest(match.awayLogo, match.away, awayCenter, 0, "awayLogo");

            ctx.fillStyle = textColorInputs.team.value;
            const teamY = panelY + 169 * scale;
            ctx.font = `900 ${fitText(match.home.toUpperCase(), width * .37, 25 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(match.home.toUpperCase(), homeCenter, teamY, width * .37);
            addPosterHitRegion("home", homeCenter - width * .19, teamY - 28 * scale, width * .38, 56 * scale, 0);
            ctx.font = `900 ${fitText(match.away.toUpperCase(), width * .37, 25 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(match.away.toUpperCase(), awayCenter, teamY, width * .37);
            addPosterHitRegion("away", awayCenter - width * .19, teamY - 28 * scale, width * .38, 56 * scale, 0);

            ctx.fillStyle = textColorInputs.time.value;
            const scoreY = panelY + 91 * scale;
            ctx.font = `900 ${fitText(match.time, width * .37, 88 * scale, 900, 44 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(match.time, width / 2, scoreY, width * .37);
            addPosterHitRegion("time", width * .31, scoreY - 55 * scale, width * .38, 92 * scale, 0);

            ctx.fillStyle = theme.accent;
            ctx.font = `900 ${17 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText("FULL-TIME", width / 2, panelY + 205 * scale);

            const goalLines = goalScorersInput.value.split(/\r?\n/);
            const separatorIndex = goalLines.findIndex(line => line.trim() === "|");
            const homeGoals = (separatorIndex >= 0 ? goalLines.slice(0, separatorIndex) : goalLines)
                .map(line => line.trim()).filter(Boolean);
            const awayGoals = separatorIndex >= 0 ? goalLines.slice(separatorIndex + 1).map(line => line.trim()).filter(Boolean) : [];
            const goalTop = panelY + 244 * scale;
            const maxRows = Math.max(homeGoals.length, awayGoals.length, 1);
            const goalLineHeight = Math.min(31 * scale, (panelHeight - 252 * scale) / maxRows);
            const drawGoalColumn = (lines, x, align, hitType) => {
                lines.slice(0, 7).forEach((line, index) => {
                    const y = goalTop + index * goalLineHeight;
                    ctx.fillStyle = "#f2f1e9";
                    ctx.font = `700 ${17 * scale}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = align;
                    ctx.textBaseline = "middle";
                    ctx.fillText(line, x, y, width * .36);
                });
                const hitX = hitType === "homeGoals" ? panelX + 18 * scale : width / 2 + 18 * scale;
                addPosterHitRegion(hitType, hitX, goalTop - 16 * scale, panelWidth * .43, Math.max(44 * scale, Math.min(lines.length, 7) * goalLineHeight), 0);
            };
            drawGoalColumn(homeGoals, panelX + panelWidth * .39, "right", "homeGoals");
            drawGoalColumn(awayGoals, panelX + panelWidth * .61, "left", "awayGoals");
        }

        function drawMatchdayPoster(theme, width, height) {
            const match = rows[0] || { home: "MANCHESTER CITY", time: "16:00", away: "ARSENAL" };
            const scale = width / 1000;
            const panelTop = 620 * scale;
            const panelInset = 42 * scale;
            const panelWidth = width - panelInset * 2;
            const panelHeight = height - panelTop - 34 * scale;
            const title = titleInput.value.trim().toUpperCase() || "MATCHDAY";

            if (!backgroundImage) {
                const background = ctx.createLinearGradient(0, 0, width, height);
                background.addColorStop(0, "#10171c");
                background.addColorStop(.48, "#27363a");
                background.addColorStop(1, "#0b1117");
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
                const light = ctx.createRadialGradient(width * .56, height * .24, 10, width * .56, height * .24, width * .6);
                light.addColorStop(0, "rgba(230,235,224,.24)");
                light.addColorStop(.48, "rgba(88,107,103,.1)");
                light.addColorStop(1, "rgba(5,10,15,0)");
                ctx.fillStyle = light;
                ctx.fillRect(0, 0, width, height * .7);
                ctx.fillStyle = "rgba(4,10,15,.35)";
                ctx.beginPath();
                ctx.moveTo(0, 320 * scale);
                ctx.lineTo(width, 265 * scale);
                ctx.lineTo(width, panelTop);
                ctx.lineTo(0, panelTop);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = "rgba(255,255,255,.08)";
                ctx.lineWidth = 2 * scale;
                for (let y = 330; y < panelTop; y += 36) {
                    ctx.beginPath();
                    ctx.moveTo(0, y * scale);
                    ctx.lineTo(width, (y - 22) * scale);
                    ctx.stroke();
                }
            }

            const photoShade = ctx.createLinearGradient(0, 0, 0, height);
            photoShade.addColorStop(0, "rgba(5,9,15,.3)");
            photoShade.addColorStop(.46, "rgba(5,9,15,.12)");
            photoShade.addColorStop(.66, "rgba(5,9,15,.55)");
            photoShade.addColorStop(1, "rgba(5,9,15,.86)");
            ctx.fillStyle = photoShade;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalAlpha = .88;
            ctx.lineCap = "square";
            const brush = ctx.createLinearGradient(0, 0, width, height * .55);
            brush.addColorStop(0, "#9f101f");
            brush.addColorStop(.52, "#ed1734");
            brush.addColorStop(1, "#74101d");
            ctx.strokeStyle = brush;
            ctx.lineWidth = 72 * scale;
            ctx.beginPath();
            ctx.moveTo(-90 * scale, 472 * scale);
            ctx.lineTo(430 * scale, 420 * scale);
            ctx.lineTo(725 * scale, 470 * scale);
            ctx.lineTo(1090 * scale, 388 * scale);
            ctx.stroke();
            ctx.globalAlpha = .62;
            ctx.lineWidth = 20 * scale;
            ctx.beginPath();
            ctx.moveTo(-30 * scale, 530 * scale);
            ctx.lineTo(350 * scale, 492 * scale);
            ctx.lineTo(760 * scale, 526 * scale);
            ctx.lineTo(1040 * scale, 466 * scale);
            ctx.stroke();
            ctx.restore();

            const brandBox = { x: 34 * scale, y: 28 * scale, width: 112 * scale, height: 42 * scale };
            if (brandLogo) drawImageContain(brandLogo, brandBox.x, brandBox.y, brandBox.width, brandBox.height);
            else drawBrandLogo(brandBox.x + brandBox.width / 2, brandBox.y, brandBox.height);
            addPosterHitRegion("brandLogo", brandBox.x, brandBox.y, brandBox.width, brandBox.height);

            ctx.fillStyle = "rgba(8,13,19,.55)";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.font = `800 ${13 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText("PITCHPLAN  /  FOOTBALL", width - 48 * scale, 50 * scale);

            ctx.save();
            ctx.translate(width - 18 * scale, height * .41);
            ctx.rotate(Math.PI / 2);
            ctx.fillStyle = "rgba(255,255,255,.92)";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `800 ${12 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText("MATCHDAY  ·  MATCHDAY  ·  MATCHDAY  ·  MATCHDAY", 0, 0, height * .72);
            ctx.restore();

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `900 ${fitText(title, width - 54 * scale, 142 * scale, 900, 58 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.lineWidth = 2 * scale;
            ctx.strokeStyle = "rgba(255,255,255,.78)";
            ctx.strokeText(title, width / 2, 486 * scale, width - 54 * scale);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(title, width / 2, 486 * scale, width - 54 * scale);
            ctx.fillStyle = theme.accent;
            ctx.fillRect(74 * scale, 544 * scale, 106 * scale, 5 * scale);
            ctx.fillStyle = "rgba(255,255,255,.88)";
            ctx.textAlign = "left";
            ctx.font = `800 ${14 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(matchdayCompetitionInput.value.trim().toUpperCase(), 74 * scale, 571 * scale, width * .72);
            addPosterHitRegion("title", 36 * scale, 414 * scale, width - 72 * scale, 104 * scale);
            addPosterHitRegion("matchdayCompetition", 70 * scale, 550 * scale, width - 140 * scale, 42 * scale);

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(panelInset, panelTop, panelWidth, panelHeight, 30 * scale);
            ctx.fillStyle = "rgba(7,12,18,.82)";
            ctx.fill();
            const border = ctx.createLinearGradient(panelInset, 0, width - panelInset, 0);
            border.addColorStop(0, "#aa2534");
            border.addColorStop(.5, "rgba(239,239,230,.64)");
            border.addColorStop(1, "#465c71");
            ctx.strokeStyle = border;
            ctx.lineWidth = 2 * scale;
            ctx.stroke();
            ctx.restore();

            const crestSize = 118 * scale;
            const crestY = panelTop + 32 * scale;
            const homeCenter = width * .24;
            const awayCenter = width * .76;
            const drawTeamCrest = (image, label, centerX, type) => {
                ctx.save();
                ctx.shadowColor = "rgba(0,0,0,.46)";
                ctx.shadowBlur = 12 * scale;
                ctx.fillStyle = "rgba(255,255,255,.98)";
                ctx.beginPath();
                ctx.arc(centerX, crestY + crestSize / 2, crestSize / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                ctx.save();
                ctx.beginPath();
                ctx.arc(centerX, crestY + crestSize / 2, crestSize / 2 - 7 * scale, 0, Math.PI * 2);
                ctx.clip();
                if (image) drawImageContain(image, centerX - crestSize / 2 + 8 * scale, crestY + 8 * scale, crestSize - 16 * scale, crestSize - 16 * scale);
                else {
                    ctx.fillStyle = "#1d2933";
                    ctx.font = `900 ${30 * scale}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(label.slice(0, 3).toUpperCase(), centerX, crestY + crestSize / 2);
                }
                ctx.restore();
                addPosterHitRegion(type, centerX - crestSize / 2, crestY, crestSize, crestSize, 0);
            };
            drawTeamCrest(match.homeLogo, match.home, homeCenter, "homeLogo");
            drawTeamCrest(match.awayLogo, match.away, awayCenter, "awayLogo");

            ctx.fillStyle = "#f2d84c";
            ctx.beginPath();
            ctx.arc(width / 2, crestY + crestSize / 2, 38 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#171a20";
            ctx.font = `900 ${20 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("VS", width / 2, crestY + crestSize / 2);

            const nameY = panelTop + 176 * scale;
            ctx.fillStyle = "#ffffff";
            ctx.font = `900 ${fitText(match.home.toUpperCase(), width * .38, 24 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(match.home.toUpperCase(), homeCenter, nameY, width * .38);
            addPosterHitRegion("home", homeCenter - width * .19, nameY - 25 * scale, width * .38, 50 * scale, 0);
            ctx.font = `900 ${fitText(match.away.toUpperCase(), width * .38, 24 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(match.away.toUpperCase(), awayCenter, nameY, width * .38);
            addPosterHitRegion("away", awayCenter - width * .19, nameY - 25 * scale, width * .38, 50 * scale, 0);

            ctx.strokeStyle = "rgba(255,255,255,.18)";
            ctx.lineWidth = 1 * scale;
            ctx.beginPath();
            ctx.moveTo(panelInset + 28 * scale, panelTop + 201 * scale);
            ctx.lineTo(width - panelInset - 28 * scale, panelTop + 201 * scale);
            ctx.stroke();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = theme.accent;
            ctx.font = `850 ${23 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(dateInput.value.trim().toUpperCase(), width / 2, panelTop + 233 * scale, panelWidth - 54 * scale);
            addPosterHitRegion("date", panelInset + 24 * scale, panelTop + 208 * scale, panelWidth - 48 * scale, 48 * scale);

            fillRoundRect(width / 2 - 77 * scale, panelTop + 260 * scale, 154 * scale, 44 * scale, 22 * scale, "#f2d84c");
            ctx.fillStyle = "#171a20";
            ctx.font = `900 ${23 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(match.time, width / 2, panelTop + 282 * scale);
            addPosterHitRegion("time", width / 2 - 88 * scale, panelTop + 252 * scale, 176 * scale, 60 * scale, 0);

            ctx.fillStyle = "rgba(255,255,255,.72)";
            ctx.font = `750 ${12 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(matchdayVenueInput.value.trim().toUpperCase(), width / 2, height - 56 * scale, panelWidth - 56 * scale);
            addPosterHitRegion("matchdayVenue", panelInset + 28 * scale, height - 82 * scale, panelWidth - 56 * scale, 44 * scale);
        }

        function drawProPoster(theme, width, height) {
            const scale = Number(brandLogoSizeInput.value) / 100;
            const logoSize = 58 * scale;
            const logoX = width - 74 - logoSize;
            const accent = theme.accent;
            const ink = textColorInputs.title.value;

            const glow = ctx.createRadialGradient(width - 120, 95, 8, width - 120, 95, 240);
            glow.addColorStop(0, "rgba(36,139,131,.12)");
            glow.addColorStop(1, "rgba(36,139,131,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(width - 380, 0, 380, 330);

            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.roundRect(62, 52, 5, 164, 2.5);
            ctx.fill();

            fillRoundRect(82, 48, 218, 30, 15, "#e4f2f0");
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '800 13px "Segoe UI", Arial, sans-serif';
            ctx.fillText("PITCHPLAN  /  MATCHDAY", 98, 63);

            const title = titleInput.value.trim().toUpperCase() || "UCHRASHUVLAR RO'YXATI";
            const titleWidth = Math.max(100, logoX - logoSize * .22 - 112);
            const titleLines = wrapTitle(title, titleWidth, 45, 2);
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            titleLines.forEach((line, index) => {
                const size = fitText(line, titleWidth, 45, 900, 19);
                ctx.fillStyle = textColorInputs.title.value;
                ctx.font = `900 ${size}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(line, 82, 112 + index * 49, titleWidth);
                    addPosterHitRegion("title", 82, 88 + index * 49, titleWidth, 48);
                });

            const date = dateInput.value.trim().toUpperCase();
            const dateY = 112 + titleLines.length * 49 + 7;
            if (date) {
                const dateWidth = Math.min(ctx.measureText(date).width + 30, titleWidth + 20);
                fillRoundRect(82, dateY - 15, dateWidth, 30, 15, "#ffffff", "#e0e8ed");
                ctx.fillStyle = accent;
                ctx.beginPath();
                ctx.arc(97, dateY, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = textColorInputs.date.value;
                ctx.font = `700 ${fitText(date, titleWidth - 20, 15, 700, 10)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(date, 110, dateY, titleWidth - 24);
                addPosterHitRegion("date", 82, dateY - 15, dateWidth, 30);
            }

            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(logoX + logoSize / 2, 126, logoSize * .72, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#dcebe9";
            ctx.lineWidth = 2;
            ctx.stroke();
            drawBrandLogo(logoX + logoSize / 2, 126 - logoSize / 2, logoSize);
            addPosterHitRegion("brandLogo", logoX, 126 - logoSize / 2, logoSize, logoSize);

            ctx.strokeStyle = "#dbe4ea";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(64, 244);
            ctx.lineTo(width - 64, 244);
            ctx.stroke();

            ctx.fillStyle = ink;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '850 16px "Segoe UI", Arial, sans-serif';
            ctx.fillText("MATCH SCHEDULE", 68, 274);
            ctx.fillStyle = textColorInputs.date.value;
            ctx.textAlign = "right";
            ctx.font = '700 13px "Segoe UI", Arial, sans-serif';
            ctx.fillText(`${String(rows.length).padStart(2, "0")}  FIXTURES`, width - 68, 274);

            const grid = drawTemplateGrid(width, 302, height - 112, 126, 16);
            rows.forEach((row, index) => {
                const column = index % grid.columns;
                const gridRow = Math.floor(index / grid.columns);
                const x = grid.margin + column * (grid.cardWidth + (grid.columns === 2 ? 16 : 0));
                const y = grid.startY + gridRow * (grid.rowHeight + grid.rowGap);
                const logoSize = Math.min(grid.columns === 2 ? 38 : 54, grid.rowHeight * .52);
                const timeWidth = Math.min(grid.columns === 2 ? 88 : 120, grid.cardWidth * .2);
                const teamWidth = (grid.cardWidth - timeWidth) / 2;

                ctx.save();
                ctx.shadowColor = "rgba(29,51,73,.09)";
                ctx.shadowBlur = 16;
                ctx.shadowOffsetY = 5;
                fillRoundRect(x, y, grid.cardWidth, grid.rowHeight, 18, rowColorInput.value);
                ctx.restore();
                fillRoundRect(x, y, grid.cardWidth, grid.rowHeight, 18, "rgba(255,255,255,0)", "#e1e8ee");
                ctx.fillStyle = theme.accent;
                ctx.beginPath();
                ctx.roundRect(x, y + 13, 4, grid.rowHeight - 26, 2);
                ctx.fill();

                const homeLogoX = x + 22;
                const awayLogoX = x + grid.cardWidth - logoSize - 20;
                drawLogo(row.homeLogo, row.home, homeLogoX, y + (grid.rowHeight - logoSize) / 2, logoSize, "#ffffff", true, textColorInputs.team.value);
                drawLogo(row.awayLogo, row.away, awayLogoX, y + (grid.rowHeight - logoSize) / 2, logoSize, "#ffffff", true, textColorInputs.team.value);
                addPosterHitRegion("homeLogo", homeLogoX, y + (grid.rowHeight - logoSize) / 2, logoSize, logoSize, index);
                addPosterHitRegion("awayLogo", awayLogoX, y + (grid.rowHeight - logoSize) / 2, logoSize, logoSize, index);

                ctx.fillStyle = "#8394a3";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.font = '750 10px "Segoe UI", Arial, sans-serif';
                ctx.fillText(String(index + 1).padStart(2, "0"), x + 18, y + 10);

                ctx.fillStyle = textColorInputs.team.value;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                const homeX = homeLogoX + logoSize + 12;
                const homeWidth = Math.max(16, teamWidth - logoSize - 34);
                const awayX = x + teamWidth + timeWidth + 8;
                const awayWidth = Math.max(16, teamWidth - logoSize - 32);
                const nameSize = Math.min(grid.columns === 2 ? 17 : 24, grid.rowHeight * .28);
                ctx.font = `750 ${fitText(row.home, homeWidth, nameSize, 750, 8)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.home.toUpperCase(), homeX + homeWidth / 2, y + grid.rowHeight / 2, homeWidth);
                addPosterHitRegion("home", homeX, y, homeWidth, grid.rowHeight, index);
                ctx.font = `750 ${fitText(row.away, awayWidth, nameSize, 750, 8)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.away.toUpperCase(), awayX + awayWidth / 2, y + grid.rowHeight / 2, awayWidth);
                addPosterHitRegion("away", awayX, y, awayWidth, grid.rowHeight, index);

                const pillWidth = Math.min(timeWidth - 8, 104);
                const pillHeight = Math.min(48, grid.rowHeight * .48);
                fillRoundRect(x + teamWidth + (timeWidth - pillWidth) / 2, y + (grid.rowHeight - pillHeight) / 2, pillWidth, pillHeight, pillHeight / 2, timeBackgroundColorInput.value);
                ctx.fillStyle = accent;
                ctx.beginPath();
                ctx.arc(x + teamWidth + timeWidth / 2, y + grid.rowHeight / 2 - pillHeight / 2 - 9, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = textColorInputs.time.value;
                ctx.font = `800 ${fitText(row.time, pillWidth - 10, Math.min(21, pillHeight * .52), 800, 9)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.time, x + teamWidth + timeWidth / 2, y + grid.rowHeight / 2);
                addPosterHitRegion("time", x + teamWidth, y, timeWidth, grid.rowHeight, index);
            });

            ctx.strokeStyle = "#dbe4ea";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(64, height - 78);
            ctx.lineTo(width - 64, height - 78);
            ctx.stroke();
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(76, height - 42, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '800 14px "Segoe UI", Arial, sans-serif';
            ctx.fillText(brandCaptionInput.value.trim().toUpperCase(), 90, height - 42, width - 180);
            addPosterHitRegion("caption", 90, height - 62, width - 180, 40);
            ctx.fillStyle = textColorInputs.date.value;
            ctx.textAlign = "right";
            ctx.font = '700 12px "Segoe UI", Arial, sans-serif';
            ctx.fillText("MADE FOR MATCHDAY", width - 68, height - 42);
        }

        function renderTemplatePreviews() {
            const state = {
                template: currentTemplate,
                rows,
                title: titleInput.value,
                date: dateInput.value,
                caption: brandCaptionInput.value,
                goals: goalScorersInput.value,
                venue: matchdayVenueInput.value,
                competition: matchdayCompetitionInput.value,
                leagueLogo,
                background: backgroundColorInput.value,
                backgroundOpacity: backgroundOpacityInput.value,
                row: rowColorInput.value,
                timeBackground: timeBackgroundColorInput.value,
                colors: Object.fromEntries(Object.entries(textColorInputs).map(([key, input]) => [key, input.value])),
                customBackground: customBackgroundColor,
                customText: new Set(customTextColors)
            };
            Object.keys(examples).forEach(name => {
                setTemplate(name);
                drawPoster();
            });
            setTemplate(state.template);
            currentTemplate = state.template;
            rows = state.rows;
            titleInput.value = state.title;
            dateInput.value = state.date;
            brandCaptionInput.value = state.caption;
            goalScorersInput.value = state.goals;
            matchdayVenueInput.value = state.venue;
            matchdayCompetitionInput.value = state.competition;
            leagueLogo = state.leagueLogo;
            backgroundColorInput.value = state.background;
            backgroundOpacityInput.value = state.backgroundOpacity;
            opacityValue.textContent = `${state.backgroundOpacity}%`;
            rowColorInput.value = state.row;
            timeBackgroundColorInput.value = state.timeBackground;
            Object.entries(state.colors).forEach(([key, value]) => { textColorInputs[key].value = value; });
            customBackgroundColor = state.customBackground;
            customTextColors.clear();
            state.customText.forEach(key => customTextColors.add(key));
            updateLogoPreview(leagueLogoPreview, leagueLogo, "PL");
            renderInputs();
            drawPoster();
            templatePreviewsRendered = true;
        }

        function scheduleTemplatePreviews() {
            if (templatePreviewsRendered || templatePreviewRenderScheduled || templatesView.hidden) return;
            templatePreviewRenderScheduled = true;
            const render = () => {
                templatePreviewRenderScheduled = false;
                if (templatesView.hidden || templatePreviewsRendered) return;
                renderTemplatePreviews();
            };
            if ("requestIdleCallback" in window) window.requestIdleCallback(render, { timeout: 1200 });
            else window.setTimeout(render, 100);
        }

        document.getElementById("preview-expand").addEventListener("click", () => {
            expandedCanvasStage.append(canvas);
            canvas.classList.add("is-editable");
            expandedPreview.showModal();
        });
        function restoreExpandedCanvas() {
            closeInlineEditor();
            canvas.classList.remove("is-editable");
            if (canvas.parentElement !== canvasOriginalParent) canvasOriginalParent.append(canvas);
        }
        document.getElementById("expanded-preview-close").addEventListener("click", () => {
            restoreExpandedCanvas();
            expandedPreview.close();
        });
        expandedPreview.addEventListener("cancel", restoreExpandedCanvas);
        expandedPreview.addEventListener("close", () => {
            restoreExpandedCanvas();
        });
        expandedPreview.addEventListener("keydown", event => {
            if (event.key !== "Escape") return;
            event.preventDefault();
            restoreExpandedCanvas();
            expandedPreview.close();
        });
        expandedPreview.addEventListener("click", event => {
            if (event.target === expandedPreview) {
                restoreExpandedCanvas();
                expandedPreview.close();
            }
        });

        let lastHandledHash = null;

        function getCurrentRoute() {
            const parts = window.location.hash.replace(/^#\/?/, "").split("/");
            if (parts[0] === "match" && parts.length === 3) {
                try {
                    return { section: "match", match: { league: decodeURIComponent(parts[1]), id: decodeURIComponent(parts[2]) } };
                } catch (error) {
                    console.error("Invalid PitchPlan match URL:", error);
                }
            }
            if (parts[0] === "club" && parts.length === 3) {
                try {
                    return { section: "club", club: { league: decodeURIComponent(parts[1]), id: decodeURIComponent(parts[2]) } };
                } catch (error) {
                    console.error("Invalid PitchPlan club URL:", error);
                }
            }
            const sections = { home: "home", poster: "templates", standings: "live", matches: "matches" };
            return { section: sections[parts[0]] || "home" };
        }

        function showAppSection(section, options = {}) {
            const isEditor = section === "editor";
            const isMatchDetail = section === "match";
            const isClubProfile = section === "club";
            homeView.hidden = section !== "home";
            templatesView.hidden = section !== "templates";
            liveView.hidden = section !== "live";
            liveMatchesView.hidden = section !== "matches";
            liveMatchDetailView.hidden = !isMatchDetail;
            clubProfileView.hidden = !isClubProfile;
            editorView.hidden = !isEditor;
            const activeSection = isEditor ? "templates" : isMatchDetail || isClubProfile ? "matches" : section;
            document.querySelectorAll("[data-app-section]").forEach(button => {
                const active = button.dataset.appSection === activeSection;
                button.classList.toggle("is-active", active);
                if (button.matches(".app-nav-item")) {
                    if (active) button.setAttribute("aria-current", "page");
                    else button.removeAttribute("aria-current");
                }
            });
            if (options.navigate !== false && !isMatchDetail && !isClubProfile) {
                const routes = { home: "/home", templates: "/poster", live: "/standings", matches: "/matches", editor: "/poster" };
                const route = routes[section];
                if (route && window.location.hash !== `#${route}`) {
                    window.history.pushState(null, "", `#${route}`);
                    lastHandledHash = window.location.hash;
                }
            }
            if (section === "templates") scheduleTemplatePreviews();
            window.dispatchEvent(new CustomEvent("pitchplan:sectionchange", { detail: { section, match: options.match, club: options.club } }));
        }

        document.querySelectorAll(".app-nav-item, .home-shortcut").forEach(button => {
            button.addEventListener("click", event => {
                event.preventDefault();
                showAppSection(button.dataset.appSection);
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
        function restoreRoute() {
            if (window.location.hash === lastHandledHash) return;
            lastHandledHash = window.location.hash;
            const route = getCurrentRoute();
            showAppSection(route.section, { navigate: false, match: route.match, club: route.club });
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.addEventListener("popstate", restoreRoute);
        window.addEventListener("hashchange", restoreRoute);
        document.getElementById("back-to-matches").addEventListener("click", () => showAppSection("matches"));
        document.getElementById("back-to-club-search").addEventListener("click", () => showAppSection("matches"));
        document.querySelector(".brand").addEventListener("click", event => {
            event.preventDefault();
            showAppSection("home");
            scheduleWorkspaceSave();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.querySelectorAll(".template-card").forEach(card => {
            card.addEventListener("click", () => {
                setTemplate(card.dataset.template);
                showAppSection("editor");
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
        document.getElementById("back-to-templates").addEventListener("click", () => {
            showAppSection("templates");
            scheduleWorkspaceSave();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        titleInput.addEventListener("input", drawPoster);
        dateInput.addEventListener("input", drawPoster);
        brandCaptionInput.addEventListener("input", drawPoster);
        goalScorersInput.addEventListener("input", drawPoster);
        matchdayVenueInput.addEventListener("input", drawPoster);
        matchdayCompetitionInput.addEventListener("input", drawPoster);
        Object.entries(textColorInputs).forEach(([key, input]) => {
            input.addEventListener("input", () => {
                customTextColors.add(key);
                drawPoster();
            });
        });
        backgroundColorInput.addEventListener("input", () => {
            customBackgroundColor = true;
            drawPoster();
        });
        rowColorInput.addEventListener("input", drawPoster);
        timeBackgroundColorInput.addEventListener("input", drawPoster);
        backgroundImageInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                backgroundImage = image;
                drawPoster();
                statusEl.textContent = "Fon rasmi posterga qo‘shildi.";
            }, event.target);
        });
        backgroundOpacityInput.addEventListener("input", () => {
            opacityValue.textContent = `${backgroundOpacityInput.value}%`;
            drawPoster();
        });
        brandLogoInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                brandLogo = image;
                customBrandLogo = true;
                updateLogoPreview(brandLogoPreview, image, "PP");
                drawPoster();
                statusEl.textContent = "Shaxsiy logo posterga qo‘shildi.";
            }, event.target);
        });
        leagueLogoInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                leagueLogo = image;
                updateLogoPreview(leagueLogoPreview, image, "PL");
                drawPoster();
                statusEl.textContent = "Liga logosi posterga qo‘shildi.";
            }, event.target);
        });
        document.getElementById("clear-league-logo").addEventListener("click", () => {
            leagueLogo = null;
            leagueLogoInput.value = "";
            updateLogoPreview(leagueLogoPreview, null, "PL");
            drawPoster();
            statusEl.textContent = "Liga logosi olib tashlandi.";
        });
        document.getElementById("clear-brand-logo").addEventListener("click", () => {
            customBrandLogo = false;
            brandLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            brandLogoInput.value = "";
            updateLogoPreview(brandLogoPreview, brandLogo, "PP");
            drawPoster();
            statusEl.textContent = "PitchPlan standart logosi tiklandi.";
        });
        brandLogoSizeInput.addEventListener("input", () => {
            brandLogoSizeValue.textContent = `${brandLogoSizeInput.value}%`;
            drawPoster();
        });
        document.getElementById("add-row").addEventListener("click", () => {
            const defaultTeamLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            rows.push({ home: "JAMOA 1", time: "20:00", away: "JAMOA 2", homeLogo: defaultTeamLogo, awayLogo: defaultTeamLogo });
            renderInputs();
            drawPoster();
        });
        document.getElementById("download").addEventListener("click", () => {
            const originalWidth = canvas.width;
            const originalHeight = canvas.height;
            let canvasRestored = false;
            const restoreCanvas = () => {
                if (canvasRestored) return;
                canvasRestored = true;
                canvas.width = originalWidth;
                canvas.height = originalHeight;
                drawPoster();
            };
            try {
                const exportScale = 2.16;
                canvas.width = Math.round(originalWidth * exportScale);
                canvas.height = Math.round(originalHeight * exportScale);
                drawPoster();
                canvas.toBlob(async blob => {
                    restoreCanvas();
                    if (!blob) {
                        statusEl.textContent = "PNG yaratilmadi. Iltimos, qayta urinib ko‘ring.";
                        return;
                    }
                    try {
                        const result = await window.pitchplanSaveImage(blob, "sportposter.png");
                        statusEl.textContent = result.method === "share"
                            ? "Rasm ulashish oynasi ochildi. Galereyaga saqlash amalini tanlang."
                            : result.method === "cancelled"
                                ? "Rasmni saqlash bekor qilindi."
                                : result.method === "preview"
                                    ? "Rasm yangi oynada ochildi. Uni uzoq bosib, galereyaga saqlang."
                                    : "Poster PNG formatida yuklab olindi.";
                    } catch (error) {
                        statusEl.textContent = "Rasmni saqlashda xatolik yuz berdi. Qayta urinib ko‘ring.";
                        console.error("Poster export failed:", error);
                    }
                }, "image/png");
            } catch (error) {
                restoreCanvas();
                statusEl.textContent = "Rasmni saqlashda xatolik yuz berdi. Qayta urinib ko‘ring.";
                console.error("Poster export failed:", error);
            }
        });
        async function initializeWorkspace() {
            setTemplate("jf");
            try {
                const savedWorkspace = await readWorkspaceSnapshot();
                if (savedWorkspace) {
                    await restoreWorkspace(savedWorkspace);
                    statusEl.textContent = "Oldingi tahriringiz tiklandi.";
                }
            } catch (error) {
                statusEl.textContent = "Saqlangan ishni tiklab bo‘lmadi. Yangi tahrirni davom ettirishingiz mumkin.";
                console.error("Workspace restore failed:", error);
            }
            workspaceInitialized = true;
            drawPoster();
            scheduleTemplatePreviews();
            restoreRoute();
        }
        window.addEventListener("pagehide", () => {
            if (!workspaceInitialized) return;
            window.clearTimeout(workspaceSaveTimer);
            enqueueWorkspaceSave(captureWorkspace());
        });
        initializeWorkspace();
