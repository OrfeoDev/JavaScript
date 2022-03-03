class Animal {
    constructor(nombreDePattes,poids) {
        this.nombreDePattes=nombreDePattes;
        this.poids = poids;

    }
    sePresenter(){
        console.log("je suis un animal qui possede " + this.nombreDePattes + " et mon " + this.poids+ "est de 256 kg"+".");
    }
}

class Oiseau extends Animal{
    constructor(longueurAiles,nombreDePattes,poids) {
        super(nombreDePattes, poids)
        this.longueurAiles = longueurAiles;

    }

            voler(){}





}
let perroquet = new Oiseau("grandes",2,789);
perroquet.sePresenter();


