// Day 28 - Pomodoro Timer

let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let currentTime = workTime;
let isRunning = false;
let isWorkMode = true;
let timer = null;
let completedSessions = 0;
let totalMinutes = 0;

// Get elements
const timerDisplay = document.getElementById('timerDisplay');
const timerMode = document.getElementById('timerMode');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const workBtn = document.getElementById('workBtn');
const breakBtn = document.getElementById('breakBtn');
const completedSessionsEl = document.getElementById('completedSessions');
const totalMinutesEl = document.getElementById('totalMinutes');
// Format time display
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update display
function updateDisplay() {
    timerDisplay.textContent = formatTime(currentTime);
    timerMode.textContent = isWorkMode ? 'Work Session' : 'Break Time';
}

// Update stats
function updateStats() {
    completedSessionsEl.textContent = completedSessions;
    totalMinutesEl.textContent = totalMinutes;
}
// Start timer
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    
    timer = setInterval(function() {
        currentTime--;
        updateDisplay();
        
        if (currentTime <= 0) {
            timerComplete();
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(timer);
}

// Reset timer
function resetTimer() {
    pauseTimer();
    currentTime = isWorkMode ? workTime : breakTime;
    updateDisplay();
}

// Timer complete
function timerComplete() {
    pauseTimer();
    alert(isWorkMode ? 'Work session complete! Take a break.' : 'Break over! Time to work.');
    
    if (isWorkMode) {
        completedSessions++;
        totalMinutes += 25;
        updateStats();
    }
    
    // Auto switch mode
    isWorkMode = !isWorkMode;
    currentTime = isWorkMode ? workTime : breakTime;
    updateDisplay();
    updateModeButtons();
}

// Switch to work mode
function switchToWork() {
    pauseTimer();
    isWorkMode = true;
    currentTime = workTime;
    updateDisplay();
    updateModeButtons();
}

// Switch to break mode
function switchToBreak() {
    pauseTimer();
    isWorkMode = false;
    currentTime = breakTime;
    updateDisplay();
    updateModeButtons();
}

// Update mode button styles
function updateModeButtons() {
    if (isWorkMode) {
        workBtn.classList.add('active');
        breakBtn.classList.remove('active');
    } else {
        workBtn.classList.remove('active');
        breakBtn.classList.add('active');
    }
}

// Event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
workBtn.addEventListener('click', switchToWork);
breakBtn.addEventListener('click', switchToBreak);

// Initialize
updateDisplay();
updateStats();