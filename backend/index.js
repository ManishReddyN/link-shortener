require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

connectionString = process.env.MONGO_URL;
const routes = require("./routes/shortlinks");

port = process.env.PORT || 8000;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("Error Occurred While connecting");
  });
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log("App is running! ");
});
