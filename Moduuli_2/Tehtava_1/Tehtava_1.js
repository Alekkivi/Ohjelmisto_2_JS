'use strict';

let user_numbers = [];

for (let i = 1; i <= 5; i++){
  let user_input = prompt(`Please enter a number ${i}/5`)
  while (user_input == null || user_input ===""){
    user_input = prompt('Please enter a number')
  }
  user_numbers.push(user_input)
}
for (let i = 4; i >=0; i--){
  console.log(user_numbers[i])
}

