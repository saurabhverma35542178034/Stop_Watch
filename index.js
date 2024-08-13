let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval;
let swatchMs = document.getElementById('ms');
let swatchSec = document.getElementById('sec');
let swatchMin = document.getElementById('min');
let swatchHr = document.getElementById('hr');

function start() {
    ms++;
    if (ms > 99) {
        ms = 0;
        sec++;
    }

    if (sec > 59) {
        sec = 0;
        min++;
    }

    if (min > 59) {
        min = 0;
        hr++;
    }

    swatchMs.innerText = ms.toString().padStart(2, '0');
    swatchSec.innerText = sec.toString().padStart(2, '0');
    swatchMin.innerText = min.toString().padStart(2, '0');
    swatchHr.innerText = hr.toString().padStart(2, '0');
}

document.querySelector('.start').addEventListener('click', () => {
    if (!interval) { 
        interval = setInterval(start, 10);
    }
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(interval);
    interval = null; 
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    swatchMs.innerText = '00';
    swatchSec.innerText = '00';
    swatchMin.innerText = '00';
    swatchHr.innerText = '00';
});
