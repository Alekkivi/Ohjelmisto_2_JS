'use strict';

let form = document.querySelector('form');
let roll_list = document.querySelector('#roll_list');
let sum = document.querySelector('#sum');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let dice_count = parseInt(document.querySelector('#dice').value);
  let roll_results = '';
  let dice_sum = 0;

  if (dice_count <= 0) {
    roll_list.innerHTML = ''
    sum.innerHTML = 'Invalid number of dice!';
    return;
  }

  for (let i = 1; i <= dice_count; i++) {

    let dice_roll = Math.floor((Math.random() * 6) + 1);
    dice_sum += dice_roll;
    roll_results += `Die ${i} eye count is: ${dice_roll}` + '<br>';
  }

  roll_list.innerHTML = roll_results;
  sum.innerHTML = `Sum of the rolled dice is: ${dice_sum}`;

});