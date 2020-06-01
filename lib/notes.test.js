const { add } = require('./notes.js');

describe('notes functions', () => {
  it('can create a note object', () => {
    const action = {
      type: 'add',
      payload: 'adding a new note' };

    const results = add(action);
    expect(results).toEqual({
      text: 'adding a new note'
    });
  });
});
