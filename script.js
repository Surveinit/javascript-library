const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// hollow = addBookToLibrary("hollow", "sagar", 123);
// behind = addBookToLibrary("behind", "sahil", 823);

function displayBooks() {
  const booksContainer = document.getElementById("books");
  booksContainer.innerText = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <hr>
      `;

    booksContainer.appendChild(card);
    console.log(book);
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
    const read = document.getElementById("read").value;
    
    form.reset();
    addBookToLibrary(title, author, pages, read);
    dialog.close();
  });
});
