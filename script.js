const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "Tolkien",
    pages: 500,
    read: true,
  },
  {
    title: "Aquarium",
    author: "Viktor",
    pages: 258,
    read: true,
  },
];

myLibrary.forEach(function (fruit) {
  console.log(fruit);
});

const card = document.createElement("div");
const title = document.createElement("div");
const author = document.createElement("div");
const pages = document.createElement("div");

title.textContent = "hey";

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
