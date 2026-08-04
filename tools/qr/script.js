const textInput = document.getElementById("text");
const typeInput = document.getElementById("type");
const darkColor = document.getElementById("darkColor");
const lightColor = document.getElementById("lightColor");
const sizeInput = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");


const downloadButton = document.getElementById("download");

const qrContainer = document.getElementById("qr");

let qr = null;

function generateQR() {

    let text = textInput.value.trim();

if (text === "") {
    qrContainer.innerHTML = "<p>Escribe un texto o un enlace.</p>";
    return;
}

switch (typeInput.value) {
    case "email":
        text = "mailto:" + text;
        break;

    case "phone":
        text = "tel:" + text;
        break;

    case "url":
    default:
        break;
}

    qrContainer.innerHTML = "";

    if (text === "") {
        qrContainer.innerHTML = "<p>Escribe un texto o un enlace.</p>";
        return;
    }

    qr = new QRCode(qrContainer, {
    text: text,
    width: 300,
    height: 300,
    colorDark: darkColor.value,
    colorLight: lightColor.value
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
typeInput.addEventListener("change", () => {

    if (textInput.value.trim() !== "") {
        generateQR();
    }

});
darkColor.addEventListener("input", () => {

    if (textInput.value.trim() !== "") {
        generateQR();
    }

});

lightColor.addEventListener("input", () => {

    if (textInput.value.trim() !== "") {
        generateQR();
    }

});



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