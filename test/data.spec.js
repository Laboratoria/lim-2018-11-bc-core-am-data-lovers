require('../src/data.js');

const input = {
  'pokemon': [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'candy_count': 25,
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'candy_count': 100,
  }]
};

const output = {
  'pokemon': [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Grass',
      'Poison'
    ], 'candy_count': 25,
  }, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'candy_count': 100,
  }]
};

describe('dataPokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof dataPokemon).toBe('object');
  });
  describe('pokemon.listData', () => {
    it('debería ser una función', () => {
      expect(typeof window.pokemon.listData).toBe('function');
    });
    it('debería retornar un nuevo array con la lista de pokemones', () => {
      expect(window.pokemon.listData(input)).toEqual(output);
    });
  });
});


