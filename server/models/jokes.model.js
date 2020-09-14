const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "A setup is required."],
        minlength: [10, "A setup must be at least 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "A punchline is required."],
        minlength: [3, "A punchline must be at least 3 charcaters."]
    }
}, { timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;