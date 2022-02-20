// const numTab = [1, 2, 3, 56, 8, 89,];
// for (let i = 0; i < numTab.length; i++){
//     console.log(numTab[i]);
// }

 const  str = 'Lorem ipsum dolor sit amet'
// permet de recuperer un caractere
console.log(str.charAt(4));
// Est ce que mon texte contient IPSUM
console.log(str.includes('ipsum'));
// son index de depart
console.log(str.indexOf('dolor'))
// c'est pour l'unicode par exemple pour savoir ce qu'a taper l'utilsateur
console.log(str.charCodeAt(0));
// permet de couper une chaine de caractere
console.log(str.slice(3));
// split va separer dans un tableau
const strToArray = str.split(' ');
console.log(strToArray)
console.log(strToArray.join('    '))


//Ici
const voiture= {
    couleur : 'noire',
    marque: 'Peugeot',
    annee: 2019,
    myFunction : function (){
        console.log(this.annee)
    }

}
// Ici on met en place le click sur le bouton annee
const btn =document.querySelector('button');
// j'ai binde pour lie la voiyure
btn.addEventListener('click', voiture.myFunction.bind(voiture));