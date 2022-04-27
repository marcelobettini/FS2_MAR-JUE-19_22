const Post = require("./postModel")

const createPost = (req, res) => {
    const newPost = new Post({ ...req.body });
    newPost.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(data)
        }
    })
}

const searchTitleByText = (req, res) => {
    const { query } = req.params
    Post.find({ $text: { $search: query, $caseSensitive: false } }, (err, result) => {
        if (err) return res.send(err)
        if (result) return res.send(result)
    })
}

module.exports = { createPost, searchTitleByText }