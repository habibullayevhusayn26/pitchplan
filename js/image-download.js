(() => {
    const inAppBrowserPattern = /Telegram|FBAN|FBAV|Instagram|Line\/|MicroMessenger|Snapchat|TikTok|Pinterest|LinkedInApp|WhatsApp/i;

    function openImagePreview(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener";
        link.download = filename;
        link.style.display = "none";
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    }

    async function saveImage(blob, filename) {
        if (!(blob instanceof Blob) || !filename) {
            throw new TypeError("Rasm fayli yoki uning nomi noto‘g‘ri.");
        }

        const isInAppBrowser = inAppBrowserPattern.test(navigator.userAgent || "");
        if (isInAppBrowser && typeof File === "function" &&
            typeof navigator.share === "function" && typeof navigator.canShare === "function") {
            const file = new File([blob], filename, { type: "image/png" });
            let canShareFile = false;
            try {
                canShareFile = navigator.canShare({ files: [file] });
            } catch (error) {
                console.warn("This in-app browser could not check native image sharing support:", error);
            }
            if (canShareFile) {
                try {
                    await navigator.share({ files: [file], title: filename });
                    return { method: "share" };
                } catch (error) {
                    if (error?.name === "AbortError") return { method: "cancelled" };
                    console.warn("Native image sharing failed; opening the image preview instead:", error);
                }
            }
        }

        if (isInAppBrowser) {
            openImagePreview(blob, filename);
            return { method: "preview" };
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.rel = "noopener";
        link.style.display = "none";
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 60000);
        return { method: "download" };
    }

    window.pitchplanSaveImage = saveImage;
})();
