const WebSocketServer = require("websocket").server
const express = require("express")
const app = express()
app.use(express.static('./public'))
const port = process.env.PORT || 3000

//el servidor de WS necesite un servidor HTTP para establecer el "handshake" entre cliente y servidor
const server = app.listen(port, (err) => console.log(err ? `Error: ${err}` : `Server runnign on http://localhost:${port}`))

//Ahora sí, podemos crear el server de WebSocket
const webSocketServer = new WebSocketServer({
    httpServer: server
})
//crear una estructura de datos para guardar la info de los clientes a medida que se conectan
const clients = []

webSocketServer.on("request", (request) => {
    const connection = request.accept('echo-protocol', request.origin) // req.origin esto acepta cualquier petición entrante (o sea de cualquier origen) en prod quizá pondrían una whitelist... o blacklist para filtrar el origen de las peticiones
    clients.push(connection)
    connection.sendUTF("Connection established 🆗")

    connection.on("message", (msg) => {
        //connection.send(msg.utf8Data)//esto le envía al cliente específico
        //quiero enviar a todos los conectados
        broadcast(msg.utf8Data)


    })
})

function broadcast(msg) {
    clients.forEach(conn => conn.sendUTF(msg))
}