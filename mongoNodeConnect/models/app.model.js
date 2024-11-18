const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: [true, "Name already exists"],
        maxlength: [20, "Less than or equal to 20 characters"],
        minlength: [10, "More than 10 characters"],
    },
    price: {
        type: Number,
        required: [true, "A tour must have a price"],
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have difficulty"],
        enum: {
            values: ["easy", "medium", "difficult"],
            message: "Difficulty must be easy, medium or difficult",
        },
    },
});

module.exports = mongoose.model("tours", AppSchema);
