const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

notesSchema.statics.execute = function(action) {
  switch(action.type){
    case 'add':
      return this.create({
        text: action.payload })
        .then(note => {
          console.log(`Added: ${note}`);
          return note;
        });


    case 'list':
      return this.find()
        .then(notes => {
          console.log(notes);
          return notes;
        });

    case 'delete':
      return this.findByIdAndDelete(action.payload)
        .then(note => {
          console.log(`Deleted: ${note}`);
          return note;
        });

    default:
      return;

  }
};

module.exports = mongoose.model('Note', notesSchema);
