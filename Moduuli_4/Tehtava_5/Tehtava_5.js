'use strict';
async function joke() {
  try {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let JsonData = await response.json();
    let joke =  JsonData.value
    console.log(joke)

  } catch (error) {
    console.log(error);
  }
}
joke()