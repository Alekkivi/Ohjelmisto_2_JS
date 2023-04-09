'use strict';

let test_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -3, -2, -1, 0];

function even(array) {
  let even_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even_array.push(array[i]);
    }
  }
  return even_array;
}
let new_array = even(test_numbers)
console.log(`Original array: ${test_numbers}`);
console.log(`Array with only even numbers ${new_array}`);