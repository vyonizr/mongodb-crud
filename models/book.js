// PURE CRUD
const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017/"
const dbName = "mongodb-crud"

let client = null

class Book {
  static findAll() {
    return new Promise((resolve, reject) => {
      client = new MongoClient(url, { useNewUrlParser: true })
      client.connect((err, client) => {
        if (err) {
          reject(err)
          client.close()
        }
        else {
          const db = client.db(dbName)
          let Book = db.collection("books")
          Book.find({}).toArray((err, books) => {
            if (err) {
              reject(err)
              client.close()
            }
            else {
              resolve(books)
              client.close()
            }
          })
        }
      })
    })
  }

  static create(objBook) {
    return new Promise((resolve, reject) => {
      client = new MongoClient(url, { useNewUrlParser: true })
      client.connect((err, client) => {
        if (err) {
          reject(err)
          client.close()
        }
        else {
          const db = client.db(dbName)
          let Book = db.collection("books")
          Book.insertOne(objBook, (err, r) => {
            if (err) {
              reject(err)
              client.close()
            }
            else {
              resolve(r)
              client.close()
            }
          })
        }
      })
    })
  }

  static delete(isbn) {
    return new Promise((resolve, reject) => {
      client = new MongoClient(url, { useNewUrlParser: true })
      client.connect((err, client) => {
        if (err) {
          reject(err)
          client.close()
        }
        else {
          const db = client.db(dbName)
          let Book = db.collection("books")
          Book.deleteOne({ isbn }, (err, r) => {
            if (err) {
              reject(err)
              client.close()
            }
            else {
              resolve(r)
              client.close()
            }
          })
        }
      })
    })
  }

  static updatePut(isbn, updField, updVal) {
    return new Promise((resolve, reject) => {
      client = new MongoClient(url, { useNewUrlParser: true })
      client.connect((err, client) => {
        if (err) {
          reject(err)
          client.close()
        }
        else {
          const db = client.db(dbName)
          let Book = db.collection("books")
          Book.findOneAndUpdate({
            isbn
          }, {
            $set: {
              [updField]: updVal
            }
          }, (err, book) => {
            if (err) {
              reject(err)
              client.close()
            }
            else {
              resolve(book)
              client.close()
            }
          })
        }
      })
    })
  }

  static updatePatch(isbn, updField, updVal) {
    return new Promise((resolve, reject) => {
      client = new MongoClient(url, { useNewUrlParser: true })
      client.connect((err, client) => {
        if (err) {
          reject(err)
          client.close()
        }
        else {
          const db = client.db(dbName)
          let Book = db.collection("books")
          Book.findOneAndUpdate({
            isbn
          }, {
            $set: {
              [updField]: updVal
            }
          }, (err, book) => {
            if (err) {
              reject(err)
              client.close()
            }
            else {
              resolve(book)
              client.close()
            }
          })
        }
      })
    })
  }
}

module.exports = Book