'use strict';

let number_list = [];
let app_running = true;
let user_number;

while (app_running) {
  user_number = prompt('Enter a number');
  user_number = parseInt(user_number)

  if (number_list.includes(user_number)) {
    app_running = false;

  } else if (!isNaN(user_number)) {
    number_list.push(user_number);
  }

}
number_list.sort(function(a, b) {
  return a - b;
});
console.log(number_list);