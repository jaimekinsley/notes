class Notes {
  constructor(id, text){
    this.id = id;
    this.text = text;
  }

  static add(action){
    const note = new Notes(Date.now(), action.payload);
    console.log(`Note added: ${note.text}`);
    return note;
  }

  static execute(action){
    switch(action.type){
      case 'add':
        return this.add(action);

      default:
        return;
    }
  }
}

module.exports = Notes;


