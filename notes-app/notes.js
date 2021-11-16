const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const findTheNote = notes.filter(note => {
        return note.title !== title;
    })
    if (findTheNote.length < notes.length) {
        saveNotes(findTheNote);
        console.log(chalk.bgGreen.inverse('Note removed'));
    } else {
        console.log(chalk.bgRed.inverse('No note found!'));
    }

}

const listNotes = () => {
    const listNotes = loadNotes();
    if (listNotes.length > 0) {
        console.log(chalk.green.inverse('Your notes:'));
        listNotes.forEach((note, index) => {
            console.log(index + 1, ')', note.title);
        })
    } else {
        console.log(chalk.red.inverse('No notes found'));
    }
}

const readNote = (title) => {
    const allNotes = loadNotes();
    const readNote = allNotes.find(note => note.title === title)
    if (readNote) {
        console.log(chalk.blue.inverse(readNote.title));
        console.log(readNote.body);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
}