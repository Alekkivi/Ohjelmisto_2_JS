'use strict';

let form = document.querySelector('form');
let target = document.querySelector('#target');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let user_number = parseInt(document.querySelector('#number_form').value);
  let division_counter = 0;

  if (user_number < 0) {
    target.innerHTML = 'Number must be positive';
    return;
  }

  for (let i = 1; i < user_number; i++) {
    if (user_number % i === 0) {
      division_counter += 1;
    }
  }

  if (division_counter <= 1) {
    target.innerHTML = `${user_number} is a prime number!`;
  } else {
    target.innerHTML = `${user_number} is not a prime number`;
  }
});
