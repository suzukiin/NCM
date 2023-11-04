'use strict'
const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017");

const Ncm = require('./models/ncm');

const IndexRoute = require('./routes/ncm-route');
app.use('/', IndexRoute);

app.use(bodyParser.json());

module.exports = app;