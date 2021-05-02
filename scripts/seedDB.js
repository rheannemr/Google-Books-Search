const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed =
{
    title: "Today Will Be Different",
    author: "Maria Semple",
    description: "Eleanor Flood, a middle-aged, married mother who finds herself in the midst of a midlife crisis; one morning, she decides she will change her monotonous life and tells herself, as the title indicates, that 'Today Will Be Different'.",
    image: "http://books.google.com/books/content?id=_J0sDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=_J0sDAAAQBAJ&dq=title:Today+Will+Be+Different&hl=&source=gbs_api",
    
};

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });