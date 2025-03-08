const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  displayBooks();
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(bookId) {
  const index = myLibrary.findIndex((book) => book.id == bookId);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
};

function displayBooks() {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML= "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;
    card.innerHTML = `<h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
      <hr>
      `;

    // Add event listeners
    card.querySelector(".toggle-read").addEventListener("click", () => {
      const bookObj = myLibrary.find((b) => b.id === book.id);
      bookObj.toggleRead();
    });

    card.querySelector(".remove-book").addEventListener("click", () => {
      removeBook(book.id);
    });
    
    booksContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const newBookBtn = document.getElementById("newBookBtn");
  const dialog = document.getElementById("bookFormDialog");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const form = document.getElementById("bookForm");

  newBookBtn.addEventListener("click", () => dialog.showModal());
  closeFormBtn.addEventListener("click", () => dialog.close());

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    
    form.reset();
    addBookToLibrary(title, author, pages, read);
    dialog.close();
  });
});
