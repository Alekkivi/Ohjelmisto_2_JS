'use strict';

let student_name = prompt("Welcome to Hogwarts School of Witchcraft and Wizardry! Please state your name: ")
let random_number = Math.floor(Math.random() * 4 ) + 1

while (student_name === "" || student_name === null){
  student_name = prompt("Welcome to Hogwarts School of Witchcraft and Wizardry! Please state your name again: ")
}

switch (random_number) {
  case 1:
      document.querySelector('#target').innerHTML = `Welcome ${student_name} to Gryffindor!`;
      break
  case 2:
      document.querySelector('#target').innerHTML = `Welcome ${student_name} to Slytherin!`;
      break
  case 3:
      document.querySelector('#target').innerHTML = `Welcome ${student_name} to Hufflepuff!`;
      break
  case 4:
      document.querySelector('#target').innerHTML = `Welcome ${student_name} to Ravenclaw!`;
      break
}
