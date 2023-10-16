// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = new Date(selectedDates[0]);
//     if (selectedDate.getTime() > Date.now()) {
//       startButton.disabled = false;
//     } else {
//       alert('Будь ласка, оберіть дату у майбутньому часі, дякую ! 🥵🙃');
//       startButton.disabled = true;
//     }
//   },
// };

// const timerElement = document.querySelector('.timer');
// const startButton = document.querySelector('[data-start]');
// startButton.disabled = true; // make the button disabled by default
// const datetimePicker = document.querySelector('#datetime-picker');

// let countdown;

// function timer(seconds) {
//   clearInterval(countdown);

//   const now = Date.now();
//   const then = now + seconds * 1000;
  
//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);

//     if(secondsLeft < 0) {
//       clearInterval(countdown);
//       return;
//     }

//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }


// function displayTimeLeft(seconds) {
//   const daysElement = document.querySelector('[data-days]');
//   const hoursElement = document.querySelector('[data-hours]');
//   const minutesElement = document.querySelector('[data-minutes]');
//   const secondsElement = document.querySelector('[data-seconds]');

//   const days = Math.floor(seconds / (3600*24));
//   const hours = Math.floor((seconds % (3600*24)) / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   seconds = seconds % 60;

//   daysElement.textContent = addLeadingZero(days);
//   hoursElement.textContent = addLeadingZero(hours);
//   minutesElement.textContent = addLeadingZero(minutes);
//   secondsElement.textContent = addLeadingZero(seconds);
// }

// startButton.addEventListener('click', () => {
//   const seconds = (new Date(datetimePicker.value).getTime() - Date.now()) / 1000;
  
//   if(seconds > 0) {
//     timer(seconds);
//     startButton.disabled = true;
//   } else {
//     alert('Будь ласка, оберіть дату у майбутньому часі, дякую ! 🥵🙃');
//     startButton.disabled = true;
//   }
// });

// flatpickr("#datetime-picker", options);

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = new Date(selectedDates[0]);
    if (selectedDate.getTime() > Date.now()) {
      startButton.disabled = false;
    } else {
      Notiflix.Notify.failure('Будь ласка, оберіть дату у майбутньому часі, дякую ! 🥵🙃'); 
      startButton.disabled = true;
    }
  },
};

const timerElement = document.querySelector('.timer');
const startButton = document.querySelector('[data-start]');
startButton.disabled = true; // make the button disabled by default
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
    startButton.disabled = true;
  } else {
    Notiflix.Notify.failure('Будь ласка, оберіть дату у майбутньому часі, дякую ! 🥵🙃'); 
    startButton.disabled = true;
  }
});

flatpickr("#datetime-picker", options); 