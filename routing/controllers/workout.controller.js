const Workout = require('../models/workout.model');
const Control = require('./controller');

module.exports = class extends Control {
    constructor() {
        super("Workout", Workout);
    }

    add = async (req, res, next) => {
        let workout = new Workout({
            name: req.body.name,
            sections: req.body.sections
        });
        this.add_one(req, res, next, workout)
    }
}