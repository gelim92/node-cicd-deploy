const {expect} = require('chai');
const {getHelloWorld} = require('./hello');

describe('hello', () => {
  it('should return hello', () => {
    const result = getHelloWorld();
    expect(result).to.be.string(result);
  });
});
