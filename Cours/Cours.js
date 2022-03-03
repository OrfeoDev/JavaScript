//DOM = Document Object Model
//Le Dom est un ensemble de données représentant la page web et ses éléments
//Il est définit par le navigateur au moment de l'interpretation du HTML
//Le Document définit l'entiereté de la page
//Un object Document est définit à chaque chargement de la page et contient la représentation en javascript de chaque balise html déclarée dans la page

//dans la variable document se trouve le DOM
let page = document;
console.log(page);

//une fois le document récupéré on peut le manipuler comme n'importe quel objet dans notre programme
//il possède des propriétés et méthodes
//par exemple, pour accéder au body on peut faire

let body = document.body;
console.log(body); //renvoie null dans certains cas
//pour récupérer le body à l'aide de notre script, il faut que le body ait déjà été interprété par le navigateur
//pour ça, il faut que notre script soit lu après le body
//soit on déplace la déclaration de notre balise script à la fin du body
//soit on utilise un évènement, vu qu'on a pas vu les évènements on va déplacer la balise script à la fin du body

//les données stockées dans le DOM sevent donc à accéder aux données du document en temps réel pour le modifier, intéragir avec, gérer des évènements (click, scroll, etc) pour introduire une interaction avec l'utilisateur ou d'autres applications


//chaque élément du DOM est représenté par un "noeud" (node) qui est un objet
//ces objets contiennent propriétés et méthodes
//la propriété childNodes d'un node permet de récupérer par exemple un tableau d'objet
console.log(document.body.childNodes); //renvoie un tableau d'enfants de body

//les noeuds peuvent avoir deux types, soit noeud textuel (contenant uniquemenet du texte) soit noeud élément qui sont des objets

//il est possible de cibler et récupérer directement des éléments dans le DOM à l'aide de méthodes du document

//pour récupérer tous les li d'un document on peut appeler
let lis = document.getElementsByTagName("li");
console.log(lis);
//getElementsByTagName renvoie un tableau d'objets dont le nom de balise correspond au paramètre donné
console.log(lis.length); //array.length nous renvoie donc le nombre de li dans le DOM

//dans la même veine que getElementsByTagName
//pour selectionner les elements via leur nom de class
let elements = document.getElementsByClassName("element");
console.log(elements);

//on peut également récupérer un élément via son id
let coco = document.getElementById('coco');
console.log(coco);

//il existe également une méthode permettant de récupérer un élément via un selecteur css
let liElement = document.querySelector("li.element");
console.log(liElement);
//querySelector renvoie le premier élément trouvé correspondant à cette description
//pour en récupérer plusieurs, on utilise querySelectorAll
//querySelector est très peu performant, donc l'utiliser le moins possible
//cependant, les demandes peuvent être extrêmement complexes et peuvent servir de façon sporadique pour résoudre des problèmes de façon plus aisée
// ex : document.querySelector('.red > div::firstChild > div::nthChild(2) li::nthChild(4), .red > div::nthOfType(3)')
//une requête comme celle ci prendrait plusieurs ms à effectuer et doit donc être utilisée avec parcimonie


//pour manipuler le contenu d'un élément (et donc d'une balise)
//on peut accéder aux propriétés de ladite balise
//comme par exemple innerHtml et textContent

coco.textContent = "toto"; //ici on remplace le contenu textuel de notre element coco
//il s'agit d'une string donc on peut concaténer comme avec une string habituelle
coco.textContent += " le crétin";

//innerHTML quant à lui peut renvoyer et modifier l'html dans une balise, ce qui le rend potentiellement dangereux (failles XSS)
coco.innerHTML = "<em>coucou</em>";
console.log(coco.textContent); //textContent ne renverra que coucou et pas les balises em


//on peut également lire et modifier les différents attributs d'un élément
let lien1 = document.getElementById('lien1');
//pour lire un attribut on utilise getAttribute
console.log(lien1.getAttribute('href')); //renvoie le contenu de href de mon lien
console.log(lien1.href); //renvoie le lien complet
console.log(lien1.getAttribute('id')) //récupère l'id
console.log(lien1.id); //idem

//pour modifier un attribut ou définir un nouvel attribut on utilise setAttribute
lien1.setAttribute('href', 'https://www.google.fr');

//on peut également vérifier qu'un element possède un attribut en particulier avec hasAttribute
console.log(lien1.hasAttribute('target'));//renvoie false

//Changer le style d'un élément
//on peut manipuler directement les propriétés css d'un élément
//on peut manipuler les classes d'un élément pour appliquer du CSS

//pour manipuler le style on peut utiliser la propriété style d'un élément
lien1.style.color = "red";
lien1.style.backgroundColor = "green"; //contrairement aux propriétés css qui utilisent - pour séparer chaque terme, ici on utilise l'écriture javascript qui est le camelCase
//cependant cette approche ,bien que pouvant aider à tester ou à dépanner pendant un projet, se révèle être légèrement brouillon et vite inutilisable
//on préferera souvent préparer des classes à l'avance et les attribuer dynamiquement en js

//pour manipuler les classes d'un élément on utilise la propriété classList qui est un tableau de classes (des string)

lien1.classList.add('blue');
//cependant, attention, le style "inline" généré lorsqu'on utilise la propriété style est prioritaire face au css

//pour retirer une class on utilise element.classList.remove('nomDeLaClasse')

//si on veut savoir si un élément possède une classe en particulier on utilise element.classList.contains
console.log(lien1.classList.contains('blue')); //renvoie true

//Créer des éléments du DOM
//on peut créer des éléments du DOM en javascript de toute pièce, pour ça on utilise document.createElement
let nouveauLien = document.createElement('a');
//createElement prend comme paramètre le nom de la balise à créer
//une fois stocké dans une variable, on peut modifier cet élément comme n'importe quel élément
nouveauLien.setAttribute('href', 'https://fr.wikipedia.org/wiki');
nouveauLien.textContent = 'wikipedia';

//puis il faut l'insérer dans le DOM avec appendChild par exemple
liElement.appendChild(nouveauLien);
//appendChild rajoute un enfant à un élement déjà existant (par exemple ici on l'insère dans notre li de class element qu'on avait récupéré plus tôt);

//pour retirer un élément du document on utilise remove()
lien1.remove();