let users = require("./data")
const findUserById = require("./functions")
require("dotenv").config()
const express = require("express");
const port = process.env.port || 3030
const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.listen(port, (err) => {
    err ? console.warn(`Hubo un error {
        message: ${err} }`) : console.log(`Servidor corre en http://localhost:${port}`)
})

//welcome endpoint
server.get("/", (req, res) => {
    const content = `
    <h1>Nuestra API con Express</h1>
    <pre>Bienvenidos a nuestra API construida con Node JS y el framework Express</pre>
    `
    res.send(content)
})

//endpoint all users 
server.get("/users", (req, res, next) => {
    users.length ? res.status(200).json(users) : next()
})

//endpoint user by id
server.get("/users/:id", (req, res, next) => {
    if (isNaN(Number(req.params.id)) || req.params.id < 1) {
        res.status(400).json({ message: "ID debe ser un número entero positivo mayor que 0" })
    } else {
        const userFound = users.find((user) => user.id === Number(req.params.id))
        userFound ? res.status(200).json(userFound) : next()
    }
})

//post new user
server.post("/users", (req, res) => {
    const { name, username, email } = req.body
    if ((!name || !username || !email) && (!name === "" || username === "" || email === "")) {
        res.status(400).json({ message: "All fields required" })
    } else {
        users.push({...req.body })
        res.status(201).json({ message: "Resource created" })

    }
})

//delete user by id
server.delete("/users/:id", (req, res, next) => {
    if (isNaN(Number(req.params.id)) || req.params.id < 1) {
        return res.status(400).json({ message: "ID debe ser un número entero positivo mayor que 0" })
    }
    if (users.find((user) => user.id === Number(req.params.id))) {
        let filteredArr = users.filter((user) => user.id !== Number(req.params.id))
        users = filteredArr
        res.status(200).json({ message: "Resource deleted" })
    } else {
        next()
    }
})


//catch all route (404)
server.use((req, res) => {
    res.status(404).json({ message: "Resource not found" })
})