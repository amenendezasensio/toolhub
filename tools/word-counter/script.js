const textInput = document.getElementById("textInput");

const words = document.getElementById("words");
const characters = document.getElementById("characters");
const readingTime = document.getElementById("readingTime");

const copyButton = document.getElementById("copyButton");
const clearButton = document.getElementById("clearButton");

function updateStats() {

    const text = textInput.value;

    characters.textContent = text.length;

    const wordArray = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    words.textContent = wordArray.length;

    const minutes = Math.max(1, Math.ceil(wordArray.length / 200));

    readingTime.textContent = minutes + " min";

}

textInput.addEventListener("input", updateStats);

copyButton.addEventListener("click", async () => {

    if (textInput.value === "") return;

    await navigator.clipboard.writeText(textInput.value);

    copyButton.textContent = "✅ Copiado";

    setTimeout(() => {

        copyButton.textContent = "📋 Copiar";

    }, 1500);

});

clearButton.addEventListener("click", () => {

    textInput.value = "";

    updateStats();

});

updateStats();