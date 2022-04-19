const { check, validationResult } = require("express-validator");
const validatorCreatePost = [
    check('title')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 124 }),
    check('body')
    .exists()
    .notEmpty(),
    (req, res, next) => {
        const err = validationResult(req);
        if (!err.isEmpty()) res.status(400).json({ errors: err.array() });
        else next()
    }
]
module.exports = validatorCreatePost