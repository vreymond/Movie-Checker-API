const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true
  },
  
});

const producerSchema = new Schema({

});

const scenaristSchema = new Schema({

});

const musicSchema = new Schema({

});

module.exports = {
  Director: mongoose.model('Director', directorSchema),
  Producer: mongoose.model('Producer', producerSchema),
  Scenarist: mongoose.model('Scenarist', scenaristSchema),
  Music: mongoose.model('Music', musicSchema)
}