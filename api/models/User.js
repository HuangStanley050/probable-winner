const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema();

const userSchema = new Schema({
  email: String,
  password: String
});
userSchema.methods.comparePassword = (userPassword, cb) => {
  bcrypt.compare(userPassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};
const User = mongoose.model("user", userSchema);
module.exports = User;
