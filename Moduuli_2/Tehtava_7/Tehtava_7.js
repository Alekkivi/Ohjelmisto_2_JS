'use strict';

const target_list = document.getElementById('target');
let app_running = true;
let dice_sides;

function roll_dice(sides) {
  return Math.floor((Math.random() * sides) + 1);
}

dice_sides = +prompt('How many sides does your dice have?');

while (app_running) {
  let dice_roll = roll_dice(dice_sides);
  if (!isNaN(dice_sides)) {

    let li = document.createElement('li');
    li.textContent = dice_roll.toString();
    target_list.appendChild(li);

    if (dice_roll === dice_sides) {
      console.log('loppuuuu');
      app_running = false;
    }
  }
}