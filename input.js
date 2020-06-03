const minimist = require('minimist');

const parse = arr => {
  const obj = minimist(arr);
  delete obj._;
  const [[type, payload]] = Object.entries(obj);

  return {
    type,
    payload
  };
};

class Input {
  constructor(arr){
    const { type, payload } = parse(arr);
    this.type = type,
    this.payload = payload;
  }

  valid() {
    return this.type === 'add' && this.payload;
  }
}

module.exports = Input;


// // a only case
// // a and add are the same
// // if type is a -> add
// const parse = arr => {
//   // {_:['node, 'index.js'], add: "My Note"}
//   const obj = minimist(arr);

//   // {add: "My Note"}
//   delete obj._;

//   // ( add: "My Note", list: true, delete: 1234) -> [[add, "My Note'"], [list, true]]
//   const [[type, payload]] = Object.entries(obj);

//   return {
//     type,
//     payload
//   };
// };

// const valid = action => {
//   // return true if the type is a valid command (add)
//   // add the payload isn't empty
//   // return false
//   // const { type, payload } = action;

//   return (action.type === 'add' && action.payload);
// };

// module.exports = {
//   parse,
//   valid
// };
