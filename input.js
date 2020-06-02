const minimist = require('minimist');


// a only case
// a and add are the same
// if type is a -> add
const parse = arr => {
  // {_:['node, 'index.js'], add: "My Note"}
  const obj = minimist(arr);

  // {add: "my Note'}"}
  delete obj._;

// ( add: "My Note", list: true, delete: 1234) -> [[add, "My Note'"], [list, true]]
  const [[type, payload]] = Object.entries(obj);

  return {
    type,
    payload
  };
};

const valid = action => {
  // return true if the type is a valid command (add)
  // add the payload isn't empty
  // return false
  // const { type, payload } = action;

  return (action.type === 'add' && action.payload);
};

module.exports = {
  parse,
  valid
};
