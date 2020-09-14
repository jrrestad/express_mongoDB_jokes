const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find({})
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => req.json({error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ jokes: oneJoke}))
    .catch(err => res.json({error: err}))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json({error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate( {_id: req.params.id}, req.body, { runValidators: true, useFindAndModify: false })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}