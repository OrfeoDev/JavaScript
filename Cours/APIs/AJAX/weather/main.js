const apikey = "a4abf199236c5bdd5155eeb8ce48a37a";
// const lat = "43.61092";
// const lon = "3.87723";

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchGo = document.getElementById("go");
    const searchResults = document.getElementById("search-results");

    searchGo.addEventListener("click", () => {
        getGeoData(searchInput.value).then((geoData) => {
            searchResults.innerHTML = "";
            geoData.forEach((place) => {
                const placeLi = document.createElement("li");
                placeLi.textContent = place.display_name;
                searchResults.appendChild(placeLi);
                placeLi.addEventListener("click", () => {
                    getForecast(place).then((weatherData) => {
                        //on affiche les daily forecasts
                        displayForecast(weatherData.daily, place);
                        //on affiche le premier daily forecast dans le bandeau principal
                        displaySelected(weatherData.daily[0]);

                        const dailyContainer = document.getElementById(
                            "dailies"
                        );
                        //children contient une HTMLCollection qui ne possède pas forEach
                        //on peut la convertir en un tableau rapidement en utilisant la syntaxe de décomposition : ...
                        //et en rangeant le résultat dans un tableau []
                        //en utilisant forEach on a ainsi accès facilement à l'index de chaque élément
                        // Array.from(dailyContainer.children); aurait pu également convertir notre HTMLCollection en tableau
                        [...dailyContainer.children].forEach(
                            (dailyDiv, index) => {
                                dailyDiv.addEventListener("click", (event) => {
                                    dailyContainer
                                        .querySelector(".selected")
                                        .classList.remove("selected");
                                    //event.currentTarget permet de récuperer la cible de l'eventListener au lieu de la cible du clic (qui aurait pu être un enfant par exemple)
                                    event.currentTarget.classList.add(
                                        "selected"
                                    );
                                    displaySelected(weatherData.daily[index]);
                                });
                            }
                        );
                    });
                });
            });
        });
    });
});

function getGeoData(searchTerm) {
    return fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${searchTerm}`
    ).then((response) => {
        return response.json();
    });
}

function getForecast(place) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${place.lat}&lon=${place.lon}&appid=${apikey}&exclude=minutely&units=metric&lang=fr`
    ).then((response) => {
        return response.json();
    });
}

function displayForecast(dailies, place) {
    //on change le nom d'affichage sur la météo
    document
        .getElementById("daily-view")
        .querySelector(".location").textContent = place.display_name;

    const dailyContainer = document.getElementById("dailies");
    const dailyDivs = dailyContainer.children;
    dailies.forEach((daily, index) => {
        //affichage des températures
        dailyDivs[index].querySelector(".daily-max").textContent = formatTemp(
            daily.temp.max
        );
        dailyDivs[index].querySelector(".daily-min").textContent = formatTemp(
            daily.temp.min
        );

        //affichage de l'icone
        dailyDivs[index].querySelector(
            ".daily-icon > img"
        ).src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;

        dailyDivs[index].querySelector(".day-label").textContent = getShortDay(
            daily.dt
        );
    });
}

function displaySelected(daily) {
    console.log(daily);
    const dailyView = document.getElementById("daily-view");
    dailyView.querySelector(".report-temp").textContent = formatTemp(
        daily.temp.day
    );

    dailyView.querySelector(
        ".humidity"
    ).textContent = `Humidité ${daily.humidity}%`;
    //on utilise une ternaire car rain peut être undefined s'il fait beau et qu'aucune précipitation n'est possible
    dailyView.querySelector(".rain").textContent = `Précipitations ${
        daily.rain ? daily.rain : 0
    }mm`;
    dailyView.querySelector(".wind").textContent = `Vent ${
        daily.wind_speed ? Math.round(daily.wind_speed) : 0
    }km/h`;
    dailyView.querySelector(".condition").textContent =
        daily.weather[0].description;
    dailyView.querySelector(".day").textContent = getShortDay(daily.dt);
}

function formatTemp(temp) {
    return `${Math.floor(temp)}°C`;
}

function getShortDay(timestamp) {
    const dailyDate = new Date(timestamp * 1000); //multiplication par 1000 pour accomoder les timestamps js en millisecondes
    //récupération du jour de la semaine en toutes lettres
    const dailyDay = dailyDate.toLocaleDateString("fr-FR", {
        weekday: "short",
    });
    //affichage du jour
    return dailyDay;
}
