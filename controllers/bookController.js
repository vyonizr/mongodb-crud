const Book = require("../models/book")

class BookController {
  static getAllBooks(req, res) {
    Book.findAll()
    .then(books => {
      res.status(200).json(books)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createABook(req, res) {
    let objBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: +req.body.stock
    }
    Book.create(objBook)
    .then(r => {
      res.status(201).json({
        message: "book has been successfully created!",
        book: objBook,
        r
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteABook(req, res) {
    Book.delete(req.body.isbn)
    .then(r => {
      res.status(200).json(r)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePutABook(req, res) {
    Book.updatePut(req.body.isbn, req.body.field, req.body.value)
    .then(book => {
      res.status(200).json(book)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePatchABook(req, res) {
    Book.updatePut(req.body.isbn, req.body.field, req.body.value)
    .then(book => {
      res.status(200).json(book)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = BookController