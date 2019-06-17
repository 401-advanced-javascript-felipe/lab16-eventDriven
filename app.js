'use strict';

const toRead = require('./src/readFile');
const toUpper = require('./src/toUpper');
const toWrite = require('./src/writeFile');

const alterFile = (file) => {
  // fs.readFile( file, (err, data) => {
  //   if(err) { throw err; }
  //     let text = toUpper(data);
  //   fs.writeFile( file, Buffer.from(text), (err, data) => {
  //     if(err) { throw err; }
  //     console.log(`${file} saved`);
  //   });

  // });


  toRead(file)
    .then(data => {
      toWrite(file, Buffer.from(toUpper(data)))
    })
    .then(console.log(`${file} saved`))
};

let file = process.argv.slice(2).shift();
alterFile(file);
