const add = action => {
  const note = {
    // type: action.name,

    text: action.payload
  };
  console.log(note);
  return note;
};

// ---------

const execute = action => {
// series of ifs
// switch
// dictionary of functions


  const actionNote = {
    id: 0,
    text: action.payload
  };

  if(action.type === 'add'){
    return actionNote;
  }
  return actionNote;
};



module.exports = {
  execute,
  add
};
