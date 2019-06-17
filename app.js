'use strict';

const fs = require('fs');
const toUpper = require('./src/toUpper');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }

    let text = toUpper(data);

    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
