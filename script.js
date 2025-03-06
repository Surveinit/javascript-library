const myLibrary = [];

function Book(title, author, pages) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

hollow = addBookToLibrary("hollow", "sagar", 123);
behind = addBookToLibrary("behind", "sahil", 823);

// console.log(myLibrary);

function displayBooks() {
  const booksContainer = document.getElementById("books");

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <hr>
      `;

    booksContainer.appendChild(card);
    console.log(book);
  });
}

document.addEventListener("DOMContentLoaded", displayBooks)
