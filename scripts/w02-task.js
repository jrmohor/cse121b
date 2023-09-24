/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

    let fullName = 'Jorge Mohor';
    let currentYear = new Date().getFullYear();
    const profilePicture = 'images/my_picture.png';

/* Step 3 - Element Variables */

    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.querySelector('#year');
    const imageElement = document.querySelector('picture');

/* Step 4 - Adding Content */

    nameElement.innerHTML = `<strong>${fullName}</strong>`; 
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture);

    const altText = `Profile image of Jorge Mohor`;
    imageElement.setAttribute('alt', altText);

/* Step 5 - Array */

    let favFoods = ['Milanesas', 'Empanadas', ' Lasagna', 'Ice Cream'];
    foodElement.innerHTML = `${favFoods}`;
    favFoods.push(' Argentinian barbecue');
    foodElement.innerHTML += `<br>${favFoods}`;
    favFoods.shift();
    foodElement.innerHTML += `<br>${favFoods}`;
    favFoods.pop();
    foodElement.innerHTML += `<br>${favFoods}`;




