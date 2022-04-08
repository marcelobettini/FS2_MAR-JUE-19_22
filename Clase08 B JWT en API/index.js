require("dotenv").config()
require("./db/config")
const express = require("express");
const port = process.env.port || 3000
const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static("storage"))
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

//Routing for endpoint /users
server.use("/users", require("./users/usersRoute"))
    //Routing for endpoint /posts
server.use("/posts", require("./posts/postsRoute"))




//catch all route (404)
server.use((req, res, next) => {
    let error = new Error("Resource not found");
    error.status = 404
    next(error)
})

//Error handler
server.use((error, req, res, next) => {
    if (!error.status) {
        error.status = 500
    }
    res.status(error.status).json({ status: error.status, message: error.message })
})