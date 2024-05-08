//entry pt of backend application
//setting up Express server
//connecting to MongoDB database
//defining routes for handling API endpts related to notes
//starts server to listen to incoming requests

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//function to connect to mongoDB
async function connect() {
    try {
         await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error){
        console.error("MongoDB connection ERROR: ", error);
        process.exit(1); //unable to connect - exit 
    }
}

connect();

//middleware
app.use(cors());
app.use(express.json());

//defining routes for handling API endpts related to notes
const noteRouter = require('./routes/notes');
app.use('/notes', noteRouter);

app.get('/', (req, res) => {
    res.json({ message: 'API works' });
});

//start server
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server started on port 8000");
});

