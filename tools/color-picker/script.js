const colorPicker = document.getElementById("colorPicker");
const preview = document.getElementById("preview");

const hex = document.getElementById("hex");
const rgb = document.getElementById("rgb");
const hsl = document.getElementById("hsl");

function hexToRgb(hexColor) {

    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    return { r, g, b };

}

function rgbToHsl(r, g, b) {

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h, s;
    const l = (max + min) / 2;

    if (max === min) {

        h = s = 0;

    } else {

        const d = max - min;

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {

            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;

            case g:
                h = (b - r) / d + 2;
                break;

            case b:
                h = (r - g) / d + 4;
                break;

        }

        h /= 6;

    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };

}

function updateColor() {

    const value = colorPicker.value;

    preview.style.background = value;

    hex.textContent = value.toUpperCase();

    const rgbValue = hexToRgb(value);

    rgb.textContent = `${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}`;

    const hslValue = rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b);

    hsl.textContent = `${hslValue.h}°, ${hslValue.s}%, ${hslValue.l}%`;

}

colorPicker.addEventListener("input", updateColor);

updateColor();