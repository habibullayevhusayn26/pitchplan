(() => {
    const inAppBrowserPattern = /Telegram|FBAN|FBAV|Instagram|Line\/|MicroMessenger|Snapchat|TikTok|Pinterest|LinkedInApp|WhatsApp/i;
    const maxImageBytes = 2_900_000;

    function canvasToJpeg(canvas, quality) {
        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => blob
                ? resolve(blob)
                : reject(new Error("JPEG faylini yaratib bo‘lmadi.")), "image/jpeg", quality);
        });
    }

    async function encodeImage(canvas) {
        if (!(canvas instanceof HTMLCanvasElement) || !canvas.width || !canvas.height) {
            throw new TypeError("Eksport uchun rasm canvas’i noto‘g‘ri.");
        }

        let width = canvas.width;
        let height = canvas.height;
        let source = canvas;
        let resizedCanvas = null;
        while (true) {
            if (source !== canvas) {
                resizedCanvas.width = width;
                resizedCanvas.height = height;
                const context = resizedCanvas.getContext("2d");
                if (!context) throw new Error("Rasm o‘lchamini tayyorlab bo‘lmadi.");
                context.drawImage(canvas, 0, 0, width, height);
                source = resizedCanvas;
            }

            let low = 0.76;
            let high = 0.94;
            let bestBlob = null;
            const highestQualityBlob = await canvasToJpeg(source, high);
            if (highestQualityBlob.size <= maxImageBytes) return highestQualityBlob;

            for (let attempt = 0; attempt < 7; attempt += 1) {
                const quality = (low + high) / 2;
                const blob = await canvasToJpeg(source, quality);
                if (blob.size <= maxImageBytes) {
                    bestBlob = blob;
                    low = quality;
                } else {
                    high = quality;
                }
            }
            if (bestBlob) return bestBlob;

            const currentMaxDimension = Math.max(width, height);
            if (currentMaxDimension <= 320) {
                throw new Error("Rasmni 2.9 MB hajmiga sig‘dirib bo‘lmadi.");
            }
            const scale = Math.max(0.88, 320 / currentMaxDimension);
            const nextWidth = Math.max(1, Math.round(width * scale));
            const nextHeight = Math.max(1, Math.round(height * scale));
            if (!resizedCanvas) resizedCanvas = document.createElement("canvas");
            width = nextWidth;
            height = nextHeight;
            source = resizedCanvas;
        }
    }

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
            const file = new File([blob], filename, { type: blob.type || "image/png" });
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

    window.pitchplanEncodeImage = encodeImage;
    window.pitchplanSaveImage = saveImage;
})();
