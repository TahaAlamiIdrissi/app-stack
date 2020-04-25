const User = require("../models/User");
const router = require("express").Router();
const { registerValidation } = require("../validation/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verify = require("../validation/verifyToken");

/* Post method for saving a user to db  */

router.post("/register", async (req, res) => {
  //check if error is not null
  // the error message is in details[0].message
  const { error } = registerValidation(req.body);
  if (error)
    return res.send({
      message: error.details[0].message,
      isError: true,
    });
  const existingEmail = await User.findOne({ email: req.body.email });
  // existing email
  if (existingEmail)
    return res.send({
      message: `${req.body.email} already exists !`,
      isError: true,
    });

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    password: hashPass,
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

router.post("/login", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error)
    return res.send({
      message: error.details[0].message,
      isError: true,
    });
  const user = await User.findOne({
    email: req.body.email,
  });

  // existing email
  if (!user)
    return res.send({
      message: `Invalid Email !`,
      isError: true,
    });

  const isPassCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!isPassCorrect)
    return res.status(400).send({ message: "Invalid Password ! " });

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  try {
    res.header("auth-token", token).send({
      user,
      token,
      successfull: true,
    });
  } catch (error) {
    res.status(400).send({
      error: " Error occurs during registering process ",
    });
  }
});

module.exports = router;
