const display = document.getElementById("display");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let seconds = 0;
let interval = null;

function updateDisplay() {

    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    display.textContent = `${hrs}:${mins}:${secs}`;
}

startButton.addEventListener("click", () => {

    if (interval) return;

    interval = setInterval(() => {

        seconds++;
        updateDisplay();

    }, 1000);

});

pauseButton.addEventListener("click", () => {

    clearInterval(interval);
    interval = null;

});

resetButton.addEventListener("click", () => {

    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();

});

updateDisplay();