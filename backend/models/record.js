const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  clockedIn: { type: Boolean, required: true },
  employeeId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Record', recordSchema);