const add = action => {
  const note = {
    // type: action.name,
    id: Date.now(),
    text: action.payload
  };
  console.log(`Note added: ${note.text}`);
  return note;
};

// ---------

const execute = action => {
// series of ifs
// switch
// dictionary of functions

  switch(action.type){
    case 'add':
      return add(action);

    default:
      return;
  }

};



module.exports = {
  execute,
  add
};
