const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameInfoSchema = new Schema({
  title: {
    type: String
  },
  banner:  {
    type: String
  },
  description:  {
    type: String
  },
  category:  {
    type: String
  },
  developer:  {
    type: String
  },
  publisher:  {
    type: String
  },
  releaseDate:  {
    type: String
  },
  price: Number,
});

// Export the gameInfo model
module.exports = mongoose.model("gameInfo", gameInfoSchema);
