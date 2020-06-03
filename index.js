const Input = require('./Input.js');
const Notes = require('./Notes.js');

const input = new Input(process.argv);
if(input.valid()) Notes.execute(input);
else console.log('invalid command');



// use parse to create an action from process.argv
// use valid to check if it is a valid action
// if valid execute
// otherwise show error

// const { parse, valid } = require('./lib/input.js');
// const { execute } = require('./lib/note.js');

// const action = parse(process.argv);
// const isValid = valid(action);

// if(isValid) execute(action);
// else console.log('invalid command');
