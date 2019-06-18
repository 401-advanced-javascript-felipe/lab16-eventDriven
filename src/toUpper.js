'use strict';

/**
 * Turns buffer to uppercase string
 * @module toUpper
 * @param {Buffer}
 * 
 */
module.exports = (data) => {
  data = Buffer.from(data);
  return data.toString().toUpperCase();
};
