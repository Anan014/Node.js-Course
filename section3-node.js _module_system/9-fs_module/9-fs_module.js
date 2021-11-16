const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
fs.appendFileSync('notes.txt', ' hello there')

/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append the file
2. Run the script
3. Check your work by opening the file and viewing the appended text
*/