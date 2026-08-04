const type = document.getElementById("type");
const value = document.getElementById("value");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const convertButton = document.getElementById("convert");

const units = {
    length: ["Metros", "Kilómetros", "Centímetros"],
    weight: ["Kilogramos", "Gramos"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

function loadUnits() {

    from.innerHTML = "";
    to.innerHTML = "";

    units[type.value].forEach(unit => {

        from.innerHTML += `<option value="${unit}">${unit}</option>`;
        to.innerHTML += `<option value="${unit}">${unit}</option>`;

    });

    to.selectedIndex = 1;
}

loadUnits();

type.addEventListener("change", loadUnits);

convertButton.addEventListener("click", () => {

    const input = parseFloat(value.value);

    if (isNaN(input)) {
        result.textContent = "Introduce un valor";
        return;
    }

    let output = input;

    if (type.value === "length") {

        let meters = input;

        if (from.value === "Kilómetros") meters *= 1000;
        if (from.value === "Centímetros") meters /= 100;

        output = meters;

        if (to.value === "Kilómetros") output /= 1000;
        if (to.value === "Centímetros") output *= 100;

    }

    if (type.value === "weight") {

        let kg = input;

        if (from.value === "Gramos") kg /= 1000;

        output = kg;

        if (to.value === "Gramos") output *= 1000;

    }

    if (type.value === "temperature") {

        let c = input;

        if (from.value === "Fahrenheit") c = (input - 32) * 5 / 9;
        if (from.value === "Kelvin") c = input - 273.15;

        output = c;

        if (to.value === "Fahrenheit") output = c * 9 / 5 + 32;
        if (to.value === "Kelvin") output = c + 273.15;

    }

    result.textContent = Number(output.toFixed(4));

});