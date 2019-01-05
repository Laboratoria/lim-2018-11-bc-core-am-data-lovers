/* global Worldbank*/
require('../src/data.js');
describe('Worldbank', () => {
  it('Debería ser un objeto', () => {
    expect(typeof Worldbank.population).toBe('object');
  });
});