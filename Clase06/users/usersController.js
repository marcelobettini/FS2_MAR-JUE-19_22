const { getAllUsers, getUserById, addNewUser, deleteUserById, editUserById, loginUser } = require("./usersModel")
const notNumber = require("../utils/notNumber")
const { encrypt, compare } = require("../utils/handlePassword")

//get all users
const listAll = async(req, res, next) => {
    const dbResponse = await getAllUsers();
    if (dbResponse instanceof Error) return next(dbResponse)
    dbResponse.length ? res.status(200).json(dbResponse) : next()

}

//get user by id
const listOne = async(req, res, next) => {
    if (notNumber(req.params.id, next)) return
    const dbResponse = await getUserById(+req.params.id);
    if (dbResponse instanceof Error) return next(dbResponse)
    dbResponse.length ? res.status(200).json(dbResponse) : next()
}

//register
const register = async(req, res, next) => {
        const hashedPassword = await encrypt(req.body.password)
        const dbResponse = await addNewUser({...req.body, password: hashedPassword })
        dbResponse instanceof Error ? next(dbResponse) : res.sendStatus(201) //esto es un atajo de status + send, con el mensaje por defecto en el send(...) => es el mensaje inherente al código de estado
    }
    //login
const login = async(req, res, next) => {
    const dbResponse = await loginUser(req.body.email);
    if (!dbResponse.length) return next();
    if (await compare(req.body.password, dbResponse[0].password)) {
        res.sendStatus(200)
    } else {
        let error = new Error("Unauthorized")
        error.status = 401
        next(error)
    }
}

//edit user by id
const editOne = async(req, res, next) => {
    if (notNumber(req.params.id, next)) return
    const dbResponse = await editUserById(+req.params.id, req.body)
    if (dbResponse instanceof Error) return next(dbResponse)
    dbResponse.affectedRows ? res.status(200).json(req.body) : next()
}

//delete user by id
const deleteOne = async(req, res, next) => {
    if (notNumber(req.params.id, next)) return
    const dbResponse = await deleteUserById(+req.params.id)
    if (dbResponse instanceof Error) return next(dbResponse);
    !dbResponse.affectedRows ? next() : res.status(204).end();
}


module.exports = { listAll, listOne, register, deleteOne, editOne, login }