const mongoose = require('mongoose');

const workoutdiarySchema = mongoose.Schema( {
    //Key and Sub Parts
    workout_plan: { type: mongoose.Types.ObjectId, ref:'Workout', required: true },
    completed_sections: [ {
        workout_section: {type: mongoose.Types.ObjectId, ref:'Workout Child'},
        completed_sets: [{
            exercise: { type:mongoose.Types.ObjectId, ref:'Exercise' },
            set_index: { type:Number },
            reps: { type:Number }
        }]
    } ],
    
    notes: { type:String },

    //Record Keeping
    /* Should add a day field, for records where did past midnight */
    date: {type: Date, default: Date.now()}
});

const Workout_Diary = module.exports = mongoose.model('Workout Diary', workoutdiarySchema);