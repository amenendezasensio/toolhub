const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const calculateButton = document.getElementById("calculate");

const result = document.getElementById("result");
const status = document.getElementById("status");

calculateButton.addEventListener("click", () => {

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        result.textContent = "--";
        status.textContent = "Introduce valores válidos";
        return;
    }

    const bmi = weight / (height * height);

    result.textContent = bmi.toFixed(1);

    if (bmi < 18.5) {
        status.textContent = "🔵 Bajo peso";
    } else if (bmi < 25) {
        status.textContent = "🟢 Peso normal";
    } else if (bmi < 30) {
        status.textContent = "🟠 Sobrepeso";
    } else {
        status.textContent = "🔴 Obesidad";
    }

});