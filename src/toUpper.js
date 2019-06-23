'use strict';

/**
 * @module toUpper
 * @desc turns buffer into a string then it uppercases it
 */

/**
 * @param {Buffer} data - the contents of a file as a buffer
 */
module.exports = (data) => {
  data = Buffer.from(data);
  return data.toString().toUpperCase();
};
