const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

/*
Challenge: 
*/

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

/*
Challenge: Setup command option and function

1. Setup the remove command to take a require "--title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using: node app.js remove --title="some title"

Challenge: Use chalk to provide useful logs for remove
1. If a note is removed, print "Note removed!" with a green background.
2. If no note is removed, print "No note found" with a red background.
*/

console.log(yargs.argv);