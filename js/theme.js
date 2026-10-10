(() => {
    const storageKey = "pitchplan-theme";
    const themes = ["light", "dark", "auto"];
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    let selectedTheme = "auto";

    try {
        const savedTheme = window.localStorage.getItem(storageKey);
        if (themes.includes(savedTheme)) selectedTheme = savedTheme;
    } catch (error) {
        console.warn("Could not read saved theme preference:", error);
    }

    function applyTheme() {
        const isDark = selectedTheme === "dark" || (selectedTheme === "auto" && media.matches);
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
        document.documentElement.style.colorScheme = isDark ? "dark" : "light";
        const selector = document.getElementById("theme-select");
        if (selector) selector.value = selectedTheme;
    }

    function handleSystemThemeChange() {
        if (selectedTheme === "auto") applyTheme();
    }

    applyTheme();

    document.addEventListener("DOMContentLoaded", () => {
        const selector = document.getElementById("theme-select");
        if (!selector) return;
        selector.value = selectedTheme;
        selector.addEventListener("change", () => {
            selectedTheme = themes.includes(selector.value) ? selector.value : "auto";
            try {
                window.localStorage.setItem(storageKey, selectedTheme);
            } catch (error) {
                console.warn("Could not save theme preference:", error);
            }
            applyTheme();
        });
        media.addEventListener("change", handleSystemThemeChange);
    }, { once: true });
})();
