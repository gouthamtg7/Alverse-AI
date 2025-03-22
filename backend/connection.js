const mongoose = require("mongoose");

//Setting up mongoose server
async function connectDB(url) {
    try{
        await mongoose.connect(url);
    }
    catch(error){
        console.log("MONGODB CONNECTION ERROR - ", error);
    }
}

module.exports = connectDB;