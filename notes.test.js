const Notes = require('./notes.js');

describe ('Notes class', () => {

  it('has an id and text', () => {

    const note = new Notes(3, 'I am a note');

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('I am a note');
  });

  it('has an add method', () => {
    const action = { type: 'add', payload: 'I am another note' };

    const note = Notes.add(action);

    expect(note.id).toEqual(expect.any(Number));
    expect(note.text).toEqual('I am another note');
  });

});



// const { add, execute } = require('./notes.js');

// describe('notes functions', () => {
// // This only returns a note for now and console.logs
//   it('adds a note', () => {
//     const actionObj = {
//       type: 'add',
//       // id: 0,
//       payload: 'adding a new note' };

//     const results = add(actionObj);
//     expect(results).toEqual({
//       id: expect.any(Number),
//       text: 'adding a new note'
//     });
//   });

//   it('adds a note and console.logs', ()=> {
//     console.log = jest.fn();

//     const action = {
//       type: 'add',
//       payload: 'My Note'
//     };
//     const note = add(action);
//     expect(console.log).toHaveBeenCalledTimes(1);
//     expect(console.log).toHaveBeenCalledWith(`Note added: ${note.text}`);
//   });


//   it('executes on an action', () => {
//     const action = {
//       type: 'add',
//       payload: 'adding an ADD note'
//     };

//     const note = execute(action);
//     expect(note).toEqual({
//       id: expect.any(Number),
//       text: 'adding an ADD note'
//     });
//   });

//   it('does nothing if the action type is not understood', () => {
//     const action = {
//       type: 'badType',
//       payload: 'whatever'
//     };
//     const result = execute(action);
//     expect(result).toBeUndefined();
//   });

// });
