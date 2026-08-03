const percentage = document.getElementById("percentage");
const number = document.getElementById("number");

const calculateButton = document.getElementById("calculateButton");
const resultText = document.getElementById("resultText");

calculateButton.addEventListener("click", () => {

    const p = Number(percentage.value);
    const n = Number(number.value);

    if(isNaN(p) || isNaN(n)){
        resultText.textContent = "Error";
        return;
    }

    const result = (p / 100) * n;

    resultText.textContent = result;

});