const mongoose = require('mongoose');

/*                Mongoose Setup                */
mongoose.connect(process.env.MONGODB_URI)
    mongoose.connection.on('connected', ()=>{
        console.log("Connected to Database");
    })
    mongoose.connection.on('error', (err)=>{
        if (err) {
            console.log('Error in Database connection:\n' + err);
        }
    })
