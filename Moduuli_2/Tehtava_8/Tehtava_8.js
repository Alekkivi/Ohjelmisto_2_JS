'use strict';
const target = document.getElementById("target");
let test_array = ["Banana", "Apple", "Pear", "Kiwi", "Clementine"]

function concat(array){
  let string = "";
  for (let i = 0; i < array.length; i++){
    string += array[i];
  } return string
}

target.innerText = concat(test_array)
