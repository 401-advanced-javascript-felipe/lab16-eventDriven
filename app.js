'use strict';

const toUpper = require('./src/toUpper');
const promisifyFS = require('./src/promisifyFS');
const eventLog = require('./src/events/event');
require('./src/events/logger');



/**
 * Opens and on success writes a file
 * on failure emits error
 * @param {string} file - file to be read
 */
const alterFile = (file) => {
  promisifyFS.readFile(file)
    .then(data => {
      data = toUpper(data);
      promisifyFS.writeFile(file, data);
    })
    .then(eventLog.emit('log', file))
    .catch(error =>{
      eventLog.emit('error', error);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
