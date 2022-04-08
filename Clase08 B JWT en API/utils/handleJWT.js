const jwt = require("jsonwebtoken")
const jwt_key = process.env.jwt_secret

const tokenSign = async(user, time) => {
    return jwt.sign(user, jwt_key, { expiresIn: time })
}

const tokenVerify = async(token) => {
    try {
        return jwt.verify(token, jwt_key)
    } catch (error) {
        return error
    }
}

module.exports = { tokenSign, tokenVerify }