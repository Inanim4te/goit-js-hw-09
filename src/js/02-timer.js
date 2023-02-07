import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const remainingDays = document.querySelector('span[data-days]');
const remainingHours = document.querySelector('span[data-hours]');
const remainingMinutes = document.querySelector('span[data-minutes]');
const remainingSeconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', '');
let timeDifference;
let convertedTime;
let currentTime;
let selectedDate;

// styles
const timerWrap = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const spans = document.querySelectorAll('.value');
timerWrap.style.display = 'flex';
timerWrap.style.gap = '20px';
timerWrap.style.marginTop = '15px';
timerWrap.style.fontSize = '17px';
timerWrap.style.fontWeight = '500';
timerWrap.style.textTransform = 'uppercase';
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
});
spans.forEach(span => {
  span.style.fontSize = '40px';
});
// styles

function timer(ms) {
  convertedTime = convertMs(ms);
  remainingDays.textContent = convertedTime.days.toString().padStart(2, '0');
  remainingHours.textContent = convertedTime.hours.toString().padStart(2, '0');
  remainingMinutes.textContent = convertedTime.minutes
    .toString()
    .padStart(2, '0');
  remainingSeconds.textContent = convertedTime.seconds
    .toString()
    .padStart(2, '0');
  timeDifference -= 1000;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = new Date(selectedDates[0]);
    currentTime = new Date();
    if (currentTime < selectedDate) {
      startBtn.removeAttribute('disabled');
      timeDifference = selectedDate - currentTime;
    } else {
      startBtn.setAttribute('disabled', '');
      Notify.failure('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
  },
};

const dateInput = document.querySelector('#datetime-picker');

flatpickr(dateInput, options);

startBtn.addEventListener('click', () => {
  currentTime = new Date();
  if (currentTime > selectedDate) {
    return Notify.failure('Please choose a date in the future');
  }
  startBtn.setAttribute('disabled', '');
  dateInput.setAttribute('disabled', '');
  timeDifference = selectedDate - currentTime;
  timer(timeDifference);
  const secondInterval = setInterval(() => {
    timer(timeDifference);
    if (timeDifference <= 0) {
      clearInterval(secondInterval);
      dateInput.removeAttribute('disabled');
    }
  }, 1000);
});
