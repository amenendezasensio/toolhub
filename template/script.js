const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const exclude = document.getElementById("exclude");

const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const historyList = document.getElementById("history");

const confusingChars = "O0Il1";

function updateLength() {
    lengthValue.textContent = lengthInput.value;
}

lengthInput.addEventListener("input", updateLength);

function randomChar(chars) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return chars[array[0] % chars.length];
}

function generatePassword() {

    let chars = "";

    if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) chars += "0123456789";
    if (symbols.checked) chars += "!@#$%^&*()_+-=[]{}<>?/";

    if (exclude.checked) {
        chars = [...chars].filter(c => !confusingChars.includes(c)).join("");
    }

    if (chars.length === 0) {
        alert("Selecciona al menos un tipo de carácter.");
        return;
    }

    let password = "";

    for (let i = 0; i < Number(lengthInput.value); i++) {
        password += randomChar(chars);
    }

    passwordInput.value = password;

    updateStrength(password);

    addToHistory(password);
}

function updateStrength(password) {

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const percentage = (score / 6) * 100;

    strengthBar.style.width = percentage + "%";

    if (percentage < 40) {
        strengthBar.style.background = "#ef4444";
        strengthText.textContent = "🔴 Seguridad baja";
    } else if (percentage < 75) {
        strengthBar.style.background = "#f59e0b";
        strengthText.textContent = "🟠 Seguridad media";
    } else {
        strengthBar.style.background = "#22c55e";
        strengthText.textContent = "🟢 Seguridad alta";
    }
}

function addToHistory(password) {

    const li = document.createElement("li");
    li.textContent = password;

    historyList.prepend(li);

    while (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", async () => {

    if (!passwordInput.value) return;

    await navigator.clipboard.writeText(passwordInput.value);

    copyButton.textContent = "✅";

    setTimeout(() => {
        copyButton.textContent = "📋";
    }, 1500);

});

updateLength();
generatePassword();