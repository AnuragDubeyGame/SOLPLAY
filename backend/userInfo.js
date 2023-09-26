const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfo = new Schema({
    username: { type: String, unique: true },
    publicKey: String,
    gamesPurchased: [String],
  },{
    collection: 'userInfoCollection',
  });
  
 module.exports = mongoose.model("User", UserInfo);