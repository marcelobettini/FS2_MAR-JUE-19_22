import express from "express"
const app = express()
app.get("/", (req, res) => {
    res.cookie("userName", "Marcelo Bettini").sendStatus(200)
})

app.listen(3000, console.log('http://localhost:3000'))