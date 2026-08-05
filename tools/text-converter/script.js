const text = document.getElementById("text");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const titlecase = document.getElementById("titlecase");
const alternate = document.getElementById("alternate");
const reverse = document.getElementById("reverse");
const spaces = document.getElementById("spaces");
const lines = document.getElementById("lines");
const copy = document.getElementById("copy");

const characters = document.getElementById("characters");
const words = document.getElementById("words");

function updateStats() {

    characters.textContent = text.value.length;

    const wordArray = text.value.trim() === ""
        ? []
        : text.value.trim().split(/\s+/);

    words.textContent = wordArray.length;

}

text.addEventListener("input", updateStats);

uppercase.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
    updateStats();
});

lowercase.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
    updateStats();
});

titlecase.addEventListener("click", () => {

    text.value = text.value
        .toLowerCase()
        .replace(/\b\w/g, letter => letter.toUpperCase());

    updateStats();

});

alternate.addEventListener("click", () => {

    let result = "";

    for (let i = 0; i < text.value.length; i++) {

        result += i % 2 === 0
            ? text.value[i].toLowerCase()
            : text.value[i].toUpperCase();

    }

    text.value = result;

    updateStats();

});

reverse.addEventListener("click", () => {

    text.value = text.value
        .split("")
        .reverse()
        .join("");

    updateStats();

});

spaces.addEventListener("click", () => {

    text.value = text.value.replace(/\s+/g, " ").trim();

    updateStats();

});

lines.addEventListener("click", () => {

    text.value = text.value.replace(/\n+/g, " ");

    updateStats();

});

copy.addEventListener("click", async () => {

    if (text.value === "") return;

    await navigator.clipboard.writeText(text.value);

    copy.textContent = "✅ Copiado";

    setTimeout(() => {
        copy.textContent = "📋 Copiar";
    }, 1500);

});

updateStats();