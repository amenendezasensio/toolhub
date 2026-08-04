const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

calculateButton.addEventListener("click", () => {

    if (!startDate.value || !endDate.value) {
        result.textContent = "Selecciona ambas fechas";
        return;
    }

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    const difference = Math.abs(end - start);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    result.textContent = `${days} día${days !== 1 ? "s" : ""}`;

});