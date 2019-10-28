const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = {
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
}

const directorSchema = new Schema(personSchema);
const producerSchema = new Schema(personSchema);
const scenaristSchema = new Schema(personSchema);
const musicSchema = new Schema(personSchema);

module.exports = {
  Director: mongoose.model('Director', directorSchema),
  Producer: mongoose.model('Producer', producerSchema),
  Scenarist: mongoose.model('Scenarist', scenaristSchema),
  Music: mongoose.model('Music', musicSchema)
}