const initialColors = [
    { name: "YELLOWGREEN", type: "RGB", code: "154, 205, 50" },
    { name: "DARKCYAN", type: "RGBA", code: "0, 139, 139, 1" },
    { name: "ORANGERED", type: "HEX", code: "#FF4500" }
];

function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + "; expires=" + date.toUTCString() + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return JSON.parse(decodeURIComponent(c.substring(nameEQ.length)));
        }
    }
    return null;
}

let colors = getCookie("user_colors") || initialColors;
if (!getCookie("user_colors")) setCookie("user_colors", colors, 3);

function renderPalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = colors.map(item => {
        const bg = item.type === "HEX" ? item.code : `${item.type.toLowerCase()}(${item.code})`;
        return `
            <div class="color-card" style="background-color: ${bg}">
                <div class="color-card-inner">
                    <div class="color-name">${item.name}</div>
                    <div class="color-type">${item.type}</div>
                    <div class="color-code">${item.code}</div>
                </div>
            </div>`;
    }).join('');
}

function validateCode(type, code) {
    const patterns = {
        RGB: /^([0-1]?\d?\d|2[0-4]\d|25[0-5]),\s*([0-1]?\d?\d|2[0-4]\d|25[0-5]),\s*([0-1]?\d?\d|2[0-4]\d|25[0-5])$/,
        RGBA: /^([0-1]?\d?\d|2[0-4]\d|25[0-5]),\s*([0-1]?\d?\d|2[0-4]\d|25[0-5]),\s*([0-1]?\d?\d|2[0-4]\d|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)$/,
        HEX: /^#[0-9A-Fa-f]{6}$/
    };
    return patterns[type].test(code);
}

document.getElementById("colorForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("colorName").value.trim();
    const type = document.getElementById("colorType").value;
    const code = document.getElementById("colorCode").value.trim();

    const nameError = document.getElementById("nameError");
    const codeError = document.getElementById("codeError");
    nameError.textContent = codeError.textContent = "";

    let isValid = true;

    if (!name) {
        nameError.textContent = "Color is required";
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        nameError.textContent = "Color can only contain letters";
        isValid = false;
    } else if (colors.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        nameError.textContent = "Color name must be unique";
        isValid = false;
    }

    if (!code) {
        codeError.textContent = "Code is required";
        isValid = false;
    } else if (!validateCode(type, code)) {
        const errorMessages = {
            RGB: "RGB code must match the pattern [0-255], [0-255], [0-255]",
            RGBA: "RGBA code must match pattern [0-255], [0-255], [0-255], [0-1]",
            HEX: "HEX code must match pattern #XXXXXX"
        };
        codeError.textContent = errorMessages[type];
        isValid = false;
    }

    if (isValid) {
        colors.push({ name: name.toUpperCase(), type, code });
        setCookie("user_colors", colors, 3);
        renderPalette();
        this.reset();
    }
});

renderPalette();
