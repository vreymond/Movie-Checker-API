const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  movies: {
    type: [Schema.Types.ObjectId],
    ref: 'Movie',
    required: true
  }
});