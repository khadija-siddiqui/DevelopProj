//entry pt of backend application
//setting up Express server
//connecting to MongoDB database
//defining routes for handling API endpts related to notes
//starts server to listen to incoming requests

const express = require('express')
const mongoose = require('mongoose')
const app = express();

const PORT = process.env.PORT || 5000;
//uri to connect to mongoDB
const uri = //link from mongodb - adjust <password> to be password for database user

//function to connect to mongoDB
async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    } catch (error){
        console.error("MongoDB connection error: ", error);
        process.exit(1); //unable to connect - exit 
    }
}

connect();

//defining routes for handling API endpts related to notes
const noteRouter = require('./routes/notes');
app.use('/notes', noteRouter);


//start server
app.listen(PORT, () => {
    console.log("Server started on port ${PORT}`");
});

