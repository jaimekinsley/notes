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
        text: action.payload
      });


    default:
      return;
  }
};

module.exports = mongoose.model('Note', notesSchema);
