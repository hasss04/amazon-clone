const mongoose = require("mongoose");

const DB = process.env.MONGODB_URI;

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=> console.log("error" + error.message))