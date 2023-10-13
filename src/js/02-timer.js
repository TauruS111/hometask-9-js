import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const timerElement = document.querySelector('.timer');
const startButton = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');

let countdown;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function displayTimeLeft(seconds) {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  const days = Math.floor(seconds / (3600*24));
  const hours = Math.floor((seconds % (3600*24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

startButton.addEventListener('click', () => {
  const seconds = (new Date(datetimePicker.value).getTime() - Date.now()) / 1000;
  
  if(seconds > 0) {
    timer(seconds);
  } else {
    alert('Будь ласка, оберіть дату у майбутньому часі, дякую ! 🥵🙃');
  }
});

flatpickr("#datetime-picker", options);