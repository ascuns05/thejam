const mongoose = require('mongoose')
;

let postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "titleRequired"],
    minlength: [6, "tooShort"],
    unique: true
  },
  text: {
    type: String,
    required: [true, "textRequired"]
  }
});


module.exports = mongoose.model('Post', postSchema);