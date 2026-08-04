const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const display = document.getElementById("display");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let totalSeconds = 0;
let interval = null;

function updateDisplay() {

    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");

    display.textContent = `${mins}:${secs}`;
}

startButton.addEventListener("click", () => {

    if (interval) return;

    if (totalSeconds === 0) {

        const mins = parseInt(minutesInput.value) || 0;
        const secs = parseInt(secondsInput.value) || 0;

        totalSeconds = mins * 60 + secs;

        if (totalSeconds <= 0) return;

        updateDisplay();
    }

    interval = setInterval(() => {

        totalSeconds--;

        updateDisplay();

        if (totalSeconds <= 0) {

            clearInterval(interval);
            interval = null;

            alert("⏰ ¡Tiempo terminado!");
        }

    }, 1000);

});

pauseButton.addEventListener("click", () => {

    clearInterval(interval);
    interval = null;

});

resetButton.addEventListener("click", () => {

    clearInterval(interval);
    interval = null;

    totalSeconds = 0;

    minutesInput.value = "";
    secondsInput.value = "";

    updateDisplay();

});

updateDisplay();