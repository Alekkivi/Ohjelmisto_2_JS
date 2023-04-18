'use strict';

let target_image = document.getElementById('target');
let trigger = document.getElementById('trigger');


trigger.addEventListener('mouseover', () =>{
  target_image.src = "img/picB.jpg"
});

trigger.addEventListener('mouseout', () =>{
  target_image.src = "img/picA.jpg"
});

