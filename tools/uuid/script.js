const uuidBox = document.getElementById("uuid");

// Crear botón de copiar
const copyButton = document.createElement("button");
copyButton.textContent = "📋 Copiar UUID";

document.querySelector(".container").appendChild(copyButton);

function generateUUID() {

    const uuid = crypto.randomUUID();

    uuidBox.textContent = uuid;

}

generateUUID();

document.getElementById("generate").addEventListener("click", generateUUID);

copyButton.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(uuidBox.textContent);

        copyButton.textContent = "✅ ¡Copiado!";

        setTimeout(() => {
            copyButton.textContent = "📋 Copiar UUID";
        }, 2000);

    } catch {

        alert("No se pudo copiar el UUID.");

    }

});