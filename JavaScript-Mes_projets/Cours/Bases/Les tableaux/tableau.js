const tableau1 =['a,','j','k','e','f'];
const tableau2= ['m','l','p'];
// ici je concatene les deux tableaux
const  tableau3 =tableau1.concat(tableau2);
// Avec includes , je peux voir s'il ya ce que je recherche dans mon tableau
console.log(tableau3.includes('z'));

// Pour voir la totalite d'un tableau multidimensionnel ,on peut se servir de .flat
const  multitab = [1,2,3,[5,6,[9,10]]];
console.log(multitab.flat(3));

const tabNumb = [ 1,2,3];
tabNumb.forEach(function (element){
    console.log(element);
})

// La fpnction MAP permet de retour les elements dans un tableau
const  resultMap = tabNumb.map(x => x * 2)

console.log(resultMap)

// Reduce
// va compter dans compter ce qu'il ya dans le tableau ex: [1+2=3+3=6 +4]
const numTab4 = [1,2,3,4];
// Ici dans les arguments de la fonction reduce , on lui passe a et b et meme un 3 eme argument qui va commence
// a 10 dans l'exemple donc si on accumule on arrive a 20
const reduced = numTab4.reduce(function (a,b){
    return a+b;
},10)
console.log(reduced)