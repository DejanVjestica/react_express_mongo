const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DATABASEURL;
mongoose.set('debug', true);
mongoose.connect(
    url, { useUnifiedTopology: true, useNewUrlParser: true  }
);

mongoose.Promise = Promise;
module.exports.User = require('./user');