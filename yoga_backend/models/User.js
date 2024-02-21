const mongoose = require("mongoose");

const User = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    // private: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;