const img = document.querySelector('img');

function callback(e) {
    console.log(e);
}

img.addEventListener('click', callback);

const animalsList = document.querySelector('.animals-list');

function callbackList(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
};

animalsList.addEventListener('click', callbackList);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(e) {
    e.preventDefault();
    // console.log(event);
    console.log(this);
    console.log(e.currentTarget);
};

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

window