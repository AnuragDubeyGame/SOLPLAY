const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfo = new Schema({
  username: { type: String, unique: true },
  publicKey: String,
  gamesPurchased: {
    type: [String],
    validate: {
      validator: function (games) {
        const nonEmptyGames = games.filter(game => game.trim() !== '');
        this.gamesPurchased = nonEmptyGames;
        return true; 
      },
    },
  },
}, {
  collection: 'userInfoCollection',
});

 module.exports = mongoose.model("User", UserInfo);