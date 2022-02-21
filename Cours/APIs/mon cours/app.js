//ANCIENNE METHODE DE REQUETE API


/*const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');
//Ici on fait l'appel a l'API
    const xhr = new XMLHttpRequest();
btn.addEventListener('click', () => {
    // console.log("hello world")


//
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//
    xhr.responseType = 'json';
// ICi on vient recuperer les infos
    xhr.onload = function () {
        //Ici on analyse et transforme avec Json.parse
        //console.log(JSON.parse(xhr.response));

        for (let i = 0; i < xhr.response.length; i++) {

            let newLi = document.createElement('li');

            let newTitreCarte = document.createElement('h2');

            let newBodyCarte = document.createElement('p');

           newTitreCarte.innerText = xhr.response[i].title;

          newBodyCarte.innerText = xhr.response[i].body;

        newLi.appendChild(newTitreCarte);

            newLi.appendChild(newBodyCarte);

            liste.appendChild(newLi);

        }
    }
// Ici on envoie
    xhr.send();
});



 */
// NOUVELLE METHODE => FECTH


const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');
//Ici on fait l'appel a l'API
const xhr = new XMLHttpRequest();
btn.addEventListener('click', () => {
    // console.log("hello world")


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {

                let newLi = document.createElement('li');

                let newTitreCarte = document.createElement('h2');

                let newBodyCarte = document.createElement('p');

                newTitreCarte.innerText = data[i].title;

                newBodyCarte.innerText = data[i].body;

                newLi.appendChild(newTitreCarte);

                newLi.appendChild(newBodyCarte);

                liste.appendChild(newLi);

            }

        })
})


