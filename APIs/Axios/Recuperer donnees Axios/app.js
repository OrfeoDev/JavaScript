$('h1').text('Bonjour avec Query');


const url = 'https://blockchain.info/ticker';
axios.get(url).then(function (donnees){
   // console.log(donnees);
    document.querySelector('span').textContent=donnees.data.EUR.last;
})
.catch(function (erreur){
    alert('un probleme est survrnue')
});
setInterval('recupererPrix',2000);