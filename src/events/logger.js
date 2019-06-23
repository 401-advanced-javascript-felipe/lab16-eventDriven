'use strict';


/**
 * @module logger
 */

const events = require('./event');

const logger = module.exports = exports = {};

/**
 * On success it console.logs
 * @param {string} data - Data to print to screen
 */
logger.log = (file) => {
  console.log(`${file} saved`);
};

/**
 * On erros it console.logs errors
 * @param {string} data - Data to print to screen
 */
logger.error = (file) => {
  console.error(`${file} not saved`);
};

events.on('log', logger.log);
events.on('error', logger.error);
