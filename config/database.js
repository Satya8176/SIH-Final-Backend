const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {

    try{
        mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("--------------------------------------- Database is connected -----------------------");
    })

    }catch(error){
        console.log("Failed to connect to DB");
        console.log(error);
        process.exit(1);
        
    }
   

}