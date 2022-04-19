const connection = require("../db/config");

const addNewPost = (post) => {
    const query = "INSERT INTO posts SET ?";
    try {
        return connection.query(query, post)
    } catch (error) {
        error.message = error.code
    }
}
const getPostsWith = (string) => {
    const query = `SELECT * FROM posts WHERE title LIKE '%${string}%'`
    try {
        return connection.query(query)
    } catch (error) {
        error.message = error.code
    }
}

const getAllPosts = () => {
    const query = "SELECT * FROM posts";
    try {
        return connection.query(query)
    } catch (error) {
        error.message = error.code
    }
}

module.exports = { addNewPost, getPostsWith, getAllPosts }