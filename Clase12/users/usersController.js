const User = require("./usersModel")

const createUser = (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save((error) => {
        if (error) {
            console.log(error)
        } else {
            res.sendStatus(200)
        }
    })
}

const getAllUsers = (req, res) => {
    User.find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => console.log(error))
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }

}
const updateUser = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }) //francis
        res.send(result)
    } catch (error) {
        console.log(error)
    }

}
const deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.sendStatus(202)
    } catch (error) {
        console.log(erro)
    }

}
const loginUser = async (req, res) => {

}

module.exports = { createUser, deleteUser, loginUser, getAllUsers, getUserById, updateUser }