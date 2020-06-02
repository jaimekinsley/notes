const add = action => {
  const note = {
    // type: action.name,
    id: 0,
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


  if(action.type === 'add'){
    return add(action);
  } else {
    return {
      error: 'cannot add'
    };
  }

};



module.exports = {
  execute,
  add
};
