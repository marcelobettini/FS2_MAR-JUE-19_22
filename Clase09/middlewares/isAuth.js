const { tokenVerify } = require("../utils/handleJWT")
const isAuth = async(req, res, next) => {
    try {

        if (!req.headers.authorization) {
            let error = new Error("No token")
            error.status = 403
            return next(error)
        }

        const token = req.headers.authorization.split(" ").pop()
        const validToken = await tokenVerify(token)
        if (validToken instanceof Error) {
            error.message = "Token expired"
            error.status = 403
            return next(error)
        }
        req.user = validToken
        next()
    } catch (error) {
        error.message = "Internal Error Server"
        return next(error)

    }
}

module.exports = isAuth