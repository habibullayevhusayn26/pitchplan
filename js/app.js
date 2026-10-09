const examples = {
    jf: {
                title: "BUGUN BO'LIB O'TADIGAN ASOSIY UCHRASHUVLAR RO'YXATI",
                date: "9-OKTABR",
                rows: [
                    ["PAXTAKOR", "19:00", "BUNYODKOR"],
                    ["BUXORO", "19:00", "ANDIJON"],
                    ["NASAF", "19:30", "DINAMO"],
                    ["AL NASR", "23:00", "AL DIRIYA"],
                    ["BORUSSIYA D", "23:30", "VERDER"]
                ]
            }
        };
        const themes = {
            jf: { bg: "#ffffff", deep: "#f4f4f4", row: "#ffffff", accent: "#52d719", timeBg: "#52d719", time: "#101510", text: "#171717", pattern: "#ececec", textColors: { title: "#171717", date: "#52cf18", team: "#171717", time: "#101510", brand: "#171717" } }
        };
        const canvas = document.getElementById("poster");
        const ctx = canvas.getContext("2d");
        const rowsEl = document.getElementById("match-list");
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
        let customBackgroundColor = false;
        const customTextColors = new Set();
        const defaultBrandLogo = new Image();
        defaultBrandLogo.onload = () => {
            brandLogo = defaultBrandLogo;
            rows.forEach(row => {
                if (!row.homeLogo) row.homeLogo = defaultBrandLogo;
                if (!row.awayLogo) row.awayLogo = defaultBrandLogo;
            });
            updateLogoPreview(brandLogoPreview, brandLogo, "PP");
            renderInputs();
            drawPoster();
        };
        defaultBrandLogo.onerror = () => {
            statusEl.textContent = "Standart PitchPlan logosi yuklanmadi. O‘z logongizni yuklashingiz mumkin.";
        };
        defaultBrandLogo.src = "./images/pitchplan.png";

        function setTemplate(name) {
            currentTemplate = name;
            const example = examples[name];
            if (!example) return;
            titleInput.value = example.title;
            dateInput.value = example.date;
            const defaultTeamLogo = defaultBrandLogo.complete && defaultBrandLogo.naturalWidth ? defaultBrandLogo : null;
            rows = example.rows.map(([home, time, away]) => ({ home, time, away, homeLogo: defaultTeamLogo, awayLogo: defaultTeamLogo }));
            if (!customBackgroundColor) backgroundColorInput.value = themes[name].bg;
            rowColorInput.value = themes[name].row;
            Object.entries(themes[name].textColors).forEach(([key, color]) => {
                if (!customTextColors.has(key)) textColorInputs[key].value = color;
            });
            document.querySelectorAll(".template").forEach(button => {
                const selected = button.dataset.template === name;
                button.classList.toggle("active", selected);
                button.setAttribute("aria-pressed", String(selected));
            });
            renderInputs();
            drawPoster();
        }

        function renderInputs() {
            rowsEl.replaceChildren();
            rows.forEach((row, index) => {
                const item = document.createElement("div");
                item.className = "match-row";
                item.innerHTML = `
                    <div class="match-team-control home-team">
                        <label class="logo-upload home-logo" title="Uy jamoasi logosi">
                            <span class="logo-fallback"></span>
                            <input type="file" accept="image/*" aria-label="${index + 1}-uchrashuv uy jamoasi logosi">
                        </label>
                        <input type="text" maxlength="22" value="${escapeHtml(row.home)}" aria-label="${index + 1}-uy jamoasi">
                    </div>
                    <input class="time-control" type="text" maxlength="10" value="${escapeHtml(row.time)}" aria-label="${index + 1}-uchrashuv vaqti">
                    <div class="match-team-control away-team">
                        <input type="text" maxlength="22" value="${escapeHtml(row.away)}" aria-label="${index + 1}-mehmon jamoa">
                        <label class="logo-upload away-logo" title="Mehmon jamoa logosi">
                            <span class="logo-fallback"></span>
                            <input type="file" accept="image/*" aria-label="${index + 1}-mehmon jamoa logosi">
                        </label>
                    </div>
                    <button type="button" class="remove-row" aria-label="${index + 1}-uchrashuvni o‘chirish">×</button>`;
                const homeInput = item.querySelector(".home-team input[type='text']");
                const timeInput = item.querySelector(".time-control");
                const awayInput = item.querySelector(".away-team input[type='text']");
                const homeLogoLabel = item.querySelector(".home-logo");
                const awayLogoLabel = item.querySelector(".away-logo");
                homeInput.addEventListener("input", event => { row.home = event.target.value; homeLogoLabel.querySelector(".logo-fallback").textContent = row.home.slice(0, 2).toUpperCase(); drawPoster(); });
                timeInput.addEventListener("input", event => { row.time = event.target.value; drawPoster(); });
                awayInput.addEventListener("input", event => { row.away = event.target.value; awayLogoLabel.querySelector(".logo-fallback").textContent = row.away.slice(0, 2).toUpperCase(); drawPoster(); });
                homeLogoLabel.querySelector('input[type="file"]').addEventListener("change", event => loadLogo(event, row, "homeLogo", homeLogoLabel));
                awayLogoLabel.querySelector('input[type="file"]').addEventListener("change", event => loadLogo(event, row, "awayLogo", awayLogoLabel));
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

        function loadLogo(event, row, key, label) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            readImageFile(file, image => {
                row[key] = image;
                updateLogoPreview(label, image, key === "homeLogo" ? row.home : row.away);
                drawPoster();
                statusEl.textContent = "Jamoa logosi posterga qo‘shildi.";
            }, event.target);
        }

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
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
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

        function drawPoster() {
            const theme = themes[currentTemplate];
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = backgroundColorInput.value || theme.bg;
            ctx.fillRect(0, 0, width, height);

            if (backgroundImage) {
                ctx.save();
                ctx.globalAlpha = Number(backgroundOpacityInput.value) / 100;
                drawImageCover(backgroundImage, 0, 0, width, height);
                ctx.restore();
            }
            drawJfPoster(theme, width, height);
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
            });
            const headerHeight = titleStartY + titleLines.length * 43 + 24;
            if (dateInput.value.trim()) {
                ctx.fillStyle = textColorInputs.date.value;
                const date = dateInput.value.trim().toUpperCase();
                ctx.font = `800 ${fitText(date, width - 100, 26, 800, 13)}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(date, width / 2, headerHeight - 14, width - 100);
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

                ctx.fillStyle = textColorInputs.team.value;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                const homeTextX = cardX + logoSize + 16;
                const homeTextWidth = Math.max(12, sideWidth - logoSize - 20);
                const homeSize = fitText(row.home, homeTextWidth, Math.min(columns === 2 ? 20 : 30, rowHeight * .32), 900, 8);
                ctx.font = `900 ${homeSize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.home.toUpperCase(), homeTextX + homeTextWidth / 2, y + rowHeight / 2, homeTextWidth);

                const awayX = cardX + sideWidth + timeWidth + 10;
                const awayTextWidth = Math.max(12, sideWidth - logoSize - 20);
                const awaySize = fitText(row.away, awayTextWidth, Math.min(columns === 2 ? 20 : 30, rowHeight * .32), 900, 8);
                ctx.font = `900 ${awaySize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.away.toUpperCase(), awayX + awayTextWidth / 2, y + rowHeight / 2, awayTextWidth);

                ctx.fillStyle = textColorInputs.time.value;
                const timeSize = fitText(row.time, timeWidth - 12, Math.min(columns === 2 ? 26 : 38, rowHeight * .4), 900, 9);
                ctx.font = `900 ${timeSize}px "Segoe UI", Arial, sans-serif`;
                ctx.fillText(row.time, cardX + sideWidth + timeWidth / 2, y + rowHeight / 2);
            });
            if (!rows.length) {
                ctx.fillStyle = textColorInputs.team.value;
                ctx.font = '700 24px "Segoe UI", Arial, sans-serif';
                ctx.textAlign = "center";
                ctx.fillText("UCHRASHUV QO‘SHING", width / 2, startY + rowHeight / 2);
            }
            drawBrandLogo(width / 2, height - bottomLogoSize - 13, bottomLogoSize);
        }

        document.querySelectorAll(".template").forEach(button => {
            button.addEventListener("click", () => setTemplate(button.dataset.template));
        });
        titleInput.addEventListener("input", drawPoster);
        dateInput.addEventListener("input", drawPoster);
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
                updateLogoPreview(brandLogoPreview, image, "PP");
                drawPoster();
                statusEl.textContent = "Shaxsiy logo posterga qo‘shildi.";
            }, event.target);
        });
        document.getElementById("clear-brand-logo").addEventListener("click", () => {
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
            try {
                canvas.toBlob(blob => {
                    if (!blob) {
                        statusEl.textContent = "PNG yaratilmadi. Iltimos, qayta urinib ko‘ring.";
                        return;
                    }
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "sportposter.png";
                    document.body.append(link);
                    link.click();
                    link.remove();
                    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
                    statusEl.textContent = "Poster PNG formatida yuklab olindi.";
                }, "image/png");
            } catch (error) {
                statusEl.textContent = "Rasmni saqlashda xatolik yuz berdi. Qayta urinib ko‘ring.";
                console.error("Poster export failed:", error);
            }
        });
        setTemplate("jf");
