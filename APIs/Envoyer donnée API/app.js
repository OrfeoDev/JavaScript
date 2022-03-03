const url = 'https://lesoublisdelinfo.com/api.php';


// Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet

// requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
// requete.responseType = 'json'; // Nous attendons du JSON
// requete.send();

// Methode post
requete.open('POST',url);
requete.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
requete.responseType='json';

requete.send('prenom=John')

requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status ===200){
           let reponse = requete.response;
            console.log(reponse);
        }
        else {
            alert('Un probleme est survenue , merci de bien vouloir reiterer votre requete')
        }
    }
}