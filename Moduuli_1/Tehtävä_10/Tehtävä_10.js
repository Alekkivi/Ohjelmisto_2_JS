'use strict';

let form = document.querySelector('form');
let target = document.querySelector('#target');

// Calculates the sum when throwing n amount of dice -- returns a boolean
function sum_of_n_dice(n, sum) {
  let dice_sum = 0;
  for (let i = 1; i <= n; i++) {
    dice_sum += Math.floor((Math.random() * 6) + 1);
  }
  return dice_sum === sum;
}

//Calculates the probability of an event
function probability(desired_events, all_events) {
  return +((desired_events / all_events) * 100).toFixed(2);
}

// Main program begins
form.addEventListener('submit', (event) => {
  event.preventDefault();

  //establish values
  let desired_sum = parseInt(document.querySelector('#eyecount_sum').value);
  let number_of_dice = parseInt(document.querySelector('#number_of_dice').value);
  let number_of_throws = 10000;
  let number_of_desired_outcomes = 0;

  //Checking the user input
  if (isNaN(desired_sum)||isNaN(number_of_dice)) {
    target.innerHTML = 'Invalid input';
    return;
  }

  // Throwing a set of n dice for x times
  for (let i = 1; i <= number_of_throws; i++) {

    // If the function returns True...
    if (sum_of_n_dice(number_of_dice, desired_sum)) {
      number_of_desired_outcomes += 1;}
  }

  let P = probability(number_of_desired_outcomes, number_of_throws);
  target.innerHTML = `Probability for dice sum: ${desired_sum}, with ${number_of_dice} dice is ${P}%`
});
