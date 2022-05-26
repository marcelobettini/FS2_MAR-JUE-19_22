const path = require("path");
const cors = require("cors")
const express = require("express")
const port = process.env.PORT || 3001
const data = require("./data/pokemon.json")
const app = express()
app.use(cors())
app.use(express.static(path.resolve(__dirname, "../client/build")))

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../client/build", "index.html")))
app.get("/api", (req, res) => {
    res.json(data)
})
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})
app.listen(port, (err) => {
    console.log(err ? `Error: ${err}` : `Server up http://localhost:3001`)
})