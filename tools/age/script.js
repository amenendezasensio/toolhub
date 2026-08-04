const birthdateInput = document.getElementById("birthdate");


const age = document.getElementById("age");
const days = document.getElementById("days");
const nextBirthday = document.getElementById("nextBirthday");
const weekday = document.getElementById("weekday");
const zodiac = document.getElementById("zodiac");
const chinese = document.getElementById("chinese");

const weekdays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

const chineseSigns = [
    "Mono",
    "Gallo",
    "Perro",
    "Cerdo",
    "Rata",
    "Buey",
    "Tigre",
    "Conejo",
    "Dragón",
    "Serpiente",
    "Caballo",
    "Cabra"
];

function getZodiac(day, month) {

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Acuario";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Piscis";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Tauro";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Géminis";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cáncer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Escorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagitario";

    return "Capricornio";
}

function calculateAge() {

    if (!birthdateInput.value) return;

    const birth = new Date(birthdateInput.value);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let dayDiff = today.getDate() - birth.getDate();

    if (dayDiff < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    age.textContent = `${years}a ${months}m ${dayDiff}d`;

    const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
    days.textContent = totalDays.toLocaleString("es-ES");

    const next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

    if (next < today) {
        next.setFullYear(today.getFullYear() + 1);
    }

    const remaining = Math.ceil((next - today) / (1000 * 60 * 60 * 24));
    nextBirthday.textContent = remaining;

    weekday.textContent = weekdays[birth.getDay()];

    zodiac.textContent = getZodiac(
        birth.getDate(),
        birth.getMonth() + 1
    );

    chinese.textContent = chineseSigns[birth.getFullYear() % 12];

}

birthdateInput.addEventListener("input", calculateAge);