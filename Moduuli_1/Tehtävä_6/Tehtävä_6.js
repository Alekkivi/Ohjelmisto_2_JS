'use strict';

let start_question = confirm('Should I calculate the square root?');

if (start_question === true) {
  let user_number = +prompt('Enter a number: ');

  if (user_number < 0) {
    document.querySelector(
        '#target').innerHTML = 'The square root of a negative number is not defined';
  } else {
    let result = Math.sqrt(user_number);
    document.querySelector(
        '#target').innerHTML = `The square root of ${user_number} is ${result}`
  }
} else {
  document.querySelector('#target').innerHTML = 'The square root is not calculated.'
}
