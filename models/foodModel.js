const mongoose = require("mongoose");

//schema
const foodSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: [true, "Food Title is require"],
    },
    description: {
        type: String,
        required: [true, " food description is requir"],
    },
    price: {
        type: Number,
        required: [true, "food price is require"],
    },
    imageUrl: {
        type: String,
    },
    foodTags: {
        type: String,
    },
    catgeory: {
        type: String,
    },
    code: {
        type: String,
    },
    },
    { timestamps: true }
)