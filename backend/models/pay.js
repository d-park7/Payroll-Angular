const mongoose = require('mongoose');

const paySchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  payPerHour: {type: Number, required: true },
  employeeId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Pay', paySchema);