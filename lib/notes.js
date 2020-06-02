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

  const note = {
    text: action.payload
  };

  if(action.type === 'add'){
    return action.payload;
  }
  return note;
};

module.exports = {
  execute,
  add
};
