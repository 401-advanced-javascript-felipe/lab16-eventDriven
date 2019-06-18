'use strict';

const toRead = require('./src/readFile');
const toUpper = require('./src/toUpper');
const toWrite = require('./src/writeFile');
const eventLog = require('./src/events/event');
require('./src/events/logger');



const alterFile = (file) => {
  toRead(file)
    .then(data => {
      toWrite(file, Buffer.from(toUpper(data)));
    })
    .then(eventLog.emit('log', file))
    .catch(error =>{
      eventLog.emit('error', error);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
