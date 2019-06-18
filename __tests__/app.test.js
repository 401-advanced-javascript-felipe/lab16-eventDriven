'use strict';

const promisifyFS = require('./__mock__/promisifyFS.mock');
const toUpper = require('../src/toUpper');

const eventLog = require('../src/events/event');
require('../src/events/logger');


describe('promisifyFS and Upper', () => {

  describe('readFile()', () => {

    it('should return error if bad file', done => {
      let file = 'bad.txt';
      promisifyFS.readFile(file, (err, data) => {
        expect(err).toBeDefined();
        done();
      });
    });

    it('data should be string', (done) => {
      let file = 'file1.txt';
      promisifyFS.readFile(file, (err,data) => {
        expect(err).toBeUndefined();
        expect(data).toBe('File Contents');
        done();
      });
    });
  });

  describe('writeFile()', () => {

    it('should return error if bad file', (done) => {
      let file = 'bad.txt';
      promisifyFS.writeFile(file, (err, data) => {
        expect(err).toBeDefined();
        done();
      });
    });

    it('data should be string', (done) => {
      let file = 'file1.txt';
      promisifyFS.writeFile(file, (err,data) => {
        expect(err).toBeUndefined();
        expect(data).toBe('File Contents');
        done();
      });
    });
  });

  describe('toUpper()', () => {
    it('should return a string uppercased', () => {
      let str = 'hello';
      str = toUpper(str);
      expect(str).toBe('HELLO');
    });
  });
});


describe('Events', () => {
  it('logs on success', () => {
    let spy = jest.spyOn(console, 'log');
    eventLog.emit('log');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('logs error on success', () => {
    let spy = jest.spyOn(console, 'log');
    eventLog.emit('error');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
