const WO_Diary = require('../models/workout_diary.model');
const Control = require('./controller');

module.exports = class extends Control {
    constructor() {
        super("Workout_Diary", WO_Diary);
    }

    add = async (req, res, next) => {
        let wo_diary = new WO_Diary({
            workout_plan: req.body.workout_plan,
            completed: req.body.completed
        });
        this.add_one(req, res, next, wo_diary)
    }
}