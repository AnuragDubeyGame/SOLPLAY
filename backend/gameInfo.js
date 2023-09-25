const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameInfoSchema = new Schema({
  title: String,
  banner: String,
  description: String,
  category: String,
  developer: String,
  publisher: String,
  releaseDate: Date,
  price: Number,
});

const gameInfo = mongoose.model("gameInfo", gameInfoSchema);

module.exports = gameInfo;