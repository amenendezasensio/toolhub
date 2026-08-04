const category = document.getElementById("category");
const from = document.getElementById("from");
const to = document.getElementById("to");
const value = document.getElementById("value");
const result = document.getElementById("result");

const units = {
    length: {
        units: ["Metros", "Kilómetros", "Centímetros"],
        factors: {
            "Metros": 1,
            "Kilómetros": 1000,
            "Centímetros": 0.01
        }
    },

    weight: {
        units: ["Kilogramos", "Gramos", "Libras"],
        factors: {
            "Kilogramos": 1,
            "Gramos": 0.001,
            "Libras": 0.45359237
        }
    },

    temperature: {
        units: ["Celsius", "Fahrenheit", "Kelvin"]
    }
};

function loadUnits() {

    from.innerHTML = "";
    to.innerHTML = "";

    const list = units[category.value].units;

    list.forEach(unit => {

        from.innerHTML += `<option>${unit}</option>`;
        to.innerHTML += `<option>${unit}</option>`;

    });

    to.selectedIndex = 1;

    calculate();

}

function calculate() {

    const number = parseFloat(value.value);

    if (isNaN(number)) {
        result.textContent = "—";
        return;
    }

    if (category.value === "temperature") {

        let celsius;

        switch (from.value) {

            case "Celsius":
                celsius = number;
                break;

            case "Fahrenheit":
                celsius = (number - 32) * 5 / 9;
                break;

            case "Kelvin":
                celsius = number - 273.15;
                break;

        }

        let output;

        switch (to.value) {

            case "Celsius":
                output = celsius;
                break;

            case "Fahrenheit":
                output = celsius * 9 / 5 + 32;
                break;

            case "Kelvin":
                output = celsius + 273.15;
                break;

        }

        result.textContent = output.toLocaleString("es-ES", {
            maximumFractionDigits: 4
        });

        return;

    }

    const factors = units[category.value].factors;

    const meters = number * factors[from.value];

    const output = meters / factors[to.value];

    result.textContent = output.toLocaleString("es-ES", {
        maximumFractionDigits: 6
    });

}

category.addEventListener("change", loadUnits);
from.addEventListener("change", calculate);
to.addEventListener("change", calculate);
value.addEventListener("input", calculate);

loadUnits();