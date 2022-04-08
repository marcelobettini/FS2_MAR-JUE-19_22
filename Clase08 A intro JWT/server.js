import dotenv from "dotenv"
dotenv.config()

import express from "express";
import jwt from "jsonwebtoken";
import morgan from "morgan";
const port = 3030;
const server = express();
server.use(morgan('tiny'));
/*base de datos de usuarios... ponele */
const user = {
    id: 1,
    name: "Marcelo",
    email: "marcelobettini@mail.com"
}

server.get("/api", (req, res) => {
    res.send(`<h1> JSON WEB TOKEN</h1>
    <pre>Intro to Json Web Token, user authorization and claims</pre>`)
})


server.post("/api/login", (req, res) => {
    //cuando el usuario se loguea o se registra (cuando se autentica), creamos el token para identificarlo utilizando la clave secreta y los datos del propio usuarios. Y ese token se lo devolveremos en la respuesta.
    jwt.sign({ bearer: user }, process.env.jwt_secret, { expiresIn: '30s' }, (err, token) => {
        err ? res.sendStatus(500) : res.status(200).json({ token })
    })
})

const verifyToken = (req, res, next) => {
        const bearerHeader = req.headers['authorization']
        if (typeof bearerHeader !== 'undefined') {
            //El token que contiene req.headers.authorization está en formato "Bearer token"
            req.token = bearerHeader.split(" ").pop()
            next() //pasamos al controller
        } else { //si bearerHeader es undefined significa que no tengo un token
            res.sendStatus(403)
        }
    }
    //solamente podrán crear posts quienes tengan un token válido (y no vencido, obvio)
server.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.jwt_secret, (error, authData) => {
        if (error) {
            res.sendStatus(401)
        } else {
            res.json({ message: "Post created!", authData })
        }
    })
})


/* Creamos el middleware para verificar si la request trae un token antes de dejarlo pasar al controlador de la ruta /api/posts
Bearer Schema: Bearer asdfasdfsflasdfasdfasdfasdfasdfasdf0909 */




server.listen(port, (err) => {
    err ? console.log("Server not connected 😒") : console.log(`Server running on http://localhost:${port}/api`)
})