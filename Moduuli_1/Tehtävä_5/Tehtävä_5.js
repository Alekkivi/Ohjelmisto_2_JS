'use strict';

let form = document.querySelector('form');
let result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let yearInput = document.querySelector('#year');
  let year = parseInt(yearInput.value);

  if (year <= 0) {
    result.textContent = "Please enter a valid year";
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = `${year} is a leap year!`;
  } else {
    result.textContent = `${year} is not a leap year!`;
  }
  yearInput.value = '';
});