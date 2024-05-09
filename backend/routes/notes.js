//defining Express routes to handle CRUF operations on notes
//importing Note model to interact w/ MongoDB database
//routes:
//   GET, POST, DELETE, PATCH
// GET -- fetches all notes from database
// POST -- creates new note & saves it to database
// DELETE -- deletes note by its ID from the database
// PATCH -- adjusts existing note in the database 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../model/Note');

//GET all notes
router.get('/', async(req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    }catch (err){
        res.status(500).json({message: err.message});
    }
}); 

//POST a new note
router.post('/', async (req, res) => {
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
//DELETE a note
router.delete('/:id', async (req, res) => {
    try {
        const deleteNote = await Note.deleteOne({ _id: req.params.id});
        console.log(deleteNote);
        res.status(200).json(deleteNote);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//PATCH - edit a note
//PATCH an existing note
router.patch('/:id', async (req, res) => {
    try {
        const updateNote = await Note.updateOne({ _id: req.params.id }, { $set: req.body });
        console.log(updateNote);
        res.status(200).json(updateNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
