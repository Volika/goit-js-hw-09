function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

btnStart.disabled = false;
btnStop.disabled = true;
let timerId = null;

function onClickBtnStart() {
    // console.log('onClickBtnStart');
    timerId = setInterval(changeBGColor, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function onClickBtnStop() {
    // console.log('onClickBtnStop');
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

function changeBGColor() {
    body.style.backgroundColor = getRandomHexColor();
}