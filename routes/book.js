const router = require("express").Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
    try {
        console.log("We are getting all books");
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(501);
        console.log("Error in the books get route: ", err);
        res.send("Unexpected server error when getting books");
    }
});

router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201);
        res.send(book._id);
    } catch (err) {
        res.status(501);
        console.log("Error in the books post route: ", err);
        res.send("Unexpected server error when posting a book");
    }
});

module.exports = router;