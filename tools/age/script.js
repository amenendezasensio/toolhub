const birthDate = document.getElementById("birthDate");
const calculateButton = document.getElementById("calculateButton");

const years = document.getElementById("years");
const details = document.getElementById("details");

calculateButton.addEventListener("click", () => {

    if (!birthDate.value) {
        years.textContent = "Selecciona una fecha";
        details.textContent = "";
        return;
    }

    const birth = new Date(birthDate.value);
    const today = new Date();

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    years.textContent = `${ageYears} años`;

    details.textContent =
        `${ageMonths} meses y ${ageDays} días`;

});