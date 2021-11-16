const chalk = require('chalk');
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

/*
Challenge: Add an option to yargs

1. Setup a body option for add command
2. Configure a description, make it required, and for it to be string
3. Logthe body value in the handler funtion
4. Test your work!
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
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function() {
        console.log('Removing the note');
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        console.log('Lisitng out all notes');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note');
    }
})

/*
Challenge: Add new two commands

1. setup command to support 'list' command (print placeholder message for now)
2. setup command to support 'read' command (print placeholder message for now)
3. Test you work by running both commands and ensure corrent output
*/

console.log(yargs.argv);