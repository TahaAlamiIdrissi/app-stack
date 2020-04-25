const User = require("../models/User");
const router = require("express").Router();
const { registerValidation } = require("../validation/validation");
/* Post method for saving a user to db  */

router.post("/register", async (req, res) => {
  //check if error is not null
  // the error message is in details[0].message
  const { error } = registerValidation(req.body);
  if (error)
    return res.send({
      message: error.details[0].message,
      isError: true
    });
  const existingEmail = await User.findOne({ email: req.body.email });
  // existing email
  if (existingEmail)
    return res.send({
      message: `${req.body.email} already exists !`,
      isError: true
    });

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
