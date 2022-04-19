const notNumber = (id, next) => {
    if (isNaN(Number(id)) || Number(id) < 1) {
        let error = new Error("ID must be a positive integer")
        error.status = 400
        next(error)
        return true
    } else {
        return false //si omitimos esto, retornará undefined y, como es un "falsy value", funcionará igual que si retornamos false de manera explícita.
    }
}
module.exports = notNumber