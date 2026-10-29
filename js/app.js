const defaultPlayerStatsRows = [
    ["39 ta", "To'pga teginish", ""],
    ["22 ta", "Aniq pas", ""],
    ["5 ta", "Dribling", ""],
    ["8 ta", "Duellarda yutish", ""],
    ["3 ta", "Key passes", ""],
    ["1 ta", "Vaziyat yaratish", ""]
];

const examples = {
    jf: {
        title: "BUGUN BO'LIB O'TADIGAN ASOSIY UCHRASHUVLAR RO'YXATI",
        date: "9-OKTABR",
        caption: "pitchplan.uz",
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
        caption: "pitchplan.uz PRO",
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
        caption: "pitchplan.uz",
        logoPlacement: "PitchPlan logosi rasmning yuqori chap burchagida joylashadi.",
        rows: [
            ["MAN UNITED", "3 - 2", "IPSWICH"]
        ]
    },
    "today-results": {
        title: "BUGUNGI NATIJALAR",
        date: "BUGUN 06:00 DAN",
        caption: "pitchplan.uz",
        logoPlacement: "PitchPlan logosi sarlavha va poster pastida ko‘rinadi.",
        rows: []
    },
    "football-news": {
        title: "Futbolda yangi rekord qayd etildi",
        date: "23.06.2026",
        caption: "",
        logoPlacement: "Pastki logoni yuklang yoki almashtiring.",
        rows: []
    },
    "photo-quote": {
        title: "Futbol — bu shunchaki o‘yin emas",
        date: "",
        caption: "",
        logoPlacement: "Kanal logosi postering yuqori o‘ng burchagida joylashadi.",
        rows: []
    },
    "football-lux": {
        title: "THE STORY IS OVER HES NOT COMING",
        date: "",
        caption: "",
        logoPlacement: "Kanal logosi postering yuqori chap burchagida joylashadi.",
        rows: []
    },
    "telegram-promo": {
        title: "",
        date: "",
        caption: "@pitchplan",
        logoPlacement: "Logo postering yuqori o‘ng burchagida joylashadi.",
        rows: []
    },
    "matchday-poster": {
        title: "",
        date: "",
        caption: "",
        logoPlacement: "Kanal logosi posterning yuqori markazida joylashadi.",
        rows: [
            ["LIVERPOOL", "20:30", "MANCHESTER CITY"]
        ]
    },
    "football-stats": {
        title: "Jeremy Doku",
        date: "Liverpool'ga qarshi",
        caption: "pitchplan.uz",
        logoPlacement: "Yuqori chap burchakdagi logo, markaziy matn va pastki ishonch logosi.",
        rows: defaultPlayerStatsRows
    },
    "monthly-club-fixtures": {
        title: "MATCH SCHEDULE",
        date: "",
        caption: "",
        logoPlacement: "Fon rasmini almashtiring va klubni tanlang.",
        rows: []
    },
    matchlist: {
        title: "BUNDESLIGA UCHRASHUVLARI",
        date: "10–11 OKTABR · MATCHDAY",
        caption: "pitchplan.uz",
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
    "today-results": { bg: "#101827", row: "#202b3b", timeBg: "#182334", accent: "#d7a84b", textColors: { title: "#ffffff", date: "#e9bd68", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "football-news": { bg: "#050505", row: "#ffffff", timeBg: "#ffffff", accent: "#c91625", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "photo-quote": { bg: "#0d1117", row: "#1c222d", timeBg: "#1a2633", accent: "#8cc7ff", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "football-lux": { bg: "#080b0d", row: "#ffffff", timeBg: "#ffffff", accent: "#e50914", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "telegram-promo": { bg: "#111827", row: "#ffffff", timeBg: "#ffffff", accent: "#229ed9", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "matchday-poster": { bg: "#10151e", row: "#ffffff", timeBg: "#ffffff", accent: "#22b8f0", textColors: { title: "#ffffff", date: "#ffffff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "football-stats": { bg: "#0d1117", row: "#1c222d", timeBg: "#1a2633", accent: "#8cc7ff", textColors: { title: "#ffffff", date: "#d6e7ff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    "monthly-club-fixtures": { bg: "#07101c", row: "#101d2b", timeBg: "#101d2b", accent: "#39a9ff", textColors: { title: "#ffffff", date: "#a9d8ff", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } },
    matchlist: { bg: "#670b0d", row: "#202020", timeBg: "#101010", accent: "#f5eeee", textColors: { title: "#ffffff", date: "#f2caca", team: "#ffffff", time: "#ffffff", brand: "#ffffff" } }
};
const footballNewsRatios = {
    "1:1": { width: 1000, height: 1000 },
    "3:4": { width: 900, height: 1200 },
    "5:6": { width: 1000, height: 1200 },
    "7:5": { width: 1400, height: 1000 }
};
const posterAspectRatioOptions = new Set(["1:1", "3:4", "5:6", "16:9", "original", "7:5"]);
const photoPosterTemplates = new Set(["result", "football-news", "photo-quote", "football-lux", "football-stats", "telegram-promo", "matchday-poster", "monthly-club-fixtures"]);
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
        let ctx = canvas.getContext("2d");
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
        const clubPickerContent = document.querySelector("#club-picker .club-picker-content");
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
        const footballNewsControls = document.getElementById("football-news-controls");
        const footballNewsEffectColorInput = document.getElementById("football-news-effect-color");
        const photoQuoteControls = document.getElementById("photo-quote-controls");
        const photoQuoteColorInput = document.getElementById("photo-quote-color");
        const photoQuoteFontSizeInput = document.getElementById("photo-quote-font-size");
        const posterRatioOptions = document.querySelectorAll("#poster-ratio-options [data-ratio]");
        const matchlistLayoutControls = document.getElementById("matchlist-layout-controls");
        const matchlistLayoutOptions = document.querySelectorAll(".matchlist-layout-option");
        const todayResultsThemeControls = document.getElementById("today-results-theme-controls");
        const todayResultsThemeOptions = document.querySelectorAll(".today-results-theme-option");
        const redStarThemeControls = document.getElementById("red-star-theme-controls");
        const redStarThemeOptions = document.querySelectorAll(".red-star-theme-option");
        const brandLogoInput = document.getElementById("brand-logo");
        const brandLogoPreview = document.getElementById("brand-logo-preview");
        const leagueLogoInput = document.getElementById("league-logo");
        const leagueLogoPreview = document.getElementById("league-logo-preview");
        const brandCaptionInput = document.getElementById("brand-caption");
        const normalizeBrandCaption = value => String(value).trim()
            .replace(/^pitchplan(?=$|\s)/i, "pitchplan.uz")
            .replace(/^pitchplan\.uz/i, "pitchplan.uz");
        const formatBrandCaption = value => normalizeBrandCaption(value).split(/(pitchplan\.uz)/i)
            .map(part => /^pitchplan\.uz$/i.test(part) ? "pitchplan.uz" : part.toUpperCase())
            .join("");
        const goalScorersInput = document.getElementById("goal-scorers");
        const brandLogoSizeInput = document.getElementById("brand-logo-size");
        const brandLogoSizeValue = document.getElementById("brand-logo-size-value");
        const autoResultButton = document.getElementById("auto-result-button");
        const autoResultOptions = document.getElementById("auto-result-options");
        const autoUpcomingMatchesButton = document.getElementById("auto-upcoming-matches-button");
        const autoTodayResultsButton = document.getElementById("auto-today-results-button");
        const redStarRangeDialog = document.getElementById("red-star-range-dialog");
        const redStarRangeOptions = document.querySelectorAll("[data-upcoming-start-day]");
        const redStarPasswordDialog = document.getElementById("red-star-password-dialog");
        const redStarPasswordForm = document.getElementById("red-star-password-form");
        const redStarPasswordInput = document.getElementById("red-star-password-input");
        const redStarPasswordError = document.getElementById("red-star-password-error");
        const redStarPasswordTitle = document.getElementById("red-star-password-title");
        const redStarPasswordPrompt = redStarPasswordDialog.querySelector(".club-picker-header p");
        const redStarPasswordSubmit = redStarPasswordForm.querySelector("button[type='submit']");
        const removePlayerStatsWatermarkButton = document.getElementById("remove-player-stats-watermark");
        const redStarAccessStorageKey = "pitchplan-red-star-unlocked";
        let pendingProtectedTemplate = null;
        const playerStatsWatermarkAction = "remove-player-stats-watermark";
        const brandLogoShapeOptions = document.querySelectorAll(".brand-logo-shape-option");
        const photoTextSizeField = document.getElementById("photo-text-size-field");
        const photoTextSizeInput = document.getElementById("photo-text-size");
        const photoTextSizeLabel = document.getElementById("photo-text-size-label");
        const photoTextSizeValue = document.getElementById("photo-text-size-value");
        const matchdayPosterControls = document.getElementById("matchday-poster-controls");
        const matchdayLeagueInput = document.getElementById("matchday-league");
        const matchdayRoundInput = document.getElementById("matchday-round");
        const matchdayStadiumInput = document.getElementById("matchday-stadium");
        const monthlyFixturesControls = document.getElementById("monthly-fixtures-controls");
        const monthlyClubSearchInput = document.getElementById("monthly-club-search");
        const monthlyFixturesPeriodInput = document.getElementById("monthly-fixtures-period");
        const monthlyClubStatus = document.getElementById("monthly-club-status");
        const monthlyClubResults = document.getElementById("monthly-club-results");
        const monthlyFixturesRefresh = document.getElementById("monthly-fixtures-refresh");
        const textColorInputs = {
            title: document.getElementById("title-color"),
            date: document.getElementById("date-color"),
            team: document.getElementById("team-color"),
            time: document.getElementById("time-color"),
            brand: document.getElementById("brand-color")
        };
        let currentTemplate = "jf";
        let rows = [];
        let monthlyClub = null;
        let monthlyClubPalette = null;
        let monthlyFixtures = [];
        let monthlyPeriod = "current-month";
        let monthlyFixtureLoadController = null;
        let monthlyClubSearchGeneration = 0;
        let monthlyClubSearchTimer = 0;
        let backgroundImage = null;
        let backgroundImagesByTemplate = new Map();
        const defaultPosterBackground = new Image();
        const playerStatsDefaultBackground = new Image();
        const todayResultsBackground = new Image();
        const telegramPosterLogo = new Image();
        const matchdayHomeLogo = new Image();
        const matchdayAwayLogo = new Image();
        const matchdayPremierLeagueLogo = new Image();
        let footballNewsEffectColor = footballNewsEffectColorInput.value;
        let photoQuoteColor = photoQuoteColorInput.value;
        let photoQuoteFontSize = Number(photoQuoteFontSizeInput.value);
        let footballNewsRatio = "5:6";
        let posterAspectRatios = {};
        let footballLuxLogoSize = 80;
        let nonLuxBrandLogoSize = brandLogoSizeInput.value;
        let brandLogoPositions = {};
        let photoTextSizes = { result: 100, "football-news": 100, "football-lux": 100, "football-stats": 100 };

        function normalizeBrandLogoSize(value, fallback = 200) {
            const numericValue = Number(value);
            if (!Number.isFinite(numericValue)) return fallback;
            return Math.min(500, Math.max(10, numericValue));
        }

        function syncBrandLogoSizeControl() {
            const currentValue = currentTemplate === "football-lux" ?
                normalizeBrandLogoSize(footballLuxLogoSize, 80) :
                normalizeBrandLogoSize(nonLuxBrandLogoSize, 200);
            if (currentTemplate === "football-lux") footballLuxLogoSize = currentValue;
            else nonLuxBrandLogoSize = String(currentValue);
            brandLogoSizeInput.min = "10";
            brandLogoSizeInput.max = "500";
            brandLogoSizeInput.step = "5";
            brandLogoSizeInput.value = String(currentValue);
            brandLogoSizeValue.textContent = `${currentValue}%`;
        }
        let playerStatsWatermarkEnabled = true;
        let matchlistColumns = 1;
        let todayResultsTheme = "current";
        let redStarTheme = "current";
        const redStarThemes = {
            current: {
                background: themes.sf.bg,
                row: themes.sf.row,
                timeBackground: themes.sf.timeBg,
                colors: themes.sf.textColors
            },
            green: {
                background: "#071400",
                row: "#f7f2ed",
                timeBackground: "#99F400",
                colors: { title: "#ffffff", date: "#99F400", team: "#171717", time: "#071400", brand: "#99F400" }
            },
            "white-blue": {
                background: "#f5f9ff",
                row: "#ffffff",
                timeBackground: "#03529D",
                colors: { title: "#03529D", date: "#03529D", team: "#10243a", time: "#ffffff", brand: "#03529D" }
            },
            "blue-red": {
                background: "#030C2E",
                row: "#0c1942",
                timeBackground: "#D90429",
                colors: { title: "#ffffff", date: "#D90429", team: "#ffffff", time: "#ffffff", brand: "#D90429" }
            }
        };
        const todayResultsThemes = {
            current: { accent: "#ff168b", overlay: "rgba(35, 0, 42, .34)", background: ["#390044", "#21002c", "#110018"], card: "rgba(43, 0, 51, .82)", score: "rgba(19, 0, 27, .9)", text: "#fff2fa", muted: "#f1b6d4" },
            "real-madrid": { accent: "#febe10", background: ["#00529f", "#074a8b", "#003b7a"], card: "rgba(255, 255, 255, .96)", score: "#00529f", text: "#003b7a", muted: "#febe10" },
            barcelona: { accent: "#edbb00", background: ["#07508a", "#062c5b", "#4b102f"], card: "rgba(0, 39, 104, .88)", score: "rgba(70, 0, 38, .94)", text: "#fff5dc", muted: "#f1c95a" },
            "man-city": { accent: "#6caddf", background: ["#268fbe", "#07577f", "#082a43"], card: "rgba(0, 54, 91, .86)", score: "rgba(0, 34, 61, .94)", text: "#ffffff", muted: "#b9e2f5" },
            laliga: { accent: "#ff593d", background: ["#8d263b", "#542038", "#21132f"], card: "rgba(71, 24, 45, .88)", score: "rgba(35, 12, 40, .94)", text: "#fff5ee", muted: "#ffc0a9" }
        };
        let brandLogo = null;
        let brandLogosByTemplate = new Map();
        let removedBrandLogosByTemplate = new Set();
        let leagueLogo = null;
        let brandLogoShape = "square";
        let customBrandLogo = false;
        let customBackgroundColor = false;
        let nonResultBackgroundOpacity = backgroundOpacityInput.value;
        const customTextColors = new Set();
        const isBrandLogoRemoved = (template = currentTemplate) => removedBrandLogosByTemplate.has(template);
        let posterHitRegions = [];
        let activeInlineTarget = null;
        let workspaceInitialized = false;
        let workspaceSaveTimer = 0;
        let workspaceSaveQueue = Promise.resolve();
        let workspaceDatabasePromise = null;
        let activeLogoPickerTarget = null;
        let selectedLeague = "all";
        const defaultBrandLogo = new Image();
        let clubRenderGeneration = 0;
        let loadNextClubBatch = null;
        let templatePreviewsRendered = false;
        let templatePreviewRenderScheduled = false;
        clubPickerContent.addEventListener("scroll", () => {
            if (!loadNextClubBatch ||
                clubPickerContent.scrollTop + clubPickerContent.clientHeight < clubPickerContent.scrollHeight - 360) return;
            const loadNextBatch = loadNextClubBatch;
            loadNextClubBatch = null;
            loadNextBatch();
        }, { passive: true });
        defaultPosterBackground.onload = () => {
            if (photoPosterTemplates.has(currentTemplate) && !backgroundImage &&
                !backgroundImagesByTemplate.has(currentTemplate)) {
                backgroundImage = getDefaultPosterBackground(currentTemplate);
                if (backgroundImage && workspaceInitialized) drawPoster();
            }
            templatePreviewsRendered = false;
            scheduleTemplatePreviews();
        };
        defaultPosterBackground.onerror = () => {
            statusEl.textContent = "Standart poster rasmi images/deffault.jpg yuklanmadi.";
        };
        defaultPosterBackground.src = "./images/deffault.jpg";
        playerStatsDefaultBackground.onload = () => {
            if (currentTemplate === "football-stats" && !backgroundImage &&
                !backgroundImagesByTemplate.has(currentTemplate)) {
                backgroundImage = playerStatsDefaultBackground;
                if (workspaceInitialized) drawPoster();
            }
            templatePreviewsRendered = false;
            scheduleTemplatePreviews();
        };
        playerStatsDefaultBackground.onerror = () => {
            console.error("Default player-stats background images/doku.jpg could not be loaded.");
            if (currentTemplate === "football-stats") {
                statusEl.textContent = "Player Stats uchun images/doku.jpg foni yuklanmadi.";
            }
        };
        playerStatsDefaultBackground.src = "./images/doku.jpg";
        todayResultsBackground.onload = () => {
            if (currentTemplate === "today-results" && workspaceInitialized) drawPoster();
            templatePreviewsRendered = false;
            scheduleTemplatePreviews();
        };
        todayResultsBackground.onerror = () => {
            console.error("Default today-results poster background images/bg.jpg could not be loaded.");
            if (currentTemplate === "today-results") {
                statusEl.textContent = "Bugungi natijalar uchun images/bg.jpg foni yuklanmadi.";
            }
        };
        todayResultsBackground.src = "./images/bg.jpg?v=2";
        telegramPosterLogo.onload = () => {
            if (currentTemplate === "telegram-promo" && workspaceInitialized) drawPoster();
            templatePreviewsRendered = false;
            scheduleTemplatePreviews();
        };
        telegramPosterLogo.onerror = () => {
            console.error("Telegram poster logo images/Telegram_logo.svg.webp could not be loaded.");
            if (currentTemplate === "telegram-promo") {
                statusEl.textContent = "Telegram logosi images/Telegram_logo.svg.webp faylidan yuklanmadi.";
            }
        };
        telegramPosterLogo.src = "./images/Telegram_logo.svg.webp";
        matchdayHomeLogo.onload = () => {
            const row = rows[0];
            if (currentTemplate === "matchday-poster" && row && !row.homeEdited && !row.homeLogoEdited) {
                row.homeLogo = matchdayHomeLogo;
                renderInputs();
                drawPoster();
            }
        };
        matchdayAwayLogo.onload = () => {
            const row = rows[0];
            if (currentTemplate === "matchday-poster" && row && !row.awayEdited && !row.awayLogoEdited) {
                row.awayLogo = matchdayAwayLogo;
                renderInputs();
                drawPoster();
            }
        };
        matchdayHomeLogo.src = "./images/epl/Liverpool-FC-logo-PNG-transparent-1024x1871.png";
        matchdayAwayLogo.src = "./images/epl/Manchester_City_FC_badge.svg.webp";
        matchdayPremierLeagueLogo.onload = () => {
            if (currentTemplate === "matchday-poster" && !customBrandLogo && !isBrandLogoRemoved()) {
                updateLogoPreview(brandLogoPreview, matchdayPremierLeagueLogo, "APL");
                drawPoster();
            }
        };
        matchdayPremierLeagueLogo.src = "./images/ligalar/english-premier-league.ee1e9b08.png";
        defaultBrandLogo.onload = () => {
            if (!customBrandLogo && !isBrandLogoRemoved() &&
                !["football-lux", "matchday-poster"].includes(currentTemplate)) brandLogo = defaultBrandLogo;
            rows.forEach(row => {
                if (!row.homeLogo) row.homeLogo = defaultBrandLogo;
                if (!row.awayLogo) row.awayLogo = defaultBrandLogo;
            });
            updateLogoPreview(brandLogoPreview, isBrandLogoRemoved() ? null :
                currentTemplate === "matchday-poster" && !customBrandLogo &&
                    matchdayPremierLeagueLogo.complete && matchdayPremierLeagueLogo.naturalWidth ? matchdayPremierLeagueLogo : brandLogo,
                currentTemplate === "football-lux" ? "KL" : currentTemplate === "matchday-poster" ? "APL" :
                    currentTemplate === "monthly-club-fixtures" ? "TV" : "PP");
            if (workspaceInitialized) {
                templatePreviewsRendered = false;
                scheduleTemplatePreviews();
                drawPoster();
            }
        };
        defaultBrandLogo.onerror = () => {
            statusEl.textContent = "Standart PitchPlan logosi yuklanmadi. O‘z logongizni yuklashingiz mumkin.";
        };
        defaultBrandLogo.src = "./images/Pitch.png";

        function getDefaultPosterBackground(template) {
            if (template === "football-stats") {
                return playerStatsDefaultBackground.complete && playerStatsDefaultBackground.naturalWidth ?
                    playerStatsDefaultBackground : null;
            }
            return defaultPosterBackground.complete && defaultPosterBackground.naturalWidth ?
                defaultPosterBackground : null;
        }

        function isDefaultPosterBackground(image) {
            return image === defaultPosterBackground || image === playerStatsDefaultBackground;
        }

        function setTemplate(name) {
            const previousTemplate = currentTemplate;
            if (previousTemplate === "football-lux") {
                footballLuxLogoSize = normalizeBrandLogoSize(brandLogoSizeInput.value, 80);
            } else {
                nonLuxBrandLogoSize = String(normalizeBrandLogoSize(brandLogoSizeInput.value, 200));
            }
            const nextSize = name === "football-lux" ?
                normalizeBrandLogoSize(footballLuxLogoSize, 80) :
                normalizeBrandLogoSize(nonLuxBrandLogoSize, 200);
            if (name === "football-lux") footballLuxLogoSize = nextSize;
            else nonLuxBrandLogoSize = String(nextSize);
            currentTemplate = name;
            syncBrandLogoSizeControl();
            if (previousTemplate && backgroundImage && !isDefaultPosterBackground(backgroundImage)) {
                backgroundImagesByTemplate.set(previousTemplate, backgroundImage);
            } else if (previousTemplate) {
                backgroundImagesByTemplate.delete(previousTemplate);
            }
            if (previousTemplate && customBrandLogo) {
                brandLogosByTemplate.set(previousTemplate, brandLogo);
            } else if (previousTemplate) {
                brandLogosByTemplate.delete(previousTemplate);
            }
            const newsTemplate = name === "football-news";
            const photoQuoteTemplate = name === "photo-quote";
            const luxTemplate = name === "football-lux";
            const telegramTemplate = name === "telegram-promo";
            const matchdayTemplate = name === "matchday-poster";
            const monthlyTemplate = name === "monthly-club-fixtures";
            const photoTemplate = photoPosterTemplates.has(name) && !matchdayTemplate;
            const previousPhotoTemplate = photoPosterTemplates.has(previousTemplate);
            if (photoTemplate && !previousPhotoTemplate) {
                nonResultBackgroundOpacity = backgroundOpacityInput.value;
            }
            if (!photoTemplate && previousPhotoTemplate) {
                backgroundOpacityInput.value = nonResultBackgroundOpacity;
                opacityValue.textContent = `${nonResultBackgroundOpacity}%`;
            }
            if (matchdayTemplate || monthlyTemplate) {
                backgroundOpacityInput.value = "100";
                opacityValue.textContent = "100%";
            }
            if (photoPosterTemplates.has(name) && !telegramTemplate && !matchdayTemplate && !monthlyTemplate && !photoQuoteTemplate) {
                const statsTemplate = name === "football-stats";
                photoTextSizeInput.min = statsTemplate ? "30" : "50";
                photoTextSizeInput.max = statsTemplate ? "100" : "160";
                photoTextSizeInput.step = "5";
                photoTextSizeLabel.textContent = photoQuoteTemplate ? "Pastki yozuv o‘lchami" :
                    statsTemplate ? "Brend yozuvi o‘lchami" :
                    name === "result" ? "Hisob o‘lchami" : "Asosiy matn o‘lchami";
                if (statsTemplate) {
                    photoTextSizes[name] = Math.min(100, Math.max(30, photoTextSizes[name]));
                }
                photoTextSizeInput.value = String(photoTextSizes[name]);
                photoTextSizeValue.textContent = `${photoTextSizes[name]}%`;
            }
            backgroundImage = backgroundImagesByTemplate.get(name) ||
                (photoPosterTemplates.has(name) ? getDefaultPosterBackground(name) : null);
            backgroundImageInput.value = "";
            brandLogo = isBrandLogoRemoved(name) ? null : brandLogosByTemplate.get(name) ||
                (name !== "football-lux" && !matchdayTemplate && !monthlyTemplate && defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null);
            customBrandLogo = !isBrandLogoRemoved(name) && brandLogosByTemplate.has(name);
            brandLogoInput.value = "";
            updateLogoPreview(brandLogoPreview, isBrandLogoRemoved(name) ? null :
                matchdayTemplate && !customBrandLogo && matchdayPremierLeagueLogo.complete && matchdayPremierLeagueLogo.naturalWidth ?
                    matchdayPremierLeagueLogo : brandLogo,
                matchdayTemplate ? "APL" : luxTemplate ? "KL" : monthlyTemplate ? "TV" : "PP");
            const example = examples[name];
            if (!example) return;
            applyTemplateDimensions(name);
            footballNewsEffectColorInput.value = footballNewsEffectColor;
            photoQuoteColorInput.value = photoQuoteColor;
            photoQuoteFontSizeInput.value = String(photoQuoteFontSize);
            titleInput.value = example.title;
            dateInput.value = example.date;
            const defaultTeamLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            if (name === "football-stats") {
                rows = example.rows.map(([value, label]) => [String(value || ""), String(label || "")]);
            } else {
                rows = example.rows.map(([home, time, away]) => ({
                    home,
                    time,
                    away,
                    homeLogo: matchdayTemplate && matchdayHomeLogo.complete && matchdayHomeLogo.naturalWidth ? matchdayHomeLogo : defaultTeamLogo,
                    awayLogo: matchdayTemplate && matchdayAwayLogo.complete && matchdayAwayLogo.naturalWidth ? matchdayAwayLogo : defaultTeamLogo
                }));
            }
            brandCaptionInput.value = normalizeBrandCaption(example.caption);
            matchdayLeagueInput.value = "APL";
            matchdayRoundInput.value = "6-tur";
            matchdayStadiumInput.value = "Enfild stadioni";
            const resultTemplate = name === "result";
            const matchlistTemplate = name === "matchlist" || name === "today-results";
            footballNewsControls.hidden = !newsTemplate;
            photoQuoteControls.hidden = !photoQuoteTemplate;
            matchlistLayoutControls.hidden = !matchlistTemplate;
            todayResultsThemeControls.hidden = name !== "today-results";
            redStarThemeControls.hidden = name !== "sf";
            matchdayPosterControls.hidden = !matchdayTemplate;
            monthlyFixturesControls.hidden = !monthlyTemplate;
            updateTodayResultsThemeOptions();
            document.getElementById("red-star-auto-field").hidden = name !== "sf";
            document.getElementById("today-results-auto-field").hidden = name !== "today-results";
            updateMatchlistLayoutOptions();
            document.getElementById("result-controls").hidden = !resultTemplate;
            document.getElementById("result-auto-field").hidden = !resultTemplate;
            const statsEditorTemplate = name === "football-stats";
            document.getElementById("poster-appearance-heading").hidden = newsTemplate || monthlyTemplate;
            document.getElementById("poster-brand-logo-field").hidden = false;
            document.getElementById("player-stats-watermark-field").hidden = !statsEditorTemplate;
            updatePlayerStatsWatermarkControl();
            document.getElementById("brand-logo-shape-field").hidden = matchdayTemplate;
            document.getElementById("poster-appearance-fields").hidden = false;
            document.getElementById("background-opacity-field").hidden = photoTemplate || matchdayTemplate;
            document.getElementById("text-colors-heading").hidden = newsTemplate || photoQuoteTemplate || luxTemplate || telegramTemplate || matchdayTemplate || monthlyTemplate || statsEditorTemplate;
            document.querySelector(".color-fields").hidden = newsTemplate || photoQuoteTemplate || luxTemplate || telegramTemplate || matchdayTemplate || monthlyTemplate || statsEditorTemplate;
            photoTextSizeField.hidden = !photoTemplate || telegramTemplate || monthlyTemplate || photoQuoteTemplate;
            document.getElementById("brand-logo-preview").title = photoQuoteTemplate || luxTemplate || matchdayTemplate || monthlyTemplate ? "Kanal logotipini yuklang" :
                newsTemplate ? "Pastki logoni yuklang" : telegramTemplate ? "Yuqori o‘ng burchakdagi logoni yuklang" : "Shaxsiy logoni yuklang";
            document.getElementById("poster-brand-logo-field").querySelector("label").textContent =
                photoQuoteTemplate ? "Yuqori o‘ng burchakdagi kanal logosi" :
                    luxTemplate || matchdayTemplate || monthlyTemplate ? "Kanal logosi" : newsTemplate ? "Pastki logo" :
                    telegramTemplate ? "Yuqori o‘ng burchakdagi logo" : "Poster logosi (shablonda alohida joylashadi)";
            document.getElementById("clear-brand-logo").textContent =
                "Standart logoni tiklash";
            document.getElementById("clear-brand-logo").hidden = monthlyTemplate;
            document.getElementById("background-image-field").querySelector("label").textContent =
                luxTemplate ? "Asosiy rasm" : matchdayTemplate ? "Stadion foni" : monthlyTemplate ? "Poster foni" : "Fon rasmi";
            document.getElementById("matches-hint").textContent = resultTemplate
                ? "Klub nomini yozing; logoni bosib katalogdan yoki qurilmadan tanlang."
                : name === "today-results" ? "Klub nomi, hisob va logo — o‘zingiz ham tahrirlang" : "Jamoa nomi, vaqt va logo";
            document.getElementById("matches-section-label").hidden = photoTemplate && !statsEditorTemplate && !resultTemplate;
            document.getElementById("matches-section-label").querySelector("strong").textContent =
                resultTemplate ? "Jamoa nomlari va logolari" : "Uchrashuvlar";
            rowsEl.hidden = photoTemplate && !statsEditorTemplate && !resultTemplate;
            document.querySelector(".editor-actions").hidden = (photoTemplate && !statsEditorTemplate) || matchdayTemplate || monthlyTemplate;
            ["row-color-field", "time-background-field"].forEach(id => {
                document.getElementById(id).hidden = photoTemplate || matchdayTemplate || monthlyTemplate;
            });
            document.getElementById("time-color-field").hidden = resultTemplate || newsTemplate || luxTemplate || telegramTemplate || matchdayTemplate || monthlyTemplate || statsEditorTemplate;
            document.getElementById("brand-color-field").hidden = resultTemplate || newsTemplate || luxTemplate || telegramTemplate || matchdayTemplate || monthlyTemplate || statsEditorTemplate;
            document.getElementById("brand-caption-field").hidden = resultTemplate || newsTemplate || photoQuoteTemplate || luxTemplate || matchdayTemplate;
            document.getElementById("brand-caption-field").querySelector("label").textContent =
                monthlyTemplate ? "Kanal nomi" : statsEditorTemplate ? "Poster brend yozuvi" : "Logo yonidagi yozuv";
            brandCaptionInput.placeholder = monthlyTemplate ? "Kanal nomini kiriting…" : "";
            if (monthlyTemplate) {
                document.getElementById("brand-logo-hint").textContent = "Kanal logosi posterning pastida ko‘rinadi.";
            }
            document.getElementById("brand-logo-size-field").hidden = telegramTemplate || matchdayTemplate || monthlyTemplate;
            document.getElementById("brand-logo-size-field").querySelector("label").childNodes[0].textContent =
                luxTemplate ? "Kanal logosi o‘lchami " : "Logo o‘lchami ";
            document.getElementById("editor-hint").hidden =
                (photoTemplate && !statsEditorTemplate && !resultTemplate) || matchdayTemplate || monthlyTemplate;
            document.getElementById("title-field").hidden = resultTemplate || telegramTemplate || matchdayTemplate;
            document.getElementById("date-field").hidden = resultTemplate || photoQuoteTemplate || luxTemplate || telegramTemplate || matchdayTemplate || monthlyTemplate;
            document.getElementById("date-field").style.gridColumn = "";
            document.getElementById("editor-hint").textContent = resultTemplate
                ? "Jamoa nomini maydonga yozib o‘zgartiring. Logo ustiga bosib klub katalogidan yoki qurilmangizdan boshqa rasm tanlang."
                : matchlistTemplate
                    ? "Jadval ko‘rinishini 1 yoki 2 ustun qilib tanlang."
                    : "Har bir jamoa logosi va shablon brend logosini alohida almashtiring. O‘yinlar 10 tadan oshsa jadval ikki ustunga joylashadi.";
            document.getElementById("title-field").querySelector("label").textContent =
                photoQuoteTemplate ? "Pastki yozuv" :
                    luxTemplate ? "Asosiy matn (Enter — yangi qator)" : newsTemplate ? "Asosiy matn" : "Sarlavha";
            titleInput.rows = luxTemplate || photoQuoteTemplate ? 3 : 1;
            titleInput.style.minHeight = luxTemplate || photoQuoteTemplate ? "78px" : "40px";
            titleInput.style.height = luxTemplate || photoQuoteTemplate ? "78px" : "40px";
            titleInput.style.resize = luxTemplate || photoQuoteTemplate ? "vertical" : "none";
            document.getElementById("date-field").querySelector("label").textContent = newsTemplate ? "Sana" : "Sana / izoh";
            titleInput.value = example.title;
            document.getElementById("time-color-label").textContent = resultTemplate || name === "today-results" ? "Hisob rangi" : "O‘yin vaqti";
            document.getElementById("brand-logo-hint").textContent = resultTemplate ?
                "PitchPlan logosi suratdagi 433 belgisi o‘rnida chiqadi." : example.logoPlacement;
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
            if (name === "sf") applyRedStarTheme();
            renderInputs();
            drawPoster();
        }

        function resetCurrentTemplate() {
            const template = currentTemplate;
            delete brandLogoPositions[template];
            if (template === "monthly-club-fixtures") {
                monthlyFixtureLoadController?.abort();
                monthlyClub = null;
                monthlyClubPalette = null;
                monthlyFixtures = [];
                monthlyPeriod = "current-month";
                monthlyFixturesPeriodInput.value = monthlyPeriod;
                monthlyClubSearchInput.value = "";
                monthlyClubStatus.textContent = "Klubni qidirish uchun nomini yozing.";
                monthlyClubResults.replaceChildren();
                monthlyFixturesRefresh.disabled = true;
            }
            backgroundImage = photoPosterTemplates.has(template) ? getDefaultPosterBackground(template) : null;
            backgroundImagesByTemplate.delete(template);
            brandLogo = null;
            customBrandLogo = false;
            brandLogosByTemplate.delete(template);
            removedBrandLogosByTemplate.delete(template);
            if (template === "football-news") {
                footballNewsEffectColor = "#000000";
                footballNewsRatio = "5:6";
            }
            if (template === "photo-quote") {
                photoQuoteColor = "#ffffff";
                photoQuoteColorInput.value = photoQuoteColor;
                photoQuoteFontSize = 46;
                photoQuoteFontSizeInput.value = String(photoQuoteFontSize);
            }
            delete posterAspectRatios[template];
            if (template === "sf") redStarTheme = "current";
            if (template === "football-stats") {
                playerStatsWatermarkEnabled = true;
                updatePlayerStatsWatermarkControl();
            }
            if (template === "football-lux") {
                footballLuxLogoSize = 80;
                nonLuxBrandLogoSize = String(normalizeBrandLogoSize(nonLuxBrandLogoSize, 200));
                syncBrandLogoSizeControl();
            }
            if (photoPosterTemplates.has(template) && template !== "telegram-promo" && template !== "photo-quote") {
                photoTextSizes[template] = 100;
                photoTextSizeInput.value = "100";
                photoTextSizeValue.textContent = "100%";
            }
            if (template === "matchlist") {
                matchlistColumns = 1;
            }
            if (template === "today-results") {
                todayResultsTheme = "current";
                updateTodayResultsThemeOptions();
            }
            if (template !== "result" && template !== "football-news" && template !== "football-lux") {
                nonResultBackgroundOpacity = "35";
                backgroundOpacityInput.value = "35";
                opacityValue.textContent = "35%";
            }
            setTemplate(template);
            statusEl.textContent = "Poster standart holatga qaytarildi.";
        }

        function applyTemplateDimensions(name) {
            const isNews = name === "football-news";
            const isLux = name === "football-lux";
            const isMatchday = name === "matchday-poster";
            const isStats = name === "football-stats";
            let dimensions = isMatchday ? { width: 900, height: 1200 } :
                name === "monthly-club-fixtures" ? {
                    width: 1000,
                    height: Math.max(1100, Math.ceil(monthlyFixtures.length / 3) * 190 + 500)
                } :
                    isLux ? { width: 1000, height: 1000 } : isNews ? footballNewsRatios[footballNewsRatio] :
                isStats ? { width: 900, height: 1200 } :
                name === "result" ? { width: 1000, height: 1000 } : { width: 1000, height: 1200 };
            let aspectRatio = isMatchday ? "3:4" : name === "monthly-club-fixtures" ? `1000:${dimensions.height}` :
                isLux || name === "result" ? "1:1" : isNews ? footballNewsRatio : isStats ? "3:4" : "5:6";
            const selectedRatio = posterAspectRatios[name];
            if (selectedRatio && selectedRatio !== "original") {
                const [ratioWidth, ratioHeight] = selectedRatio.split(":").map(Number);
                dimensions = { width: dimensions.width, height: Math.round(dimensions.width * ratioHeight / ratioWidth) };
                aspectRatio = selectedRatio;
            } else if (selectedRatio === "original" && backgroundImage?.naturalWidth && backgroundImage?.naturalHeight) {
                const ratio = backgroundImage.naturalWidth / backgroundImage.naturalHeight;
                dimensions = { width: dimensions.width, height: Math.round(dimensions.width / ratio) };
                aspectRatio = `${dimensions.width}:${dimensions.height}`;
                const maxDimension = 2400;
                if (dimensions.height > maxDimension) {
                    dimensions.width = Math.round(dimensions.width * maxDimension / dimensions.height);
                    dimensions.height = maxDimension;
                }
                if (dimensions.width > 1600) {
                    dimensions.height = Math.round(dimensions.height * 1600 / dimensions.width);
                    dimensions.width = 1600;
                }
                aspectRatio = `${dimensions.width}:${dimensions.height}`;
            }
            const separator = aspectRatio.indexOf(":");
            const aspectStyle = `${aspectRatio.slice(0, separator)} / ${aspectRatio.slice(separator + 1)}`;
            canvas.width = dimensions.width;
            canvas.height = dimensions.height;
            canvas.style.aspectRatio = aspectStyle;
            const exportScale = 2.16;
            document.getElementById("preview-dimensions").textContent =
                `JPG · ${Math.round(dimensions.width * exportScale)} × ${Math.round(dimensions.height * exportScale)} px · ${aspectRatio}`;
            posterRatioOptions.forEach(button => {
                const effectiveRatio = selectedRatio || (isNews ? footballNewsRatio :
                    isLux || name === "result" ? "1:1" : isStats || isMatchday ? "3:4" : "5:6");
                button.setAttribute("aria-pressed", String(button.dataset.ratio === effectiveRatio));
            });

            const templatePreview = document.querySelector(`[data-template="${name}"] .template-preview`);
            if (templatePreview) {
                templatePreview.width = 500;
                templatePreview.height = Math.round(500 * dimensions.height / dimensions.width);
                templatePreview.style.aspectRatio = aspectStyle;
            }
        }

        function updateMatchlistLayoutOptions() {
            matchlistLayoutOptions.forEach(button => {
                button.setAttribute("aria-pressed", String(Number(button.dataset.columns) === matchlistColumns));
            });
        }

        function updateTodayResultsThemeOptions() {
            todayResultsThemeOptions.forEach(button => {
                button.setAttribute("aria-pressed", String(button.dataset.resultsTheme === todayResultsTheme));
            });
        }

        function applyRedStarTheme() {
            const palette = redStarThemes[redStarTheme] || redStarThemes.current;
            backgroundColorInput.value = palette.background;
            rowColorInput.value = palette.row;
            timeBackgroundColorInput.value = palette.timeBackground;
            customTextColors.clear();
            Object.entries(palette.colors).forEach(([key, color]) => {
                textColorInputs[key].value = color;
            });
            redStarThemeOptions.forEach(button => {
                button.setAttribute("aria-pressed", String(button.dataset.sfTheme === redStarTheme));
            });
        }

        function updatePlayerStatsWatermarkControl() {
            removePlayerStatsWatermarkButton.disabled = !playerStatsWatermarkEnabled;
            removePlayerStatsWatermarkButton.textContent = playerStatsWatermarkEnabled ?
                "Watermarkni parol bilan olib tashlash" : "Watermark olib tashlangan";
        }

        function renderInputs() {
            rowsEl.replaceChildren();
            if (currentTemplate === "football-stats") {
                rows.forEach((row, index) => {
                    const item = document.createElement("div");
                    item.className = "match-row stat-editor-row";
                    const value = Array.isArray(row) ? row[0] : row.value || "";
                    const label = Array.isArray(row) ? row[1] : row.label || "";
                    item.innerHTML = `
                        <label class="stat-editor-field">
                            <span>Raqam ${index + 1}</span>
                            <input type="text" maxlength="20" value="${escapeHtml(value)}" aria-label="${index + 1}-statistik raqam">
                        </label>
                        <label class="stat-editor-field">
                            <span>Izoh ${index + 1}</span>
                            <input type="text" maxlength="30" value="${escapeHtml(label)}" aria-label="${index + 1}-statistik izoh">
                        </label>`;
                    const valueInput = item.querySelectorAll("input")[0];
                    const labelInput = item.querySelectorAll("input")[1];
                    valueInput.addEventListener("input", event => {
                        row[0] = event.target.value;
                        drawPoster();
                    });
                    labelInput.addEventListener("input", event => {
                        row[1] = event.target.value;
                        drawPoster();
                    });
                    rowsEl.append(item);
                });
                return;
            }
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
                item.querySelector(".remove-row").hidden = resultTemplate || currentTemplate === "matchday-poster";
                homeInput.addEventListener("input", event => {
                    row.home = event.target.value;
                    row.homeEdited = true;
                    homeLogoLabel.querySelector(".logo-fallback").textContent = row.home.slice(0, 2).toUpperCase();
                    drawPoster();
                });
                timeInput.addEventListener("input", event => { row.time = event.target.value; drawPoster(); });
                awayInput.addEventListener("input", event => {
                    row.away = event.target.value;
                    row.awayEdited = true;
                    awayLogoLabel.querySelector(".logo-fallback").textContent = row.away.slice(0, 2).toUpperCase();
                    drawPoster();
                });
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

        function isCustomTeamLogo(image) {
            if (!image) return false;
            const src = typeof image === "string" ? image : image.src || "";
            if (!src) return false;
            return src !== defaultBrandLogo.src && src !== "./images/Pitch.png";
        }

        function normalizeLogoLookupValue(value) {
            return String(value || "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/&/g, " and ")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, " ")
                .trim();
        }

        function resolveClubLogoUrlByName(teamName, preferredLeague = "") {
            const normalizedQuery = normalizeLogoLookupValue(teamName);
            if (!normalizedQuery) return "";
            const leagues = [];
            if (preferredLeague) leagues.push(preferredLeague);
            Object.keys(leagueLogoFolders).forEach(league => {
                if (!leagues.includes(league)) leagues.push(league);
            });
            for (const league of leagues) {
                const entries = leagueLogoFiles[league] || [];
                const match = entries.find(([name]) => {
                    const candidate = normalizeLogoLookupValue(name);
                    return candidate === normalizedQuery || candidate.includes(normalizedQuery) || normalizedQuery.includes(candidate);
                });
                if (match) {
                    const [, file] = match;
                    return new URL(`./images/${leagueLogoFolders[league]}/${encodeURIComponent(file)}`, document.baseURI).href;
                }
            }
            return "";
        }

        async function loadExportSafeImageSource(source) {
            if (!source) return null;
            let imageUrl;
            try {
                imageUrl = new URL(source, document.baseURI);
            } catch {
                return loadImageSource(source);
            }
            if (imageUrl.origin === window.location.origin || !/^https?:$/.test(imageUrl.protocol)) {
                return loadImageSource(source);
            }
            return new Promise(resolve => {
                const image = new Image();
                image.crossOrigin = "anonymous";
                image.onload = () => {
                    try {
                        const safeCanvas = document.createElement("canvas");
                        safeCanvas.width = image.naturalWidth;
                        safeCanvas.height = image.naturalHeight;
                        safeCanvas.getContext("2d").drawImage(image, 0, 0);
                        resolve(loadImageSource(safeCanvas.toDataURL("image/png")));
                    } catch (error) {
                        console.warn("External poster logo could not be made export-safe:", error);
                        resolve(null);
                    }
                };
                image.onerror = () => {
                    console.warn("External poster logo does not allow safe canvas export:", source);
                    resolve(null);
                };
                image.src = source;
            });
        }

        function getMonthlyClubPalette(image) {
            if (!image?.naturalWidth || !image?.naturalHeight) return null;
            const sampleCanvas = document.createElement("canvas");
            sampleCanvas.width = 32;
            sampleCanvas.height = 32;
            const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
            if (!sampleContext) return null;
            sampleContext.drawImage(image, 0, 0, sampleCanvas.width, sampleCanvas.height);
            const pixels = sampleContext.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
            const colorCounts = new Map();
            for (let index = 0; index < pixels.length; index += 4) {
                const [red, green, blue, alpha] = pixels.slice(index, index + 4);
                if (alpha < 160) continue;
                const maximum = Math.max(red, green, blue);
                const minimum = Math.min(red, green, blue);
                if (maximum < 48 || maximum - minimum < 28) continue;
                const key = [red, green, blue].map(channel => Math.min(255, Math.round(channel / 32) * 32)).join(",");
                colorCounts.set(key, (colorCounts.get(key) || 0) + 1);
            }
            const colors = [...colorCounts.entries()]
                .sort((first, second) => second[1] - first[1])
                .map(([color]) => color.split(",").map(Number));
            if (!colors.length) return null;
            const toHex = ([red, green, blue]) =>
                `#${[red, green, blue].map(channel => Math.max(0, Math.min(255, channel)).toString(16).padStart(2, "0")).join("")}`;
            const primary = colors[0];
            const secondary = colors.find(color =>
                Math.max(...color.map((channel, channelIndex) => Math.abs(channel - primary[channelIndex]))) > 80
            ) || primary;
            const darken = (color, factor) => toHex(color.map(channel => Math.round(channel * factor)));
            return {
                accent: toHex(primary),
                secondary: toHex(secondary),
                dark: darken(secondary, .19),
                deeper: darken(secondary, .1),
                card: darken(primary, .42)
            };
        }

        async function loadAutoTeamLogo(teamName, remoteSource, league) {
            const localLeague = {
                "eng.1": "premier-league",
                "esp.1": "laliga",
                "ita.1": "serie-a",
                "ger.1": "bundesliga",
                "fra.1": "ligue-1"
            }[league] || "";
            const localSource = resolveClubLogoUrlByName(teamName, localLeague);
            if (localSource) {
                try {
                    return await loadImageSource(localSource);
                } catch (error) {
                    console.warn(`Local logo for ${teamName} could not be loaded:`, error);
                }
            }
            return loadExportSafeImageSource(remoteSource);
        }

        function updateLogoPreview(label, image, fallback) {
            if (!label) return;
            label.querySelector("img")?.remove();
            const text = label.querySelector(".logo-fallback, .brand-logo-fallback");
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

        async function getRecentCompletedResultMatches() {
            const getter = window.getRecentCompletedMatchesForPoster || window.pitchplanRecentCompletedMatches;
            const refresher = window.fetchRecentCompletedMatchesForPoster;
            let matches = [];
            if (typeof getter === "function") {
                matches = getter().filter(match => match && (match.homeName || match.home?.name) && (match.awayName || match.away?.name));
            }
            if (matches.length) return matches;
            if (typeof refresher === "function") {
                await refresher();
                if (typeof getter === "function") {
                    matches = getter().filter(match => match && (match.homeName || match.home?.name) && (match.awayName || match.away?.name));
                }
            }
            return matches;
        }

        function parseNumericMatchScore(value) {
            if (typeof value === "number" && Number.isFinite(value)) return value;
            const asNumber = Number.parseInt(String(value ?? "0"), 10);
            return Number.isFinite(asNumber) ? asNumber : 0;
        }

        async function fetchAutoResultSummary(match) {
            if (!match?.league || !match?.id) return null;
            try {
                const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${match.league}/summary?event=${encodeURIComponent(match.id)}`, {
                    cache: "no-store"
                });
                if (!response.ok) throw new Error(`server ${response.status}`);
                const summary = await response.json();
                return summary || null;
            } catch (error) {
                console.warn("Auto result summary fetch failed:", error);
                return null;
            }
        }

        function extractGoalScorersFromSummary(summary, homeName, awayName) {
            const events = Array.isArray(summary?.keyEvents) ? summary.keyEvents :
                Array.isArray(summary?.commentary) ? summary.commentary.map(item => item.play || item) : [];
            const goalEvents = events.filter(event => {
                const type = String(event?.type?.type || event?.type?.text || "").toLowerCase();
                const text = String(event?.text || event?.shortText || "").toLowerCase();
                return /goal/.test(type) || /goal/.test(text) || /scored/.test(text) || event?.scoringPlay;
            });
            if (!goalEvents.length) return "";
            const normalizeLine = value => String(value ?? "").replace(/\s+/g, " ").trim();
            const homeNameKey = normalizeLine(homeName).toLowerCase();
            const awayNameKey = normalizeLine(awayName).toLowerCase();
            const matchEventToLine = event => {
                const participant = normalizeLine(
                    event?.participants?.[0]?.athlete?.displayName ||
                    event?.participants?.[0]?.athlete?.fullName ||
                    event?.participants?.[0]?.displayName ||
                    event?.participants?.[0]?.name ||
                    event?.team?.displayName ||
                    event?.team?.name ||
                    "Gol muallifi"
                );
                const minute = normalizeLine(
                    event?.clock?.displayValue ||
                    event?.time?.displayValue ||
                    event?.clock?.value ||
                    event?.period?.displayValue ||
                    ""
                );
                if (!participant) return "";
                return minute ? `${participant} ${minute}'` : participant;
            };
            const homeGoals = [];
            const awayGoals = [];
            goalEvents.forEach(event => {
                const teamName = normalizeLine(event?.team?.displayName || event?.team?.name || "").toLowerCase();
                const reportedSide = String(event?.homeAway || event?.team?.homeAway || event?.competitor?.homeAway || "").toLowerCase();
                const participant = normalizeLine(
                    event?.participants?.[0]?.athlete?.displayName ||
                    event?.participants?.[0]?.athlete?.fullName ||
                    event?.participants?.[0]?.displayName ||
                    event?.participants?.[0]?.name ||
                    ""
                );
                const line = matchEventToLine(event);
                if (!line) return;
                const isHome = reportedSide === "home" ||
                    (teamName && homeNameKey.includes(teamName)) ||
                    (teamName && teamName.includes(homeNameKey)) ||
                    (participant && participant.toLowerCase().includes(homeNameKey));
                const isAway = reportedSide === "away" ||
                    (teamName && awayNameKey.includes(teamName)) ||
                    (teamName && teamName.includes(awayNameKey)) ||
                    (participant && participant.toLowerCase().includes(awayNameKey));
                if (isHome && !isAway) homeGoals.push(line);
                else if (isAway && !isHome) awayGoals.push(line);
                else if (homeNameKey && !teamName && participant && participant.toLowerCase().includes(homeNameKey)) homeGoals.push(line);
                else if (awayNameKey && !teamName && participant && participant.toLowerCase().includes(awayNameKey)) awayGoals.push(line);
                else if (homeGoals.length + awayGoals.length === 0) homeGoals.push(line);
            });
            const dedupe = array => [...new Set(array.map(line => line.trim()).filter(Boolean))];
            const home = dedupe(homeGoals).slice(0, 7);
            const away = dedupe(awayGoals).slice(0, 7);
            const sections = [];
            if (home.length) sections.push(...home);
            if (home.length && away.length) {
                sections.push("|");
                sections.push(...away);
            } else if (away.length) {
                sections.unshift("|");
                sections.push(...away);
            }
            return sections.join("\n");
        }

        function getSummaryScore(summary, homeName, awayName) {
            const standings = summary?.header?.competitions?.[0]?.competitors ||
                summary?.boxscore?.teams ||
                [];
            if (!Array.isArray(standings) || !standings.length) return null;
            const homeTeam = standings.find(item => {
                const name = String(item?.team?.displayName || item?.team?.name || item?.homeAway || "").toLowerCase();
                return item?.homeAway === "home" || name.includes(homeName.toLowerCase()) || name === homeName.toLowerCase();
            }) || standings.find(item => item?.homeAway === "home") || standings[0];
            const awayTeam = standings.find(item => {
                const name = String(item?.team?.displayName || item?.team?.name || item?.homeAway || "").toLowerCase();
                return item?.homeAway === "away" || name.includes(awayName.toLowerCase()) || name === awayName.toLowerCase();
            }) || standings.find(item => item?.homeAway === "away") || standings[1] || standings[0];
            if (!homeTeam || !awayTeam) return null;
            const homeScore = parseNumericMatchScore(homeTeam.score ?? homeTeam?.statistics?.find(item => item?.name === "score")?.value);
            const awayScore = parseNumericMatchScore(awayTeam.score ?? awayTeam?.statistics?.find(item => item?.name === "score")?.value);
            if (!homeScore && !awayScore) return null;
            return { homeScore, awayScore };
        }

        async function applyAutoResultMatch(match) {
            const existingRow = rows[0] || {};
            const homeName = match.homeName || match.home?.name || "HOME";
            const awayName = match.awayName || match.away?.name || "AWAY";
            const manualHomeName = existingRow.homeEdited ? String(existingRow.home || "").trim() : "";
            const manualAwayName = existingRow.awayEdited ? String(existingRow.away || "").trim() : "";
            const manualHomeLogo = existingRow.homeLogoCustom && isCustomTeamLogo(existingRow.homeLogo) ? existingRow.homeLogo : null;
            const manualAwayLogo = existingRow.awayLogoCustom && isCustomTeamLogo(existingRow.awayLogo) ? existingRow.awayLogo : null;

            const summary = await fetchAutoResultSummary(match);
            const summaryScores = getSummaryScore(summary, homeName, awayName);
            const homeScore = parseNumericMatchScore(summaryScores?.homeScore ?? match.homeScore ?? match.home?.score);
            const awayScore = parseNumericMatchScore(summaryScores?.awayScore ?? match.awayScore ?? match.away?.score);
            const scoreText = `${homeScore} - ${awayScore}`;
            const resultDate = match.date ? new Date(match.date) : new Date();
            const scorerText = extractGoalScorersFromSummary(summary, homeName, awayName);
            const [homeLogo, awayLogo, leagueImage] = await Promise.all([
                loadAutoTeamLogo(homeName, match.homeLogo || match.home?.logo || "", match.league),
                loadAutoTeamLogo(awayName, match.awayLogo || match.away?.logo || "", match.league),
                loadImageSource(match.leagueLogo || "")
            ]);
            rows = [{
                home: manualHomeName || homeName,
                time: scoreText,
                away: manualAwayName || awayName,
                homeLogo: manualHomeLogo || homeLogo || null,
                awayLogo: manualAwayLogo || awayLogo || null,
                homeLogoCustom: Boolean(manualHomeLogo),
                awayLogoCustom: Boolean(manualAwayLogo),
                homeEdited: Boolean(manualHomeName),
                awayEdited: Boolean(manualAwayName)
            }];
            leagueLogo = leagueImage || null;
            titleInput.value = "";
            dateInput.value = resultDate.toLocaleDateString("uz-UZ", { day: "2-digit", month: "2-digit", year: "numeric" });
            brandCaptionInput.value = normalizeBrandCaption(match.leagueName || "pitchplan.uz");
            goalScorersInput.value = scorerText;
            updateLogoPreview(leagueLogoPreview, leagueLogo, "PL");
            renderInputs();
            drawPoster();
            autoResultOptions.hidden = true;
            const logoWarning = (!homeLogo && !manualHomeLogo) || (!awayLogo && !manualAwayLogo)
                ? " Ayrim logolar yuklanmadi; poster saqlashda xatolik bo‘lmasligi uchun nom bosh harflari ko‘rsatiladi."
                : "";
            statusEl.textContent = `${rows[0].home} ${scoreText} ${rows[0].away} posterga kiritildi.${logoWarning}`;
        }

        async function renderAutoResultMatches() {
            const matches = await getRecentCompletedResultMatches();
            autoResultOptions.replaceChildren();
            if (!matches.length) {
                const empty = document.createElement("p");
                empty.className = "result-auto-empty";
                empty.textContent = "So‘nggi yakunlangan o‘yinlar topilmadi.";
                autoResultOptions.append(empty);
                autoResultOptions.hidden = false;
                return;
            }
            matches.forEach(match => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "result-auto-option";
                const homeName = match.homeName || match.home?.name || "Home";
                const awayName = match.awayName || match.away?.name || "Away";
                const homeScore = parseNumericMatchScore(match.homeScore ?? match.home?.score);
                const awayScore = parseNumericMatchScore(match.awayScore ?? match.away?.score);
                const score = `${homeScore} - ${awayScore}`;
                const schedule = new Date(match.date || Date.now());
                const heading = document.createElement("strong");
                heading.textContent = `${homeName} ${score} ${awayName}`;
                const meta = document.createElement("small");
                meta.textContent = `${match.leagueName || "League"} · ${schedule.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
                button.append(heading, meta);
                button.addEventListener("click", () => applyAutoResultMatch(match));
                autoResultOptions.append(button);
            });
            autoResultOptions.hidden = false;
        }

        function renderClubLogoChoices() {
            const generation = ++clubRenderGeneration;
            loadNextClubBatch = null;
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
                    image.src = new URL(`./images/${club.folder}/${encodeURIComponent(club.file)}`, document.baseURI).href;
                    image.alt = "";
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
                }
                if (batchEnd < filteredClubs.length) {
                    loadNextClubBatch = () => renderBatch(batchEnd);
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
            target.row[`${target.key}Custom`] = true;
            target.row[target.key === "homeLogo" ? "homeLogoEdited" : "awayLogoEdited"] = true;
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

        function fitText(text, maxWidth, startSize, weight = 700, minSize = 11, fontFamily = "Segoe UI") {
            let size = startSize;
            ctx.font = `${weight} ${size}px "${fontFamily}", Arial, sans-serif`;
            while (ctx.measureText(text).width > maxWidth && size > minSize) {
                size -= 1;
                ctx.font = `${weight} ${size}px "${fontFamily}", Arial, sans-serif`;
            }
            return size;
        }

        function drawImageContain(image, x, y, width, height) {
            const scale = Math.min(width / image.width, height / image.height);
            const drawWidth = image.width * scale;
            const drawHeight = image.height * scale;
            ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
        }

        function drawImageContainWithOutline(image, x, y, width, height, outlineWidth) {
            const imageScale = Math.min(width / image.width, height / image.height);
            const drawWidth = image.width * imageScale;
            const drawHeight = image.height * imageScale;
            const drawX = x + (width - drawWidth) / 2;
            const drawY = y + (height - drawHeight) / 2;
            const padding = Math.ceil(outlineWidth) + 1;
            const silhouette = document.createElement("canvas");
            silhouette.width = Math.ceil(drawWidth) + padding * 2;
            silhouette.height = Math.ceil(drawHeight) + padding * 2;
            const silhouetteContext = silhouette.getContext("2d");
            silhouetteContext.drawImage(image, padding, padding, drawWidth, drawHeight);
            silhouetteContext.globalCompositeOperation = "source-in";
            silhouetteContext.fillStyle = "#ffffff";
            silhouetteContext.fillRect(0, 0, silhouette.width, silhouette.height);

            ctx.save();
            for (let step = 0; step < 16; step += 1) {
                const angle = (Math.PI * 2 * step) / 16;
                ctx.drawImage(
                    silhouette,
                    drawX - padding + Math.cos(angle) * outlineWidth,
                    drawY - padding + Math.sin(angle) * outlineWidth
                );
            }
            ctx.restore();
            ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
        }

        function drawImageCover(image, x, y, width, height) {
            const scale = Math.max(width / image.width, height / image.height);
            const drawWidth = image.width * scale;
            const drawHeight = image.height * scale;
            ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
        }

        function drawImageWithLogoShape(image, x, y, width, height, shape = brandLogoShape) {
            if (shape === "circle") {
                const radius = Math.min(width, height) / 2;
                ctx.save();
                ctx.beginPath();
                ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2);
                ctx.clip();
                drawImageContain(image, x, y, width, height);
                ctx.restore();
                return;
            }
            drawImageContain(image, x, y, width, height);
        }

        function updateBrandLogoShapeOptions() {
            brandLogoShapeOptions.forEach(button => {
                const active = button.dataset.brandShape === brandLogoShape;
                button.classList.toggle("is-active", active);
                button.setAttribute("aria-pressed", String(active));
            });
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
            if (type === "brandLogo" && isBrandLogoRemoved()) return;
            if (type === "brandLogo") {
                const offset = getBrandLogoOffset();
                x += offset.x;
                y += offset.y;
            }
            posterHitRegions.push({ type, x, y, width, height, rowIndex });
        }

        function getBrandLogoOffset(template = currentTemplate) {
            const position = brandLogoPositions[template] || { x: 0, y: 0 };
            return { x: position.x * canvas.width, y: position.y * canvas.height };
        }

        function drawPositionedBrandImage(image, x, y, width, height) {
            const offset = getBrandLogoOffset();
            drawImageWithLogoShape(image, x + offset.x, y + offset.y, width, height);
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
            else if (target.type === "homeGoals" || target.type === "awayGoals") {
                const goals = getGoalColumns();
                goals[target.type === "homeGoals" ? "home" : "away"] = value;
                goalScorersInput.value = [goals.home, goals.away].filter(Boolean).join("\n|\n");
            }
            else {
                const row = rows[target.rowIndex];
                if (!row) return;
                row[target.type] = value;
                if (target.type === "home") row.homeEdited = true;
                if (target.type === "away") row.awayEdited = true;
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
            if (canvas.dataset.brandLogoDragged === "true") {
                delete canvas.dataset.brandLogoDragged;
                return;
            }
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

        let brandLogoDrag = null;
        canvas.addEventListener("pointerdown", event => {
            if (!expandedPreview.open || !customBrandLogo || !brandLogo) return;
            const rect = canvas.getBoundingClientRect();
            const x = (event.clientX - rect.left) * canvas.width / rect.width;
            const y = (event.clientY - rect.top) * canvas.height / rect.height;
            const logoRegion = [...posterHitRegions].reverse().find(region =>
                region.type === "brandLogo" &&
                x >= region.x && x <= region.x + region.width &&
                y >= region.y && y <= region.y + region.height
            );
            if (!logoRegion) return;
            const offset = getBrandLogoOffset();
            brandLogoDrag = {
                pointerId: event.pointerId,
                startClientX: event.clientX,
                startClientY: event.clientY,
                startOffsetX: offset.x,
                startOffsetY: offset.y,
                regionX: logoRegion.x - offset.x,
                regionY: logoRegion.y - offset.y,
                regionWidth: logoRegion.width,
                regionHeight: logoRegion.height,
                moved: false
            };
            canvas.setPointerCapture(event.pointerId);
        });
        canvas.addEventListener("pointermove", event => {
            if (!brandLogoDrag || brandLogoDrag.pointerId !== event.pointerId) return;
            const rect = canvas.getBoundingClientRect();
            const deltaX = (event.clientX - brandLogoDrag.startClientX) * canvas.width / rect.width;
            const deltaY = (event.clientY - brandLogoDrag.startClientY) * canvas.height / rect.height;
            if (!brandLogoDrag.moved && Math.hypot(deltaX, deltaY) < 4) return;
            brandLogoDrag.moved = true;
            const minX = -brandLogoDrag.regionX;
            const minY = -brandLogoDrag.regionY;
            const maxX = canvas.width - brandLogoDrag.regionX - brandLogoDrag.regionWidth;
            const maxY = canvas.height - brandLogoDrag.regionY - brandLogoDrag.regionHeight;
            const offsetX = Math.min(maxX, Math.max(minX, brandLogoDrag.startOffsetX + deltaX));
            const offsetY = Math.min(maxY, Math.max(minY, brandLogoDrag.startOffsetY + deltaY));
            brandLogoPositions[currentTemplate] = {
                x: offsetX / canvas.width,
                y: offsetY / canvas.height
            };
            canvas.classList.add("is-dragging-logo");
            drawPoster();
        });
        function finishBrandLogoDrag(event) {
            if (!brandLogoDrag || brandLogoDrag.pointerId !== event.pointerId) return;
            if (brandLogoDrag.moved) {
                canvas.dataset.brandLogoDragged = "true";
                scheduleWorkspaceSave();
            }
            brandLogoDrag = null;
            canvas.classList.remove("is-dragging-logo");
        }
        canvas.addEventListener("pointerup", finishBrandLogoDrag);
        canvas.addEventListener("pointercancel", finishBrandLogoDrag);

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

            if (backgroundImage && currentTemplate !== "matchlist") {
                ctx.save();
                ctx.globalAlpha = Number(backgroundOpacityInput.value) / 100;
                drawImageCover(backgroundImage, 0, 0, width, height);
                ctx.restore();
            }
            if (currentTemplate === "sf") drawSfPoster(theme, width, height);
            else if (currentTemplate === "pro") drawProPoster(theme, width, height);
            else if (currentTemplate === "result") drawResultPoster(theme, width, height);
            else if (currentTemplate === "football-news") drawFootballNewsPoster(width, height);
            else if (currentTemplate === "photo-quote") drawPhotoQuotePoster(width, height);
            else if (currentTemplate === "football-lux") drawFootballLuxPoster(width, height);
            else if (currentTemplate === "football-stats") drawPlayerStatsPoster(width, height);
            else if (currentTemplate === "telegram-promo") drawTelegramPromoPoster(width, height);
            else if (currentTemplate === "matchday-poster") drawMatchdayPoster(width, height);
            else if (currentTemplate === "monthly-club-fixtures") drawMonthlyClubFixturesPoster(width, height);
            else if (currentTemplate === "today-results") drawTodayResultsPoster(width, height);
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

        function drawPhotoQuoteGlassPanel(
            x,
            y,
            boxWidth,
            boxHeight,
            radius,
            scale,
            backdrop = null,
            drawPanelPath = null,
            drawInnerPath = null
        ) {
            const padding = 16 * scale;
            const logicalGlassWidth = boxWidth + padding * 2;
            const logicalGlassHeight = boxHeight + padding * 2;
            const transform = ctx.getTransform();
            const renderScale = Math.hypot(transform.a, transform.b) || 1;
            const logicalCanvasWidth = ctx.canvas.width / renderScale;
            const logicalCanvasHeight = ctx.canvas.height / renderScale;
            const glassBackdrop = backdrop || ctx.canvas;
            const backdropScaleX = glassBackdrop.width / logicalCanvasWidth;
            const backdropScaleY = glassBackdrop.height / logicalCanvasHeight;
            const glassCanvas = document.createElement("canvas");
            glassCanvas.width = Math.ceil(logicalGlassWidth * backdropScaleX);
            glassCanvas.height = Math.ceil(logicalGlassHeight * backdropScaleY);
            const glassContext = glassCanvas.getContext("2d");
            if (!glassContext) throw new Error("Shisha fon panelini chizib bo‘lmadi.");

            const glassFilter = "url(#photo-quote-glass-filter) saturate(1.35)";
            glassContext.filter = glassFilter;
            if (glassContext.filter !== glassFilter) {
                glassContext.filter = `blur(${2 * scale}px) saturate(1.2)`;
            }
            glassContext.drawImage(
                glassBackdrop,
                (x - padding) * backdropScaleX,
                (y - padding) * backdropScaleY,
                glassCanvas.width,
                glassCanvas.height,
                0,
                0,
                glassCanvas.width,
                glassCanvas.height
            );

            const drawPath = () => {
                if (drawPanelPath) {
                    drawPanelPath();
                } else {
                    ctx.roundRect(x, y, boxWidth, boxHeight, radius);
                }
            };
            ctx.save();
            ctx.beginPath();
            drawPath();
            ctx.clip();
            ctx.drawImage(
                glassCanvas,
                x - padding,
                y - padding,
                logicalGlassWidth,
                logicalGlassHeight
            );
            ctx.fillStyle = "rgba(0,0,0,0.02)";
            ctx.fillRect(x, y, boxWidth, boxHeight);
            const inset = ctx.createLinearGradient(0, y, 0, y + boxHeight);
            inset.addColorStop(0, "rgba(255,255,255,0.22)");
            inset.addColorStop(.28, "rgba(255,255,255,0.05)");
            inset.addColorStop(.72, "rgba(12,16,24,0.025)");
            inset.addColorStop(1, "rgba(12,16,24,0.10)");
            ctx.fillStyle = inset;
            ctx.fillRect(x, y, boxWidth, boxHeight);
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            drawPath();
            ctx.shadowColor = "rgba(0,0,0,0.20)";
            ctx.shadowBlur = 8 * scale;
            ctx.shadowOffsetY = 4 * scale;
            ctx.strokeStyle = "rgba(0,0,0,0.12)";
            ctx.lineWidth = 1 * scale;
            ctx.stroke();
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
            ctx.shadowOffsetY = 0;
            const edgeShine = ctx.createLinearGradient(x, y, x + boxWidth, y + boxHeight);
            edgeShine.addColorStop(0, "rgba(255,255,255,0.9)");
            edgeShine.addColorStop(.15, "rgba(255,255,255,0.25)");
            edgeShine.addColorStop(.5, "rgba(255,255,255,0.12)");
            edgeShine.addColorStop(.85, "rgba(255,255,255,0.32)");
            edgeShine.addColorStop(1, "rgba(255,255,255,0.82)");
            ctx.beginPath();
            drawPath();
            ctx.strokeStyle = edgeShine;
            ctx.lineWidth = 1.6 * scale;
            ctx.stroke();

            ctx.beginPath();
            if (drawInnerPath) {
                drawInnerPath();
            } else {
                ctx.roundRect(
                    x + 3 * scale,
                    y + 3 * scale,
                    boxWidth - 6 * scale,
                    boxHeight - 6 * scale,
                    Math.max(0, radius - 3 * scale)
                );
            }
            ctx.strokeStyle = "rgba(255,255,255,0.28)";
            ctx.lineWidth = 1 * scale;
            ctx.stroke();
            ctx.restore();
        }

        function drawPlayerStatsPoster(width, height) {
            const scale = width / 1000;
            const imageFade = ctx.createLinearGradient(0, height * 0.38, 0, height);
            imageFade.addColorStop(0, "rgba(7, 10, 15, 0.00)");
            imageFade.addColorStop(0.28, "rgba(7, 10, 15, 0.10)");
            imageFade.addColorStop(0.7, "rgba(7, 10, 15, 0.55)");
            imageFade.addColorStop(1, "rgba(7, 10, 15, 0.96)");
            if (backgroundImage && backgroundImage.complete && backgroundImage.naturalWidth) {
                ctx.save();
                ctx.globalAlpha = 0.92;
                drawImageCover(backgroundImage, 0, 0, width, height);
                ctx.fillStyle = imageFade;
                ctx.fillRect(0, 0, width, height);
                ctx.restore();
            } else {
                const fallback = ctx.createLinearGradient(0, 0, width, height);
                fallback.addColorStop(0, "#1b2a2c");
                fallback.addColorStop(0.28, "#111d24");
                fallback.addColorStop(1, "#050a11");
                ctx.fillStyle = fallback;
                ctx.fillRect(0, 0, width, height);
            }
            const dark = ctx.createLinearGradient(0, height * 0.45, 0, height);
            dark.addColorStop(0, "rgba(6, 10, 18, 0.00)");
            dark.addColorStop(0.45, "rgba(6, 10, 18, 0.18)");
            dark.addColorStop(1, "rgba(6, 10, 18, 0.82)");
            ctx.fillStyle = dark;
            ctx.fillRect(0, 0, width, height);

            const captionText = formatBrandCaption(brandCaptionInput.value || examples["football-stats"].caption || "pitchplan.uz") || "pitchplan.uz";
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = `900 ${78 * scale * photoTextSizes["football-stats"] / 100}px "Segoe UI", Arial, sans-serif`;
            const captionX = 42 * scale;
            const captionY = 82 * scale;
            const captionWidth = ctx.measureText(captionText).width;
            ctx.fillText(captionText, captionX, captionY);
            addPosterHitRegion("caption", captionX, captionY - 38 * scale, Math.min(captionWidth + 18 * scale, width * .5), 58 * scale);

            const title = (titleInput.value || "Elliot Anderson").trim();
            const subtitle = (dateInput.value || "Liverpool'ga qarshi").trim();
            const infoY = 680 * scale;
            const infoW = 708 * scale;
            const infoX = (width - infoW) / 2;
            const infoH = 128 * scale;
            const infoRadius = infoH / 2;
            drawPhotoQuoteGlassPanel(infoX, infoY, infoW, infoH, infoRadius, scale);

            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#ffffff";
            ctx.font = `800 ${50 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.shadowColor = "rgba(0,0,0,0.88)";
            ctx.shadowBlur = 8 * scale;
            ctx.shadowOffsetY = 2 * scale;
            ctx.fillText(title, width / 2, infoY + 40 * scale);
            ctx.font = `700 ${36 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "rgba(0,0,0,0.88)";
            ctx.shadowBlur = 7 * scale;
            ctx.fillText(subtitle, width / 2, infoY + 88 * scale);
            ctx.restore();

            const stats = Array.isArray(rows) && rows.length ? rows : defaultPlayerStatsRows;
            const listY = 860 * scale;
            const statScale = 0.9;
            const statWidth = 226 * scale * statScale;
            const statGap = 18 * scale;
            const boxHeight = 118 * scale * statScale;
            const totalWidth = 3 * statWidth + 2 * statGap;
            const startX = (width - totalWidth) / 2;
            const boxes = stats.slice(0, 6);
            boxes.forEach((item, index) => {
                const col = index % 3;
                const rowIndex = Math.floor(index / 3);
                const x = startX + col * (statWidth + statGap);
                const y = listY + rowIndex * (boxHeight + 22 * scale);
                drawPhotoQuoteGlassPanel(x, y, statWidth, boxHeight, 30 * scale, scale);

                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#ffffff";
                ctx.font = `900 ${40 * scale}px "Segoe UI", Arial, sans-serif`;
                const valueText = String(Array.isArray(item) ? item[0] : item.value || "");
                ctx.fillText(valueText, x + statWidth / 2, y + 38 * scale, statWidth - 18 * scale);
                const labelText = String(Array.isArray(item) ? item[1] : item.label || "").trim().toUpperCase();
                const labelMaxWidth = statWidth - 20 * scale;
                const labelFontSize = fitText(labelText, labelMaxWidth, 22 * scale, 700, 10 * scale, "Segoe UI");
                ctx.font = `700 ${labelFontSize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillStyle = "rgba(235,255,240,0.96)";
                ctx.fillText(labelText, x + statWidth / 2, y + 88 * scale, labelMaxWidth);
            });

            const badgeWidth = 190 * scale;
            const badgeY = (listY + (boxHeight + 22 * scale) * 2 + boxHeight + 2 * scale);
            const brandLogoScale = Number(brandLogoSizeInput.value) / 100;
            const scaledBadgeWidth = badgeWidth * brandLogoScale;
            const scaledBadgeHeight = 64 * scale * brandLogoScale;
            const scaledBadgeX = width / 2 - scaledBadgeWidth / 2;
            const scaledBadgeY = badgeY + (64 * scale - scaledBadgeHeight) / 2;
            if (brandLogo && brandLogo.complete && brandLogo.naturalWidth) {
                ctx.save();
                ctx.shadowBlur = 20 * scale;
                ctx.shadowColor = "rgba(0,0,0,0.38)";
                drawPositionedBrandImage(brandLogo, scaledBadgeX, scaledBadgeY, scaledBadgeWidth, scaledBadgeHeight);
                ctx.restore();
            } else {
                ctx.save();
                ctx.fillStyle = "rgba(255,255,255,0.10)";
                ctx.beginPath();
                ctx.roundRect(scaledBadgeX, scaledBadgeY, scaledBadgeWidth, scaledBadgeHeight, 18 * scale * brandLogoScale);
                ctx.fill();
                ctx.restore();
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = `900 ${30 * scale * brandLogoScale}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText("pitchplan.uz", width / 2, badgeY + 32 * scale, scaledBadgeWidth);
            }
            addPosterHitRegion("brandLogo", scaledBadgeX, scaledBadgeY, scaledBadgeWidth, scaledBadgeHeight);
            if (playerStatsWatermarkEnabled) {
                if (defaultBrandLogo.complete && defaultBrandLogo.naturalWidth) {
                    const watermarkWidth = 104 * scale;
                    const watermarkHeight = 66 * scale;
                    const watermarkX = width - watermarkWidth - 18 * scale;
                    const watermarkY = (height - watermarkHeight) / 2;
                    drawPhotoQuoteGlassPanel(watermarkX, watermarkY, watermarkWidth, watermarkHeight, 18 * scale, scale);
                    ctx.save();
                    ctx.globalAlpha = 1;
                    const logoInsetX = watermarkWidth * 0.08;
                    const logoInsetY = watermarkHeight * 0.08;
                    drawImageContainWithOutline(
                        defaultBrandLogo,
                        watermarkX + logoInsetX,
                        watermarkY + logoInsetY,
                        watermarkWidth - logoInsetX * 2,
                        watermarkHeight - logoInsetY * 2,
                        1.5 * scale
                    );
                    ctx.restore();
                }
            }
        }

        function drawPhotoQuotePoster(width, height) {
            const scale = Math.min(width / 1000, height / 1200);
            const quote = titleInput.value.trim();
            const logoScale = Number(brandLogoSizeInput.value) / 100;
            const logoSize = Math.min(230 * scale, Math.max(70 * scale, 116 * scale * logoScale));
            const logoX = width - 46 * scale - logoSize;
            const logoY = 42 * scale;
            const logoOffset = getBrandLogoOffset();

            if (brandLogo && brandLogo.complete && brandLogo.naturalWidth) {
                drawPositionedBrandImage(brandLogo, logoX, logoY, logoSize, logoSize);
            }
            addPosterHitRegion("brandLogo", logoX, logoY, logoSize, logoSize);

            const panelWidth = width * .86;
            const panelX = (width - panelWidth) / 2;
            const horizontalPadding = 24 * scale;
            const verticalPadding = 16 * scale;
            const maxTextWidth = panelWidth - horizontalPadding * 2;
            let fontSize = photoQuoteFontSize * scale;
            let lines = [];
            const wrapText = () => {
                ctx.font = `800 ${fontSize}px "Segoe UI", Arial, sans-serif`;
                const wrapped = [];
                quote.split(/\r?\n/).forEach(paragraph => {
                    let line = "";
                    paragraph.split(/\s+/).filter(Boolean).forEach(word => {
                        const candidate = line ? `${line} ${word}` : word;
                        if (line && ctx.measureText(candidate).width > maxTextWidth) {
                            wrapped.push(line);
                            line = word;
                        } else {
                            line = candidate;
                        }
                    });
                    wrapped.push(line);
                });
                return wrapped;
            };
            lines = wrapText();
            const maxPanelHeight = Math.min(height * .25, 230 * scale);
            while (fontSize > 20 * scale &&
                (lines.length > 3 ||
                    lines.length * fontSize * 1.18 + verticalPadding * 2 > maxPanelHeight)) {
                fontSize -= 2 * scale;
                lines = wrapText();
            }
            if (lines.length > 3) {
                lines.length = 3;
                lines[2] = `${lines[2].replace(/[.,;:\s]+$/, "")}…`;
            }
            const lineHeight = fontSize * 1.18;
            const panelHeight = Math.min(
                maxPanelHeight,
                Math.max(56 * scale, lines.length * lineHeight + verticalPadding * 2)
            );
            const panelY = height - panelHeight - 52 * scale;
            const radius = Math.min(panelHeight * .48, panelWidth / 2);
            drawPhotoQuoteGlassPanel(panelX, panelY, panelWidth, panelHeight, radius, scale);
            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = photoQuoteColor;
            ctx.shadowColor = "rgba(0,0,0,0.88)";
            ctx.shadowBlur = 8 * scale;
            ctx.shadowOffsetY = 2 * scale;
            const textTop = panelY + (panelHeight - lineHeight * lines.length) / 2 + lineHeight / 2;
            lines.forEach((line, index) => {
                ctx.fillText(line, width / 2, textTop + index * lineHeight, maxTextWidth);
            });
            ctx.restore();
            addPosterHitRegion("title", panelX + 20 * scale, panelY, panelWidth - 40 * scale, panelHeight);
        }

        function drawFootballNewsPoster(width, height) {
            const scale = Math.min(width / 1000, height / 1200);
            const footerTop = height * .82;
            const color = footballNewsEffectColor;
            const red = Number.parseInt(color.slice(1, 3), 16);
            const green = Number.parseInt(color.slice(3, 5), 16);
            const blue = Number.parseInt(color.slice(5, 7), 16);
            const effectColor = alpha => `rgba(${red},${green},${blue},${alpha})`;

            if (!backgroundImage) {
                const background = ctx.createLinearGradient(0, 0, 0, height);
                background.addColorStop(0, "#294151");
                background.addColorStop(.48, "#102230");
                background.addColorStop(.7, "#080b0d");
                background.addColorStop(1, "#030303");
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
                ctx.fillStyle = "rgba(229,35,55,.2)";
                ctx.beginPath();
                ctx.arc(width * .72, height * .3, width * .24, 0, Math.PI * 2);
                ctx.fill();
            }

            const fade = ctx.createLinearGradient(0, height * .31, 0, height);
            fade.addColorStop(0, effectColor(0));
            fade.addColorStop(.38, effectColor(.52));
            fade.addColorStop(.72, effectColor(.96));
            fade.addColorStop(1, color);
            ctx.fillStyle = fade;
            ctx.fillRect(0, height * .31, width, height * .69);

            const date = dateInput.value.trim();
            if (date) {
                ctx.font = `500 ${25 * scale}px "Segoe UI", Arial, sans-serif`;
                const dateWidth = ctx.measureText(date).width;
                const x = 34 * scale;
                const y = 31 * scale;
                ctx.fillStyle = "rgba(0,0,0,.48)";
                ctx.fillRect(x - 12 * scale, y - 5 * scale, dateWidth + 24 * scale, 38 * scale);
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillText(date, x, y + 14 * scale);
                addPosterHitRegion("date", x - 12 * scale, y - 5 * scale, dateWidth + 24 * scale, 38 * scale);
            }

            const headlineY = height * .62;
            const accentSize = 38 * scale;
            ctx.fillStyle = "#c91625";
            ctx.fillRect(width * .075, headlineY + 2 * scale, accentSize, accentSize);
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillStyle = "#ffffff";
            const headlineScale = photoTextSizes["football-news"] / 100;
            let headlineFontSize = 156 * scale * headlineScale;
            const headline = titleInput.value.trim() || "Futbolda yangi rekord qayd etildi";
            const headlineWidth = width * .8;
            const logoScale = Number(brandLogoSizeInput.value) / 100;
            const baseLogoBoxWidth = 140 * scale;
            const baseLogoBoxHeight = 150 * scale;
            const logoBoxWidth = baseLogoBoxWidth * logoScale;
            const logoBoxHeight = baseLogoBoxHeight * logoScale;
            const logoCenterX = width / 2;
            const logoCenterY = footerTop + 25 * scale + baseLogoBoxHeight / 2;
            const logoX = logoCenterX - logoBoxWidth / 2;
            const logoY = logoCenterY - logoBoxHeight / 2;
            const logoOffset = getBrandLogoOffset();
            const maxHeadlineHeight = logoY - headlineY - 35 * scale;
            let headlineLines;
            let headlineLineHeight;
            const wrapHeadline = () => {
                ctx.font = `500 ${headlineFontSize}px Georgia, "Times New Roman", serif`;
                ctx.letterSpacing = `${1.1 * scale}px`;
                const lines = [];
                let line = "";
                headline.split(/\s+/).forEach(word => {
                    const candidate = line ? `${line} ${word}` : word;
                    if (line && ctx.measureText(candidate).width > headlineWidth) {
                        lines.push(line);
                        line = word;
                    } else {
                        line = candidate;
                    }
                });
                if (line) lines.push(line);
                return lines;
            };
            headlineLines = wrapHeadline();
            headlineLineHeight = headlineFontSize * 1.1;
            while (headlineFontSize > 64 * scale * headlineScale &&
                (headlineLines.length > 3 || headlineLineHeight * headlineLines.length > maxHeadlineHeight)) {
                headlineFontSize -= 4 * scale * headlineScale;
                headlineLines = wrapHeadline();
                headlineLineHeight = headlineFontSize * 1.1;
            }
            if (headlineLines.length > 2) {
                headlineLines.length = 3;
                headlineLines[2] = `${headlineLines[2].replace(/[.,;:\s]+$/, "")}…`;
            }
            headlineLines.forEach((headlineLine, index) => {
                ctx.fillText(headlineLine, width * .14, headlineY + index * headlineLineHeight, headlineWidth);
            });
            ctx.letterSpacing = "0px";
            addPosterHitRegion("title", width * .14, headlineY, headlineWidth, headlineLineHeight * Math.max(1, headlineLines.length));

            if (!isBrandLogoRemoved()) {
                if (!customBrandLogo) {
                    ctx.fillStyle = "#b50d1b";
                    ctx.fillRect(logoX + logoOffset.x, logoY + logoOffset.y, logoBoxWidth, logoBoxHeight);
                }
                if (brandLogo) {
                    const logoInset = 13 * scale * logoScale;
                    drawPositionedBrandImage(brandLogo, logoX + logoInset, logoY + logoInset, logoBoxWidth - logoInset * 2, logoBoxHeight - logoInset * 2);
                } else {
                    ctx.fillStyle = "#ffffff";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = `900 ${44 * scale * logoScale}px "Segoe UI", Arial, sans-serif`;
                    ctx.fillText("PP", width / 2 + logoOffset.x, logoY + logoBoxHeight / 2 + logoOffset.y);
                }
            }
            addPosterHitRegion("brandLogo", logoX, logoY, logoBoxWidth, logoBoxHeight);
        }

        function drawFootballLuxPoster(width, height) {
            const scale = width / 1000;
            const fade = ctx.createLinearGradient(0, height * .52, 0, height);
            fade.addColorStop(0, "rgba(0,0,0,0)");
            fade.addColorStop(.28, "rgba(0,0,0,.22)");
            fade.addColorStop(.62, "rgba(0,0,0,.84)");
            fade.addColorStop(1, "rgba(0,0,0,.98)");
            ctx.fillStyle = fade;
            ctx.fillRect(0, 0, width, height);

            const logoX = width * .016;
            const logoY = height * .016;
            const logoOffset = getBrandLogoOffset();
            const drawLogoX = logoX + logoOffset.x;
            const drawLogoY = logoY + logoOffset.y;
            const logoScale = Number(brandLogoSizeInput.value) / 100;
            const logoWidth = width * .34 * logoScale;
            const logoHeight = height * .1 * logoScale;
            if (!isBrandLogoRemoved()) {
                if (customBrandLogo && brandLogo) {
                    const imageScale = Math.min(logoWidth / brandLogo.width, logoHeight / brandLogo.height);
                    const imageWidth = brandLogo.width * imageScale;
                    const imageHeight = brandLogo.height * imageScale;
                    if (brandLogoShape === "circle") {
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(drawLogoX + imageWidth / 2, drawLogoY + imageHeight / 2, Math.min(imageWidth, imageHeight) / 2, 0, Math.PI * 2);
                        ctx.clip();
                        ctx.drawImage(brandLogo, drawLogoX, drawLogoY, imageWidth, imageHeight);
                        ctx.restore();
                    } else {
                        ctx.drawImage(brandLogo, drawLogoX, drawLogoY, imageWidth, imageHeight);
                    }
                } else {
                    let logoFontSize = Math.min(54 * scale * logoScale, logoHeight * .64);
                    ctx.save();
                    ctx.textAlign = "left";
                    ctx.textBaseline = "alphabetic";
                    ctx.letterSpacing = `${-1.2 * scale}px`;
                    ctx.font = `italic 900 ${logoFontSize}px Impact, "Arial Narrow", sans-serif`;
                    while (ctx.measureText("FOOTBALL NEWS").width > logoWidth && logoFontSize > 16 * scale) {
                        logoFontSize -= scale;
                        ctx.font = `italic 900 ${logoFontSize}px Impact, "Arial Narrow", sans-serif`;
                    }
                    const footballWidth = ctx.measureText("FOOTBALL").width;
                    ctx.fillStyle = "#f4f4f4";
                    ctx.fillText("FOOTBALL", drawLogoX, drawLogoY + logoFontSize, footballWidth);
                    ctx.fillStyle = "#e8df00";
                    ctx.fillText("NEWS", drawLogoX + footballWidth, drawLogoY + logoFontSize,
                        Math.max(0, logoWidth - footballWidth));
                    ctx.letterSpacing = "0px";
                    ctx.fillStyle = "#e8df00";
                    ctx.fillRect(drawLogoX, drawLogoY + logoHeight * .86, logoWidth, Math.max(2 * scale, 2));
                    ctx.restore();
                }
            }
            addPosterHitRegion("brandLogo", logoX, logoY, logoWidth, logoHeight);

            const title = titleInput.value.trim().toUpperCase() || examples["football-lux"].title;
            const lines = [];
            const maxWidth = width * .88;
            const horizontalScale = .88;
            const headlineScale = photoTextSizes["football-lux"] / 100;
            let fontSize = 112 * scale * headlineScale;
            const measureLines = () => {
                ctx.font = `italic 900 ${fontSize}px "Arial Narrow", Impact, sans-serif`;
                lines.length = 0;
                title.split(/\r?\n/).forEach(paragraph => {
                    let line = "";
                    paragraph.split(/\s+/).filter(Boolean).forEach(word => {
                        const candidate = line ? `${line} ${word}` : word;
                        if (line && ctx.measureText(candidate).width * horizontalScale > maxWidth) {
                            lines.push(line);
                            line = word;
                        } else {
                            line = candidate;
                        }
                    });
                    lines.push(line);
                });
            };
            measureLines();
            while (fontSize > 34 * scale * headlineScale &&
                (fontSize * 1.04 * lines.length > height * .42 ||
                    lines.some(text => ctx.measureText(text).width * horizontalScale > maxWidth))) {
                fontSize -= 4 * scale * headlineScale;
                measureLines();
            }

            const lineHeight = fontSize * 1.04;
            const startY = height - height * .035 - lineHeight * lines.length;
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.font = `italic 900 ${fontSize}px "Arial Narrow", Impact, sans-serif`;
            ctx.letterSpacing = `${-1.5 * scale}px`;
            ctx.shadowColor = "rgba(0,0,0,.32)";
            ctx.shadowBlur = 5 * scale;
            ctx.save();
            ctx.translate(width * .105, startY);
            ctx.scale(horizontalScale, 1);
            lines.forEach((text, index) => {
                ctx.fillStyle = index === 0 ? "#f4f4f4" : "#ed1019";
                ctx.fillText(text, 0, index * lineHeight, maxWidth / horizontalScale);
            });
            ctx.restore();
            ctx.shadowBlur = 0;
            ctx.letterSpacing = "0px";
            addPosterHitRegion("title", width * .08, startY, width * .9, lineHeight * lines.length);
        }

        function drawTelegramPromoPoster(width, height) {
            const scale = width / 1000;
            const logoSize = 75.6 * scale;
            const logoX = width - 24 * scale - logoSize;
            const logoY = 24 * scale;
            if (brandLogo) {
                drawPositionedBrandImage(brandLogo, logoX, logoY, logoSize, logoSize);
            } else {
                drawBrandLogo(logoX + logoSize / 2, logoY, logoSize);
            }
            addPosterHitRegion("brandLogo", logoX, logoY, logoSize, logoSize);

            const iconSize = 52 * scale;
            const iconTextGap = 10 * scale;
            const footerY = height - 94 * scale;
            const address = (brandCaptionInput.value.trim() || "@telegram").toLocaleUpperCase("uz-UZ");
            const maxTextWidth = width * .68;
            ctx.font = `650 ${29 * scale}px "Segoe UI Variable", "Segoe UI", Arial, sans-serif`;
            const textWidth = Math.min(ctx.measureText(address).width, maxTextWidth);
            const groupWidth = iconSize + iconTextGap + textWidth;
            const iconX = (width - groupWidth) / 2;
            const iconY = footerY - iconSize / 2;
            const textX = iconX + iconSize + iconTextGap;
            ctx.save();
            ctx.globalAlpha = .4;
            if (telegramPosterLogo.complete && telegramPosterLogo.naturalWidth) {
                drawImageContain(telegramPosterLogo, iconX, iconY, iconSize, iconSize);
            }
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = `650 ${29 * scale}px "Segoe UI Variable", "Segoe UI", Arial, sans-serif`;
            ctx.letterSpacing = `${.35 * scale}px`;
            ctx.shadowColor = "rgba(0,0,0,.72)";
            ctx.shadowBlur = 5 * scale;
            ctx.fillText(address, textX, footerY, maxTextWidth);
            ctx.restore();
            addPosterHitRegion("caption", textX - 4 * scale, footerY - iconSize / 2,
                textWidth + 8 * scale, iconSize);
        }

        function drawMatchdayPoster(width, height) {
            const scale = width / 900;
            const row = rows[0] || { home: "", away: "", time: "", homeLogo: null, awayLogo: null };
            const center = width / 2;
            const league = matchdayLeagueInput.value.trim().toLocaleUpperCase("uz-UZ") || "APL";
            const round = matchdayRoundInput.value.trim() || "6-tur";
            const homeName = row.home.trim().toLocaleUpperCase("uz-UZ");
            const awayName = row.away.trim().toLocaleUpperCase("uz-UZ");

            const split = ctx.createLinearGradient(0, 0, width, 0);
            split.addColorStop(0, "rgba(230,0,18,.56)");
            split.addColorStop(.46, "rgba(230,0,18,.1)");
            split.addColorStop(.5, "rgba(0,98,202,.1)");
            split.addColorStop(1, "rgba(0,98,202,.58)");
            ctx.fillStyle = split;
            ctx.fillRect(0, 0, width, height * .75);

            ctx.save();
            ctx.lineJoin = "round";
            [
                { color: "rgba(255,37,52,.78)", points: [[0, 64], [82, 108], [106, 79], [142, 161], [177, 136], [226, 244], [274, 220], [308, 329]] },
                { color: "rgba(48,177,255,.82)", points: [[900, 52], [824, 102], [790, 79], [751, 170], [713, 144], [675, 249], [634, 228], [598, 336]] }
            ].forEach(bolt => {
                ctx.strokeStyle = bolt.color;
                ctx.shadowColor = bolt.color;
                ctx.shadowBlur = 18 * scale;
                ctx.lineWidth = 6 * scale;
                ctx.beginPath();
                bolt.points.forEach(([x, y], index) => {
                    if (index === 0) ctx.moveTo(x * scale, y * scale);
                    else ctx.lineTo(x * scale, y * scale);
                });
                ctx.stroke();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = "rgba(255,255,255,.92)";
                ctx.lineWidth = 1.5 * scale;
                ctx.stroke();
            });
            ctx.restore();

            const topShade = ctx.createLinearGradient(0, 0, 0, height * .35);
            topShade.addColorStop(0, "rgba(0,0,0,.68)");
            topShade.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = topShade;
            ctx.fillRect(0, 0, width, height * .35);

            const playerFade = ctx.createLinearGradient(0, height * .3, 0, height * .76);
            playerFade.addColorStop(0, "rgba(0,0,0,0)");
            playerFade.addColorStop(.4, "rgba(0,0,0,.28)");
            playerFade.addColorStop(.8, "rgba(0,0,0,.72)");
            playerFade.addColorStop(1, "rgba(0,0,0,.94)");
            ctx.fillStyle = playerFade;
            ctx.fillRect(0, height * .3, width, height * .46);

            const watermarkY = 128 * scale;
            ctx.save();
            ctx.globalAlpha = .18;
            if (row.homeLogo && row.homeLogo.complete !== false) {
                drawImageContain(row.homeLogo, -72 * scale, watermarkY, 270 * scale, 270 * scale);
            }

            if (row.awayLogo && row.awayLogo.complete !== false) {
                drawImageContain(row.awayLogo, width - 198 * scale, watermarkY, 270 * scale, 270 * scale);
            }
            ctx.restore();

            ctx.save();
            ctx.globalAlpha = .3;
            ctx.fillStyle = "#ffffff";
            for (let index = 0; index < 11; index += 1) {
                const x = (index * 91 + 13) * scale;
                const y = (index % 3 === 0 ? 71 : 208) * scale;
                ctx.fillRect(x, y, 2 * scale, 22 * scale);
                ctx.beginPath();
                ctx.arc(x + 1 * scale, y, 11 * scale, Math.PI, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();

            const markX = center - 56 * scale;
            const markY = 22 * scale;
            if (!isBrandLogoRemoved()) {
                if (customBrandLogo && brandLogo) {
                    const offset = getBrandLogoOffset();
                    drawImageContain(brandLogo, markX + offset.x, markY + offset.y, 112 * scale, 96 * scale);
                } else if (matchdayPremierLeagueLogo.complete && matchdayPremierLeagueLogo.naturalWidth) {
                    ctx.save();
                    ctx.filter = "brightness(0) invert(1)";
                    drawImageContain(matchdayPremierLeagueLogo, markX, markY, 112 * scale, 96 * scale);
                    ctx.restore();
                } else {
                    ctx.fillStyle = "#ffffff";
                    ctx.font = `900 ${32 * scale}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.fillText(league, center, 64 * scale);
                }
            }
            addPosterHitRegion("brandLogo", markX, markY, 112 * scale, 96 * scale);
            if (!isBrandLogoRemoved()) {
                if (customBrandLogo && brandLogo) {
                    ctx.fillStyle = "rgba(255,255,255,.91)";
                    ctx.font = `750 ${17 * scale}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillText(league, center, 119 * scale, width * .5);
                } else {
                    ctx.fillStyle = "#ffffff";
                    ctx.font = `800 ${20 * scale}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillText("Premier", center, 116 * scale);
                    ctx.fillText("League", center, 138 * scale);
                }
            }

            ctx.save();
            ctx.globalAlpha = .96;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "rgba(0,0,0,.7)";
            ctx.shadowBlur = 12 * scale;
            ctx.font = `italic 900 ${133 * scale}px "Arial Black", Impact, "Bebas Neue", sans-serif`;
            ctx.letterSpacing = `${-5 * scale}px`;
            ctx.translate(center, 493 * scale);
            ctx.rotate(-.035);
            ctx.fillText("MATCHDAY", 0, 0, width * .96);
            ctx.restore();

            ctx.save();
            ctx.globalAlpha = .78;
            ctx.strokeStyle = "rgba(255,255,255,.82)";
            ctx.lineCap = "round";
            ctx.lineWidth = 4 * scale;
            [-52, 38, 82].forEach((offset, index) => {
                ctx.beginPath();
                ctx.moveTo((78 + index * 9) * scale, (494 + offset) * scale);
                ctx.lineTo((333 + index * 7) * scale, (470 + offset) * scale);
                ctx.stroke();
            });
            ctx.restore();

            const crestSize = 128 * scale;
            const crestY = 650 * scale;
            const leftCrestX = 292 * scale - crestSize / 2;
            const rightCrestX = 608 * scale - crestSize / 2;
            [leftCrestX, rightCrestX].forEach((x, index) => {
                ctx.save();
                ctx.shadowColor = index === 0 ? "rgba(247,25,38,.8)" : "rgba(0,135,255,.8)";
                ctx.shadowBlur = 25 * scale;
                ctx.fillStyle = "rgba(0,0,0,.34)";
                ctx.beginPath();
                ctx.arc(x + crestSize / 2, crestY + crestSize / 2, crestSize * .58, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            if (row.homeLogo && row.homeLogo.complete !== false) drawImageContain(row.homeLogo, leftCrestX, crestY, crestSize, crestSize);
            if (row.awayLogo && row.awayLogo.complete !== false) drawImageContain(row.awayLogo, rightCrestX, crestY, crestSize, crestSize);
            addPosterHitRegion("homeLogo", leftCrestX, crestY, crestSize, crestSize, 0);
            addPosterHitRegion("awayLogo", rightCrestX, crestY, crestSize, crestSize, 0);

            const brushY = 827 * scale;
            ctx.save();
            ctx.fillStyle = "#ef101d";
            ctx.beginPath();
            ctx.moveTo(107 * scale, brushY);
            ctx.lineTo(156 * scale, (brushY - 12 * scale));
            ctx.lineTo(730 * scale, (brushY - 3 * scale));
            ctx.lineTo(785 * scale, (brushY + 24 * scale));
            ctx.lineTo(744 * scale, (brushY + 59 * scale));
            ctx.lineTo(157 * scale, (brushY + 51 * scale));
            ctx.lineTo(96 * scale, (brushY + 29 * scale));
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "rgba(15,0,0,.35)";
            ctx.fillRect(112 * scale, (brushY + 46 * scale), 640 * scale, 3 * scale);
            ctx.restore();
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `italic 900 ${31 * scale}px "Arial Black", Impact, "Bebas Neue", sans-serif`;
            ctx.fillText(`${homeName}  —  ${awayName}`, center, brushY + 26 * scale, 620 * scale);
            addPosterHitRegion("home", 125 * scale, brushY - 10 * scale, 286 * scale, 72 * scale, 0);
            addPosterHitRegion("away", 443 * scale, brushY - 10 * scale, 345 * scale, 72 * scale, 0);

            const lowerShade = ctx.createLinearGradient(0, 884 * scale, 0, height);
            lowerShade.addColorStop(0, "rgba(7,5,13,.72)");
            lowerShade.addColorStop(1, "rgba(4,4,10,.9)");
            ctx.fillStyle = lowerShade;
            ctx.fillRect(0, 884 * scale, width, height - 884 * scale);

            const detailY = 920 * scale;
            const iconColor = "#ffffff";
            ctx.save();
            ctx.strokeStyle = iconColor;
            ctx.fillStyle = iconColor;
            ctx.lineWidth = 3.5 * scale;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(216 * scale, (detailY - 14 * scale));
            ctx.lineTo(235 * scale, (detailY - 14 * scale));
            ctx.lineTo(231 * scale, (detailY + 1 * scale));
            ctx.quadraticCurveTo(225 * scale, detailY + 10 * scale, 220 * scale, detailY + 1 * scale);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(215 * scale, (detailY - 11 * scale));
            ctx.lineTo(209 * scale, (detailY - 11 * scale));
            ctx.lineTo(210 * scale, (detailY - 4 * scale));
            ctx.quadraticCurveTo(212 * scale, detailY, 219 * scale, detailY);
            ctx.moveTo(236 * scale, (detailY - 11 * scale));
            ctx.lineTo(242 * scale, (detailY - 11 * scale));
            ctx.lineTo(241 * scale, (detailY - 4 * scale));
            ctx.quadraticCurveTo(239 * scale, detailY, 232 * scale, detailY);
            ctx.moveTo(224 * scale, (detailY + 8 * scale));
            ctx.lineTo(224 * scale, (detailY + 15 * scale));
            ctx.moveTo(217 * scale, (detailY + 15 * scale));
            ctx.lineTo(231 * scale, (detailY + 15 * scale));
            ctx.stroke();
            ctx.restore();
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#ffffff";
            ctx.font = `750 ${22 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(league, 252 * scale, detailY, 110 * scale);
            ctx.fillStyle = "rgba(255,255,255,.48)";
            ctx.fillRect(365 * scale, (detailY - 17 * scale), 2 * scale, 34 * scale);
            ctx.fillStyle = "#ffffff";
            ctx.font = `650 ${22 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(round, 383 * scale, detailY, 110 * scale);

            const stadiumX = 445 * scale;
            const stadiumY = detailY;
            ctx.save();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 3 * scale;
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(stadiumX, (stadiumY + 10 * scale));
            ctx.lineTo(stadiumX, (stadiumY - 4 * scale));
            ctx.lineTo(stadiumX + 25 * scale, (stadiumY - 16 * scale));
            ctx.lineTo(stadiumX + 50 * scale, (stadiumY - 4 * scale));
            ctx.lineTo(stadiumX + 50 * scale, (stadiumY + 10 * scale));
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(stadiumX + 8 * scale, (stadiumY + 9 * scale));
            ctx.lineTo(stadiumX + 8 * scale, (stadiumY - 2 * scale));
            ctx.lineTo(stadiumX + 42 * scale, (stadiumY - 2 * scale));
            ctx.lineTo(stadiumX + 42 * scale, (stadiumY + 9 * scale));
            ctx.stroke();
            ctx.restore();
            ctx.textAlign = "left";
            ctx.font = `650 ${20 * scale}px "Segoe UI", Arial, sans-serif`;
            const stadiumText = matchdayStadiumInput.value.trim() || "Stadion nomi";
            const stadiumMatch = stadiumText.match(/^(.*?)(\s+stadioni)$/i);
            const stadiumLabel = stadiumMatch ?
                `"${stadiumMatch[1]}"${stadiumMatch[2]}` : `"${stadiumText}"`;
            ctx.fillText(stadiumLabel, 510 * scale, stadiumY, 340 * scale);

            ctx.save();
            ctx.fillStyle = "rgba(9,5,12,.94)";
            ctx.beginPath();
            ctx.moveTo(0, 1070 * scale);
            ctx.lineTo(width, 1070 * scale);
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "rgba(206,12,28,.9)";
            for (let index = 0; index < 8; index += 1) {
                const x = (35 + index * 126) * scale;
                const y = (1055 + (index % 3) * 24) * scale;
                ctx.fillRect(x, y, 2 * scale, 73 * scale);
                ctx.beginPath();
                ctx.moveTo(x + 2 * scale, y + 4 * scale);
                ctx.lineTo(x + 44 * scale, y + 13 * scale);
                ctx.lineTo(x + 36 * scale, y + 40 * scale);
                ctx.lineTo(x + 2 * scale, y + 32 * scale);
                ctx.closePath();
                ctx.fill();
            }
            ctx.fillStyle = "#050509";
            for (let index = 0; index < 54; index += 1) {
                const x = (index * 19) * scale;
                const y = (1135 + (index % 5) * 7) * scale;
                const radius = (5 + index % 5) * scale;
                ctx.beginPath();
                ctx.arc(x, y, radius, Math.PI, 0);
                ctx.fill();
                ctx.fillRect(x - radius, y, radius * 2, 90 * scale);
            }
            ctx.restore();

            const time = row.time.trim() || "20:30";
            const timeText = `Bugun, ${time} da`;
            const timeY = 1005 * scale;
            ctx.save();
            ctx.fillStyle = "#f7f7f7";
            ctx.beginPath();
            ctx.moveTo(252 * scale, (timeY - 29 * scale));
            ctx.lineTo(655 * scale, (timeY - 31 * scale));
            ctx.lineTo(706 * scale, (timeY - 11 * scale));
            ctx.lineTo(682 * scale, (timeY + 27 * scale));
            ctx.lineTo(270 * scale, (timeY + 31 * scale));
            ctx.lineTo(238 * scale, (timeY + 7 * scale));
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "#0a111a";
            ctx.beginPath();
            ctx.arc(292 * scale, timeY, 22 * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 3 * scale;
            ctx.beginPath();
            ctx.arc(292 * scale, timeY, 11 * scale, 0, Math.PI * 2);
            ctx.moveTo(292 * scale, (timeY - 7 * scale));
            ctx.lineTo(292 * scale, timeY);
            ctx.lineTo(299 * scale, (timeY + 4 * scale));
            ctx.stroke();
            ctx.restore();
            ctx.fillStyle = "#111820";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `italic 850 ${30 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(timeText, 476 * scale, timeY, 330 * scale);
            addPosterHitRegion("time", 315 * scale, (timeY - 34 * scale), 390 * scale, 70 * scale, 0);
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

        function isLegacyStatsDefaultBackgroundSource(source) {
            return typeof source === "string" && /(?:^|\/)images\/deffault\.jpg(?:[?#].*)?$/i.test(source);
        }

        function captureWorkspace() {
            return {
                template: currentTemplate,
                editorOpen: !editorView.hidden,
                title: titleInput.value,
                date: dateInput.value,
                caption: brandCaptionInput.value,
                matchdayLeague: matchdayLeagueInput.value,
                matchdayRound: matchdayRoundInput.value,
                matchdayStadium: matchdayStadiumInput.value,
                monthlyClub: monthlyClub ? {
                    id: monthlyClub.id,
                    league: monthlyClub.league,
                    name: monthlyClub.name,
                    logo: monthlyClub.logo
                } : null,
                monthlyPeriod,
                monthlyFixtures: monthlyFixtures.map(fixture => ({
                    date: fixture.date,
                    weekday: fixture.weekday,
                    time: fixture.time,
                    homeAway: fixture.homeAway,
                    opponent: fixture.opponent,
                    opponentLogo: imageSource(fixture.opponentLogoImage) || fixture.opponentLogo,
                    league: fixture.league,
                    leagueShortName: fixture.leagueShortName,
                    leagueLogo: imageSource(fixture.leagueLogoImage) || fixture.leagueLogo
                })),
                goals: goalScorersInput.value,
                rows: rows.map(row => ({
                    home: row.home,
                    time: row.time,
                    away: row.away,
                    homeLogo: imageSource(row.homeLogo),
                    awayLogo: imageSource(row.awayLogo)
                })),
                background: backgroundColorInput.value,
                footballNewsEffectColor,
                photoQuoteColor,
                photoQuoteFontSize,
                footballNewsRatio,
                posterAspectRatios: { ...posterAspectRatios },
                footballLuxLogoSize,
                photoTextSizes,
                playerStatsWatermarkEnabled,
                matchlistColumns,
                todayResultsTheme,
                redStarTheme,
                backgroundImage: isDefaultPosterBackground(backgroundImage) ? null : imageSource(backgroundImage),
                backgroundImages: Object.fromEntries([
                    ...[...backgroundImagesByTemplate].filter(([, image]) => !isDefaultPosterBackground(image)),
                    ...(backgroundImage && !isDefaultPosterBackground(backgroundImage) ? [[currentTemplate, backgroundImage]] : [])
                ].map(([template, image]) => [template, imageSource(image)])),
                backgroundOpacity: backgroundOpacityInput.value,
                nonResultBackgroundOpacity,
                row: rowColorInput.value,
                timeBackground: timeBackgroundColorInput.value,
                colors: Object.fromEntries(Object.entries(textColorInputs).map(([key, input]) => [key, input.value])),
                customBackground: customBackgroundColor,
                customText: Array.from(customTextColors),
                brandLogoSize: brandLogoSizeInput.value,
                brandLogoShape,
                brandLogoPositions: { ...brandLogoPositions },
                removedBrandLogos: [...removedBrandLogosByTemplate],
                customBrandLogo,
                brandLogo: customBrandLogo ? imageSource(brandLogo) : null,
                nonLuxBrandLogoSize,
                brandLogos: Object.fromEntries([...brandLogosByTemplate].map(([template, image]) => [
                    template,
                    imageSource(image)
                ])),
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
            if (snapshot?.template === "matchday" || snapshot?.template === "apl-matchday") {
                if (!Array.isArray(snapshot.rows)) {
                    throw new Error("Saqlangan MATCHDAY ishining uchrashuvlari yaroqsiz.");
                }
                snapshot = {
                    ...snapshot,
                    template: "matchlist",
                    title: examples.matchlist.title,
                    date: examples.matchlist.date,
                    caption: examples.matchlist.caption,
                    brandLogos: Object.fromEntries(Object.entries(snapshot.brandLogos || {})
                        .map(([template, source]) => [
                            template === "matchday" || template === "apl-matchday" ? "matchlist" : template,
                            source
                        ]))
                };
            }
            if (!snapshot || !examples[snapshot.template] || !Array.isArray(snapshot.rows)) {
                throw new Error("Saqlangan ish formati yaroqsiz.");
            }
            footballNewsEffectColor = /^#[0-9a-f]{6}$/i.test(snapshot.footballNewsEffectColor || "") ?
                snapshot.footballNewsEffectColor : "#000000";
            photoQuoteColor = /^#[0-9a-f]{6}$/i.test(snapshot.photoQuoteColor || "") ?
                snapshot.photoQuoteColor : "#ffffff";
            photoQuoteColorInput.value = photoQuoteColor;
            photoQuoteFontSize = Number.isFinite(snapshot.photoQuoteFontSize) ?
                Math.min(120, Math.max(12, snapshot.photoQuoteFontSize)) : 46;
            photoQuoteFontSizeInput.value = String(photoQuoteFontSize);
            footballNewsRatio = Object.hasOwn(footballNewsRatios, snapshot.footballNewsRatio) ?
                snapshot.footballNewsRatio : "5:6";
            posterAspectRatios = Object.fromEntries(Object.entries(snapshot.posterAspectRatios || {})
                .filter(([template, ratio]) => Boolean(examples[template]) && posterAspectRatioOptions.has(ratio)));
            footballLuxLogoSize = Number.isFinite(snapshot.footballLuxLogoSize) ?
                normalizeBrandLogoSize(snapshot.footballLuxLogoSize, 80) : 80;
            photoTextSizes = Object.fromEntries(["result", "football-news", "football-lux", "football-stats"].map(template => [
                template,
                Number.isFinite(snapshot.photoTextSizes?.[template]) ?
                    Math.min(template === "football-stats" ? 100 : 160,
                        Math.max(template === "football-stats" ? 30 : 50, snapshot.photoTextSizes[template])) : 100
            ]));
            playerStatsWatermarkEnabled = snapshot.playerStatsWatermarkEnabled !== false;
            updatePlayerStatsWatermarkControl();
            matchlistColumns = snapshot.matchlistColumns === 2 ? 2 : 1;
            todayResultsTheme = Object.hasOwn(todayResultsThemes, snapshot.todayResultsTheme) ?
                snapshot.todayResultsTheme : "current";
            updateTodayResultsThemeOptions();
            redStarTheme = Object.hasOwn(redStarThemes, snapshot.redStarTheme) ? snapshot.redStarTheme : "current";
            applyRedStarTheme();
            removedBrandLogosByTemplate = new Set(
                (Array.isArray(snapshot.removedBrandLogos) ? snapshot.removedBrandLogos : [])
                    .filter(template => Boolean(examples[template]))
            );
            setTemplate(snapshot.template);
            const savedBackgroundSource = currentTemplate === "football-stats" &&
                isLegacyStatsDefaultBackgroundSource(snapshot.backgroundImage) ? null : snapshot.backgroundImage;
            const savedBackgroundEntries = Object.entries(snapshot.backgroundImages || {}).filter(([template, source]) =>
                !(template === "football-stats" && isLegacyStatsDefaultBackgroundSource(source))
            );
            const [savedBackground, savedBrand, savedLeague, ...rowLogos] = await Promise.all([
                loadImageSource(savedBackgroundSource),
                loadImageSource(snapshot.brandLogo),
                loadImageSource(snapshot.leagueLogo),
                ...snapshot.rows.flatMap(row => [
                    loadExportSafeImageSource(row.homeLogo),
                    loadExportSafeImageSource(row.awayLogo)
                ])
            ]);
            const savedTemplateBackgrounds = await Promise.all(savedBackgroundEntries.map(async ([template, source]) =>
                [template, await loadImageSource(source)]
            ));
            const savedTemplateLogos = await Promise.all(Object.entries(snapshot.brandLogos || {}).map(async ([template, source]) =>
                [template, await loadImageSource(source)]
            ));
            const savedMonthlyFixtures = await Promise.all((snapshot.monthlyFixtures || []).map(async fixture => ({
                ...fixture,
                opponentLogoImage: await loadExportSafeImageSource(fixture.opponentLogo),
                leagueLogoImage: await loadExportSafeImageSource(fixture.leagueLogo)
            })));
            backgroundImagesByTemplate = new Map(savedTemplateBackgrounds.filter(([, image]) => image));
            brandLogosByTemplate = new Map(savedTemplateLogos.filter(([, image]) => image));
            currentTemplate = snapshot.template;
            titleInput.value = snapshot.title;
            dateInput.value = snapshot.date;
            brandCaptionInput.value = normalizeBrandCaption(snapshot.caption);
            monthlyClub = snapshot.monthlyClub ? {
                ...snapshot.monthlyClub,
                logoImage: await loadExportSafeImageSource(snapshot.monthlyClub.logo)
            } : null;
            monthlyClubPalette = getMonthlyClubPalette(monthlyClub?.logoImage);
            monthlyFixtures = savedMonthlyFixtures;
            monthlyPeriod = ["current-month", "next-month", "year"].includes(snapshot.monthlyPeriod)
                ? snapshot.monthlyPeriod
                : "current-month";
            monthlyFixturesPeriodInput.value = monthlyPeriod;
            monthlyClubSearchInput.value = monthlyClub?.name || "";
            monthlyClubResults.replaceChildren();
            monthlyClubStatus.textContent = monthlyClub
                ? `${monthlyClub.name} tanlangan · ${monthlyFixtures.length} ta uchrashuv saqlangan.`
                : "Klubni qidirish uchun nomini yozing.";
            monthlyFixturesRefresh.disabled = !monthlyClub;
            if (currentTemplate === "monthly-club-fixtures") applyTemplateDimensions(currentTemplate);
            matchdayLeagueInput.value = snapshot.matchdayLeague || "APL";
            matchdayRoundInput.value = snapshot.matchdayRound || "6-tur";
            matchdayStadiumInput.value = snapshot.matchdayStadium || "Enfild stadioni";
            goalScorersInput.value = snapshot.goals;
            rows = snapshot.rows.map((row, index) => ({
                home: row.home,
                time: row.time,
                away: row.away,
                homeLogo: rowLogos[index * 2],
                awayLogo: rowLogos[index * 2 + 1],
                homeEdited: true,
                awayEdited: true,
                homeLogoEdited: true,
                awayLogoEdited: true
            }));
            backgroundImage = savedBackground ||
                (photoPosterTemplates.has(currentTemplate) ? getDefaultPosterBackground(currentTemplate) : null);
            if (backgroundImage && !isDefaultPosterBackground(backgroundImage)) backgroundImagesByTemplate.set(currentTemplate, backgroundImage);
            else backgroundImagesByTemplate.delete(currentTemplate);
            applyTemplateDimensions(currentTemplate);
            backgroundImageInput.value = "";
            brandLogo = isBrandLogoRemoved(currentTemplate) ? null : snapshot.customBrandLogo ? savedBrand :
                snapshot.template !== "football-lux" && snapshot.template !== "matchday-poster" &&
                snapshot.template !== "monthly-club-fixtures" &&
                defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            customBrandLogo = !isBrandLogoRemoved(currentTemplate) && Boolean(snapshot.customBrandLogo);
            brandLogoShape = snapshot.brandLogoShape === "circle" ? "circle" : "square";
            brandLogoPositions = Object.fromEntries(
                Object.entries(snapshot.brandLogoPositions || {})
                    .filter(([template, position]) =>
                        Boolean(examples[template]) && Number.isFinite(position?.x) && Number.isFinite(position?.y))
                    .map(([template, position]) => [template, {
                        x: Math.min(1, Math.max(-1, position.x)),
                        y: Math.min(1, Math.max(-1, position.y))
                    }])
            );
            updateBrandLogoShapeOptions();
            if (customBrandLogo && brandLogo) brandLogosByTemplate.set(currentTemplate, brandLogo);
            else brandLogosByTemplate.delete(currentTemplate);
            leagueLogo = savedLeague;
            backgroundColorInput.value = snapshot.background;
            backgroundOpacityInput.value = snapshot.backgroundOpacity;
            nonResultBackgroundOpacity = snapshot.nonResultBackgroundOpacity;
            opacityValue.textContent = `${snapshot.backgroundOpacity}%`;
            rowColorInput.value = snapshot.row;
            timeBackgroundColorInput.value = snapshot.timeBackground;
            nonLuxBrandLogoSize = Number.isFinite(snapshot.nonLuxBrandLogoSize) ?
                String(normalizeBrandLogoSize(snapshot.nonLuxBrandLogoSize, Number(snapshot.brandLogoSize) || 200)) :
                String(normalizeBrandLogoSize(snapshot.brandLogoSize, 200));
            brandLogoSizeInput.value = String(currentTemplate === "football-lux" ?
                normalizeBrandLogoSize(footballLuxLogoSize, 80) :
                normalizeBrandLogoSize(nonLuxBrandLogoSize, 200));
            if (currentTemplate === "football-lux") {
                footballLuxLogoSize = normalizeBrandLogoSize(brandLogoSizeInput.value, 80);
            }
            brandLogoSizeValue.textContent = `${brandLogoSizeInput.value}%`;
            Object.entries(snapshot.colors).forEach(([key, value]) => {
                if (textColorInputs[key]) textColorInputs[key].value = value;
            });
            customBackgroundColor = Boolean(snapshot.customBackground);
            customTextColors.clear();
            snapshot.customText.forEach(key => customTextColors.add(key));
            updateLogoPreview(brandLogoPreview, isBrandLogoRemoved() ? null :
                currentTemplate === "matchday-poster" && !customBrandLogo && matchdayPremierLeagueLogo.complete && matchdayPremierLeagueLogo.naturalWidth ?
                    matchdayPremierLeagueLogo : brandLogo,
                currentTemplate === "football-lux" ? "KL" : currentTemplate === "matchday-poster" ? "APL" :
                    currentTemplate === "monthly-club-fixtures" ? "TV" : "PP");
            updateLogoPreview(leagueLogoPreview, leagueLogo, "PL");
            showAppSection("home", { navigate: false });
            renderInputs();
            drawPoster();
        }

        function drawMonthlyClubFixturesPoster(width, height) {
            const scale = width / 1000;
            const palette = monthlyClubPalette || {
                accent: themes["monthly-club-fixtures"].accent,
                secondary: "#8bb9e7",
                dark: "#123251",
                deeper: "#050a10",
                card: "#091725"
            };
            const accent = palette.accent;
            const toRgb = hex => [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16)).join(",");
            const title = titleInput.value.trim().toLocaleUpperCase("uz-UZ") || "MATCH SCHEDULE";
            const clubName = monthlyClub?.name || "KLUBNI TANLANG";
            const now = new Date();
            const monthNames = ["YANVAR", "FEVRAL", "MART", "APREL", "MAY", "IYUN", "IYUL", "AVGUST", "SENTABR", "OKTABR", "NOYABR", "DEKABR"];
            const periodDate = monthlyPeriod === "next-month"
                ? new Date(now.getFullYear(), now.getMonth() + 1, 1)
                : now;
            const monthLabel = monthlyPeriod === "year"
                ? `${now.getFullYear()} YIL UCHRASHUVLARI`
                : `${monthNames[periodDate.getMonth()]} ${periodDate.getFullYear()}`;
            const annualFixtures = monthlyPeriod === "year";
            const topHeight = height * .34;
            const gridTop = height * .39;
            const footerY = height - 24 * scale;

            if (!backgroundImage) {
                const base = ctx.createLinearGradient(0, 0, width, height);
                base.addColorStop(0, palette.dark);
                base.addColorStop(.48, palette.card);
                base.addColorStop(1, palette.deeper);
                ctx.fillStyle = base;
                ctx.fillRect(0, 0, width, height);
            }

            const shade = ctx.createLinearGradient(0, 0, 0, height);
            shade.addColorStop(0, `rgba(${toRgb(palette.dark)},.3)`);
            shade.addColorStop(.31, `rgba(${toRgb(palette.dark)},.72)`);
            shade.addColorStop(.42, `rgba(${toRgb(palette.deeper)},.95)`);
            shade.addColorStop(1, `rgba(${toRgb(palette.deeper)},.98)`);
            ctx.fillStyle = shade;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalAlpha = .25;
            ctx.fillStyle = palette.secondary;
            ctx.beginPath();
            ctx.moveTo(0, topHeight * .84);
            ctx.lineTo(width * .44, topHeight);
            ctx.lineTo(0, topHeight);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            const topLogoSize = 174 * scale;
            if (monthlyClub?.logoImage) {
                drawLogo(monthlyClub.logoImage, clubName, 54 * scale, 40 * scale, topLogoSize, "#ffffff", true, "#102236");
            }
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = palette.secondary;
            ctx.font = `800 ${15 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.letterSpacing = `${3 * scale}px`;
            ctx.fillText(monthLabel, 54 * scale, topHeight * .64, width - 108 * scale);
            ctx.letterSpacing = "0px";
            ctx.fillStyle = "#ffffff";
            ctx.font = `900 ${fitText(title, width - 108 * scale, 112 * scale, 900, 54 * scale, "Impact")}px Impact, "Arial Narrow", sans-serif`;
            if (annualFixtures) {
                const titleX = 54 * scale + topLogoSize + 24 * scale;
                const titleWidth = width - titleX - 54 * scale;
                ctx.textBaseline = "middle";
                ctx.font = `900 ${fitText(title, titleWidth, 58 * scale, 900, 28 * scale, "Impact")}px Impact, "Arial Narrow", sans-serif`;
                ctx.fillText(title, titleX, 40 * scale + topLogoSize / 2, titleWidth);
            } else {
                ctx.fillText(title, 50 * scale, topHeight * .9, width - 100 * scale);
            }

            ctx.fillStyle = accent;
            ctx.fillRect(52 * scale, gridTop - 20 * scale, 58 * scale, 5 * scale);
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = `800 ${24 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(clubName.toLocaleUpperCase("uz-UZ"), 52 * scale, gridTop + 13 * scale, width - 220 * scale);
            ctx.fillStyle = palette.secondary;
            ctx.textAlign = "right";
            ctx.font = `700 ${14 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(`${monthlyFixtures.length} TA UCHRASHUV`, width - 52 * scale, gridTop + 13 * scale, 150 * scale);

            const listTop = gridTop + 43 * scale;
            const footerHeight = 68 * scale;
            const availableHeight = Math.max(80 * scale, height - listTop - footerHeight - 18 * scale);
            const count = Math.max(monthlyFixtures.length, 1);
            const gap = 14 * scale;
            const margin = 48 * scale;
            const gridWidth = width - margin * 2;
            let columns = 1;
            let rowCount = count;
            let cardSize = Math.min(gridWidth, availableHeight / count);
            for (let candidateColumns = 2; candidateColumns <= count; candidateColumns += 1) {
                const candidateRows = Math.ceil(count / candidateColumns);
                const candidateSize = Math.min(
                    (gridWidth - gap * (candidateColumns - 1)) / candidateColumns,
                    (availableHeight - gap * (candidateRows - 1)) / candidateRows
                );
                if (candidateSize > cardSize) {
                    columns = candidateColumns;
                    rowCount = candidateRows;
                    cardSize = candidateSize;
                }
            }

            if (!monthlyFixtures.length) {
                ctx.save();
                drawPhotoQuoteGlassPanel(
                    margin,
                    listTop,
                    width - margin * 2,
                    Math.min(140 * scale, availableHeight),
                    18 * scale,
                    scale
                );
                ctx.fillStyle = "#d5e4f1";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = `700 ${20 * scale}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(monthlyClub ? "Bu davr uchun uchrashuv topilmadi" : "Klubni qidirib tanlang", width / 2, listTop + Math.min(70 * scale, availableHeight / 2), width - 100 * scale);
                ctx.restore();
            }

            const backdropCanvas = document.createElement("canvas");
            backdropCanvas.width = width;
            backdropCanvas.height = height;
            const backdropContext = backdropCanvas.getContext("2d");
            if (backdropContext) backdropContext.drawImage(ctx.canvas, 0, 0, width, height);

            monthlyFixtures.forEach((fixture, index) => {
                const column = index % columns;
                const row = Math.floor(index / columns);
                const cardsInRow = Math.min(columns, count - row * columns);
                const rowWidth = cardsInRow * cardSize + gap * (cardsInRow - 1);
                const x = margin + (gridWidth - rowWidth) / 2 + column * (cardSize + gap);
                const y = listTop + row * (cardSize + gap);
                const padding = Math.max(10 * scale, cardSize * .06);

                drawPhotoQuoteGlassPanel(x, y, cardSize, cardSize, 22 * scale, scale, backdropCanvas);

                const matchDate = new Date(fixture.date);
                ctx.fillStyle = accent;
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.font = `900 ${Math.min(30 * scale, cardSize * .12)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(String(matchDate.getDate()).padStart(2, "0"), x + padding, y + cardSize * .15);
                ctx.fillStyle = palette.secondary;
                ctx.font = `700 ${Math.min(11 * scale, cardSize * .047)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(fixture.weekday.toLocaleUpperCase("uz-UZ"), x + padding, y + cardSize * .23, cardSize * .45);

                const opponentSize = Math.min(cardSize * (annualFixtures ? .58 : .52), (annualFixtures ? 160 : 140) * scale);
                drawLogo(
                    fixture.opponentLogoImage,
                    fixture.opponent,
                    x + (cardSize - opponentSize) / 2,
                    y + cardSize * .25,
                    opponentSize,
                    "#ffffff",
                    true,
                    "#102236"
                );

                const badgeHeight = Math.min(46 * scale, cardSize * (annualFixtures ? .14 : .18));
                const badgeWidth = cardSize - padding * 2;
                const badgeX = x + padding;
                const badgeY = y + cardSize * (annualFixtures ? .84 : .8);
                const badgeRadius = 12 * scale;
                drawPhotoQuoteGlassPanel(badgeX, badgeY, badgeWidth, badgeHeight, badgeRadius, scale);

                const leagueLogoSize = Math.min(badgeHeight * .74, 44 * scale);
                const leagueLogoX = badgeX + (badgeHeight - leagueLogoSize) / 2;
                const leagueLogoY = badgeY + (badgeHeight - leagueLogoSize) / 2;
                ctx.save();
                ctx.fillStyle = `rgba(${toRgb(palette.secondary)},.36)`;
                ctx.strokeStyle = `rgba(${toRgb(palette.secondary)},.78)`;
                ctx.lineWidth = scale;
                ctx.beginPath();
                ctx.roundRect(leagueLogoX - 4 * scale, leagueLogoY - 4 * scale, leagueLogoSize + 8 * scale, leagueLogoSize + 8 * scale, 8 * scale);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                if (fixture.leagueLogoImage) {
                    drawImageContain(fixture.leagueLogoImage, leagueLogoX, leagueLogoY, leagueLogoSize, leagueLogoSize);
                } else {
                    ctx.fillStyle = "#eaf5ff";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = `800 ${Math.min(9 * scale, leagueLogoSize * .23)}px "Segoe UI", Arial, sans-serif`;
                    ctx.fillText((fixture.leagueShortName || fixture.league.slice(0, 4)).slice(0, 5), leagueLogoX + leagueLogoSize / 2, leagueLogoY + leagueLogoSize / 2, leagueLogoSize - 2 * scale);
                }
                const leagueTextX = leagueLogoX + leagueLogoSize + 11 * scale;
                const leagueTextWidth = badgeX + badgeWidth - leagueTextX - 8 * scale;
                const leagueName = (fixture.leagueShortName === "UCL" ? "UCL" : fixture.league).toLocaleUpperCase("uz-UZ");
                const leagueFontSize = Math.min(18 * scale, cardSize * .07);
                ctx.font = `800 ${leagueFontSize}px "Segoe UI", Arial, sans-serif`;
                const leagueLines = [];
                leagueName.split(/\s+/).forEach(word => {
                    const currentLine = leagueLines[leagueLines.length - 1];
                    const nextLine = currentLine ? `${currentLine} ${word}` : word;
                    if (currentLine && ctx.measureText(nextLine).width > leagueTextWidth) {
                        leagueLines.push(word);
                    } else if (currentLine) {
                        leagueLines[leagueLines.length - 1] = nextLine;
                    } else {
                        leagueLines.push(word);
                    }
                });
                const fittedLeagueLines = leagueLines.map(line =>
                    fitText(line, leagueTextWidth, leagueFontSize, 800, 10 * scale)
                );
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                const leagueLineHeight = Math.min(17 * scale, badgeHeight * .34);
                fittedLeagueLines.forEach((fontSize, lineIndex) => {
                    const lineY = badgeY + badgeHeight / 2 + (lineIndex - (fittedLeagueLines.length - 1) / 2) * leagueLineHeight;
                    ctx.font = `800 ${fontSize}px "Segoe UI", Arial, sans-serif`;
                    ctx.fillText(leagueLines[lineIndex], leagueTextX, lineY, leagueTextWidth);
                });
                ctx.fillStyle = "#f7f9fc";
                ctx.textAlign = "right";
                ctx.font = `800 ${Math.min(16 * scale, cardSize * .064)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(fixture.homeAway === "home" ? "UYDA" : "SAFARDA", x + cardSize - padding, y + cardSize * .15, cardSize * .48);
            });

            const channelName = brandCaptionInput.value.trim().toLocaleUpperCase("uz-UZ");
            const channelLogoSize = 42 * scale;
            const channelTextWidth = brandLogo && channelName ? 235 * scale : 0;
            const channelGroupWidth = (brandLogo ? channelLogoSize + (channelName ? 14 * scale : 0) : 0) + channelTextWidth;
            const channelStartX = (width - channelGroupWidth) / 2;
            if (brandLogo) {
                drawPositionedBrandImage(brandLogo, channelStartX, height - 73 * scale, channelLogoSize, channelLogoSize);
                addPosterHitRegion("brandLogo", channelStartX, height - 73 * scale, channelLogoSize, channelLogoSize);
            }
            if (channelName) {
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = brandLogo ? "left" : "center";
                ctx.font = `800 ${15 * scale}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(channelName, brandLogo ? channelStartX + channelLogoSize + 14 * scale : width / 2, height - 52 * scale, brandLogo ? channelTextWidth : width - 120 * scale);
            }
            ctx.fillStyle = "#9fb4c6";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `800 ${11 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.letterSpacing = `${2 * scale}px`;
            ctx.fillText("MONTHLY FIXTURES", width / 2, footerY, width - 100 * scale);
            ctx.letterSpacing = "0px";
        }

        function renderMonthlyClubSearchResults(clubs) {
            monthlyClubResults.replaceChildren();
            clubs.forEach(club => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "monthly-club-result";
                button.setAttribute("role", "listitem");
                button.append(
                    createPosterImage(club.logo, club.name),
                    Object.assign(document.createElement("span"), { textContent: `${club.name} · ${club.leagueName}` })
                );
                button.addEventListener("click", () => loadMonthlyClubFixtures(club));
                monthlyClubResults.append(button);
            });
        }

        function createPosterImage(source, alt) {
            const image = document.createElement("img");
            image.src = source;
            image.alt = "";
            image.title = alt;
            image.loading = "lazy";
            return image;
        }

        async function searchMonthlyClubs() {
            const query = monthlyClubSearchInput.value.trim();
            const generation = ++monthlyClubSearchGeneration;
            monthlyClubResults.replaceChildren();
            if (!query) {
                monthlyClubStatus.textContent = "Klubni qidirish uchun nomini yozing.";
                return;
            }
            const fixturesApi = window.pitchPlanClubFixtures;
            if (!fixturesApi) {
                monthlyClubStatus.textContent = "Klub ma’lumotlari xizmati yuklanmadi. Sahifani yangilang.";
                return;
            }
            monthlyClubStatus.textContent = "Klublar ro‘yxati qidirilmoqda…";
            try {
                const clubs = await fixturesApi.searchClubs(query);
                if (generation !== monthlyClubSearchGeneration) return;
                renderMonthlyClubSearchResults(clubs.clubs);
                monthlyClubStatus.textContent = clubs.clubs.length
                    ? `${clubs.clubs.length} ta klub topildi. Tanlash uchun klub nomini bosing.${clubs.partial ? " Ayrim liga ma’lumotlari yuklanmadi." : ""}`
                    : "Bu nom bo‘yicha Top-5 ligada klub topilmadi.";
            } catch (error) {
                if (generation !== monthlyClubSearchGeneration) return;
                monthlyClubStatus.textContent = "Klublar ro‘yxatini yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring.";
                console.error("Monthly fixtures club search failed:", error);
            }
        }

        async function loadMonthlyClubFixtures(club) {
            monthlyFixtureLoadController?.abort();
            monthlyFixtureLoadController = new AbortController();
            const { signal } = monthlyFixtureLoadController;
            monthlyClub = { ...club, logoImage: null };
            monthlyClubPalette = null;
            monthlyFixtures = [];
            monthlyClubResults.replaceChildren();
            monthlyClubSearchInput.value = club.name;
            monthlyFixturesRefresh.disabled = false;
            const periodLabel = monthlyPeriod === "year" ? "butun yil" : monthlyPeriod === "next-month" ? "keyingi oy" : "shu oy";
            monthlyClubStatus.textContent = `${club.name} uchun ${periodLabel} uchrashuvlari yuklanmoqda…`;
            applyTemplateDimensions("monthly-club-fixtures");
            drawPoster();
            const fixturesApi = window.pitchPlanClubFixtures;
            if (!fixturesApi) {
                monthlyClubStatus.textContent = "Uchrashuvlar xizmati yuklanmadi. Sahifani yangilang.";
                return;
            }
            try {
                const now = new Date();
                const result = await fixturesApi.getFixtures(club, now.getFullYear(), monthlyPeriod, signal);
                if (signal.aborted) return;
                const [clubLogoImage, ...fixtures] = await Promise.all([
                    loadExportSafeImageSource(club.logo),
                    ...result.fixtures.map(async fixture => ({
                        ...fixture,
                        opponentLogoImage: await loadExportSafeImageSource(fixture.opponentLogo),
                        leagueLogoImage: await loadExportSafeImageSource(fixture.leagueLogo)
                    }))
                ]);
                if (signal.aborted) return;
                monthlyClub.logoImage = clubLogoImage;
                monthlyClubPalette = getMonthlyClubPalette(clubLogoImage);
                monthlyFixtures = fixtures;
                applyTemplateDimensions("monthly-club-fixtures");
                monthlyClubStatus.textContent = result.failed.length
                    ? `${club.name}: ${fixtures.length} ta o‘yin topildi. ${result.failed.length} ta liga jadvalini yuklab bo‘lmadi; natija to‘liq bo‘lmasligi mumkin.`
                    : `${club.name}: ${periodLabel} uchun ${fixtures.length} ta o‘yin topildi.`;
                if (result.failed.length) {
                    console.error("Some monthly fixture league feeds failed:", result.failed);
                }
                drawPoster();
            } catch (error) {
                if (signal.aborted) return;
                monthlyClubStatus.textContent = "Uchrashuvlarni yuklab bo‘lmadi. Internet aloqasini tekshirib, qayta urinib ko‘ring.";
                console.error(`Monthly fixtures failed for ${club.league}:${club.id}:`, error);
                drawPoster();
            }
        }

        function drawWatermark(width, height) {
            if (isBrandLogoRemoved()) return;
            ctx.save();
            ctx.globalAlpha = .055;
            if (brandLogo) {
                drawImageWithLogoShape(brandLogo, width * .12, height * .22, width * .76, height * .58);
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
            if (isBrandLogoRemoved()) return;
            if (brandLogo) {
                drawPositionedBrandImage(brandLogo, centerX - size / 2, y, size, size);
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
            const rowHeight = Math.min(columns === 2 ? 96 : 116, (availableHeight - rowGap * (gridRows - 1)) / gridRows);
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

        function drawTodayResultsPoster(width, height) {
            const palette = todayResultsThemes[todayResultsTheme];
            const royalTheme = todayResultsTheme === "real-madrid";
            const posterBackground = royalTheme ? null : backgroundImage ||
                (todayResultsBackground.complete && todayResultsBackground.naturalWidth ? todayResultsBackground : null);
            if (posterBackground) {
                drawImageCover(posterBackground, 0, 0, width, height);
                ctx.save();
                if (todayResultsTheme === "current") {
                    ctx.fillStyle = palette.overlay;
                } else {
                    const tint = ctx.createLinearGradient(0, 0, width, height);
                    tint.addColorStop(0, palette.background[0]);
                    tint.addColorStop(.55, palette.background[1]);
                    tint.addColorStop(1, palette.background[2]);
                    ctx.globalAlpha = .78;
                    ctx.fillStyle = tint;
                }
                ctx.fillRect(0, 0, width, height);
                ctx.restore();
            } else {
                const background = ctx.createLinearGradient(0, 0, width, height);
                background.addColorStop(0, palette.background[0]);
                background.addColorStop(.55, palette.background[1]);
                background.addColorStop(1, palette.background[2]);
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
            }
            if (backgroundImage && !royalTheme) {
                ctx.save();
                ctx.globalAlpha = Number(backgroundOpacityInput.value) / 100 * .28;
                ctx.fillStyle = palette.card;
                ctx.fillRect(0, 0, width, height);
                ctx.restore();
            }

            ctx.save();
            ctx.globalAlpha = .13;
            ctx.strokeStyle = palette.accent;
            ctx.lineWidth = 2;
            for (let x = 54; x < width; x += 74) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.arc(width + 84, 145, 250, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();

            const margin = 66;
            const accent = palette.accent;
            const brandSize = 42 * Number(brandLogoSizeInput.value) / 100;
            drawBrandLogo(margin + brandSize / 2, 56, brandSize);
            addPosterHitRegion("brandLogo", margin, 56 - brandSize / 2, brandSize, brandSize);

            ctx.textBaseline = "middle";
            ctx.textAlign = "left";
            ctx.fillStyle = accent;
            ctx.font = '700 18px "Segoe UI", Arial, sans-serif';
            ctx.fillText("FULL TIME  /  06:00 DAN", margin + brandSize + 22, 48);
            ctx.fillStyle = royalTheme ? "#ffffff" : palette.text;
            const title = titleInput.value.trim().toUpperCase() || "BUGUNGI NATIJALAR";
            const titleX = margin + brandSize + 22;
            const titleWidth = width - titleX - margin;
            const titleSize = fitText(title, titleWidth, 57, 400, 25, "Bebas Neue");
            ctx.font = `400 ${titleSize}px "Bebas Neue", "Arial Narrow", sans-serif`;
            ctx.fillText(title, titleX, 91, titleWidth);
            addPosterHitRegion("title", titleX, 68, titleWidth, 48);

            ctx.textAlign = "right";
            ctx.fillStyle = palette.muted;
            ctx.font = '600 18px "Segoe UI", Arial, sans-serif';
            ctx.fillText(dateInput.value.trim().toUpperCase(), width - margin, 143, width - margin * 2);
            addPosterHitRegion("date", margin, 127, width - margin * 2, 32);
            ctx.fillStyle = accent;
            ctx.fillRect(margin, 170, width - margin * 2, 3);

            const columns = matchlistColumns;
            const gapX = columns === 2 ? 18 : 0;
            const gridWidth = width - margin * 2;
            const cardWidth = (gridWidth - gapX * (columns - 1)) / columns;
            const count = Math.max(1, Math.ceil(rows.length / columns));
            const footerTop = height - 120;
            const listTop = 198;
            const availableHeight = footerTop - listTop - 18;
            const rowGap = columns === 2 ? 14 : 10;
            const rowHeight = Math.min(columns === 2 ? 124 : 100,
                (availableHeight - rowGap * (count - 1)) / count);
            const listHeight = rowHeight * count + rowGap * (count - 1);
            const listStartY = listTop + Math.max(0, (availableHeight - listHeight) / 2);
            const scoreWidth = Math.min(columns === 2 ? 90 : 132, cardWidth * .23);
            const logoSize = Math.min(columns === 2 ? 44 : 54, rowHeight * .62);

            rows.forEach((row, index) => {
                const column = index % columns;
                const rowIndex = Math.floor(index / columns);
                const x = margin + column * (cardWidth + gapX);
                const y = listStartY + rowIndex * (rowHeight + rowGap);
                fillRoundRect(x, y, cardWidth, rowHeight, 15, palette.card);
                ctx.fillStyle = accent;
                ctx.beginPath();
                ctx.roundRect(x, y, 5, rowHeight, [15, 0, 0, 15]);
                ctx.fill();

                const leftWidth = (cardWidth - scoreWidth) / 2;
                const logoY = y + (rowHeight - logoSize) / 2 + 5;
                const homeLogoX = x + 16;
                const awayLogoX = x + cardWidth - logoSize - 16;
                drawLogo(row.homeLogo, row.home, homeLogoX, logoY, logoSize, "#ffffff", true, palette.card);
                drawLogo(row.awayLogo, row.away, awayLogoX, logoY, logoSize, "#ffffff", true, palette.card);
                addPosterHitRegion("homeLogo", homeLogoX, logoY, logoSize, logoSize, index);
                addPosterHitRegion("awayLogo", awayLogoX, logoY, logoSize, logoSize, index);

                const textGap = columns === 2 ? 8 : 14;
                const nameSize = Math.min(columns === 2 ? 21 : 27, rowHeight * .34);
                const homeTextX = homeLogoX + logoSize + textGap;
                const homeTextWidth = Math.max(8, x + leftWidth - homeTextX - 8);
                ctx.fillStyle = palette.text;
                ctx.textAlign = "left";
                const homeName = getCompactTeamName(row.home).toUpperCase();
                ctx.save();
                ctx.letterSpacing = "1px";
                ctx.font = `400 ${fitText(homeName, homeTextWidth, nameSize + 2, 400, 9, "Bebas Neue")}px "Bebas Neue", "Arial Narrow", sans-serif`;
                ctx.fillText(homeName, homeTextX, y + rowHeight / 2 + 4, homeTextWidth);
                addPosterHitRegion("home", homeTextX, y, homeTextWidth, rowHeight, index);

                const awayTextX = x + leftWidth + scoreWidth + 8;
                const awayTextWidth = Math.max(8, awayLogoX - awayTextX - textGap);
                ctx.textAlign = "right";
                const awayName = getCompactTeamName(row.away).toUpperCase();
                ctx.font = `400 ${fitText(awayName, awayTextWidth, nameSize + 2, 400, 9, "Bebas Neue")}px "Bebas Neue", "Arial Narrow", sans-serif`;
                ctx.fillText(awayName, awayTextX + awayTextWidth, y + rowHeight / 2 + 4, awayTextWidth);
                addPosterHitRegion("away", awayTextX, y, awayTextWidth, rowHeight, index);
                ctx.restore();

                const scoreX = x + leftWidth;
                ctx.fillStyle = palette.score;
                ctx.beginPath();
                const scoreInsetY = Math.min(14, rowHeight * .12);
                ctx.roundRect(scoreX + 5, y + scoreInsetY, scoreWidth - 10, Math.max(1, rowHeight - scoreInsetY * 2), 10);
                ctx.fill();
                ctx.fillStyle = accent;
                ctx.textAlign = "center";
                const scoreFontSize = Math.min(columns === 2 ? 26 : 31, rowHeight * .4);
                ctx.font = `800 ${fitText(row.time, scoreWidth - 14, scoreFontSize, 800, 10)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.time, scoreX + scoreWidth / 2, y + rowHeight / 2, scoreWidth - 14);
                ctx.fillStyle = palette.muted;
                if (rowHeight >= 48) {
                    ctx.font = '700 10px "Segoe UI", Arial, sans-serif';
                    ctx.fillText("FT", scoreX + scoreWidth / 2, y + rowHeight / 2 + Math.min(19, rowHeight * .3));
                }
                addPosterHitRegion("time", scoreX, y, scoreWidth, rowHeight, index);
            });

            if (!rows.length) {
                const messageY = listTop + availableHeight / 2;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = palette.text;
                ctx.font = '700 26px "Segoe UI", Arial, sans-serif';
                ctx.fillText("YAKUNLANGAN O‘YINLAR YO‘Q", width / 2, messageY - 12, gridWidth - 24);
                ctx.fillStyle = palette.muted;
                ctx.font = '500 16px "Segoe UI", Arial, sans-serif';
                ctx.fillText("Ko‘rsatilgan 06:00 dan joriy vaqtgacha yakunlangan o‘yinlar", width / 2, messageY + 24, gridWidth - 24);
            }

            const footerY = height - 72;
            ctx.fillStyle = palette.accent;
            ctx.fillRect(margin, footerY - 19, gridWidth, 1);
            ctx.fillStyle = royalTheme ? "#febe10" : palette.text;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '700 14px "Segoe UI", Arial, sans-serif';
            const caption = formatBrandCaption(brandCaptionInput.value) || "pitchplan.uz";
            ctx.fillText(caption, margin, footerY, gridWidth);
            addPosterHitRegion("caption", margin, footerY - 12, gridWidth, 26);
        }

        function drawMatchListPoster(theme, width, height) {
            const todayResults = currentTemplate === "today-results";
            if (customBackgroundColor) {
                ctx.fillStyle = backgroundColorInput.value;
            } else {
                const background = ctx.createLinearGradient(0, 0, width, height);
                background.addColorStop(0, todayResults ? "#26374c" : "#b10c12");
                background.addColorStop(.46, todayResults ? "#111c2b" : "#420609");
                background.addColorStop(1, "#08090c");
                ctx.fillStyle = background;
            }
            ctx.fillRect(0, 0, width, height);
            if (backgroundImage) {
                ctx.save();
                ctx.globalAlpha = Number(backgroundOpacityInput.value) / 100;
                drawImageCover(backgroundImage, 0, 0, width, height);
                ctx.restore();
            }

            ctx.save();
            ctx.globalAlpha = .2;
            [[0, 0, 520, 0, 0, 540], [width, 70, width, 640, width - 500, 430],
                [0, height - 420, 470, height, 0, height], [width, height - 540, width, height, width - 480, height]]
                .forEach(points => {
                    ctx.fillStyle = todayResults ? "#d7a84b" : "#f32931";
                    ctx.beginPath();
                    ctx.moveTo(points[0], points[1]);
                    ctx.lineTo(points[2], points[3]);
                    ctx.lineTo(points[4], points[5]);
                    ctx.closePath();
                    ctx.fill();
                });
            ctx.restore();

            const title = titleInput.value.trim().toUpperCase() || "UCHRASHUVLAR";
            const logoSize = 24 * Number(brandLogoSizeInput.value) / 100;
            const headerY = 56;
            const headerLogoX = 166;
            const headerTextX = headerLogoX + logoSize / 2 + 25;
            const headerTextWidth = width - headerTextX - 74;
            drawBrandLogo(headerLogoX, headerY, logoSize);
            addPosterHitRegion("brandLogo", headerLogoX - logoSize / 2, headerY, logoSize, logoSize);
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = textColorInputs.title.value;
            const titleSize = fitText(title, headerTextWidth, 43, 900, 18);
            ctx.font = `900 ${titleSize}px "Arial Narrow", "Segoe UI", sans-serif`;
            ctx.fillText(title, headerTextX, headerY + 19, headerTextWidth);
            addPosterHitRegion("title", headerTextX - 10, headerY - 5, headerTextWidth + 10, 54);
            ctx.fillStyle = textColorInputs.date.value;
            ctx.font = `600 ${fitText(dateInput.value.toUpperCase(), headerTextWidth, 21, 600, 12)}px "Arial Narrow", "Segoe UI", sans-serif`;
            ctx.fillText(dateInput.value.toUpperCase(), headerTextX + 3, headerY + 54, headerTextWidth);
            addPosterHitRegion("date", headerTextX - 10, headerY + 39, headerTextWidth + 10, 32);

            const cardX = 74;
            const cardY = 174;
            const columns = matchlistColumns;
            const columnGap = columns === 2 ? 20 : 0;
            const cardMargin = columns === 2 ? 38 : cardX;
            const cardWidth = (width - cardMargin * 2 - columnGap * (columns - 1)) / columns;
            const rowCount = Math.max(1, Math.ceil(rows.length / columns));
            const footerLogoSize = 38 * Number(brandLogoSizeInput.value) / 100;
            const footerSpace = footerLogoSize + 68;
            const availableHeight = height - cardY - footerSpace - 22;
            const rowGap = columns === 2 ? 12 : 0;
            const rowHeight = Math.min(columns === 2 ? 156 : 82,
                (availableHeight - rowGap * (rowCount - 1)) / rowCount);
            const cardHeight = rowHeight * rowCount + rowGap * (rowCount - 1);
            const centerWidth = Math.min(columns === 2 ? 108 : 132, cardWidth * (columns === 2 ? .24 : .19));
            const sideWidth = (cardWidth - centerWidth) / 2;
            const gridWidth = cardWidth * columns + columnGap * (columns - 1);

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(cardMargin, cardY, gridWidth, cardHeight, 28);
            ctx.clip();
            rows.forEach((row, index) => {
                const column = index % columns;
                const gridRow = Math.floor(index / columns);
                const x = cardMargin + column * (cardWidth + columnGap);
                const y = cardY + gridRow * (rowHeight + rowGap);
                ctx.fillStyle = todayResults
                    ? index % 2 ? "#263345" : "#1c293a"
                    : index % 2 ? "#343434" : "#1d1e20";
                if (columns === 1) ctx.fillRect(x, y, cardWidth, rowHeight);
                else fillRoundRect(x, y, cardWidth, rowHeight, 16, ctx.fillStyle);
                ctx.fillStyle = "#111214";
                ctx.fillRect(x + sideWidth, y, centerWidth, rowHeight);

                const logoSide = Math.min(columns === 2 ? 38 : 50, rowHeight * .65);
                const logoY = y + (rowHeight - logoSide) / 2;
                const logoInset = columns === 2 ? 10 : 18;
                const homeLogoX = x + sideWidth - logoSide - logoInset;
                const awayLogoX = x + sideWidth + centerWidth + logoInset;
                drawLogo(row.homeLogo, row.home, homeLogoX, logoY, logoSide, "#ffffff", true, textColorInputs.team.value);
                drawLogo(row.awayLogo, row.away, awayLogoX, logoY, logoSide, "#ffffff", true, textColorInputs.team.value);
                addPosterHitRegion("homeLogo", homeLogoX, logoY, logoSide, logoSide, index);
                addPosterHitRegion("awayLogo", awayLogoX, logoY, logoSide, logoSide, index);

                const nameSize = Math.min(columns === 2 ? 24 : 31, rowHeight * .38);
                const textInset = columns === 2 ? 8 : 30;
                const homeMaxWidth = Math.max(10, sideWidth - logoSide - textInset - logoInset);
                const homeX = x + sideWidth - logoSide - textInset;
                ctx.fillStyle = textColorInputs.team.value;
                ctx.textBaseline = "middle";
                ctx.textAlign = "right";
                ctx.font = `800 ${fitText(row.home.toUpperCase(), homeMaxWidth, nameSize, 800, 9)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.home.toUpperCase(), homeX, y + rowHeight / 2, homeMaxWidth);
                addPosterHitRegion("home", homeX - homeMaxWidth, y, homeMaxWidth, rowHeight, index);

                const awayX = awayLogoX + logoSide + logoInset;
                const awayMaxWidth = Math.max(10, sideWidth - logoSide - textInset - logoInset);
                ctx.textAlign = "left";
                ctx.font = `800 ${fitText(row.away.toUpperCase(), awayMaxWidth, nameSize, 800, 9)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.away.toUpperCase(), awayX, y + rowHeight / 2, awayMaxWidth);
                addPosterHitRegion("away", awayX, y, awayMaxWidth, rowHeight, index);

                ctx.fillStyle = textColorInputs.time.value;
                ctx.textAlign = "center";
                ctx.font = `900 ${fitText(row.time, centerWidth - 16, Math.min(columns === 2 ? 28 : 34, rowHeight * .42), 900, 11)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(row.time, x + sideWidth + centerWidth / 2, y + rowHeight * .43, centerWidth - 12);
                ctx.fillStyle = textColorInputs.date.value;
                ctx.font = `500 ${fitText(dateInput.value.toUpperCase(), centerWidth - 12, Math.min(columns === 2 ? 12 : 15, rowHeight * .2), 500, 8)}px "Arial Narrow", "Segoe UI", sans-serif`;
                ctx.fillText(currentTemplate === "today-results" ? "FT" : dateInput.value.toUpperCase(),
                    x + sideWidth + centerWidth / 2, y + rowHeight * .73, centerWidth - 10);
                addPosterHitRegion("time", x + sideWidth, y, centerWidth, rowHeight, index);
            });
            if (!rows.length) {
                ctx.fillStyle = "#ffffff";
                ctx.font = '700 27px "Segoe UI", Arial, sans-serif';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(todayResults ? "BUGUN YAKUNLANGAN O‘YINLAR YO‘Q" : "UCHRASHUV QO‘SHING",
                    width / 2, cardY + rowHeight / 2, width - 100);
            }
            ctx.restore();

            const footerY = height - footerSpace + 15;
            drawBrandLogo(width / 2, footerY, footerLogoSize);
            addPosterHitRegion("brandLogo", width / 2 - footerLogoSize / 2, footerY, footerLogoSize, footerLogoSize);
            ctx.fillStyle = textColorInputs.brand.value;
            ctx.font = '800 21px "Segoe UI", Arial, sans-serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const caption = formatBrandCaption(brandCaptionInput.value) || "pitchplan.uz";
            ctx.fillText(caption, width / 2, footerY + footerLogoSize + 20, width - 100);
            addPosterHitRegion("caption", 50, footerY + footerLogoSize + 5, width - 100, 32);
        }

        function getCompactTeamName(name) {
            const normalized = name.trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
            const knownNames = {
                "manchester united": "Man UTD",
                "manchester city": "Man City",
                "newcastle united": "Newcastle",
                "nottingham forest": "Nott'm Forest",
                "west ham united": "West Ham",
                "wolverhampton wanderers": "Wolves",
                "brighton & hove albion": "Brighton",
                "paris saint-germain": "PSG",
                "atletico madrid": "Atleti",
                "tottenham hotspur": "Tottenham",
                "crystal palace": "Palace",
                "aston villa": "Villa",
                "real sociedad": "Sociedad",
                "borussia dortmund": "Dortmund",
                "borussia mönchengladbach": "Gladbach",
                "bayern munich": "Bayern",
                "inter milan": "Inter",
                "ac milan": "AC Milan",
                "leeds united": "Leeds",
                "ipswich town": "Ipswich"
            };
            if (knownNames[normalized]) return knownNames[normalized];
            const words = name.trim().split(/\s+/);
            if (words.length < 2) return name;
            return `${words[0]} ${words.slice(1).map(word => word.length <= 3 ? word : `${word[0]}.`).join(" ")}`;
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
                ctx.letterSpacing = "1px";
                const leftTextX = x + logoSize + 18;
                const leftTextWidth = Math.max(20, teamWidth - logoSize - 24);
                const rightTextX = x + teamWidth + timeWidth + 8;
                const rightTextWidth = Math.max(20, teamWidth - logoSize - 24);
                const homeName = grid.columns === 2 ? getCompactTeamName(row.home) : row.home;
                const awayName = grid.columns === 2 ? getCompactTeamName(row.away) : row.away;
                const nameSize = Math.min(grid.columns === 2 ? 28 : 24, grid.rowHeight * (grid.columns === 2 ? .36 : .31));
                ctx.font = `400 ${fitText(homeName, leftTextWidth, nameSize, 400, grid.columns === 2 ? 14 : 9, "Bebas Neue")}px "Bebas Neue", Arial, sans-serif`;
                ctx.fillText(homeName, leftTextX + leftTextWidth / 2, y + grid.rowHeight / 2, leftTextWidth);
                addPosterHitRegion("home", leftTextX, y, leftTextWidth, grid.rowHeight, index);
                ctx.font = `400 ${fitText(awayName, rightTextWidth, nameSize, 400, grid.columns === 2 ? 14 : 9, "Bebas Neue")}px "Bebas Neue", Arial, sans-serif`;
                ctx.fillText(awayName, rightTextX + rightTextWidth / 2, y + grid.rowHeight / 2, rightTextWidth);
                addPosterHitRegion("away", rightTextX, y, rightTextWidth, grid.rowHeight, index);
                ctx.letterSpacing = "0px";
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
            const brandLogoScale = Number(brandLogoSizeInput.value) / 100;
            const panelX = 90 * scale;
            const panelY = 545 * scale;
            const panelWidth = width - panelX * 2;
            const panelHeight = height - panelY;
            const logoSize = 122 * scale;
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

            const drawPanelPath = () => {
                ctx.moveTo(panelX + panelRadius, panelY);
                ctx.lineTo(width - panelX - panelRadius, panelY);
                ctx.quadraticCurveTo(width - panelX, panelY, width - panelX, panelY + panelRadius);
                ctx.lineTo(width - panelX, height);
                ctx.lineTo(panelX, height);
                ctx.lineTo(panelX, panelY + panelRadius);
                ctx.quadraticCurveTo(panelX, panelY, panelX + panelRadius, panelY);
                ctx.closePath();
            };
            const drawInnerPanelPath = () => {
                const inset = 3 * scale;
                const innerRadius = Math.max(0, panelRadius - inset);
                ctx.moveTo(panelX + inset + innerRadius, panelY + inset);
                ctx.lineTo(width - panelX - inset - innerRadius, panelY + inset);
                ctx.quadraticCurveTo(width - panelX - inset, panelY + inset, width - panelX - inset, panelY + inset + innerRadius);
                ctx.lineTo(width - panelX - inset, height);
                ctx.lineTo(panelX + inset, height);
                ctx.lineTo(panelX + inset, panelY + inset + innerRadius);
                ctx.quadraticCurveTo(panelX + inset, panelY + inset, panelX + inset + innerRadius, panelY + inset);
                ctx.closePath();
            };
            drawPhotoQuoteGlassPanel(
                panelX,
                panelY,
                panelWidth,
                panelHeight,
                panelRadius,
                scale,
                canvas,
                drawPanelPath,
                drawInnerPanelPath
            );

            const brandBox = {
                x: 18 * scale,
                y: 18 * scale,
                width: 148 * scale * brandLogoScale,
                height: 72 * scale * brandLogoScale
            };
            ctx.save();
            ctx.shadowColor = "rgba(0,0,0,.35)";
            ctx.shadowBlur = 18 * scale;
            ctx.shadowOffsetY = 8 * scale;
            fillRoundRect(brandBox.x, brandBox.y, brandBox.width, brandBox.height, 18 * scale, "rgba(255,255,255,.18)", "rgba(255,255,255,.26)");
            ctx.restore();
            const innerBrandX = brandBox.x + 7 * scale;
            const innerBrandY = brandBox.y + 7 * scale;
            const innerBrandW = brandBox.width - 14 * scale;
            const innerBrandH = brandBox.height - 14 * scale;
            if (brandLogo) drawImageWithLogoShape(brandLogo, innerBrandX, innerBrandY, innerBrandW, innerBrandH);
            else drawBrandLogo(innerBrandX + innerBrandW / 2, innerBrandY + innerBrandH / 2, Math.min(innerBrandW, innerBrandH));
            addPosterHitRegion("brandLogo", brandBox.x, brandBox.y, brandBox.width, brandBox.height);

            const leagueSize = 82 * scale;
            const leagueY = panelY - leagueSize * .62;
            const leagueBadgeX = width / 2 - leagueSize / 2;
            const leagueBadgeY = leagueY;
            ctx.save();
            ctx.filter = "blur(10px) saturate(1.3)";
            ctx.fillStyle = "rgba(255,255,255,.12)";
            ctx.beginPath();
            ctx.roundRect(leagueBadgeX - 18 * scale, leagueBadgeY - 14 * scale, leagueSize + 36 * scale, leagueSize + 28 * scale, 24 * scale);
            ctx.fill();
            ctx.restore();
            ctx.save();
            ctx.shadowColor = "rgba(15,20,30,.22)";
            ctx.shadowBlur = 18 * scale;
            ctx.shadowOffsetY = 8 * scale;
            ctx.fillStyle = "rgba(255,255,255,.09)";
            ctx.beginPath();
            ctx.roundRect(leagueBadgeX - 16 * scale, leagueBadgeY - 12 * scale, leagueSize + 32 * scale, leagueSize + 24 * scale, 22 * scale);
            ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,.42)";
            ctx.lineWidth = 1.5 * scale;
            ctx.stroke();
            ctx.restore();
            if (leagueLogo) {
                drawImageContainWithOutline(
                    leagueLogo,
                    leagueBadgeX,
                    leagueBadgeY,
                    leagueSize,
                    leagueSize,
                    2.5 * scale
                );
            } else {
                ctx.fillStyle = "#f4f4f0";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = `900 ${28 * scale}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText("PL", width / 2, leagueY + leagueSize / 2);
            }
            addPosterHitRegion("leagueLogo", leagueBadgeX - 14 * scale, leagueBadgeY - 14 * scale, leagueSize + 28 * scale, leagueSize + 28 * scale);

            const homeCenter = width * .255;
            const awayCenter = width * .745;
            const crestY = panelY + 32 * scale;
            const drawCrest = (image, label, centerX, rowIndex, type) => {
                const crestBoxX = centerX - logoSize / 2;
                const crestBoxY = crestY;
                const crestBoxSize = logoSize;

                ctx.save();
                ctx.shadowColor = "rgba(9, 12, 18, 0.35)";
                ctx.shadowBlur = 18 * scale;
                ctx.shadowOffsetY = 9 * scale;
                ctx.fillStyle = "rgba(255,255,255,0.12)";
                ctx.beginPath();
                ctx.roundRect(crestBoxX - 10 * scale, crestBoxY - 8 * scale, crestBoxSize + 20 * scale, crestBoxSize + 16 * scale, 24 * scale);
                ctx.fill();
                ctx.strokeStyle = "rgba(255,255,255,0.3)";
                ctx.lineWidth = 1.2 * scale;
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.beginPath();
                ctx.roundRect(crestBoxX + 4 * scale, crestBoxY + 4 * scale, crestBoxSize - 8 * scale, crestBoxSize - 8 * scale, 18 * scale);
                ctx.clip();
                if (image) {
                    drawImageContainWithOutline(
                        image,
                        crestBoxX + 6 * scale,
                        crestBoxY + 6 * scale,
                        crestBoxSize - 12 * scale,
                        crestBoxSize - 12 * scale,
                        2.5 * scale
                    );
                } else {
                    ctx.fillStyle = "rgba(38,51,67,0.72)";
                    ctx.fillRect(crestBoxX + 4 * scale, crestBoxY + 4 * scale, crestBoxSize - 8 * scale, crestBoxSize - 8 * scale);
                    ctx.fillStyle = "#e8edf5";
                    ctx.font = `900 ${Math.max(22, crestBoxSize * 0.42)}px "Segoe UI", Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(label.slice(0, 2).toUpperCase(), centerX, crestBoxY + crestBoxSize / 2);
                }
                ctx.restore();
                addPosterHitRegion(type, crestBoxX, crestBoxY, crestBoxSize, crestBoxSize, rowIndex);
            };
            drawCrest(match.homeLogo, match.home, homeCenter, 0, "homeLogo");
            drawCrest(match.awayLogo, match.away, awayCenter, 0, "awayLogo");

            ctx.fillStyle = textColorInputs.team.value;
            const teamY = panelY + 183 * scale;
            ctx.font = `900 ${fitText(match.home.toUpperCase(), width * .37, 25 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(match.home.toUpperCase(), homeCenter, teamY, width * .37);
            addPosterHitRegion("home", homeCenter - width * .19, teamY - 28 * scale, width * .38, 56 * scale, 0);
            ctx.font = `900 ${fitText(match.away.toUpperCase(), width * .37, 25 * scale, 900, 13 * scale)}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText(match.away.toUpperCase(), awayCenter, teamY, width * .37);
            addPosterHitRegion("away", awayCenter - width * .19, teamY - 28 * scale, width * .38, 56 * scale, 0);

            ctx.fillStyle = textColorInputs.time.value;
            const scoreY = panelY + 116 * scale;
            const scoreScale = photoTextSizes.result / 100;
            ctx.font = `900 ${fitText(match.time, width * .37, 88 * scale * scoreScale, 900, 44 * scale * scoreScale)}px "Segoe UI", Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(match.time, width / 2, scoreY, width * .37);
            addPosterHitRegion("time", width * .31, scoreY - 55 * scale, width * .38, 92 * scale, 0);

            ctx.fillStyle = theme.accent;
            ctx.font = `900 ${17 * scale}px "Segoe UI", Arial, sans-serif`;
            ctx.fillText("FULL-TIME", width / 2, panelY + 220 * scale);

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
            ctx.fillText("pitchplan.uz  /  MATCHDAY", 98, 63);

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
            ctx.fillText(formatBrandCaption(brandCaptionInput.value), 90, height - 42, width - 180);
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
                matchdayLeague: matchdayLeagueInput.value,
                matchdayRound: matchdayRoundInput.value,
                matchdayStadium: matchdayStadiumInput.value,
                goals: goalScorersInput.value,
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
            brandCaptionInput.value = normalizeBrandCaption(state.caption);
            matchdayLeagueInput.value = state.matchdayLeague;
            matchdayRoundInput.value = state.matchdayRound;
            matchdayStadiumInput.value = state.matchdayStadium;
            goalScorersInput.value = state.goals;
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
            if (parts[0] === "poster" && parts.length === 2) {
                try {
                    const template = decodeURIComponent(parts[1]);
                    if (Object.hasOwn(examples, template)) return { section: "editor", template };
                } catch (error) {
                    console.error("Invalid PitchPlan template URL:", error);
                }
            }
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
                const route = isEditor && options.template
                    ? `/poster/${encodeURIComponent(options.template)}`
                    : routes[section];
                if (route && window.location.hash !== `#${route}`) {
                    window.history.pushState(null, "", `#${route}`);
                    lastHandledHash = window.location.hash;
                }
            }
            if (section === "templates") scheduleTemplatePreviews();
            window.dispatchEvent(new CustomEvent("pitchplan:sectionchange", { detail: { section, match: options.match, club: options.club } }));
        }

        function youtubeVideoId(source) {
            try {
                const url = new URL(source);
                const host = url.hostname.toLowerCase().replace(/^www\./, "");
                if (host === "youtu.be") return url.pathname.slice(1).split("/")[0];
                if (!["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) return "";
                if (url.searchParams.has("v")) return url.searchParams.get("v");
                const match = url.pathname.match(/^\/(?:embed|live|shorts)\/([^/?]+)/);
                return match ? match[1] : "";
            } catch {
                return "";
            }
        }

        function ensureYouTubeApi() {
            if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
            if (youtubeApiPromise) return youtubeApiPromise;
            youtubeApiPromise = new Promise((resolve, reject) => {
                const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
                const script = existingScript || document.createElement("script");
                const previousReady = window.onYouTubeIframeAPIReady;
                const timeout = window.setTimeout(() => reject(new Error("YouTube player API vaqtda yuklanmadi.")), 15000);
                window.onYouTubeIframeAPIReady = () => {
                    window.clearTimeout(timeout);
                    resolve(window.YT);
                    if (typeof previousReady === "function") previousReady();
                };
                script.addEventListener("error", () => {
                    window.clearTimeout(timeout);
                    reject(new Error("YouTube player API yuklanmadi."));
                }, { once: true });
                script.addEventListener("load", () => {
                    if (window.YT && window.YT.Player) {
                        window.clearTimeout(timeout);
                        resolve(window.YT);
                    }
                }, { once: true });
                if (window.YT && window.YT.Player) {
                    window.clearTimeout(timeout);
                    resolve(window.YT);
                    return;
                }
                if (!existingScript) {
                    script.src = "https://www.youtube.com/iframe_api";
                    script.async = true;
                    document.head.appendChild(script);
                }
            });
            return youtubeApiPromise;
        }

        function updateBroadcastCaption() {
            const caption = broadcastCaptionInput.value.trim();
            broadcastPlayerCaption.textContent = caption;
            broadcastPlayerCaption.hidden = !caption;
        }

        function updateBroadcastPlayButton(playing) {
            broadcastPlaying = playing;
            broadcastPlayPauseButton.textContent = playing ? "Ⅱ" : "▶";
            broadcastPlayPauseButton.setAttribute("aria-label", playing ? "Pauza qilish" : "Videoni boshlash");
        }

        function replaceBroadcastIframe() {
            const replacement = document.createElement("iframe");
            replacement.id = "broadcast-iframe";
            replacement.title = "Live stream embed";
            replacement.allow = "autoplay; fullscreen";
            replacement.loading = "lazy";
            replacement.hidden = true;
            if (broadcastIframe.isConnected) broadcastIframe.replaceWith(replacement);
            else broadcastPlayerShell.insertBefore(replacement, broadcastPlayerCaption);
            broadcastIframe = replacement;
        }

        function resetYouTubePlayer() {
            if (youtubePlayer) youtubePlayer.destroy();
            youtubePlayer = null;
            youtubePlayerReady = false;
            pendingYoutubeVideoId = null;
            if (broadcastYoutubeMount.isConnected) broadcastYoutubeMount.remove();
            broadcastYoutubeMount = document.createElement("div");
            broadcastYoutubeMount.id = "broadcast-youtube-player";
            broadcastYoutubeMount.hidden = true;
            broadcastPlayerShell.insertBefore(broadcastYoutubeMount, broadcastPlayerCaption);
            replaceBroadcastIframe();
        }

        function stopHlsPlayback() {
            if (broadcastVideo.hls) {
                broadcastVideo.hls.destroy();
                broadcastVideo.hls = null;
            }
            broadcastVideo.pause();
            broadcastVideo.removeAttribute("src");
            broadcastVideo.load();
        }

        async function loadYouTubeVideo(videoId) {
            pendingYoutubeVideoId = videoId;
            broadcastMuted = false;
            broadcastMuteButton.textContent = "Ovozni o‘chirish";
            broadcastMuteButton.setAttribute("aria-label", broadcastMuteButton.textContent);
            broadcastYoutubeMount.hidden = false;
            broadcastIframe.hidden = false;
            broadcastIframe.style.display = "none";
            broadcastPlayerControls.hidden = false;
            broadcastVideo.hidden = true;
            broadcastPlayerEmpty.hidden = true;
            broadcastStatusEl.textContent = "YouTube video yuklanmoqda…";
            try {
                const YT = await ensureYouTubeApi();
                if (youtubePlayer && youtubePlayerReady) {
                    youtubePlayer.unMute();
                    youtubePlayer.setVolume(Number(broadcastVolumeInput.value));
                    youtubePlayer.cueVideoById(pendingYoutubeVideoId);
                    return;
                }
                if (youtubePlayer) return;
                youtubePlayer = new YT.Player(broadcastYoutubeMount, {
                    videoId: pendingYoutubeVideoId,
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        fs: 0,
                        playsinline: 1,
                        rel: 0,
                        origin: window.location.origin
                    },
                    events: {
                        onReady: event => {
                            youtubePlayer = event.target;
                            youtubePlayerReady = true;
                            event.target.setVolume(Number(broadcastVolumeInput.value));
                            event.target.cueVideoById(pendingYoutubeVideoId);
                        },
                        onStateChange: event => {
                            const playing = event.data === YT.PlayerState.PLAYING;
                            updateBroadcastPlayButton(playing);
                            if (playing) broadcastStatusEl.textContent = "Video ijro etilmoqda.";
                            else if (event.data === YT.PlayerState.PAUSED) broadcastStatusEl.textContent = "Video pauzada.";
                        },
                        onError: event => {
                            const message = event.data === 101 || event.data === 150
                                ? "Bu video YouTube tomonidan boshqa saytda ko‘rsatishga ruxsat bermagan."
                                : "YouTube videoni yuklay olmadi. Video havolasini tekshiring.";
                            broadcastStatusEl.textContent = message;
                        }
                    }
                });
            } catch (error) {
                youtubeApiPromise = null;
                broadcastStatusEl.textContent = `YouTube player ishga tushmadi: ${error.message}`;
                broadcastPlayerEmpty.hidden = false;
                broadcastPlayerControls.hidden = true;
            }
        }

        function setBroadcastSource(source) {
            let trimmed = (source || "").trim();
            const iframeSource = trimmed.match(/<iframe\b[^>]*\bsrc=["']([^"']+)["']/i);
            if (iframeSource) trimmed = iframeSource[1].replace(/&amp;/g, "&").trim();
            if (!trimmed) {
                resetYouTubePlayer();
                stopHlsPlayback();
                broadcastStatusEl.textContent = "Live stream URL ni kiriting.";
                broadcastPlayerEmpty.hidden = false;
                broadcastVideo.hidden = true;
                broadcastPlayerControls.hidden = true;
                broadcastPlayerCaption.hidden = true;
                broadcastIframe.hidden = true;
                broadcastIframe.src = "";
                return;
            }
            const videoId = youtubeVideoId(trimmed);
            if (videoId) {
                if (broadcastVideo.hls) {
                    broadcastVideo.hls.destroy();
                    broadcastVideo.hls = null;
                }
                broadcastVideo.pause();
                broadcastVideo.removeAttribute("src");
                broadcastVideo.load();
                broadcastYoutubeMount.hidden = true;
                broadcastIframe.style.display = "";
                loadYouTubeVideo(videoId);
                updateBroadcastCaption();
                updateBroadcastPlayButton(false);
                return;
            }
            const isHls = /\.m3u8(?:\?.*)?$/i.test(trimmed) || /hls/i.test(trimmed);
            const isEmbed = /player\.twitch\.tv|vimeo\.com\/video|facebook\.com\/plugins|allplay|iframe|embed/i.test(trimmed);
            if (trimmed.startsWith("rtmp://") || trimmed.startsWith("rtmps://")) {
                resetYouTubePlayer();
                stopHlsPlayback();
                broadcastStatusEl.textContent = "RTMP browserda to‘g‘ridan-to‘g‘ri ishlamaydi. HLS/WHIP yoki embed URL ishlating.";
                broadcastPlayerEmpty.hidden = false;
                broadcastVideo.hidden = true;
                broadcastPlayerControls.hidden = true;
                broadcastIframe.hidden = true;
                broadcastIframe.src = "";
                return;
            }
            if (isHls) {
                resetYouTubePlayer();
                broadcastIframe.hidden = true;
                broadcastIframe.src = "";
                broadcastPlayerEmpty.hidden = true;
                broadcastPlayerControls.hidden = false;
                broadcastVideo.hidden = false;
                broadcastMuted = false;
                broadcastMuteButton.textContent = "Ovozni o‘chirish";
                broadcastMuteButton.setAttribute("aria-label", broadcastMuteButton.textContent);
                broadcastVideo.muted = false;
                broadcastVideo.volume = Number(broadcastVolumeInput.value) / 100;
                broadcastStatusEl.textContent = "HLS stream yuklandi. Ijroni boshlash uchun ▶ tugmasini bosing.";
                updateBroadcastCaption();
                updateBroadcastPlayButton(false);
                if (window.Hls && window.Hls.isSupported()) {
                    if (broadcastVideo.hls) {
                        broadcastVideo.hls.destroy();
                        broadcastVideo.hls = null;
                    }
                    const hls = new window.Hls();
                    hls.loadSource(trimmed);
                    hls.attachMedia(broadcastVideo);
                    hls.on(window.Hls.Events.ERROR, (_, data) => {
                        if (data.fatal) {
                            broadcastStatusEl.textContent = "Stream yuklanmadi. URL ni tekshiring yoki HLS endpoint to‘g‘ri bo‘lishi kerak.";
                        }
                    });
                    broadcastVideo.hls = hls;
                } else if (broadcastVideo.canPlayType("application/vnd.apple.mpegurl")) {
                    broadcastVideo.src = trimmed;
                } else {
                    broadcastStatusEl.textContent = "Bu brauzer HLS ni qo‘llab-quvvatlamaydi. Embed yoki boshqa stream formatini ishlating.";
                }
                return;
            }
            if (isEmbed || /^https?:\/\//i.test(trimmed)) {
                resetYouTubePlayer();
                stopHlsPlayback();
                broadcastPlayerEmpty.hidden = true;
                broadcastVideo.hidden = true;
                broadcastVideo.pause();
                broadcastVideo.removeAttribute("src");
                broadcastVideo.load();
                broadcastPlayerControls.hidden = true;
                broadcastIframe.hidden = false;
                broadcastIframe.src = trimmed;
                broadcastStatusEl.textContent = "Embed player yuklanmoqda…";
                updateBroadcastCaption();
                return;
            }
            broadcastStatusEl.textContent = "URL ni HLS (.m3u8) yoki YouTube/embed URL sifatida kiriting.";
            resetYouTubePlayer();
            stopHlsPlayback();
            broadcastPlayerEmpty.hidden = false;
            broadcastVideo.hidden = true;
            broadcastPlayerControls.hidden = true;
            broadcastIframe.hidden = true;
            broadcastIframe.src = "";
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
            if (route.template) {
                if (["sf", "today-results"].includes(route.template) && !hasRememberedRedStarAccess()) {
                    requestProtectedPosterAccess(route.template);
                    return;
                }
                setTemplate(route.template);
                showAppSection("editor", { navigate: false, template: route.template });
                if (route.template === "today-results") loadTodayResultsForPoster();
                return;
            }
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
        function openRedStarPoster() {
            setTemplate("sf");
            showAppSection("editor", { template: "sf" });
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        function openProtectedPoster(template) {
            if (template === "sf") {
                openRedStarPoster();
                return;
            }
            if (template !== "today-results") {
                throw new Error("Himoyalangan poster shabloni yaroqsiz.");
            }
            setTemplate(template);
            showAppSection("editor", { template });
            window.scrollTo({ top: 0, behavior: "smooth" });
            loadTodayResultsForPoster();
        }
        function requestProtectedPosterAccess(template) {
            showAppSection("templates", { navigate: false });
            pendingProtectedTemplate = template;
            redStarPasswordTitle.textContent = template === "sf" ?
                "RED STAR FUTBOL paroli" : "BUGUNGI NATIJALAR paroli";
            redStarPasswordPrompt.textContent = "Posterni tahrirlash uchun parolni kiriting.";
            redStarPasswordSubmit.textContent = "Kirish";
            redStarPasswordInput.value = "";
            redStarPasswordError.hidden = true;
            redStarPasswordDialog.showModal();
            redStarPasswordInput.focus();
        }
        function hasRememberedRedStarAccess() {
            try {
                return localStorage.getItem(redStarAccessStorageKey) === "true";
            } catch (error) {
                console.error("Could not read remembered RED STAR poster access:", error);
                statusEl.textContent = "Saqlangan RED STAR ruxsatini o‘qib bo‘lmadi. Parolni qayta kiriting.";
                return false;
            }
        }
        redStarPasswordForm.addEventListener("submit", event => {
            event.preventDefault();
            if (redStarPasswordInput.value !== "1728") {
                redStarPasswordError.hidden = false;
                redStarPasswordInput.select();
                return;
            }
            const targetTemplate = pendingProtectedTemplate;
            if (targetTemplate === playerStatsWatermarkAction) {
                if (currentTemplate !== "football-stats") {
                    throw new Error("Watermarkni olib tashlash so‘rovi noto‘g‘ri posterga tegishli.");
                }
                playerStatsWatermarkEnabled = false;
                updatePlayerStatsWatermarkControl();
                redStarPasswordDialog.close();
                pendingProtectedTemplate = null;
                drawPoster();
                statusEl.textContent = "Watermark parol orqali olib tashlandi.";
                return;
            }
            if (!["sf", "today-results"].includes(targetTemplate)) {
                throw new Error("Himoyalangan poster tanlanmagan.");
            }
            try {
                localStorage.setItem(redStarAccessStorageKey, "true");
            } catch (error) {
                console.error("Could not remember RED STAR poster access:", error);
                statusEl.textContent = "Parol to‘g‘ri. Bu brauzer ruxsatni eslab qola olmadi.";
            }
            redStarPasswordDialog.close();
            pendingProtectedTemplate = null;
            openProtectedPoster(targetTemplate);
        });
        document.getElementById("red-star-password-close").addEventListener("click", () => {
            redStarPasswordDialog.close();
            pendingProtectedTemplate = null;
        });
        redStarPasswordDialog.addEventListener("close", () => {
            if (window.location.hash === "#/poster/sf" || window.location.hash === "#/poster/today-results") {
                if (!templatesView.hidden) {
                    window.history.replaceState(null, "", "#/poster");
                    lastHandledHash = window.location.hash;
                    pendingProtectedTemplate = null;
                }
            }
        });
        removePlayerStatsWatermarkButton.addEventListener("click", () => {
            if (currentTemplate !== "football-stats" || !playerStatsWatermarkEnabled) return;
            pendingProtectedTemplate = playerStatsWatermarkAction;
            redStarPasswordTitle.textContent = "Watermarkni olib tashlash";
            redStarPasswordPrompt.textContent = "Watermarkni olib tashlash uchun parolni kiriting.";
            redStarPasswordSubmit.textContent = "Olib tashlash";
            redStarPasswordInput.value = "";
            redStarPasswordError.hidden = true;
            redStarPasswordDialog.showModal();
            redStarPasswordInput.focus();
        });
        document.getElementById("back-to-templates").addEventListener("click", () => {
            showAppSection("templates");
            scheduleWorkspaceSave();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.getElementById("reset-template").addEventListener("click", resetCurrentTemplate);
        photoQuoteColorInput.addEventListener("input", () => {
            photoQuoteColor = photoQuoteColorInput.value;
            drawPoster();
        });
        photoQuoteFontSizeInput.addEventListener("input", () => {
            const value = Number(photoQuoteFontSizeInput.value);
            if (!Number.isFinite(value) || value < 12 || value > 120) return;
            photoQuoteFontSize = value;
            drawPoster();
        });
        photoQuoteFontSizeInput.addEventListener("change", () => {
            const value = Number(photoQuoteFontSizeInput.value);
            photoQuoteFontSize = Number.isFinite(value) ?
                Math.min(120, Math.max(12, value)) : photoQuoteFontSize;
            photoQuoteFontSizeInput.value = String(photoQuoteFontSize);
            drawPoster();
        });
        photoTextSizeInput.addEventListener("input", () => {
            if (!photoPosterTemplates.has(currentTemplate)) return;
            photoTextSizes[currentTemplate] = Number(photoTextSizeInput.value);
            photoTextSizeValue.textContent = `${photoTextSizeInput.value}%`;
            drawPoster();
        });
        titleInput.addEventListener("keydown", event => {
            if (event.key === "Enter" && !["football-lux", "photo-quote"].includes(currentTemplate)) event.preventDefault();
        });
        titleInput.addEventListener("input", drawPoster);
        dateInput.addEventListener("input", drawPoster);
        brandCaptionInput.addEventListener("input", drawPoster);
        [matchdayLeagueInput, matchdayRoundInput, matchdayStadiumInput].forEach(input =>
            input.addEventListener("input", drawPoster)
        );
        monthlyClubSearchInput.addEventListener("input", () => {
            window.clearTimeout(monthlyClubSearchTimer);
            monthlyClubSearchTimer = window.setTimeout(searchMonthlyClubs, 300);
        });
        monthlyFixturesRefresh.addEventListener("click", () => {
            if (monthlyClub) loadMonthlyClubFixtures(monthlyClub);
        });
        monthlyFixturesPeriodInput.addEventListener("change", () => {
            monthlyPeriod = monthlyFixturesPeriodInput.value;
            if (monthlyClub) loadMonthlyClubFixtures(monthlyClub);
            else drawPoster();
            scheduleWorkspaceSave();
        });
        goalScorersInput.addEventListener("input", drawPoster);
        autoResultButton?.addEventListener("click", async () => {
            const matches = await getRecentCompletedResultMatches();
            if (!matches.length) {
                statusEl.textContent = "So‘nggi yakunlangan o‘yinlar topilmadi.";
                autoResultOptions.hidden = true;
                return;
            }
            await renderAutoResultMatches();
        });
        async function loadUpcomingMatches(startDayOffset) {
            autoUpcomingMatchesButton.disabled = true;
            autoUpcomingMatchesButton.textContent = "Yuklanmoqda…";
            try {
                const fetchMatches = window.fetchUpcomingMatchesForPoster;
                if (typeof fetchMatches !== "function") throw new Error("Upcoming match feed is unavailable.");
                const matches = await fetchMatches(startDayOffset);
                if (!matches.length) {
                    statusEl.textContent = "Tanlangan vaqt oralig‘ida Top-5 ligalarda o‘yin topilmadi.";
                    return;
                }
                const upcomingRows = await Promise.all(matches.map(async match => {
                    const homeName = match.home?.name || "UY JAMOASI";
                    const awayName = match.away?.name || "MEHMON JAMOASI";
                    const [homeLogo, awayLogo] = await Promise.all([
                        loadAutoTeamLogo(homeName, match.home?.logo || "", match.league),
                        loadAutoTeamLogo(awayName, match.away?.logo || "", match.league)
                    ]);
                    return {
                        home: homeName.toLocaleUpperCase("uz-UZ"),
                        time: new Intl.DateTimeFormat("uz-UZ", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hourCycle: "h23"
                        }).format(new Date(match.date)),
                        away: awayName.toLocaleUpperCase("uz-UZ"),
                        homeLogo,
                        awayLogo
                    };
                }));
                const startDate = new Date();
                startDate.setDate(startDate.getDate() + startDayOffset);
                startDate.setHours(6, 0, 0, 0);
                const lastDate = new Date(startDate);
                lastDate.setDate(lastDate.getDate() + 1);
                const monthNames = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
                const formatDate = date => `${date.getDate()} ${monthNames[date.getMonth()]}`.toLocaleUpperCase("uz-UZ");
                rows = upcomingRows;
                titleInput.value = startDayOffset === 0 ? "BUGUNGI UCHRASHUVLAR" : "KEYINGI KUN UCHRASHUVLARI";
                dateInput.value = `${formatDate(startDate)} – ${formatDate(lastDate)}`;
                renderInputs();
                drawPoster();
                statusEl.textContent = `${rows.length} ta uchrashuv ${formatDate(startDate)} 06:00 dan ${formatDate(lastDate)} 06:00 gacha jadvalga kiritildi.`;
            } catch (error) {
                statusEl.textContent = "Tanlangan vaqt oralig‘idagi uchrashuvlarni yuklab bo‘lmadi. Qayta urinib ko‘ring.";
                console.error("Upcoming poster matches fetch failed:", error);
            } finally {
                autoUpcomingMatchesButton.disabled = false;
                autoUpcomingMatchesButton.textContent = "Avtomatik jadval";
            }
        }
        autoUpcomingMatchesButton?.addEventListener("click", () => {
            redStarRangeDialog.showModal();
        });
        async function loadTodayResultsForPoster() {
            if (!autoTodayResultsButton || autoTodayResultsButton.disabled) return;
            autoTodayResultsButton.disabled = true;
            autoTodayResultsButton.textContent = "Natijalar yuklanmoqda…";
            statusEl.textContent = "O‘yinlar bo‘limidagi ESPN natijalari yuklanmoqda…";
            try {
                const fetchMatches = window.fetchTodayCompletedMatchesForPoster;
                if (typeof fetchMatches !== "function") throw new Error("Games section ESPN results feed is unavailable.");
                const matches = await fetchMatches();
                if (currentTemplate !== "today-results") return;
                titleInput.value = "BUGUNGI NATIJALAR";
                const now = new Date();
                const start = new Date(now);
                start.setHours(6, 0, 0, 0);
                if (now.getHours() < 6) start.setDate(start.getDate() - 1);
                const monthNames = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
                const formatDate = date => `${date.getDate()} ${monthNames[date.getMonth()]}`.toLocaleUpperCase("uz-UZ");
                dateInput.value = formatDate(start);
                if (!matches.length) {
                    rows = [];
                    matchlistColumns = 1;
                    updateMatchlistLayoutOptions();
                    renderInputs();
                    drawPoster();
                    statusEl.textContent = `${formatDate(start)} kuni yakunlangan ESPN o‘yinlari topilmadi.`;
                    return;
                }
                rows = await Promise.all(matches.map(async match => {
                    const homeName = match.homeName || match.home?.name || "UY JAMOASI";
                    const awayName = match.awayName || match.away?.name || "MEHMON JAMOASI";
                    const [homeLogo, awayLogo] = await Promise.all([
                        loadAutoTeamLogo(homeName, match.home?.logo || "", match.league),
                        loadAutoTeamLogo(awayName, match.away?.logo || "", match.league)
                    ]);
                    return {
                        home: homeName.toLocaleUpperCase("uz-UZ"),
                        time: `${match.homeScore ?? match.home?.score ?? 0} - ${match.awayScore ?? match.away?.score ?? 0}`,
                        away: awayName.toLocaleUpperCase("uz-UZ"),
                        homeLogo,
                        awayLogo
                    };
                }));
                if (currentTemplate !== "today-results") return;
                matchlistColumns = rows.length > 10 ? 2 : 1;
                updateMatchlistLayoutOptions();
                renderInputs();
                drawPoster();
                statusEl.textContent = `${rows.length} ta ${formatDate(start)} kuni yakunlangan o‘yin ESPN’dan jadvalga kiritildi.`;
            } catch (error) {
                statusEl.textContent = "O‘yinlar bo‘limidagi ESPN natijalarini yuklab bo‘lmadi. Qayta urinib ko‘ring.";
                console.error("Games section ESPN results fetch failed:", error);
            } finally {
                autoTodayResultsButton.disabled = false;
                autoTodayResultsButton.textContent = "Natijalarni yangilash";
            }
        }
        autoTodayResultsButton?.addEventListener("click", loadTodayResultsForPoster);
        redStarRangeOptions.forEach(option => {
            option.addEventListener("click", () => {
                const startDayOffset = Number(option.dataset.upcomingStartDay);
                if (startDayOffset !== 0 && startDayOffset !== 1) {
                    throw new Error("RED STAR FUTBOL vaqt oralig‘i noto‘g‘ri.");
                }
                redStarRangeDialog.close();
                loadUpcomingMatches(startDayOffset);
            });
        });
        document.getElementById("red-star-range-close").addEventListener("click", () => redStarRangeDialog.close());
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
        footballNewsEffectColorInput.addEventListener("input", () => {
            footballNewsEffectColor = footballNewsEffectColorInput.value;
            drawPoster();
        });
        posterRatioOptions.forEach(button => {
            button.addEventListener("click", () => {
                const selectedRatio = button.dataset.ratio;
                if (!posterAspectRatioOptions.has(selectedRatio)) {
                    throw new Error("Poster nisbati yaroqsiz.");
                }
                posterAspectRatios[currentTemplate] = selectedRatio;
                if (currentTemplate === "football-news" && Object.hasOwn(footballNewsRatios, selectedRatio)) {
                    footballNewsRatio = selectedRatio;
                }
                applyTemplateDimensions(currentTemplate);
                drawPoster();
            });
        });
        matchlistLayoutOptions.forEach(button => {
            button.addEventListener("click", () => {
                const columns = Number(button.dataset.columns);
                if (!["matchlist", "today-results"].includes(currentTemplate) || (columns !== 1 && columns !== 2)) {
                    throw new Error("Ushbu poster uchun jadval ustuni yaroqsiz.");
                }
                matchlistColumns = columns;
                updateMatchlistLayoutOptions();
                drawPoster();
            });
        });
        todayResultsThemeOptions.forEach(button => {
            button.addEventListener("click", () => {
                const selectedTheme = button.dataset.resultsTheme;
                if (currentTemplate !== "today-results" || !Object.hasOwn(todayResultsThemes, selectedTheme)) {
                    throw new Error("Bugungi natijalar posteri mavzusi yaroqsiz.");
                }
                todayResultsTheme = selectedTheme;
                updateTodayResultsThemeOptions();
                drawPoster();
            });
        });
        redStarThemeOptions.forEach(button => {
            button.addEventListener("click", () => {
                const selectedTheme = button.dataset.sfTheme;
                if (currentTemplate !== "sf" || !Object.hasOwn(redStarThemes, selectedTheme)) {
                    throw new Error("RED STAR FUTBOL posteri mavzusi yaroqsiz.");
                }
                redStarTheme = selectedTheme;
                applyRedStarTheme();
                drawPoster();
            });
        });
        rowColorInput.addEventListener("input", drawPoster);
        timeBackgroundColorInput.addEventListener("input", drawPoster);
        backgroundImageInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                backgroundImage = image;
                applyTemplateDimensions(currentTemplate);
                drawPoster();
                statusEl.textContent = "Fon rasmi posterga qo‘shildi.";
            }, event.target);
        });
        backgroundOpacityInput.addEventListener("input", () => {
            opacityValue.textContent = `${backgroundOpacityInput.value}%`;
            drawPoster();
        });
        brandLogoShapeOptions.forEach(button => {
            button.addEventListener("click", () => {
                brandLogoShape = button.dataset.brandShape === "circle" ? "circle" : "square";
                updateBrandLogoShapeOptions();
                drawPoster();
            });
        });
        updateBrandLogoShapeOptions();
        brandLogoInput.addEventListener("change", event => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                removedBrandLogosByTemplate.delete(currentTemplate);
                brandLogo = image;
                customBrandLogo = true;
                brandLogosByTemplate.set(currentTemplate, image);
                updateLogoPreview(brandLogoPreview, image,
                        currentTemplate === "football-lux" ? "KL" : currentTemplate === "matchday-poster" ? "APL" :
                            currentTemplate === "monthly-club-fixtures" ? "TV" : "PP");
                drawPoster();
                statusEl.textContent = ["football-lux", "matchday-poster", "monthly-club-fixtures"].includes(currentTemplate) ?
                    `Kanal logosi posterga ${brandLogoShape === "circle" ? "doira shaklida" : "kvadrat shaklida"} qo‘shildi.` :
                    `Shaxsiy logo posterga ${brandLogoShape === "circle" ? "doira shaklida" : "kvadrat shaklida"} qo‘shildi.`;
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
        document.getElementById("remove-brand-logo").addEventListener("click", () => {
            removedBrandLogosByTemplate.add(currentTemplate);
            customBrandLogo = false;
            brandLogosByTemplate.delete(currentTemplate);
            brandLogo = null;
            brandLogoInput.value = "";
            updateLogoPreview(brandLogoPreview, null,
                currentTemplate === "football-lux" ? "KL" : currentTemplate === "matchday-poster" ? "APL" :
                    currentTemplate === "monthly-club-fixtures" ? "TV" : "PP");
            drawPoster();
            statusEl.textContent = ["photo-quote", "football-lux", "matchday-poster", "monthly-club-fixtures"].includes(currentTemplate) ?
                "Kanal logosi olib tashlandi." : "Poster logosi olib tashlandi.";
        });
        document.getElementById("clear-brand-logo").addEventListener("click", () => {
            removedBrandLogosByTemplate.delete(currentTemplate);
            customBrandLogo = false;
            brandLogosByTemplate.delete(currentTemplate);
            brandLogo = currentTemplate !== "football-lux" && currentTemplate !== "matchday-poster" &&
                defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ?
                defaultBrandLogo : null;
            brandLogoInput.value = "";
            updateLogoPreview(brandLogoPreview,
                currentTemplate === "matchday-poster" && matchdayPremierLeagueLogo.complete && matchdayPremierLeagueLogo.naturalWidth ?
                    matchdayPremierLeagueLogo : brandLogo,
                currentTemplate === "football-lux" ? "KL" : currentTemplate === "matchday-poster" ? "APL" :
                    currentTemplate === "monthly-club-fixtures" ? "TV" : "PP");
            drawPoster();
            statusEl.textContent = currentTemplate === "matchday-poster" ?
                "Premier League belgisi tiklandi." : "Standart logo tiklandi.";
        });
        brandLogoSizeInput.addEventListener("input", () => {
            const normalizedValue = normalizeBrandLogoSize(brandLogoSizeInput.value, currentTemplate === "football-lux" ? 80 : 200);
            brandLogoSizeInput.value = String(normalizedValue);
            brandLogoSizeValue.textContent = `${normalizedValue}%`;
            if (currentTemplate === "football-lux") footballLuxLogoSize = normalizedValue;
            else nonLuxBrandLogoSize = String(normalizedValue);
            drawPoster();
        });
        document.getElementById("add-row").addEventListener("click", () => {
            const defaultTeamLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            rows.push({ home: "JAMOA 1", time: "20:00", away: "JAMOA 2", homeLogo: defaultTeamLogo, awayLogo: defaultTeamLogo });
            renderInputs();
            drawPoster();
        });
        document.getElementById("download").addEventListener("click", async () => {
            try {
                const exportScale = 2.16;
                const exportCanvas = document.createElement("canvas");
                exportCanvas.width = Math.round(canvas.width * exportScale);
                exportCanvas.height = Math.round(canvas.height * exportScale);
                const exportContext = exportCanvas.getContext("2d");
                if (!exportContext) throw new Error("Could not create poster export canvas.");
                const previewContext = ctx;
                try {
                    ctx = exportContext;
                    ctx.scale(exportScale, exportScale);
                    drawPoster();
                } finally {
                    ctx = previewContext;
                }
                const blob = await window.pitchplanEncodeImage(exportCanvas);
                const result = await window.pitchplanSaveImage(blob, "sportposter.jpg");
                statusEl.textContent = result.method === "share"
                    ? "Rasm ulashish oynasi ochildi. Galereyaga saqlash amalini tanlang."
                    : result.method === "cancelled"
                        ? "Rasmni saqlash bekor qilindi."
                        : result.method === "preview"
                            ? "Rasm yangi oynada ochildi. Uni uzoq bosib, galereyaga saqlang."
                            : "Poster JPG formatida yuklab olindi.";
            } catch (error) {
                statusEl.textContent = "Rasmni saqlashda xatolik yuz berdi. Qayta urinib ko‘ring.";
                console.error("Poster export failed:", error);
            }
        });
        async function initializeWorkspace() {
            try {
                const loadedFonts = await document.fonts.load('400 20px "Bebas Neue"');
                if (!loadedFonts.length) throw new Error("Bebas Neue font did not load.");
            } catch (error) {
                console.error("Bebas Neue font could not be loaded:", error);
                statusEl.textContent = "Bebas Neue shriftini yuklab bo‘lmadi.";
            }
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
