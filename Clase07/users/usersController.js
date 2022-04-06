const { getAllUsers, getUserById, addNewUser, deleteUserById, editUserById, loginUser } = require("./usersModel")
const notNumber = require("../utils/notNumber")
const { encrypt, compare } = require("../utils/handlePassword")
const { matchedData } = require("express-validator")
const public_url = process.env.public_url

//get all users
const listAll = async(req, res, next) => {
    const dbResponse = await getAllUsers();
    if (dbResponse instanceof Error) return next(dbResponse)

    /* filtrar dbResponse (un arreglo con objetos enviado por la consulta a la base de datos) para obtener un nuevo
    arreglo que contenga todos los pares clave/valor a excepción de la contraseña. Entregar el nuevo objeto de tipo array
    en la respuesta al front*/
    const responseUser = dbResponse.map((user) => {
            const filteredUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image
            }
            return filteredUser
        })
        // const responseUser = dbResponse.map(({ name, email, image }) => ({ name, email, image }))// lo mismo, más corto
    dbResponse.length ? res.status(200).json(responseUser) : next()
}

//get user by id
const listOne = async(req, res, next) => {
    if (notNumber(req.params.id, next)) return
    const dbResponse = await getUserById(+req.params.id);
    if (dbResponse instanceof Error) return next(dbResponse)
    if (!dbResponse.length) return next()
    const { id, name, email, image } = dbResponse[0]
    const responseUser = {
        id,
        name,
        email,
        image
    }
    res.status(200).json(responseUser)
}


//register
const register = async(req, res, next) => {

    const cleanBody = matchedData(req)
    const image = `${public_url}/${req.file.filename}`
    const password = await encrypt(req.body.password)
    const dbResponse = await addNewUser({...cleanBody, password, image })
    dbResponse instanceof Error ? next(dbResponse) : res.sendStatus(201)
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
    const image = `${public_url}/${req.file.filename}`
    const dbResponse = await editUserById(+req.params.id, {...req.body, image })
    if (dbResponse instanceof Error) return next(dbResponse)
    dbResponse.affectedRows ? res.status(200).json({ message: "User modified!" }) : next()
}

//delete user by id
const deleteOne = async(req, res, next) => {
    if (notNumber(req.params.id, next)) return
    const dbResponse = await deleteUserById(+req.params.id)
    if (dbResponse instanceof Error) return next(dbResponse);
    !dbResponse.affectedRows ? next() : res.status(204).end();
}


module.exports = { listAll, listOne, register, deleteOne, editOne, login }