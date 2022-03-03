const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');


class Book {
    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBook(book) {
        const row = document.createElement('tr');

        row.innerHTML = `
       
       <td>${book.titre}</td>
       <td>${book.auteur}</td>
       <td>${book.annee}</td>
       <td> <button class="delete">x</button></td> `;
        bookList.appendChild(row);

    }
    clearFields(){
        document.getElementById('titre').value="";
        document.getElementById('auteur').value="";
        document.getElementById('annee').value="";
    }
}

class Interface{
    deleteBook(target){
if (target.className === "delete"){
    target.parentElement.parentElement.remove();

}
    }
}

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;

    const book = new Book(titre, auteur, annee);

    book.addBook(book);
    book.clearFields();

})

bookList.addEventListener('click',(e)=>{
    const ui = new Interface();

    ui.deleteBook(e.target);
})
