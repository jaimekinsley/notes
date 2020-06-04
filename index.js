const Input = require('./Input.js');
const Notes = require('./Notes.js');

const input = new Input(process.argv);
if(input.valid()) Notes.execute(input);
else console.log('invalid command');

