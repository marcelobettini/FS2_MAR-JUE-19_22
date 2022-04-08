const { tokenVerify } = require("../utils/handleJWT")
const isAuth = async(req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return next(error)
        }
        const token = req.headers.authorization.split(" ").pop()
        const tokenStatus = await tokenVerify(token)
        console.log(token)
        if (tokenStatus instanceof Error) {

            return next(error)
        }
        console.log(tokenStatus)
        req.token = tokenStatus
        next()
    } catch (error) {
        error.message = "Internal Error Server"
        return next(error)

    }
}

module.exports = isAuth