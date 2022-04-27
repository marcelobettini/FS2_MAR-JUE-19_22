const router = require("express").Router()
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } = require("./usersController")

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.post("/login", loginUser)

module.exports = router