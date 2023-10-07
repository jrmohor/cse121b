/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jorge Mohor',
    photo: 'images/my_picture.png',
    favoriteFoods: [
        'Milanesas', 
        'Empanadas', 
        'Lasagna', 
        'Ice Cream',
    ],
    hobbies: [
        'Xtreme Sports', 
        'Soccer', 
        'Basketball', 
        'Reading',
    ],
    placesLived:[],
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Herriman, UT',
        length: '4 years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Buenos Aires, Argentina',
        length: '10 years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Mendoza, Argentina',
        length: '2 years',
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name') .textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo') .setAttribute ('src', myProfile.photo);
document.querySelector('#photo') .setAttribute ('alt', myProfile.name);

//document.querySelector('#photo') .alt = myProfile.name;

/* Favorite Foods List*/

const favoriteFoods = document.getElementById('favoriteFoods');

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods') .appendChild(li);
});

/* Hobbies List */

const hobbies = document.getElementById('hobbies');

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies') .appendChild(li);
});

/* Places Lived DataList */

const placesLived = document.getElementById('placesLived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived') .appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived') .appendChild(dd);
});