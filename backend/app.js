const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Employee = require('./models/employee');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.DATABASE_URL)
  .then((conn) => {
    console.log(`Connected to database: ${conn.connections[0].name}`);
  })
  .catch((err) => {
    console.error(err.message)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

module.exports = app;