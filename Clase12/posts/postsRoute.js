const router = require("express").Router()
const { createPost, searchTitleByText } = require("./postController")

router.post("/", createPost)
router.get("/:query", searchTitleByText)
module.exports = router