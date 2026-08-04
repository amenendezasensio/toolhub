const mode = document.getElementById("mode");
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const result = document.getElementById("result");

function calculate() {

    const a = parseFloat(value1.value);
    const b = parseFloat(value2.value);

    if (isNaN(a) || isNaN(b)) {
        result.textContent = "—";
        return;
    }

    let answer;

    switch (mode.value) {

        case "percentOf":
            answer = (a / 100) * b;
            result.textContent = answer.toLocaleString("es-ES", {
                maximumFractionDigits: 2
            });
            break;

        case "whatPercent":
            if (b === 0) {
                result.textContent = "No válido";
                return;
            }

            answer = (a / b) * 100;

            result.textContent = answer.toLocaleString("es-ES", {
                maximumFractionDigits: 2
            }) + " %";
            break;

        case "increase":
            answer = a * (1 + b / 100);

            result.textContent = answer.toLocaleString("es-ES", {
                maximumFractionDigits: 2
            });
            break;

        case "decrease":
            answer = a * (1 - b / 100);

            result.textContent = answer.toLocaleString("es-ES", {
                maximumFractionDigits: 2
            });
            break;

        case "change":
            if (a === 0) {
                result.textContent = "No válido";
                return;
            }

            answer = ((b - a) / a) * 100;

            result.textContent = answer.toLocaleString("es-ES", {
                maximumFractionDigits: 2
            }) + " %";
            break;

    }

}

mode.addEventListener("change", calculate);
value1.addEventListener("input", calculate);
value2.addEventListener("input", calculate);