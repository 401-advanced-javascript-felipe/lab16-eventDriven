'use strict';

const events = require('./event');

const logger = module.exports = exports = {};


logger.log = (file) => {
  console.log(`${file} saved`);
};

logger.error = (file) => {
  console.log(`${file} not saved`);
};

events.on('log', logger.log);
events.on('error', logger.error);
