const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: true },

    sections: [ { type: mongoose.Types.ObjectId } ],

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout = module.exports = mongoose.model('Workout', workoutSchema);