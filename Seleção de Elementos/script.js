// const animals = document.getElementById('animals');
// console.log(animals);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1]);

// const liFast = document.querySelector('li');
// console.log(liFast);

// const ulFast = document.querySelector('ul');
// console.log(ulFast);

// const internalLink = document.querySelector('[href^="#"]');
// console.log(internalLink);

// const animalsImg = document.querySelectorAll('.animals img');
// console.log(animalsImg[0]);

// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// ulFast.classList.add('grid-section');

// // console.log(gridSectionHTML);
// // console.log(gridSectionNode);

// gridSectionNode.forEach(function(item, index){
//     console.log(item);
// });
 
// const arrayGrid = Array.from(gridSectionHTML);

// arrayGrid.forEach(function(item){
//     console.log(item);
// });

    // =========== EXERCICIO ===========

// Retorne no console todas as imagens do site
    const img = document.querySelectorAll('img');
    console.log(img);

    const imagesAnimals = document.querySelectorAll('img[src^="img/img"]');
    console.log(imagesAnimals);
// Selecione todds os links internos (Onde o href começa com #)
    const internalLink = document.querySelectorAll('[href^="#"]');
    console.log(internalLink);

// Selecione o primeiro h2 dentro de .animals-description
    const animals = document.querySelector('.animals-desctiption');
    const h2Animals = document.querySelector('.animals-desctiption h2');
    
    console.log(animals);
    console.log(h2Animals);

// Selecione o último p do site

    const paragraphs = document.querySelectorAll('p');

    console.log(paragraphs[--paragraphs.length]);
