'use strict';

let movieForm = document.querySelector('form');
let results = document.getElementById('results');

movieForm.addEventListener('submit', async function(event) {

  // prevent default and clear old searches
  event.preventDefault();
  results.innerHTML = '';

  let code = document.querySelector('input[name=q]').value;
  try {
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
    let JsonData = await response.json();

    // iterate over all the search results, where 'i' is a show.
    for (let i of JsonData) {

      //parse through the JsonData
      let show_title = i.show.name;
      let show_link = i.show.url;
      let show_img = i.show.image?.medium ? i.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
      let show_summary = i.show.summary;

      //Insert search data to new HTML-article
      let article = document.createElement('article');

      //heading
      let h2 = document.createElement('h2');
      h2.textContent = show_title;
      article.appendChild(h2);

      //image
      let img = document.createElement('img');
      img.src = show_img;
      img.alt = show_title;
      article.appendChild(img);

      //Description
      let divText = document.createElement('div');
      divText.innerHTML = show_summary;
      article.appendChild(divText);

      //link
      let a = document.createElement('a');
      a.innerText = show_link;
      a.href = show_link;
      a.target = `_blank`;
      article.appendChild(a);

      results.appendChild(article);

    }
  } catch (error) {
    console.log(error.message);
  }
});

