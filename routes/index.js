const router = require("express").Router()
const APIRoute = require("./api")

router.use("/api", APIRoute)
router.get("/", (req, res) => {
  res.redirect("/api/books")
})

module.exports = router