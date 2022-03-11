document.addEventListener('DOMContentLoaded', () => {
    //récupération de nos champs de formulaire
    const maleCheck = document.getElementById('male');
    const femaleCheck = document.getElementById('female');
    const nat = document.getElementById('nat')

    //on surveille chaque changement de formulaire
    document.addEventListener('change', () => {
        //on envoie des requêtes en fonction de si on veut des hommes/femmes
        if (maleCheck.checked && !femaleCheck.checked){
            //nat.value représente la nationalité demandée
            getUsers("&gender=male&nat="+nat.value);
        }
        if (femaleCheck.checked && !maleCheck.checked){
            getUsers("&gender=female&nat="+nat.value);
        }
        if ((femaleCheck.checked && maleCheck.checked) || (!femaleCheck.checked && !maleCheck.checked)){
            getUsers("&nat="+nat.value);
        }

        /* équivalent (sale) :
        if(maleCheck.checked != femaleCheck.checked){
            //condition ternaire : condition ? vrai : faux
            getUsers(maleCheck.checked ? "&gender=male"  : "&gender=female")
        } else {
            getUsers();
        }
        */
    });
    getUsers();
})

//notre fonction getUsers se charge d'envoyer la requête avec des paramètres GET qu'on peut rajouter sous forme de string
function getUsers(parameters = ""){
    const request = new XMLHttpRequest();
    let requestURL = 'https://randomuser.me/api/?results=100';
    requestURL += parameters;
    request.open('GET', requestURL);
    request.addEventListener('load', () => {
        let response = JSON.parse(request.response);
        displayUsers(response);
    })
    request.send();
}

//displayUsers se charge uniquement de l'affichage
function displayUsers(data){
    const userContainer = document.getElementById('users');
    userContainer.innerHTML = "";
    const userFragment = document.createDocumentFragment()
    data.results.forEach(user => {
        const userDiv = document.createElement('div');
        const userName = document.createElement('span');
        const userPicture = document.createElement('img');

        userName.textContent =  `${user.name.first} ${user.name.last}`;
        userPicture.src = user.picture.thumbnail;
        userPicture.alt = `${user.name.first} ${user.name.last}'s picture`;

        userDiv.appendChild(userName);
        userDiv.appendChild(userPicture);
        userFragment.appendChild(userDiv);
    })
    userContainer.appendChild(userFragment);
}