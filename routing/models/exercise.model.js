const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: true },
    
    videos: [ { type: mongoose.Types.ObjectId } ],
    images: [ { type: mongoose.Types.ObjectId } ],

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Exercise = module.exports = mongoose.model('Exercise', exerciseSchema);