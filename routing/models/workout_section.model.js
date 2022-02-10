const mongoose = require('mongoose');

const workoutsectionSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: true },
    level_one: { type: mongoose.Types.ObjectId },
    level_two: { type: mongoose.Types.ObjectId },
    level_three: { type: mongoose.Types.ObjectId },
    level_four: { type: mongoose.Types.ObjectId },
    gym_replecemant: { type: mongoose.Types.ObjectId },

    overall_reps: { type: Number },
    minimum_reps: { type: Number },

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout_Section = module.exports = mongoose.model('Workout Section', workoutsectionSchema);