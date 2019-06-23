'use strict';

const toUpper = require('../src/toUpper');

jest.mock('fs');

const eventLog = require('../src/events/event');
require('../src/events/logger');

describe('toUpper()', () => {
  it('should return a string uppercased', () => {
    let str = 'hello';
    str = toUpper(str);
    expect(str).toBe('HELLO');
  });
});

describe('Events', () => {
  it('logs on success', () => {
    let spy = jest.spyOn(console, 'log');
    eventLog.emit('log');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('logs error on failure', () => {
    let spy = jest.spyOn(console, 'error');
    eventLog.emit('error');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
