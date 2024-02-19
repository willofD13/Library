const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.toggleReadStatus = function() {
    this.read === 'yes' ? this.read = 'no': this.read ='yes';
};

function addBookToLibrary(book) {
    myLibrary.push(book)
};

function displayBooks() {
    for( i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        Object.entries(book).forEach(([key, value]) => {
            const div = document.createElement('div');
            div.innerHTML = (`${key}: ${value}`);
            document.body.appendChild(div)
        });

        const br = document.createElement('br');
        const removeButton = document.createElement('button');
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Change read status';
        toggleButton.addEventListener('click', () => {
            book.toggleReadStatus();
        });
        removeButton.dataset.index = i;
        removeButton.innerText = 'Remove Book';
        removeButton.addEventListener('click', ()=> {
            delete myLibrary[removeButton.dataset.index];
        });
        document.body.appendChild(br);
        document.body.appendChild(removeButton);
        document.body.appendChild(toggleButton);

    }
};

const showBtn = document.getElementById("show-dialog");
const showBooks = document.getElementById("show-books");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");
const form = document.querySelector('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  dialog.close();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userBook = new Book( title.value, author.value, pages.value, read.value);
    console.log(userBook);
    addBookToLibrary(userBook);
});

showBooks.addEventListener('click', () => {
    displayBooks();
});
