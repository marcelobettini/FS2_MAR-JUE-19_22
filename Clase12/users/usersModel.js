const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    fullname: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    {
        timestamps: true //createdAt, updatedAt //para eliminar __v : versionKey: false
    },
);

UserSchema.set("toJSON", {
    transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
    }
})
const User = mongoose.model("User", UserSchema)
module.exports = User;