console.log('It works!');

const form = document.getElementById('timerForm');
const count = document.getElementById('timerCount');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const clearBtn = document.getElementById('clearBtn');

let intervalId;
let countValue;
let paused = false;

function startTimer() {
    intervalId = setInterval(() => {
        if (countValue > 0) {
            countValue--;
            updateTimerDisplay();
        } else {
            clearInterval(intervalId);
            clearBtn.style.display = 'inline-block';
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    paused = true;
    resumeBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function resumeTimer() {
    startTimer();
    paused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
}

function updateTimerDisplay() {
    const hours = Math.floor(countValue / 3600);
    const minutes = Math.floor((countValue % 3600) / 60);
    const seconds = countValue % 60;
    let displayValue = '';

    if (hours > 0) {
        displayValue += `${hours} h : ${minutes < 10 ? '0' : ''}${minutes} m : ${seconds < 10 ? '0' : ''}${seconds} s `;
    } else if (minutes > 0) {
        displayValue += `${minutes} m : ${seconds < 10 ? '0' : ''}${seconds} s `;
    } else {
        displayValue += `${seconds} s `;
    }

    result.innerHTML = displayValue;
}

startBtn.addEventListener('click', () => {
    countValue = parseInt(count.value); 
    if (countValue > 0 && !intervalId) {
        clearInterval(intervalId);
        updateTimerDisplay();
        startTimer();
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
        clearBtn.style.display = 'inline-block';
    }
});

pauseBtn.addEventListener('click', () => {
    if (!paused) {
        pauseTimer();
    } else {
        resumeTimer();
    }
});

resumeBtn.addEventListener('click', () => {
    resumeTimer();
});

clearBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    count.value = '';
    result.innerHTML = '0';
    clearBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
    intervalId = null;
    countValue = 0;
});
