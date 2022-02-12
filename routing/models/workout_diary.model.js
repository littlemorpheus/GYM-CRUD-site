const mongoose = require('mongoose');

const workoutdiarySchema = mongoose.Schema( {
    //Key and Sub Parts
    workout_plan: { type: mongoose.Types.ObjectId, ref:'Workout', required: true },
    completed: [ {
        workout_section: {type: mongoose.Types.ObjectId, ref:'Workout Child'},
        completed_exercises: [{
            exercise: { type:mongoose.Types.ObjectId, ref:'Exercise' },
            set_number: { type:Number },
            reps: { type:Number }
        }]
    } ],
    
    notes: { type:String },

    //Record Keeping
    date: {type: Date, default: Date.now()}
});

const Workout_Diary = module.exports = mongoose.model('Workout Diary', workoutdiarySchema);