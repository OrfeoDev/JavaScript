const premierTitre= document.getElementsByClassName('.premier-titre');
const premierID= document.getElementById('premier-id');
const titreNu =document.querySelector('h3');
const allItems =document.querySelectorAll('.item-liste');
const  liste =document.querySelector('ul');
const i2 = document.querySelector('.i2');

premierTitre.innerHTML= 'hello jjghkjlkjhggjhkjlkjkhjghf';
 const parent = document.querySelector('.parent');
 parent.innerHTML= '<h1> etexte</h1>';
// Ici je cree un nouvel li
 let nvEl = document.createElement('li');
 // Ici j'ecris du texte a l'interieur
 nvEl.innerText = " Nouvel Items";
 // Ici je le rajoute a la fin
//liste.appendChild(nvEl);
// Ici je le met hors du ul. C'est a usage unique , on ne cree qu'un seul element
// on ne peut pas faire document.body et liste appendchil
document.body.appendChild(nvEl)

//suppression d'un element
liste.children[2].remove()
