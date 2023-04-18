'use strict';

const target = document.getElementById('target');

let li_1 = document.createElement('li');
let li_2 = document.createElement('li');
let li_3 = document.createElement('li');

li_1.innerHTML = 'First item';
target.appendChild(li_1);

li_2.innerHTML = 'Second item';
li_2.classList.add('my-item');
target.appendChild(li_2);

li_3.innerHTML = 'Third item';
target.appendChild(li_3);

