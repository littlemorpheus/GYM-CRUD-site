const mongoose = require('mongoose');
const exerciseSchema = require('../models/exercise.model').exerciseSchema

const workoutchildSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: true },

    variations: {
        //Aribtary Keys
        type: Map,
        of: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    },
    /*
    level_one: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    level_two: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    level_three: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    level_four: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    gym_replecemant: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
    */
    overall_reps: { type: Number },
    minimum_reps: { type: Number },

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout_Child = module.exports = mongoose.model('Workout Child', workoutchildSchema);
