const { getAllUsers, getUserById, addNewUser, deleteUserById, editUserById } = require("./usersModel")

//get all users
const listAll = async(req, res, next) => {
    const dbResponse = await getAllUsers();
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(200).json(dbResponse)

}

//get user by id
const listOne = async(req, res, next) => {
    if (isNaN(Number(req.params.id)) || req.params.id < 1) {
        res.status(400).json({ message: "ID must be a positive integer" })
    } else {
        const dbResponse = await getUserById(+req.params.id);
        if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse)
        dbResponse.length ? res.status(200).json(dbResponse) : next()
    }
}

//add new user
const addOne = async(req, res) => {
    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    }
    const dbResponse = await addNewUser(user)
    dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(201).json(user)
}

//edit user by id
const editOne = async(req, res, next) => {
    if (isNaN(Number(req.params.id)) || req.params.id < 1) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    const dbResponse = await editUserById(+req.params.id, req.body)
    if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse)
    console.log(dbResponse)
    dbResponse.affectedRows ? res.status(200).json(req.body) : next()
}

//delete user by id
const deleteOne = async(req, res, next) => {
    if (isNaN(Number(req.params.id)) || req.params.id < 1) {
        return res.status(400).json({ message: "ID must be a positive integer" })
    }
    const dbResponse = await deleteUserById(+req.params.id)
    if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse);

    !dbResponse.length ? next() : res.status(204);
}

module.exports = { listAll, listOne, addOne, deleteOne, editOne }