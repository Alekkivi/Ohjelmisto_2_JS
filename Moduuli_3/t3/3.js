'use strict';

const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

for (name of names) {
  let li = document.createElement('li');
  li.innerHTML = name;
  target.appendChild(li);
}
