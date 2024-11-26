let startTime;
let elapsedTime = 0; // Total time in milliseconds
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Adjust for any elapsed time
        timerInterval = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime; // Calculate elapsed time

    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    // Format time as HH:MM:SS
    display.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
