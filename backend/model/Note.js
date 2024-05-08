//defining Mongoose schema for Note model
//specifing ea note obj stored in MongoDB database 
//  including: title and content

const mongoose = require('mongoose');

//defining schema
const noteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    title: {
        type: String,
    },
    content: {
        type: String,
    },
});

//creating & exporting model based on schema
module.exports = mongoose.model('Note', noteSchema);

