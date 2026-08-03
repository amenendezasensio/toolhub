const output = document.getElementById("passwordOutput");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");

const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SYMBOL = "!@#$%^&*()_-+=[]{}<>?/|";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    let characters = "";

    if (uppercase.checked) characters += UPPER;
    if (lowercase.checked) characters += LOWER;
    if (numbers.checked) characters += NUMBER;
    if (symbols.checked) characters += SYMBOL;

    if (characters.length === 0) {
        alert("Selecciona al menos una opción.");
        return;
    }

    let password = "";

    for (let i = 0; i < Number(lengthSlider.value); i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    output.value = password;

    updateStrength();
}

function updateStrength() {

    const length = Number(lengthSlider.value);

    let score = 0;

    if (length >= 12) score++;
    if (uppercase.checked) score++;
    if (lowercase.checked) score++;
    if (numbers.checked) score++;
    if (symbols.checked) score++;

    if (score <= 2) {
        strengthText.textContent = "Baja";
        strengthText.style.color = "red";
    } else if (score <= 4) {
        strengthText.textContent = "Media";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Alta";
        strengthText.style.color = "green";
    }
}

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", async () => {

    if (!output.value) return;

    await navigator.clipboard.writeText(output.value);

    copyButton.textContent = "✅ Copiado";

    setTimeout(() => {
        copyButton.textContent = "📋 Copiar";
    }, 1500);

});

generatePassword();