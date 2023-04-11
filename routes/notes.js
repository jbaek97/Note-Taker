const notes = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


notes.get('/', (req, res) => 
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    console.log(req.body)
    const {title, text} = req.body;
    if(req.body) {
        const newNote = {
            title,
            text,
        }
    console.log(newNote);
    readAndAppend(newNote, './db/notes.json');
    res.json('Your note has been saved successfully');
    } else {
        res.error('There was an error. Your note has not been saved');
    }
});

module.exports = notes;