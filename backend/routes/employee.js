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
            error: err
          });
        });
    });
});

module.exports = router;