const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  youtubeUrl: String,
});

module.exports = mongoose.model('Video', videoSchema);
