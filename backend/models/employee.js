const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  fullname: { type: String, reqired: true },
  hashedPassword: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  roles: [{type: String }]
})

module.exports = mongoose.model('Employee', employeeSchema);