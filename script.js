const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "Mark Tolkien",
    pages: 500,
    read: true,
  },
  {
    title: "Aquarium",
    author: "Viktor Suvorov",
    pages: 258,
    read: true,
  },
];

// var p = document.createElement("p");
// document.body.appendChild(p);

const wrapper = document.querySelector(".wrapper");
for (let i = 0; i < myLibrary.length; i++) {
  const card = document.createElement("div");
  card.className = "card";
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  title.textContent = myLibrary[i].title;
  author.textContent = myLibrary[i].author;
  pages.textContent = myLibrary[i].pages;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  wrapper.appendChild(card);
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
