const WO_CHILD = require('../models/workout_child.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Workout Child", WO_CHILD);
    };

    add = async (req, res, next) => {
        let wo_child = new WO_CHILD({
            name: req.body.name,
            //--------------------------
            level_one: req.body.level_one,
            level_two: req.body.level_two,
            level_three: req.body.level_three,
            level_four: req.body.level_four,
            gym_replecemant: req.body.gym_replecemant,
            //-----------------------------------------
            overall_reps: req.body.overall_reps,
            minimum_reps: req.body.minimum_reps,
        });
        console.log(`Adding New Element`);
        //this.test_working()
        //super.test_working()
        /*(node:25884) UnhandledPromiseRejectionWarning: TypeError: (intermediate value).test_working is not a function*/
        this.add_one(req, res, next, wo_child);
        //console.log("---------------------")
        //console.log()
        //console.log("---------------------")

        //so this async function is giving an error and im not handling that error
            //the error is that super.add isnt a function
    };

    get1 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'variations.$*',
            model: 'Exercise'
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name}`);
            res.json(item);
        })
    };
}