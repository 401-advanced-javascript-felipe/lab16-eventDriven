'use strict';

const events = require('./event');

const logger = module.exports = exports = {};

/**
 * On success it console.logs
 * @module events
 * @param {string}
 */
logger.log = (file) => {
  console.log(`${file} saved`);
};


/**
 * On erros it console.logs errors
 * @module events
 * @param {string}
 */
logger.error = (file) => {
  console.log(`${file} not saved`);
};

events.on('log', logger.log);
events.on('error', logger.error);
