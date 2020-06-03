
const Input = require('./Input.js');


describe('input class', () => {
  let inputs;
  beforeEach(() => {
    const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];

    inputs = new Input(commandLineArguments);
  });

  it('has a type and payload property', () => {

    expect(inputs.type).toEqual('add');
    expect(inputs.payload).toEqual('I am a note');
  });

  it('has a valid method', () => {

    const isValid = inputs.valid();
    expect(isValid).toBeTruthy();
  });

  it('has a valid method', () => {
    const commandLineArguments = ['node', 'index.js', '--badType', 'I am a note'];

    const input = new Input(commandLineArguments);

    const isValid = input.valid();
    expect(isValid).toBeFalsy();
  });

});




// const { parse, valid } = require('./input.js');


// describe('input functions', () => {
//   it ('can parse command line arguments', () => {
//     const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
//     const action = parse(commandLineArguments);

//     expect(action).toEqual({
//       type: 'add',
//       payload: 'I am a note'
//     });
//   });


//   it('can validate command line arguments with add', () => {
//     const action = {
//       type: 'add',
//       payload: 'my note'
//     };

//     const isValid = valid(action);

//     expect(isValid).toBeTruthy();
//   });


//   it('can validate command line arguments with add', () => {
//     const action = {
//       type: 'add',
//       payload: 'my note'
//     };

//     const isValid = valid(action);

//     expect(isValid).toBeTruthy();
//   });

//   it('can validate command line arguments with add', () => {
//     const action = {
//       type: 'badType',
//       payload: 'my note'
//     };

//     const isValid = valid(action);

//     expect(isValid).toBeFalsy();
//   });
// });
