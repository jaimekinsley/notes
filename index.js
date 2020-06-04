const mongoose = require('mongoose');

const Input = require('./Input.js');
const Note = require('./lib/models/Note.js');

mongoose.connect('mongodb://localhost:27017/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const input = new Input(process.argv);
if(input.valid()) Note.execute(input).then(() => mongoose.connection.close());
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
