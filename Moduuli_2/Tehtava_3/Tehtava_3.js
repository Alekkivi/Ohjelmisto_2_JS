'use strict';

const target_list = document.getElementById('target');
let dog_list = [];
let dog_name;
let i = 1;

do {
  dog_name = prompt(`Enter dog-${i} name: `);

  if (parseInt(dog_name) || !dog_name.trim()) {
    dog_name = prompt(`Enter a valid name for dog-${i}: `);
  }
  dog_list.push(dog_name);
  i++;

} while (i <= 6 && isNaN(dog_name));

i = 0;
dog_list.sort().reverse();
for (i; i < dog_list.length; i++) {

  let li = document.createElement('li');
  li.innerText = dog_list[i];
  target_list.appendChild(li);
}
