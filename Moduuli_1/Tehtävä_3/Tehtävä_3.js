'use strict';

let number1 = +prompt("Syötä numero: ")
let number2 = +prompt("Syötä numero: ")
let number3 = +prompt("Syötä numero: ")

let sum = number1 + number2 + number3
let product = number1 * number2 * number3
let average = sum / 3

 document.querySelector('#sum_target').innerHTML = 'Sum of the numbers: ' + sum;
 document.querySelector('#product_target').innerHTML = 'Product of the numbers: ' + product;
 document.querySelector('#average_target').innerHTML = 'Average of the numbers' + ' ≈ ' + average.toFixed(2);