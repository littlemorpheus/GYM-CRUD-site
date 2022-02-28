const { model } = require('mongoose');
const Workout = require('../models/workout.model');
const Control = require('./index.controller');

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

    get1 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'sections',
            model: 'Workout Child'
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name} 1`);
            console.log("ITEM: " + item);
            res.json(item);
        })
    };

    get2 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'sections',
            populate: {
                /* This is removing the attached Key */
                path: 'variations.$*',
                model: 'Exercise'
            }
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name} 2`);
            console.log("ITEM: " + item);
            console.log("Sections: " + item.sections);
            console.log("Variations 0: " + item.sections[0].variations);
            res.json(item);
        })
    };
}