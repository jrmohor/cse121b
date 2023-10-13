/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */

const displayTemples = (templeList) => {
   
    templeList.forEach((temples) => {
      
      const article = document.createElement('article');
  
      // Create an HTML <h3> element and add the temple's templeName property
      const h3 = document.createElement('h3');
      h3.textContent = temples.templeName;
  
      // Create an HTML <img> element and set the src and alt attributes
      const img = document.createElement('img');
      img.src = temples.imageUrl;
      img.alt = temples.location;
  
      // Append the <h3> element and the <img> element to the <article> element
      article.appendChild(h3);
      article.appendChild(img);
  
      // Append the <article> element to the global templesElement variable
      templesElement.appendChild(article);
    });
  };


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(
        'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
    );
    templeList = await response.json();
    displayTemples(templeList);
};
getTemples();

/* reset Function */

  const reset = () => {
    templesElement.innerHTML = '';
  };

/* sortBy Function */

const sortBy = function(temples) {

    reset();
  
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temp => temp.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        break;
    }
  };

getTemples();

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => {
    return sortBy(templeList);
  });