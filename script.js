// 🚀 Initialization
function initApp() {
  updateLocalClock();
  updateWorldClock();
  setInterval(updateLocalClock, 1000);
  setInterval(updateWorldClock, 1000);
}

// 🕒 Local Clock
function updateLocalClock() {
  const now = new Date();
  document.getElementById('localClock').innerText = now.toLocaleTimeString();
}

// 🌍 World Clock
function updateWorldClock() {
  const now = new Date();
  document.getElementById('world-tokyo').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
  document.getElementById('world-london').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London' });
  document.getElementById('world-newyork').innerText = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
  document.getElementById('world-delhi').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
  document.getElementById('world-utc').innerText = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
}

// ⏱ Stopwatch
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

// ⏳ Countdown Timer
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

    if (countdownSeconds <= 0) return;

    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
      if (countdownSeconds > 0) {
        countdownSeconds--;
        updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        alert("⏰ Countdown finished!");
        document.getElementById('countdownDisplay').classList.add('flash-effect');
        setTimeout(() => {
          document.getElementById('countdownDisplay').classList.remove('flash-effect');
        }, 5000);
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

// ⏰ Alarm
let alarmHour = null;
let alarmMinute = null;

function setAlarm() {
  alarmHour = parseInt(document.getElementById('alarmHours').value);
  alarmMinute = parseInt(document.getElementById('alarmMinutes').value);

  if (isNaN(alarmHour) || isNaN(alarmMinute)) {
    alert("Please enter a valid time.");
    return;
  }

  document.getElementById('alarmStatus').innerText =
    `Alarm set for ${String(alarmHour).padStart(2, '0')}:${String(alarmMinute).padStart(2, '0')}`;
}

function clearAlarm() {
  alarmHour = null;
  alarmMinute = null;
  document.getElementById('alarmStatus').innerText = "Alarm not set";
}

function checkAlarm() {
  if (alarmHour === null || alarmMinute === null) return;

  const now = new Date();
  if (
    now.getHours() === alarmHour &&
    now.getMinutes() === alarmMinute &&
    now.getSeconds() === 0
  ) {
    alert("⏰ Alarm Time!");
    document.getElementById('alarmStatus').classList.add('flash-effect');
    setTimeout(() => {
      document.getElementById('alarmStatus').classList.remove('flash-effect');
    }, 5000);
    clearAlarm();
  }
}

setInterval(checkAlarm, 1000); // Keep checking alarm every second

// 🌗 Theme Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function updateWorldClock() {
  const timezones = {
    'world-utc': 'UTC',
    'world-london': 'Europe/London',
    'world-tokyo': 'Asia/Tokyo',
    'world-newyork': 'America/New_York',
    'world-delhi': 'Asia/Kolkata'
  };

  Object.keys(timezones).forEach(id => {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezones[id],
      hour12: false
    };
    document.getElementById(id).innerText = `${timezones[id]}: ${now.toLocaleTimeString('en-US', options)}`;
  });
}

function initApp() {
  setInterval(() => {
    updateLocalClock();     // your existing function for local clock
    updateWorldClock();     // this will update all world clocks
  }, 1000);
}
