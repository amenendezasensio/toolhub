const input = document.getElementById("input");
const output = document.getElementById("output");

const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const capitalizeButton = document.getElementById("capitalize");

// Crear botón para copiar
const copyButton = document.createElement("button");
copyButton.textContent = "📋 Copiar";

document.querySelector(".buttons").appendChild(copyButton);

upperButton.addEventListener("click", () => {
    output.value = input.value.toUpperCase();
});

lowerButton.addEventListener("click", () => {
    output.value = input.value.toLowerCase();
});

capitalizeButton.addEventListener("click", () => {

    output.value = input.value.replace(/\b\w/g, letter =>
        letter.toUpperCase()
    );

});

copyButton.addEventListener("click", async () => {

    if (!output.value) return;

    try {

        await navigator.clipboard.writeText(output.value);

        copyButton.textContent = "✅ ¡Copiado!";

        setTimeout(() => {
            copyButton.textContent = "📋 Copiar";
        }, 2000);

    } catch {

        alert("No se pudo copiar el texto.");

    }

});