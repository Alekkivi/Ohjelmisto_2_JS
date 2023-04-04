'use strict';

let form = document.querySelector('form');
let list = document.getElementById('list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  list.innerHTML = '';
  let start_year = parseInt(document.querySelector('#start_year').value);
  let end_year = parseInt(document.querySelector('#end_year').value);

  if (start_year <= 0 || end_year <= 0) {
    list.innerHTML = '<li>Please enter a valid year</li>';
    return;

  } else if (start_year > end_year) {
    list.innerHTML = "<li>Start year can't be greater than end year</li>";
  }

  for (let i = start_year; i <= end_year; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      let li = document.createElement('li');
      li.innerHTML = i.toString();
      list.appendChild(li);
    }
  }

});