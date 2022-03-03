/* Les Objets
type permet de donner le type d'un element ou valeur
 */

/*let pays = {
    nom:'japon',
    pop:10000,
    classement: 3,
    PIB:378965,
    myArr: [1,2,3,4,5,6],
    myObjet:{
        propa:'abc'
    },
    myMethode: function (){
        console.log("Hello la famille");
    }
}
console.log(pays.myMethode());




/*const titre = document.querySelector("h1");
//Ici style nous permet de prendre tte les propriétés de CSS
titre.style.background = " orange";

console.log(typeof titre);*/



// Les Evenements
//const titre = document.querySelector("h1");
// Ici adEventListener est une fonction qui veut dire a l'ecoute d'un evenement
/*titre.addEventListener('click',function (){
    console.log("hello")
})


// Ici on met en place une fonction qu'on va pouvoir appeler en dehors
//titre.addEventListener('mouseenter',fonctionAnimation)
//function fonctionAnimation(){
  //  console.log("hello")
}



// EXO
const myTableau=[
    5213,true,{a:15}
];

const myObjets={
    propa:'huu',
    moi: 14,
};

const titre= document.querySelector('h1')
    titre.addEventListener('click',function (){
        titre.style.background="purple";
    })


function changeListe() {
// let ulListOne = document.getElementById('ulListOne');
    let ulListOne = document.querySelector('#ulListOne');
// let items = ulListOne.getElementsByTagName('li');
    let items = ulListOne.querySelectorAll('li');

// ulListOne.setAttribute('type', 'circle');
    ulListOne.style.listStyleType = 'upper-roman';
// en css list-style-type : 'upper-roman'

    for (let i = 0; i < items.length; i++) {

        // items[i].setAttribute('onClick', "alert('item : '+(i+1))");
        items[i].addEventListener('click', function () {
            alert('item : '+(i+1));
        })

        items[i].innerText = "Blabla " + (i + 1);
    }
}

 */

// EXO

/*let metreCarre = 100;

let choix =metreCarre >70 ? "grand Logement":"petit logement";
console.log(choix);

for (let i=100;i>=0;i--){
    console.log(i)
}

 */

const tab1 = [1,2,3,4];
for (const element of tab1){
    console.log(element)
}

const tesla = {
    couleur:"grise",
    portes: 5,
    prix:100000
}
//prop: veut dire propriete
for (const prop in tesla){
    console.log(`${prop}:{tesla[]prop}`);
}
try {
    //Ici je teste mon code
    console.log("debut du test") ;
    fontionquinesertarien();
    console.log("jamais logge") ;
}
// S'il ne fonctionne pas j'attrape lerreur et la fonction err m'affiche l'erreur en question
catch (err){
    console.log(err);
}
finally {
    // Avec finally , on envoie quelquechose dans tous les cas
    console.log("on envoie qq le try ou catc")
}
// EXO
const capitales ={

    autriche : "Vienne",
    argentine:"Beunos Aires",
    estonie:"Tallin",
    coteDivoire:"Abidjan"
}
for (const capitale in capitales) {
    console.log(`${capitales[capitale]}`);
}

// Alerte sion traouve la lettre Z
 /*function checktxt(text){
    for (const lettre of text)
    if (lettre === "z"){
        console.log("alerte lettre Z");
        break;
    }
 }
 // On peut faire aussi
  */
function checktxt(text){
    for (i=0;i<text.length;i++)
        if (text[i] === "z"){
            console.log("alerte lettre Z");
            break;
        }
}



checkTxt("azttyy")