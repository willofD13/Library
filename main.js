const myLibrary = [];

class Book {

    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }

    addBookToLibrary() {
        myLibrary.push(this)
    };

    toggleReadStatus() {
        this.read === 'yes' ? this.read = 'no': this.read ='yes';
    };

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
            const index = myLibrary.indexOf(removeButton.dataset.index);
            myLibrary.splice(index,1);
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
    userBook.addBookToLibrary();
});

showBooks.addEventListener('click', () => {
    displayBooks();
});
