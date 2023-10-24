
const superheroElement = document.querySelector('#superhero');
let superheroeslist = [];


const displaySuperhero = (superheroeslist) => {

    superheroeslist.forEach ((superhero) => {
        const article = document.createElement('article');

        const name = document.createElement('name')
        name.textContent = superhero.superheroeslist;

        const alias = document.createElement('alias')
        alias.textContent = superhero.superheroeslist;

        const powers = document.createElement('powers')
        powers.textContent = superhero.superheroeslist;

        // Displaying an image (optional, if available in the API)
        const img = document.createElement('img');
        img.src = superhero.imageUrl;

        article.appendChild(name);
        article.appendChild(alias);
        article.appendChild(powers);
        article.appendChild(img);

    });
    };

    const apiUrl = 'https://superhero-search.p.rapidapi.com/api/heroes';
    const apiKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b03c5584cmsh523c0d76a65230cp1aaf70jsnabd4017f9afc',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(apiUrl, apiKey);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    };
      
document.getElementById('search-button').addEventListener('click', search);
document.getElementById('searchrandom-button').addEventListener('click', random);
      
    function search() {
        const superheroName = document.getElementById('search-input').value;  
        fetch(`${apiUrl}?name=${superheroName}`, {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': apiKey,
              }
          })
          .then(response => response.json())
          .then(data => {
              displaySuperhero(data);
          })
          .catch(error => {
              handleError(error);
          });
    }
      
    function random() {
        fetch(apiUrl, {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': apiKey,
              }
          })
          .then(response => response.json())
          .then(data => {
              displaySuperhero(data);
          })
          .catch(error => {
              handleError(error);
          });
    };

function handleError(error) {
    console.error('Error:', error);
    document.getElementById('superhero-info').textContent = 'Superhero not found or an error occurred.';
};