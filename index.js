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





