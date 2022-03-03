/*const voiture ={
    marque:'ford',
    annee: 2009,
    couleur: 'vert',
    rouler:function (){
        console.log(this.couleur);
    }

}
// hasOwnProprety permet de savoir si l'objet a une propriete
//console.log(voiture.hasOwnProperty('marque'))

// Objet.values permet de retourner un tableau avec tte les donnees. c'est une Methode
console.log(Object.values(voiture));

// key nous retourne les cles(propriete) qui sont dans le tableau
console.log(Object.keys(voiture))

 */

// Les classes

class Voiture{
    constructor(marque,annee,couleur,option) {
        this.marque =marque;
        this.annee = annee;
        this.couleur = couleur;
        this.option= option;

    }
    // methode
    rajoutOption(nomOption){
        this.option++;

        console.log(`Rajout de ${nomOption},nombre d'option :${this.option}`);
        return this;
    }
dateSortie()
{
    console.log(`date de sortie de la voiture ${this.annee}`);
}
}
const voiture1 = new Voiture('FORD',2021, 'vert',0);
const voiture2 = new Voiture('Bmw',2021, 'jaune');
const voiture3 = new Voiture('Peugeot',2021, 'orange');
const voiture4 = new Voiture('Peugeot',2021, 'orange');

//voiture1.dateSortie();

// Ici on peut faire du chaining , c'est a dire mettre plusieurs methodes a la suite mais il faut rajouter return this a la methode en question

// voiture1
//     .rajoutOption('5 portes')
// .rajoutOption('peinture')
//     .rajoutOption('peinure')
// let nvDate = Date()
// console.log(nvDate)

// Ici on herite avec extends ce qui prendra les memes propriete que la voiture
class Moto extends Voiture{

}

const moto1 = new Moto('Yamaha',2022,'noire','gps');
console.log(moto1)
