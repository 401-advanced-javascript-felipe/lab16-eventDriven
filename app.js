'use strict';

const toRead = require('./src/readFile');
const toUpper = require('./src/toUpper');
const toWrite = require('./src/writeFile');
const events = require('./src/events/event');
require('./src/events/logger');
require('./src/events/errorHandler');

const alterFile = (file) => {

  toRead(file)
    .then(data => {
      toWrite(file, Buffer.from(toUpper(data)));
    })
    .then(events.emit('log', file));
};

let file = process.argv.slice(2).shift();
alterFile(file);
