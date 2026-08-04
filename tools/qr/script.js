const textInput = document.getElementById("text");
const sizeInput = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");

const generateButton = document.getElementById("generate");
const downloadButton = document.getElementById("download");

const qrContainer = document.getElementById("qr");

let qr = null;

function generateQR() {

    const text = textInput.value.trim();

    qrContainer.innerHTML = "";

    if (text === "") {
        qrContainer.innerHTML = "<p>Escribe un texto o un enlace.</p>";
        return;
    }

    qr = new QRCode(qrContainer, {
        text: text,
        width: Number(sizeInput.value),
        height: Number(sizeInput.value)
    });

}

sizeInput.addEventListener("input", () => {

    sizeValue.textContent = sizeInput.value + " px";

    if (textInput.value.trim() !== "") {
        generateQR();
    }

});

textInput.addEventListener("input", () => {

    if (textInput.value.trim() !== "") {
        generateQR();
    }

});

generateButton.addEventListener("click", generateQR);

downloadButton.addEventListener("click", () => {

    const img = qrContainer.querySelector("img");

    if (!img) {
        alert("Genera primero un código QR.");
        return;
    }

    const link = document.createElement("a");

    link.href = img.src;
    link.download = "toolhub-qr.png";

    link.click();

});