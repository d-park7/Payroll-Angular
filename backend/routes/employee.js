const express = require('express');
const bcrypt = require('bcrypt');

const Employee = require('../models/employee');

const router = express.Router();

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const employee = new Employee({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        roles: [req.body.roles] 
      });
      employee.save()
        .then(result => {
          res.status(201).json({
            message: 'Employee created!',
            result: result
          })
        })
        .catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
    });
    
});

router.get('/get', async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/get/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;