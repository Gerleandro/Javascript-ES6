const imgs = document.querySelectorAll('img');

imgs.forEach(function(item,  index, array) {
    // console.log(item, index, array)
})

const titles = document.getElementsByClassName('title');
const titlesArray = Array.from(titles);

// console.log(titles);
// console.log(titlesArray);

titlesArray.forEach(function(item, index, array) {
    // console.log(item, index, array);
});

// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

let i = 0;
// imgs.forEach((item) => {
//     console.log(i++);
// });

// imgs.forEach((item) => console.log(i++));


// ============ EXERCICIO ============

// Mostre no console cada parágrafos do site
const paragrafos = document.querySelectorAll('p');
console.log(item);

paragrafos.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
    // console.log(item, index);
// });

// let i = 0; 
// imgs.forEach( => {
//     console.log(i++);
// });

// imgs.forEach(() => i++);