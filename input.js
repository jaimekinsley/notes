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
    switch(this.type){
      case 'add':
        return this.type === 'add' && this.payload;

      case 'list':
        return this.type === 'list' && this.payload;

      case 'delete':
        return this.type === 'delete' && this.payload;

      default:
        return false;
    }
  }
}

module.exports = Input;

