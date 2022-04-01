const router = require("express").Router();
const { listAll, listOne, register, deleteOne, editOne, login } = require("./usersController")
const { validatorCreateUser } = require("../validators/users")
const uploadFile = require("../utils/handleStorage")

//get all users
router.get("/", listAll)

//get user by id
router.get("/:id", listOne)

//Register new user
router.post("/register", uploadFile.single("file"), register)

//login
router.post("/login", login)


//patch user
router.patch("/:id", editOne)

//delete user by id
router.delete("/:id", deleteOne)

module.exports = router