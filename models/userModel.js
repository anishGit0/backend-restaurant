const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        address: {type: Array},
        phone: {type: Number, required: true, unique: true},
        answer: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);