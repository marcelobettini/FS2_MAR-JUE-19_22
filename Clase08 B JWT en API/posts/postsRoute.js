const router = require("express").Router();
const { addOne } = require("./postsController");
const isAuth = require("../middlewares/isAuth")
router.post("/", isAuth, addOne)
module.exports = router