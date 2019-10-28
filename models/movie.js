const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  release: {
    type: Date,
    required: true
  },
  rating: {
    type: String
  },
  genre: {
    type: [String],
    required: true
  },
  studio: {
    type: String,
    required: true
  },
  staff: {
    director: {
      type: Schema.Types.ObjectId,
      ref: 'Director',
      required: true
    },
    producer: {
      type: Schema.Types.ObjectId,
      ref: 'Producer',
      required: true
    },
    scenarist: {
      type: Schema.Types.ObjectId,
      ref: 'Scenarist',
      required: true
    },
    music: {
      type: Schema.Types.ObjectId,
      ref: 'Music',
      required: true
    }
  },
  casting: {
    type: [Schema.Types.ObjectId],
    ref: 'Actor',
    required: true
  }
}, {timestamps: true}
);

module.exports = mongoose.model('Movie', movieSchema);