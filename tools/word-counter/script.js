const text = document.getElementById("text");

const words = document.getElementById("words");
const characters = document.getElementById("characters");
const charactersNoSpaces = document.getElementById("charactersNoSpaces");
const sentences = document.getElementById("sentences");
const paragraphs = document.getElementById("paragraphs");
const readingTime = document.getElementById("readingTime");

const copyButton = document.getElementById("copy");
const clearButton = document.getElementById("clear");

function updateStats() {

    const value = text.value;

    const wordArray = value.trim() === ""
        ? []
        : value.trim().split(/\s+/);

    words.textContent = wordArray.length;

    characters.textContent = value.length;

    charactersNoSpaces.textContent = value.replace(/\s/g, "").length;

    const sentenceArray = value.match(/[^.!?]+[.!?]+/g);
    sentences.textContent = sentenceArray ? sentenceArray.length : (value.trim() ? 1 : 0);

    const paragraphArray = value
        .split(/\n\s*\n/)
        .filter(p => p.trim() !== "");

    paragraphs.textContent = paragraphArray.length;

    const minutes = Math.max(1, Math.ceil(wordArray.length / 200));
    readingTime.textContent = `${minutes} min`;

}

text.addEventListener("input", updateStats);

copyButton.addEventListener("click", async () => {

    if (text.value === "") return;

    await navigator.clipboard.writeText(text.value);

    copyButton.textContent = "✅ Copiado";

    setTimeout(() => {
        copyButton.textContent = "📋 Copiar";
    }, 1500);

});

clearButton.addEventListener("click", () => {

    text.value = "";

    updateStats();

});

updateStats();