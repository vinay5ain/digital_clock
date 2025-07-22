const alarmAudio = document.getElementById('alarm-sound');

document.addEventListener('click', () => {
  alarmAudio.play().catch(() => {});
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
}, { once: true });

// 🕒 Local Clock
function updateLocalClock() {
  const now = new Date();
  document.getElementById('localClock').innerText = now.toLocaleTimeString();
}

// 🌍 World Clock
function updateWorldClock() {
  const timezones = {
    'world-utc': { zone: 'UTC', label: 'UTC' },
    'world-london': { zone: 'Europe/London', label: 'London' },
    'world-tokyo': { zone: 'Asia/Tokyo', label: 'Tokyo' },
    'world-newyork': { zone: 'America/New_York', label: 'New York' },
    'world-delhi': { zone: 'Asia/Kolkata', label: 'Delhi' }
  };

  for (const [id, { zone, label }] of Object.entries(timezones)) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: zone, hour12: false
    });
    const element = document.getElementById(id);
    if (element) element.innerText = `${label}: ${time}`;
  }
}

// ⏱ Stopwatch
let stopwatchSeconds = 0, stopwatchInterval = null;

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

// ⏳ Countdown
let countdownSeconds = 0, countdownInterval = null;

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
        alarmAudio.play();
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
let alarmHour = null, alarmMinute = null;

function setAlarm() {
  alarmHour = parseInt(document.getElementById('alarmHours').value);
  alarmMinute = parseInt(document.getElementById('alarmMinutes').value);
  if (isNaN(alarmHour) || isNaN(alarmMinute)) {
    alert("Please enter a valid time.");
    return;
  }
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
    alarmAudio.play();
    alert("⏰ Alarm Time!");
    document.getElementById('alarmStatus').classList.add('flash-effect');
    setTimeout(() => {
      document.getElementById('alarmStatus').classList.remove('flash-effect');
    }, 5000);
    clearAlarm();
  }
}

// 🌗 Theme Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// ⏰ Init All
function initApp() {
  updateLocalClock();
  updateWorldClock();
  updateStopwatchDisplay();
  updateCountdownDisplay();
  setInterval(() => {
    updateLocalClock();
    updateWorldClock();
    checkAlarm();
    updateAnalogClock();
  }, 1000);
}

// 🕰️ Analog Clock Update
function updateAnalogClock() {
  const now = new Date();
  const second = now.getSeconds() * 6;
  const minute = now.getMinutes() * 6 + second / 60;
  const hour = ((now.getHours() % 12) * 30) + (minute / 12);

  document.querySelector('.hand.hour').style.transform = `rotate(${hour}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.hand.second').style.transform = `rotate(${second}deg)`;
}
