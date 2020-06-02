class Notes {
  constructor(id, text){
    this.id = id;
    this.text = text;
  }

  static add(action){
    return new Notes(Date.now(), action.payload);
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


// const add = action => {
//   const note = {
//     // type: action.name,
//     id: Date.now(),
//     text: action.payload
//   };
//   console.log(`Note added: ${note.text}`);
//   return note;
// };

// // ---------

// const execute = action => {
// // series of ifs
// // switch
// // dictionary of functions

//   switch(action.type){
//     case 'add':
//       return add(action);

//     default:
//       return;
//   }
// };

// module.exports = {
//   execute,
//   add
// };
