'use strict';

const toRead = require('../src/readFile');
const toUpper = require('../src/toUpper');
const toWrite = require('../src/writeFile');


describe('Read, Upper, Write, Emmiters and Errors', () => {

  describe('toRead()', () => {
    it('should ', () => {
      expect(true).toBeTruthy();
    });

  });

  describe('toUpper()', () => {
    it('should turn string into uppercase', () => {
      let message = 'hello';
      message = toUpper(message);
      expect(message).toBe('HELLO');
    });
    
  });


  describe('toWrite()', () => {
    it('should ', () => {
      let message = 'hello';
      message = toUpper(message);
      expect(message).toBe('HELLO');
    });
    
  });

});
