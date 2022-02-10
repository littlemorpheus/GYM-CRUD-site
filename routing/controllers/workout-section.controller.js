const WO_Section = require('../models/workout_section.model');
const Control = require('./controller');

console.log("----------------------------")
console.log(Object.getPrototypeOf(Control));
console.log("----------------------------")

module.exports = class extends Control {
    constructor() {
        super("Workout Section", WO_Section);
    };

    add = async (req, res, next) => {
        let wo_section = new WO_Section({
            name: req.body.name,
            level_one: req.body.level_one,
            level_two: req.body.level_two,
            level_three: req.body.level_three,
            level_four: req.body.level_four,
            gym_replecemant: req.body.gym_replecemant,
            overall_reps: req.body.overall_reps,
            minimum_reps: req.body.minimum_reps,
        });
        console.log(`Adding New Element`);
        //this.test_working()
        //super.test_working()
        /*(node:25884) UnhandledPromiseRejectionWarning: TypeError: (intermediate value).test_working is not a function*/
        this.add_one(req, res, next, wo_section);
        //console.log("---------------------")
        //console.log()
        //console.log("---------------------")

        //so this async function is giving an error and im not handling that error
            //the error is that super.add isnt a function
    };
}