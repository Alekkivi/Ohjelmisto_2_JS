'use strict';
let number_list = [];
let user_number;
let app_running = true;

while (app_running) {
  user_number = +prompt('Enter a number');
  if (isNaN(user_number)) {
    user_number = +prompt('Enter a valid number');
  } else {
    number_list.push(user_number);
  }
  if (user_number === 0) {
    app_running = false;
  }
}
number_list.sort(function(a, b){return b-a})
console.log(number_list)