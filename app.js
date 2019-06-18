'use strict';

const toRead = require('./src/readFile');
const toUpper = require('./src/toUpper');
const toWrite = require('./src/writeFile');
const eventLog = require('./src/events/eventLog');
const eventError = require('./src/events/eventError');
require('./src/events/logger');
require('./src/events/errorHandler');

const alterFile = (file) => {

  toRead(file)
    .then(data => {
      toWrite(file, Buffer.from(toUpper(data)));
    })
    .then(eventLog.emit('log', file))
    .catch(error =>{
      eventError.emit('error', error);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
