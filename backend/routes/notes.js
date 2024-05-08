//defining Express routes to handle CRUF operations on notes
//importing Note model to interact w/ MongoDB database
//routes:
//   GET, POST, DELETE
// GET -- fetches all notes from database
// POST -- creates new note & saves it to database
// PATCH -- adjusts existing note
// DELETE -- deletes note by its ID from the database
const express = require('express');
const router = express.Router();
const Note = require('../model/Note');

//GET all notes
router.get('/', async(req, res) => {

}); 

//POST a new note


//DELETE a note
