const mongoose = require("mongoose");
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
  trainerName: String,
  price: Number,
});

const userSchema = new Schema({
  profilePicture: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  enrollments: [enrollmentSchema], // Nested subdocument array for enrollments
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
