// SWICTCH CAse
/*
Il permet de swicth en fonction des cas .
pour terminer il faut mettre default afin de preciser que l'article n'est pas dispo
exemple
let couleur ="blanc";
switch (couleur)
{
case 'orange':
console.log("21.33)
break;
}

 */


let puissance= Number(prompt("Entre votre puissance en Kwh"));
let consommation = Number(prompt("Entrez votre consommation"));
let tarifs= prompt("tarifs")

/*if(puissance <6){
  alert(consommation*0.1558)
} if ( puissance<18 ){
    alert(consommation*0.1605)
}else {

    "Vous consommez trop d'electricite Get out"


}
 */
switch (tarifs){
    case 'puissance<3':
        alert(consommation*0.1558)
        console.log(tarifs)
        break;
}
// Les ternaires



let prix = 600;
// Ici est ce que le prix est superieur a 200 "?" alors on renvoie premieum sinon ":" basique
let choix =prix >200 ? "premium":"basique";
console.log(choix);