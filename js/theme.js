(() => {
    const storageKey = "pitchplan-theme";
    const themes = ["light", "dark", "auto"];
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    let selectedTheme = "light";

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
        updateThemePicker();
    }

    function updateThemePicker() {
        const selector = document.getElementById("theme-select");
        const picker = document.getElementById("theme-picker");
        if (!selector || !picker) return;
        const labels = { light: "Kunduzgi", dark: "Tungi", auto: "Avtomatik" };
        const icons = { light: "☼", dark: "☾", auto: "◐" };
        const currentLabel = picker.querySelector(".theme-picker-current-label");
        const currentIcon = picker.querySelector(".theme-picker-current-icon");
        if (currentLabel) currentLabel.textContent = labels[selectedTheme];
        if (currentIcon) currentIcon.textContent = icons[selectedTheme];
        picker.querySelectorAll("[data-theme-option]").forEach(option => {
            option.setAttribute("aria-selected", String(option.dataset.themeOption === selectedTheme));
        });
    }

    function handleSystemThemeChange() {
        if (selectedTheme === "auto") applyTheme();
    }

    applyTheme();

    document.addEventListener("DOMContentLoaded", () => {
        const selector = document.getElementById("theme-select");
        const picker = document.getElementById("theme-picker");
        const trigger = document.getElementById("theme-picker-trigger");
        const options = document.getElementById("theme-picker-options");
        if (!selector || !picker || !trigger || !options) return;
        selector.value = selectedTheme;
        updateThemePicker();
        selector.addEventListener("change", () => {
            selectedTheme = themes.includes(selector.value) ? selector.value : "auto";
            try {
                window.localStorage.setItem(storageKey, selectedTheme);
            } catch (error) {
                console.warn("Could not save theme preference:", error);
            }
            applyTheme();
        });
        const closePicker = (restoreFocus = false) => {
            options.hidden = true;
            trigger.setAttribute("aria-expanded", "false");
            if (restoreFocus) trigger.focus();
        };
        trigger.addEventListener("click", () => {
            const isOpening = options.hidden;
            options.hidden = !isOpening;
            trigger.setAttribute("aria-expanded", String(isOpening));
            if (isOpening) {
                options.querySelector('[aria-selected="true"]')?.focus();
            }
        });
        options.querySelectorAll("[data-theme-option]").forEach(option => {
            option.addEventListener("click", () => {
                selector.value = option.dataset.themeOption;
                selector.dispatchEvent(new Event("change", { bubbles: true }));
                closePicker(true);
            });
        });
        options.addEventListener("keydown", event => {
            const choices = [...options.querySelectorAll("[data-theme-option]")];
            const currentIndex = choices.indexOf(document.activeElement);
            if (event.key === "Escape") {
                event.preventDefault();
                closePicker(true);
                return;
            }
            const nextIndex = event.key === "ArrowDown"
                ? (currentIndex + 1) % choices.length
                : event.key === "ArrowUp"
                    ? (currentIndex - 1 + choices.length) % choices.length
                    : -1;
            if (nextIndex >= 0) {
                event.preventDefault();
                choices[nextIndex].focus();
            }
        });
        picker.addEventListener("focusout", event => {
            if (!picker.contains(event.relatedTarget)) closePicker();
        });
        document.addEventListener("pointerdown", event => {
            if (!picker.contains(event.target)) closePicker();
        });
        media.addEventListener("change", handleSystemThemeChange);
    }, { once: true });
})();
