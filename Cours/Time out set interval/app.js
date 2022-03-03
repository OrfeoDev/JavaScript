// Set time out permet d'excuter quelque chose au bout d'un certain temps

 const timeout= setTimeout(presentation,50000);

console.log("hello")
function presentation() {
   console.log("hello world")
   clearTimeout(timeout)
 }

/* On peut faire aussi un clear time out pour ne pas que quelque chose se produise .
dans ce cas , il faudra creer une variable comme ci-dessus
 */
// Set interval
/* c'est le meme principe que time out mais on peut le presenter differement comme ci-dessous

 */


let compteur =0;
setInterval(incr,1000);

function incr() {
    compteur++;
    console.log(compteur);

clearInterval(compteur)
}
/*setInterval(presentations,50);
function presentations( ) {
    console.log("yo yo yo")

}

 */

//PROMISE

const promise1 = new Promise((resolve,reject) => {
    console.log("helol");
    resolve('les donnees sont la')
})
/*
Promise permet de recuperer des donnes qui viennent des API.
on lance la procedure avec .then
 */
promise1.then((value) => {
    console.log(value);
}).catch(()=>{
    console.log("il y a un bug");
})
console.log(promise1);

//Async await
/* permet d'attendre tous les resultats de promesse plus facilement

 */
async function foo(){

    const p1 =new Promise((resolve,reject) =>{
        setTimeout(()=>resolve('Action realisee'),1000)
    });
    let resultat = await p1;
    console.log(resultat);

}
foo();
