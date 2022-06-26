class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    constructor(){
    };

    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`
        
        list.appendChild(row)
    };

    static clearFields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value ="";
        document.querySelector('#isbn').value = "";
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);
    }

    static deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    
}

document.querySelector('#book-form').addEventListener("submit", function(e){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title,author, isbn);

    if(book.title === '' || book.author === '' || book.isbn === ''){
        UI.showAlert("Pls fill in all fields", "error");
    }else{
        UI.addBookToList(book);
        UI.showAlert("Book Added Successfully", "success");

        UI.clearFields();
        
    }

    e.preventDefault();
})

document.querySelector('#book-list').addEventListener('click', function (e) {

    UI.deleteBook(e.target);
    UI.showAlert("Book was successfully removed", "success");

    e.preventDefault();
})