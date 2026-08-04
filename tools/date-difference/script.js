const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

const days = document.getElementById("days");
const yearsMonthsDays = document.getElementById("yearsMonthsDays");
const weeks = document.getElementById("weeks");
const hours = document.getElementById("hours");

function calculate() {

    if (!startDate.value || !endDate.value) {
        days.textContent = "—";
        yearsMonthsDays.textContent = "—";
        weeks.textContent = "—";
        hours.textContent = "—";
        return;
    }

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    if (end < start) {
        days.textContent = "Error";
        yearsMonthsDays.textContent = "—";
        weeks.textContent = "—";
        hours.textContent = "—";
        return;
    }

    const diffMs = end - start;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    days.textContent = totalDays.toLocaleString("es-ES");

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let dayDiff = end.getDate() - start.getDate();

    if (dayDiff < 0) {
        months--;
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        dayDiff += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    yearsMonthsDays.textContent = `${years}a ${months}m ${dayDiff}d`;

    const weekCount = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    weeks.textContent = `${weekCount} sem ${remainingDays} d`;

    const totalHours = totalDays * 24;
    hours.textContent = totalHours.toLocaleString("es-ES");
}

startDate.addEventListener("input", calculate);
endDate.addEventListener("input", calculate);