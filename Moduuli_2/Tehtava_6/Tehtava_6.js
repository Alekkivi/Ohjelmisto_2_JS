'use strict';

const target_list = document.getElementById('target')
let app_running = true

function roll_dice(){
  return Math.floor((Math.random() * 6) + 1)
}
while (app_running){
  let dice = roll_dice()
  if (dice === 6){
    app_running = false
  }
    let li = document.createElement('li')
    li.textContent = dice.toString()
    target_list.appendChild(li)
}