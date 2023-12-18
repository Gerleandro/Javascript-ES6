const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/O%20que%20%C3%A9%20o%20DOM/index.html') {
    console.log(`href é igual a ${href}`);
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log('clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);