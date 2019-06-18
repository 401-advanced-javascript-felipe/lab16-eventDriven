'use strict';

const events = require('./eventLog');

const logger = module.exports = exports = {};

logger.log = (file) => {
  console.log(`${file} saved`);
};

events.on('log', logger.log);
