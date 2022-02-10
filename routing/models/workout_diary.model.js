const mongoose = require('mongoose');

const workoutdiarySchema = mongoose.Schema( {
    //Key and Sub Parts
    workout_plan: { type: mongoose.Types.ObjectId, required: true },
    completed: [ {
        workout_section: {type: mongoose.Types.ObjectId},
        completed_exercises: [{
            exercise: { type:mongoose.Types.ObjectId },
            set_number: { type:Number },
            reps: { type:Number }
        }]
    } ],
    
    notes: { type:String },

    //Record Keeping
    date: {type: Date, default: Date.now()}
});

const Workout_Diary = module.exports = mongoose.model('Workout Diary', workoutdiarySchema);