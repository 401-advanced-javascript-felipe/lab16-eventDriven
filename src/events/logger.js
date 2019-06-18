'use strict';

const events = require('./event');

const logger = module.exports = exports = {};

logger.log = (file) => {
  console.log(`${file} saved`);
};

events.on('log', logger.log);
