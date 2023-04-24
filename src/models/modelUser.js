const { Schema, model } = require("mongoose");

const userUptc = Schema({
  username: { type: String },
  password: { type: String },
});

module.exports = model("Users", userUptc);
