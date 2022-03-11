// le Rest parameter permet de passer  un nombre infini d'argument a une  fonction

function addition(...nombres) {
    let resultat = 0;

    nombres.forEach(nombres=>{
        resultat += nombres;

    });console.log(resultat)
}
addition(4,5);