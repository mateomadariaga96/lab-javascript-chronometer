const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const mins = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = mins[0]
  minUni.innerText = mins[1]
}

function printSeconds() {
  const secs = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = secs[0]
  secUni.innerText = secs[1]
}

// ==> BONUS
function printMilliseconds() {
  const miliSecs = chronometer.twoDigitsNumber(chronometer.getMiliseconds())
  milDec.innerText = miliSecs[0]
  milUni.innerText = miliSecs[1]
}

function printSplit() {
  const lap = document.createElement('li')
  lap.innerText = chronometer.splitClick()
  splits.appendChild(lap)
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  chronometer.stopClick()
  btnLeft.classList.replace('stop', 'start')
  btnRight.classList.replace('split', 'reset')
  btnLeft.innerText = 'START'
  btnRight.innerText = 'RESET'
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.startClick();
  setInterval(printTime, 1000) 
  btnLeft.classList.replace('start', 'stop')
  btnRight.classList.replace('reset', 'split')
  btnLeft.innerText = 'STOP'
  btnRight.innerText = 'SPLIT';
}

function setResetBtn() {
  chronometer.resetClick();
  printMinutes()
  printSeconds()
  printMilliseconds()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  switch (btnLeft.innerText) {
    case 'START':
      setStartBtn()
      break;
    case 'STOP':
      setStopBtn()
      break;
  }
});

// Reset/Split Button
 btnRight.addEventListener('click', () => {
   switch (btnRight.innerText) {
    case 'RESET':
      setResetBtn()
      clearSplits()
      break;
    case 'SPLIT':
      setSplitBtn()
      break; 
  }
});
