const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const bmi = document.getElementById("bmi");
const category = document.getElementById("category");

function calculateBMI() {

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmi.textContent = "—";
        category.textContent = "Introduce tu peso y altura";
        return;
    }

    const heightMeters = height / 100;
    const value = weight / (heightMeters * heightMeters);

    bmi.textContent = value.toFixed(1);

    if (value < 18.5) {
        category.textContent = "⚠️ Bajo peso";
    } else if (value < 25) {
        category.textContent = "✅ Peso normal";
    } else if (value < 30) {
        category.textContent = "🟠 Sobrepeso";
    } else {
        category.textContent = "🔴 Obesidad";
    }
}

weightInput.addEventListener("input", calculateBMI);
heightInput.addEventListener("input", calculateBMI);