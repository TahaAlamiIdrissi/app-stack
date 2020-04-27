const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/user");
const songRoutes = require("./src/routes/song");

require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.DB_NAME,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("Connected to Atlas cluster ...")
);
app.use("/", userRoutes);
app.use("/", songRoutes);

/* app.use("/register", (req, res) => {
  res.send({
    message: `${req.body.email} send this ! `,
  });
});
 */
app.listen(process.env.PORT, () => console.log("Listening on port 8081 ... "));
