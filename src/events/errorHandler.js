'use strict';

const events = require('./eventError');

const error = module.exports = exports = {};

error.log = (file) => {
  console.log(`${file} not saved`);
};

events.on('error', error.log);
