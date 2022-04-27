const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
PostSchema.index({ title: "text" })

const Post = mongoose.model("Post", PostSchema)
module.exports = Post