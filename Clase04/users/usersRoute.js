const router = require("express").Router();
const { listAll, listOne, addOne, deleteOne, editOne } = require("./usersController")

//get all users
router.get("/", listAll)

//get user by id
router.get("/:id", listOne)

//post user
router.post("/", addOne)

//patch user
router.patch("/:id", editOne)

//delete user by id
router.delete("/:id", deleteOne)

module.exports = router