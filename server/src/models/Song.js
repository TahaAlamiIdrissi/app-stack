const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songModel = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  genre: {
    type: String,
  },
  album: {
    type: String,
  },
  albumImageUrl: {
    type: String,
  },
  youtubeId: {
    type: String,
  },
  lyrics: {
    type: String,
  },
  tab: {
    type: String,
  }
});

module.exports = mongoose.model("song", songModel);
