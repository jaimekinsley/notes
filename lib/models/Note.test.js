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
      .then(Note => {
        expect(Note.toJSON()).toEqual({
          _id: expect.anything(),
          text: 'I am a note',
          __v: 0
        });
      });
  });
});
