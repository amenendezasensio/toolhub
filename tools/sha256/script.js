const input = document.getElementById("input");
const output = document.getElementById("output");
const generateButton = document.getElementById("generate");

// Crear botón de copiar
const copyButton = document.createElement("button");
copyButton.textContent = "📋 Copiar Hash";
copyButton.style.marginTop = "15px";

document.querySelector(".container").appendChild(copyButton);

async function generateHash() {

    if (!input.value.trim()) {
        output.value = "Introduce un texto.";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input.value);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    output.value = hashHex;

}

generateButton.addEventListener("click", generateHash);

copyButton.addEventListener("click", async () => {

    if (!output.value) return;

    try {

        await navigator.clipboard.writeText(output.value);

        copyButton.textContent = "✅ ¡Copiado!";

        setTimeout(() => {
            copyButton.textContent = "📋 Copiar Hash";
        }, 2000);

    } catch {

        alert("No se pudo copiar el hash.");

    }

});