const tableau1 =['a,','j','k','e','f'];
const tableau2= ['m','l','p'];
// ici je concatene les deux tableaux
const  tableau3 =tableau1.concat(tableau2);
// Avec includes , je peux voir s'il ya ce que je recherche dans mon tableau
console.log(tableau3.includes('z'));

// Pour voir la totalite d'un tableau multidimensionnel ,on peut se servir de .flat
const  multitab = [1,2,3,[5,6,[9,10]]];
console.log(multitab.flat(3))