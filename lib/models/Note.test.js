const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

  it('can add a note with execute', () => {
    const action = { type: 'add', payload: 'I am a note' };

    return Note.execute(action)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: 'I am a note',
          __v: 0
        });
      });
  });

  it('can list all notes', async() => {
    const action = { type: 'add', payload: 'I am a note' };
    await Note.execute(action);

    const listAction = { type: 'list', payload: true };

    return Note.execute(listAction)
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: 'I am a note',
          __v: 0
        }]);
      });
  });

  it('can delete a note', async() => {
    const action = { type: 'add', payload: 'I am a note' };
    const { _id } = await Note.execute(action);

    const deleteAction = { type: 'delete', payload: _id };

    return Note.execute(deleteAction)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: _id,
          text: 'I am a note',
          __v: 0
        });
      });
  });


});
