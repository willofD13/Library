const myLibrary = [];

const firstBook = new Book('1984','George Orwell', 345);
const secondBook = new Book('Persepolis','Marjane Satrappi', 200);
const thirdBook = new Book('Crime & Punishment','Fyodor Dostoevsky', 256);

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
};

function addBookToLibrary() {
    myLibrary.push(firstBook)
    myLibrary.push(secondBook)
    myLibrary.push(thirdBook)
};

function displayBooks() {
    for( i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = myLibrary[i].title;
        document.body.appendChild(div);  
    }
};

addBookToLibrary();
displayBooks();