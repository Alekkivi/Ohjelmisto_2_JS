'use strict';

let movieForm = document.querySelector('form');
movieForm.addEventListener('submit',async function(event){
  event.preventDefault();

  let code = document.querySelector('input[name=q]').value;
  try {
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`)
    let jsondata = await response.json();
    console.log(jsondata)

  } catch (error) {
    console.log(error.message)
  }



})
