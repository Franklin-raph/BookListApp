const bookForm = document.querySelector("#book-form")
let bookList = document.querySelector("#book-list")

bookForm.addEventListener("submit", addBook)

// search.addEventListener("keyup", filterTask)


function addBook(e){
    e.preventDefault()

    const title = bookForm.title.value.trim()
    const author = bookForm.author.value.trim()
    const isbn = bookForm.isbn.value.trim()

    if (title.length && author.length && isbn.length){
        const htmlTemplate = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td> <input type="checkbox"/> </td>
        <td class="deleteBtn">Delete</td>
        `
        bookForm.reset()

        bookList.innerHTML += htmlTemplate

    }

  
}
