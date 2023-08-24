const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trainerName: String,
  price: Number,
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);