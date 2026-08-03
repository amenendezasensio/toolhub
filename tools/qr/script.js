const input = document.getElementById("qrInput");
const image = document.getElementById("qrImage");

const generateButton = document.getElementById("generateButton");
const downloadButton = document.getElementById("downloadButton");

generateButton.addEventListener("click", () => {

    const text = input.value.trim();

    if (text === "") {
        alert("Escribe un texto o una URL.");
        return;
    }

    const qrUrl =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        encodeURIComponent(text);

    image.src = qrUrl;
    image.style.display = "block";

    downloadButton.style.display = "block";

});

downloadButton.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = image.src;

    link.download = "codigo-qr.png";

    link.click();

});