require('../src/data.js');


describe('dataPokemon', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof dataPokemon).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
