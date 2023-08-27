const mongoose = require("mongoose");
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
  trainerName: String,
  price: Number,
  expirationDate: Date,
});

const userSchema = new Schema({
  profilePicture: Buffer,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  enrollments: [enrollmentSchema], 
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
