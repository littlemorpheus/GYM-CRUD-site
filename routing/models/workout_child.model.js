const mongoose = require('mongoose');
const exerciseSchema = require('../models/exercise.model').exerciseSchema

var varationSchema = new mongoose.Schema({
    type: Map,
    of: { type: String },
})

const workoutchildSchema = mongoose.Schema( {
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        unique: true 
    },
    variations: {
        type: [{
            type: [Map],
            of: { type: mongoose.Types.ObjectId, ref: 'Exercise' },
        }],
        required: [true, "Need some exercises"]
    },
    overall_reps: { type: Number },
    minimum_reps: { type: Number },

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout_Child = module.exports = mongoose.model('Workout Child', workoutchildSchema);
