(() => {
    const appContent = document.querySelector(".app-content");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!appContent || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const revealTargets = [
        ".section-banner",
        ".section-banner h1",
        ".section-banner p",
        ".section-banner .home-eyebrow",
        ".home-shortcuts > *",
        ".home-shortcut > span:nth-child(2)",
        ".template-gallery > .template-card",
        ".template-card-title",
        ".template-card-description",
        ".template-card-action",
        ".live-view > .standings-card-heading",
        ".live-view > .standings-poster",
        ".standings-accessible-title > *",
        ".standings-footnote",
        ".live-match-filter",
        ".live-league-tab > span",
        ".live-match-state-filters",
        ".live-match-state-filter",
        ".live-match-list > *",
        "#club-search-panel",
        ".live-match-detail-view > .back-to-matches",
        ".live-match-detail-view > #live-match-detail-heading",
        ".live-match-detail-view > #live-match-detail-content",
        ".club-profile-view > .back-to-matches",
        ".club-profile-view > #club-profile-heading",
        ".club-profile-view > #club-profile-content",
        ".editor-view > .back-to-templates",
        ".editor-view > .workspace > *"
    ].join(",");
    let revealOrder = 0;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-reveal-visible");
                entry.target.classList.remove("scroll-reveal-pending");
            } else {
                entry.target.classList.remove("scroll-reveal-visible");
                entry.target.classList.add("scroll-reveal-pending");
            }
        });
    }, {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08
    });

    function observeTargets(root) {
        if (root.nodeType !== Node.ELEMENT_NODE) return;
        const elements = [];
        if (root.matches(revealTargets)) elements.push(root);
        elements.push(...root.querySelectorAll(revealTargets));

        elements.forEach(element => {
            if (element.classList.contains("scroll-reveal-pending") || element.classList.contains("scroll-reveal-visible")) return;
            element.style.setProperty("--scroll-reveal-delay", `${Math.min(revealOrder % 4, 3) * 45}ms`);
            element.classList.toggle("scroll-reveal-from-right", revealOrder % 2 === 1);
            element.classList.add("scroll-reveal-pending");
            observer.observe(element);
            revealOrder += 1;
        });
    }

    observeTargets(appContent);
    const mutations = new MutationObserver(records => {
        records.forEach(record => record.addedNodes.forEach(observeTargets));
    });
    mutations.observe(appContent, { childList: true, subtree: true });
    reducedMotion.addEventListener?.("change", event => {
        if (!event.matches) return;
        mutations.disconnect();
        observer.disconnect();
        appContent.querySelectorAll(".scroll-reveal-pending, .scroll-reveal-visible").forEach(element => {
            element.classList.remove("scroll-reveal-pending", "scroll-reveal-visible", "scroll-reveal-from-right");
            element.style.removeProperty("--scroll-reveal-delay");
        });
    });
})();
