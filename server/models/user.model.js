const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        profile: String,
        phone: String,
        // roles: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Role"
        //     }
        // ]
    })
);

module.exports = User;