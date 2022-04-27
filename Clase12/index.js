require("dotenv").config()
require("./db_config/db")
const express = require("express")
const PORT = 3030;

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => {
    res.send("Welcome to wherever you are")
})

//Users Route
server.use("/users", require("./users/usersRoute"))
//Posts Route
server.use("/posts", require("./posts/postsRoute"))



server.listen(PORT, (err) => {
    err ? console.log("No anda") : console.log(`http://localhost:${PORT}`)
})