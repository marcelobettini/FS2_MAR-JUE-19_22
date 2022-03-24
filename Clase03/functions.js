const findUserById = (id, arr) => {
    return arr.find((user) => user.id === id)
}

module.exports = { findUserById }