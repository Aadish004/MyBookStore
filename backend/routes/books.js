const express = require("express");
const { getAllBooks, getSingleBook, createBook } = require("../contoller/books");
const router = express.Router();

router.get('/getBooks',getAllBooks);

router.get('/:bookId',getSingleBook);

router.post('/getBooks',createBook)


module.exports = router;