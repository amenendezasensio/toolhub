const input = document.getElementById("input");
const output = document.getElementById("output");

const characters = document.getElementById("characters");
const length = document.getElementById("length");

const copyButton = document.getElementById("copy");
const clearButton = document.getElementById("clear");

async function generateHash() {

    characters.textContent = input.value.length;

    if (input.value === "") {
        output.value = "";
        length.textContent = "64";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input.value);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hash = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    output.value = hash;

    length.textContent = hash.length;

}

input.addEventListener("input", generateHash);

copyButton.addEventListener("click", async () => {

    if (output.value === "") return;

    await navigator.clipboard.writeText(output.value);

    copyButton.textContent = "✅ Copiado";

    setTimeout(() => {
        copyButton.textContent = "📋 Copiar hash";
    }, 1500);

});

clearButton.addEventListener("click", () => {

    input.value = "";
    output.value = "";

    characters.textContent = "0";
    length.textContent = "64";

});