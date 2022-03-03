document.addEventListener("DOMContentLoaded", () => {


    //handle form changes
    const filterContainer = document.getElementById("filters");
    const nationality = document.getElementById("nat");
    const maleBox = document.getElementById("male");
    const femaleBox = document.getElementById("female");

    filterContainer.addEventListener("change", () => {
        let parameter = "";

        if (maleBox.checked && !femaleBox.checked) {
            parameter += "&gender=male";
        }

        if (!maleBox.checked && femaleBox.checked) {
            parameter += "&gender=female";
        }
        if (
            (maleBox.checked && femaleBox.checked) ||
            (!maleBox.checked && !femaleBox.checked)
        ) {
            parameter = "";
        }
        parameter += "&nat=" + nationality.value;

        getUsers(parameter).then((data) => {
            //handle the data here
            displayUsers(data.results);

            //gestion du champ de recherche
            const userSearch = document.getElementById("search");
            // a chaque ecriture dans le champ
            userSearch.addEventListener("keyup", () => {
                //array.filter permet d'effectuer un tri sur les données d'un tableau, basé sur un prédicat sous la forme d'une fonction
                //ici on demande de ne garder, pour chaque user, que ceux dont le nom complet contient notre valeur de recherche
                let searchResults = data.results.filter((user) =>
                    `${user.name.first} ${user.name.last}`
                        .toLowerCase()
                        .includes(userSearch.value.toLowerCase())
                );

                displayUsers(searchResults);
            });
        });
    });
    //request to the api
    getUsers("").then((data) => {

        //si les données ne viennent pas du cache
        if (!data.cached){
            //on les stocke dans le localstorage
            localStorage.setItem("users", JSON.stringify(data.results));
            //permet de juger de la fraicheur des informations
            localStorage.setItem("last-fetch", Date.now());
        }
        //handle the data here
        displayUsers(data.results);

        //gestion du champ de recherche
        const userSearch = document.getElementById("search");
        // a chaque ecriture dans le champ
        userSearch.addEventListener("keyup", () => {
            //array.filter permet d'effectuer un tri sur les données d'un tableau, basé sur un prédicat sous la forme d'une fonction
            //ici on demande de ne garder, pour chaque user, que ceux dont le nom complet contient notre valeur de recherche
            let searchResults = data.results.filter((user) =>
                `${user.name.first} ${user.name.last}`
                    .toLowerCase()
                    .includes(userSearch.value.toLowerCase())
            );

            displayUsers(searchResults);
        });
    });
});

function displayUsers(users) {
    const userContainer = document.getElementById("users");
    userContainer.innerHTML = "";
    users.forEach((user) => {
        const userDiv = createDiv("user-card");
        const userHeader = createDiv("user-card-header")
        const userBody = createDiv("user-card-body");

        const userName = document.createElement("h2");
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userAddress = document.createElement("h5");
        userAddress.textContent = `${user.location.city}, ${user.location.country}`;

        const userInfo = createDiv("user-card-info");
        const userAge = document.createElement("h4");
        userAge.textContent = `${user.dob.age} ans`;
        const userGender = document.createElement("span");
        userGender.textContent = user.gender == "male" ? "♂" : "♀";

        userInfo.appendChild(userAge);
        userInfo.appendChild(userGender);

        const userImage = document.createElement("img");
        userImage.classList.add("user-card-image")
        userImage.src = user.picture.large;

        
        
        userHeader.appendChild(userImage);
        userHeader.appendChild(userName);
        userDiv.appendChild(userHeader);
        userBody.appendChild(userInfo);
        userBody.appendChild(userAddress);
        userDiv.appendChild(userBody);
        userContainer.appendChild(userDiv);

    });
}

function createDiv(classList = []){
    const div = document.createElement("div");
    if (Array.isArray(classList)) {
        div.classList.add(...classList);
    } else {
        div.className = classList;
    }
    return div;
}


function getUsers(parameters) {
    const lastFetch = localStorage.getItem("last-fetch");
    //si on a rien dans le localstorage ou que le dernier stockage est obsolète 
    if (!lastFetch || (lastFetch && Date.now() - lastFetch > 120000)) {
        return fetch("https://randomuser.me/api/?results=20" + parameters).then(
            (response) => {
                return response.json();
            }
        )
    } else {
        //si on doit récupérer depuis le cache, il faut tout de même renvoyer une promesse car c'est ce que notre script attend
        return new Promise((resolve, reject) => {
            //si les données sont présentes
            if (localStorage.getItem("users")){
                //on reproduit le format de données attendu 
                const data = { results : JSON.parse(localStorage.getItem("users")), cached: true}
                //on renvoie nos données à l'aide de resolve (qui permet à la promesse de se réaliser)
                resolve(data)
            } else {
                //sinon on reject (on invalide la promesse)
                reject("Cache invalide")
            }
        });
    }
}