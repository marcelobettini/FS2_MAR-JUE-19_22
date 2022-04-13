const { check, validationResult } = require("express-validator");

const validatorCreateUser = [
    check("name")
    .exists().withMessage("Name field required")
    .trim()
    .isAlpha('es-ES', { ignore: ' ' }).withMessage("Only letters")
    .isLength({ min: 2, max: 90 }).withMessage("Character count: min 2, max 90"),
    check("email")
    .exists().withMessage("Email field required")
    .trim()
    .isEmail().withMessage("Must be a valid email address")
    .normalizeEmail(),
    check("password")
    .exists()
    .trim()
    .isLength({ min: 8, max: 15 }),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next() //si pasa las validaciones, sigue hacia el controlador o hacia el siguiente middleware
        } catch (error) {
            res.status(400).json({ errors: error.array() })
        }
    }
]
const validatorEditUser = [
    check("name")
    .exists().withMessage("Name field required")
    .trim()
    .isAlpha('es-ES', { ignore: ' ' }).withMessage("Only letters")
    .isLength({ min: 2, max: 90 }).withMessage("Character count: min 2, max 90"),
    check("email")
    .exists().withMessage("Email field required")
    .trim()
    .isEmail().withMessage("Must be a valid email address")
    .normalizeEmail(),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next() //si pasa las validaciones, sigue hacia el controlador o hacia el siguiente middleware
        } catch (error) {
            res.status(400).json({ errors: error.array() })
        }
    }
]

const validatorResetPassword = [
    check("password_1")
    .exists()
    .notEmpty().withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 15 })
    .trim(),
    check("password_2")
    .custom(async(password_2, { req }) => {
        const password_1 = req.body.password_1
        if (password_1 !== password_2) {
            throw new Error("Passwords must be identical")
        }
    }),
    (req, res, next) => {
        const token = req.params.token
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const arrWarnings = errors.array()
            res.render("reset", { arrWarnings, token })
        } else return next()
    }
]

module.exports = { validatorCreateUser, validatorEditUser, validatorResetPassword }