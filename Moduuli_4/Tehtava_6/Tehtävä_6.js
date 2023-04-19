'use strict';

const form = document.getElementById('joke-form');
const target = document.getElementById('target');

form.addEventListener('submit', async function(event) {

  event.preventDefault();
  target.innerHTML = '';
  let keyword = document.querySelector('input[name=term]').value;

  try {
    let article = document.createElement('article');
    let response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${keyword}`);
    let JsonData = await response.json();

    if (JsonData.total === 0) {
      target.innerText = `No search results with the keyword: ${keyword}`;
    } else {
      for (let i of JsonData.result) {
        let joke = i.value;
        let p = document.createElement('p');
        p.textContent = joke;

        article.appendChild(p);
        target.appendChild(article);
      }
    }
  } catch (error) {
    console.log(error);
  }

});