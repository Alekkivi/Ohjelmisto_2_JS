'use strict';

let participants_amount = +prompt('What is the number of participants?');
let target_list = document.getElementById('target');
let participant_list = [];

if (participants_amount > 0) {
  for (let i = 1; i <= participants_amount; i++) {
    let participant_name = prompt(`Enter the name of participant number ${i}`);
    participant_list.push(participant_name);
  }

} else {
  target_list.innerHTML = 'Invalid number of participants';
}

participant_list.sort();
for (let i = 0; i < participant_list.length; i++) {
  let li = document.createElement('li');
  li.innerText = participant_list[i];
  target_list.appendChild(li);
}