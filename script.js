// Initialization
function initApp() {
  updateLocalClock();
  updateWorldClock();
  setInterval(updateLocalClock, 1000);
  setInterval(updateWorldClock, 1000);
}

// Live Clock
function updateLocalClock() {
  const now = new Date();
  document.getElementById('localClock').innerText = now.toLocaleTimeString();
}

// World Clock
function updateWorldClock() {
  const now = new Date();
  document.getElementById('tokyoTime').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
  document.getElementById('londonTime').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London' });
  document.getElementById('nyTime').innerText = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
}

// Stopwatch
let stopwatchInterval = null;
let stopwatchSeconds = 0;

function updateStopwatchDisplay() {
  const h = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(stopwatchSeconds % 60).padStart(2, '0');
  document.getElementById('stopwatchDisplay').innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  pauseStopwatch();
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

// Countdown
let countdownInterval = null;
let countdownSeconds = 0;

function updateCountdownDisplay() {
  const h = String(Math.floor(countdownSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(countdownSeconds % 60).padStart(2, '0');
  document.getElementById('countdownDisplay').innerText = `${h}:${m}:${s}`;
}

function startCountdown() {
  if (!countdownInterval) {
    const h = parseInt(document.getElementById('cdHours').value) || 0;
    const m = parseInt(document.getElementById('cdMinutes').value) || 0;
    const s = parseInt(document.getElementById('cdSeconds').value) || 0;
    countdownSeconds = h * 3600 + m * 60 + s;
    updateCountdownDisplay();
    countdownInterval = setInterval(() => {
      if (countdownSeconds > 0) {
        countdownSeconds--;
        updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        alert("⏰ Countdown finished!");
      }
    }, 1000);
  }
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function resetCountdown() {
  pauseCountdown();
  countdownSeconds = 0;
  updateCountdownDisplay();
}

// Alarm
let alarmHour = null;
let alarmMinute = null;
let alarmCheckInterval = setInterval(checkAlarm, 1000);

function setAlarm() {
  alarmHour = parseInt(document.getElementById('alarmHours').value);
  alarmMinute = parseInt(document.getElementById('alarmMinutes').value);
  document.getElementById('alarmStatus').innerText = `Alarm set for ${String(alarmHour).padStart(2, '0')}:${String(alarmMinute).padStart(2, '0')}`;
}

function clearAlarm() {
  alarmHour = null;
  alarmMinute = null;
  document.getElementById('alarmStatus').innerText = "Alarm not set";
}

function checkAlarm() {
  if (alarmHour === null || alarmMinute === null) return;
  const now = new Date();
  if (now.getHours() === alarmHour && now.getMinutes() === alarmMinute && now.getSeconds() === 0) {
    alert("⏰ Alarm Time!");
    clearAlarm();
  }
}

// Theme Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
