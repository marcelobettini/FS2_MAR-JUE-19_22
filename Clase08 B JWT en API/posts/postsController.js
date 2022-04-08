const addOne = async(req, res, next) => {

    res.json({ token: req.token })
}

module.exports = { addOne }