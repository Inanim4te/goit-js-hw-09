function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let colorChanger = null;

stopBtn.setAttribute('disabled', '')

startBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorChanger = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', '');
});

stopBtn.addEventListener('click', () => {
  clearInterval(colorChanger);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
});
