'use strict';

module.exports = exports = {};

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
/**
 * Promisify Module for fs
 * @module promisify
 */
exports.writeFile = writeFile;
exports.readFile = readFile;

