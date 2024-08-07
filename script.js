// console.log(window);
console.dir(window.document);

console.log(document.body.innerHTML);

console.log(document.links[0]);

// Pakeicia visa body teksta
// document.body.innerHTML = '<h1>Hello World</h1>'


//Prideda pabaigoje teksta
// document.write('Hello from JS')

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main </h1>';

document.querySelector('#main h1').innerText = 'Hello From JS';