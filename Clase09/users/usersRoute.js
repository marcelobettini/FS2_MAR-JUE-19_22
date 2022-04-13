const router = require("express").Router();
const { listAll, listOne, deleteOne, editOne, register, login, forgot, reset, saveNewPass } = require("./usersController")
const { validatorCreateUser, validatorEditUser, validatorResetPassword } = require("../validators/users")
const uploadFile = require("../utils/handleStorage")

//get all users
router.get("/", listAll)

//get user by id
router.get("/:id", listOne)

//Register new user
router.post("/register", uploadFile.single("file"), validatorCreateUser, register)

//login
router.post("/login", login)

//Forgot password
router.post("/forgot-password", forgot)
    //Get the magic link
router.get("/reset/:token", reset)
router.post("/reset/:token", validatorResetPassword, saveNewPass)


//patch user
router.patch("/:id", uploadFile.single("file"), validatorEditUser, editOne)


//delete user by id
router.delete("/:id", deleteOne)

module.exports = router