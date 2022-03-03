// je cree

let header = document.createElement('header');
let  menu = document.createElement('div');
let p = document.createElement('p');


// Je personnalise
header.textContent="Bienvenue";

header.style.backgroundColor="#e3b04b";
header.style.color='white';
header.style.padding="30px";
header.style.fontSize="3em";
header.style.textAlign = "centrer";
menu.innerHTML="<a href='#'> Acceuil</a> / <a href='#'> Une autre page</a>";

menu.style.backgroundColor="#f1d6ab";
menu.style.padding="15px";
p.textContent=" Ceci est paragraphe";
p.style.margin="15px";



//J'ajoute a ma page
document.body.append(header,menu,p);
