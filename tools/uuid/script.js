const count = document.getElementById("count");
const output = document.getElementById("output");

const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const downloadButton = document.getElementById("download");

function generateUUIDs() {

    const total = Number(count.value);
    const uuids = [];

    for (let i = 0; i < total; i++) {
        uuids.push(crypto.randomUUID());
    }

    output.value = uuids.join("\n");

}

generateButton.addEventListener("click", generateUUIDs);

copyButton.addEventListener("click", async () => {

    if (output.value.trim() === "") return;

    await navigator.clipboard.writeText(output.value);

    copyButton.textContent = "✅ Copiado";

    setTimeout(() => {
        copyButton.textContent = "📋 Copiar todos";
    }, 1500);

});

downloadButton.addEventListener("click", () => {

    if (output.value.trim() === "") return;

    const blob = new Blob([output.value], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "uuids.txt";

    link.click();

    URL.revokeObjectURL(url);

});

// Generar automáticamente al abrir la página
generateUUIDs();

// Regenerar automáticamente al cambiar la cantidad
count.addEventListener("change", generateUUIDs);