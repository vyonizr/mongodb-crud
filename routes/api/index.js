const router = require("express").Router()
const booksRoute = require("./books")

router.use("/books", booksRoute)

module.exports = router