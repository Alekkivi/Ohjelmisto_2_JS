'use strict';

function calculator() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let target = document.getElementById('result')
  let x = document.getElementById('operation').value;
  let result;

  if (x === 'add') {
    result = num1 + num2;

  } else if (x === 'sub') {
    result = num1 - num2;

  } else if (x === 'multi') {
    result = num1 * num2;

  } else if (x === 'div') {
    result = num1 / num2;

  } return target.innerHTML = result;
}

const button = document.getElementById('start');
button.onclick = calculator;


