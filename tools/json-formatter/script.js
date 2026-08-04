const input = document.getElementById("input");
const output = document.getElementById("output");
const formatButton = document.getElementById("format");

// Crear botón de copiar
const copyButton = document.createElement("button");
copyButton.textContent = "📋 Copiar resultado";
copyButton.style.marginTop = "15px";

document.querySelector(".result").appendChild(copyButton);

formatButton.addEventListener("click", () => {

    try {

        const json = JSON.parse(input.value);

        output.value = JSON.stringify(json, null, 4);

    } catch (error) {

        output.value = "❌ JSON no válido.\n\n" + error.message;

    }

});

copyButton.addEventListener("click", async () => {

    if (!output.value) return;

    try {

        await navigator.clipboard.writeText(output.value);

        copyButton.textContent = "✅ ¡Copiado!";

        setTimeout(() => {
            copyButton.textContent = "📋 Copiar resultado";
        }, 2000);

    } catch {

        alert("No se pudo copiar el texto.");

    }

});