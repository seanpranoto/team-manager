const Player = require("../models/index.model");

module.exports = {
    findAll: (req, res) => {
        Player.find()
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },
    findOne: (req, res) => {
        Player.findById(req.params.id)
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },
    createOne: (req, res) => {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },
    updateOne: (req, res) => {
        Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Player.findByIdAndRemove(req.params.id)
            .then(player => res.json(player))
            .catch(err => res.json(err));
    }
};