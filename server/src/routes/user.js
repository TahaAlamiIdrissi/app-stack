const User = require("../models/User");
const router = require("express").Router();

/* Post method for saving a user to db  */

router.post("/register", async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser.toJSON());
  } catch (error) {
    res.status(400).send({
      error: " Error occurs during registering process ",
    });
  }
});

module.exports = router;
