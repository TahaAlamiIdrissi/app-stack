const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../validation/verifyToken");
const Song = require("../models/Song");

router.post("/songs", async (req, res) => {
  const song = new Song({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    album: req.body.album,
    albumImageUrl: req.body.albumImageUrl,
    youtubeId: req.body.youtubeId,
    lyrics: req.body.lyrics,
    tab: req.body.tab,
  });

  try {
    const savedSong = await song.save();
    res.status(200).send({
      song,
      saveSong: true,
      message: "Song has been saved successfully",
    });
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get("/songs", async (req, res) => {
  try {
    const songs = await Song.find().limit(20);
    res.status(200).send(songs);
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get("/songs/:songId", async (req, res) => {
  const songId = req.params.songId;
  try {
    const song = await Song.findById(songId);
    console.log(song)
    res.status(200).send(song)
  } catch (error) {
    res.status(400).send({ error });
  }
});

module.exports = router;
