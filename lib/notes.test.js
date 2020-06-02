const { add, execute } = require('./notes.js');

describe('notes functions', () => {

  it('can create a note object', () => {
    const actionObj = {
    //   type: 'add',

      payload: 'adding a new note' };

    const results = add(actionObj);
    expect(results).toEqual({

      text: 'adding a new note'
    });
  });

  it('executes an action', () => {
    const actionType = {
      id: 0,
      payload: 'adding an ADD note'
    };

    const results = execute(actionType);
    expect(results).toEqual({
      id: 0,
      text: 'adding an ADD note'
    });
  });

});
