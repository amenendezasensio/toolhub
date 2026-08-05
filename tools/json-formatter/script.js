const input = document.getElementById("input");

const formatButton = document.getElementById("format");
const minifyButton = document.getElementById("minify");
const validateButton = document.getElementById("validate");
const copyButton = document.getElementById("copy");
const clearButton = document.getElementById("clear");

const message = document.getElementById("message");

function parseJSON() {
    try {
        return JSON.parse(input.value);
    } catch (error) {
        message.textContent = "❌ JSON no válido: " + error.message;
        return null;
    }
}

formatButton.addEventListener("click", () => {

    const json = parseJSON();

    if (!json) return;

    input.value = JSON.stringify(json, null, 4);

    message.textContent = "✅ JSON formateado correctamente.";

});

minifyButton.addEventListener("click", () => {

    const json = parseJSON();

    if (!json) return;

    input.value = JSON.stringify(json);

    message.textContent = "📦 JSON minificado correctamente.";

});

validateButton.addEventListener("click", () => {

    const json = parseJSON();

    if (!json) return;

    message.textContent = "✅ JSON válido.";

});

copyButton.addEventListener("click", async () => {

    if (input.value.trim() === "") return;

    await navigator.clipboard.writeText(input.value);

    message.textContent = "📋 JSON copiado al portapapeles.";

});

clearButton.addEventListener("click", () => {

    input.value = "";

    message.textContent = "Introduce un JSON para comenzar.";

});