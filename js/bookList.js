const form = document.querySelector("#book-form")
const book_list = document.querySelector("#book-list")
const deleteBtn = document.querySelector(".deleteBtn")
const search = document.querySelector("#search")

const LocalStorageArray = []

form.addEventListener("submit", addBook)

function generateTemplate(title,author,isbn){
    const htmlTemplate = `
        <td class="bookTitle">${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td> <input type="checkbox" class="checked"/> </td>
        <td class="deleteBtn"><i class="ri-delete-bin-7-line"></i></td>
    `
    book_list.innerHTML += `<tr class="tableRows">${htmlTemplate}</tr>`
}

function addBook(e){
    e.preventDefault()

    const title = form.title.value.trim()
    const author = form.author.value.trim()
    const isbn = form.isbn.value.trim()

    if(title.length && author.length && isbn.length){
        
        generateTemplate(title,author,isbn)
        // val = {title,author,isbn,checked:false}
        // LocalStorageArray.push(val)
        // console.log(LocalStorageArray)

        form.reset()
    }
}

function filterTask(){
    const searchTerm = search.value.trim().toLowerCase()

    Array.from(book_list.children).filter((item) => {
        return !item.textContent.toLowerCase().includes(searchTerm)
    }).forEach((item) => {
        item.classList.add('hide')
    })

    Array.from(book_list.children).filter((item) => {
        return item.textContent.toLowerCase().includes(searchTerm)
    }).forEach((item) => {
        item.classList.remove('hide')
    })
}

book_list.addEventListener('click', (e) => {
    if(e.target.classList.contains('deleteBtn')){
        e.target.parentElement.remove()
    }

    if(e.target.checked){
        e.target.parentElement.parentElement.classList.add('completed')
    }

    if(!e.target.checked){
        e.target.parentElement.parentElement.classList.remove('completed')
    }
})



















// Trigger function every time search text is changed
// search.onkeyup = (event) => {
//     filterBySearch(event.target.value);
//   };
  
//   // String to render HTML list item
//   const itemHTML = (title, author, isbn) => `
//   <td>${title}</td>
//   <td>${author}</td>
//   <td>${isbn}</td>
//   <td> <input type="checkbox" class="checked"/> </td>
//   <td class="deleteBtn"><i class="ri-delete-bin-7-line"></i></td>
//   `;
  
//   // Function to render filtered list
//   const filterBySearch = (query = "") => {
//     var renderHTML = ``;
//     // Generate HTML for filtered List
//     LocalStorageArray.forEach((item) => {
//       if (item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
//         renderHTML += itemHTML(item);
//       }
//     });
//     // Display updated HTML on screen
//     itemContainer.innerHTML = renderHTML;
//   };
  
//   // Load the list of items
//   filterBySearch();

// function saveToLS(){
//     localStorage.setItem("myBooks", JSON.stringify(LocalStorageArray))
// }

// // function filterTask(e){
// //     const text = e.target.value.tolowerCase()
// //     Array.from(book_list.children).forEach((value)=>{
// //         const newVal = value.firstChild.textContent
// //         if(newVal.toLowerCase().indexOf(text) != -1){
// //             text.style.display = 'block'
// //         }else[
// //             text.style.display = 'none'
// //         ]
// //     })
// // }