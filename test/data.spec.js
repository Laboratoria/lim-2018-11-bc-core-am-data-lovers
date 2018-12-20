require('../src/data.js');

const input = [
  {'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25},
  {'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100}
];

const output = [
  {'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25},
  {'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100}
];

const output2 = [
  {'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100},
  {'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25}
];


/* const input1 = {
  'pokemon': [
      
    ],
    'candy_count': 100,

};*/

describe('dataPokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof dataPokemon).toBe('object');
  });
});

describe('dataPokemon.sortData', () => {
  it('debería ser una función', () => {
    expect(typeof window.dataPokemon.sortData).toBe('function');
  });
  it('debería retornar un nuevo array con los pokemones de A-Z', () => {
    expect(window.datapokemon.sortData(input, 'NAME', 'ASC')).toEqual(output);
  });
  it('debería retornar un nuevo array con los pokemones de Z-A', () => {
    expect(window.datapokemon.sortData(input, 'NAME', 'DESC')).toEqual(output2);
  });
  it('debería retornar un nuevo array y no modificar el array original', () => {
    expect(window.dataPokemon.sortData(input, 'NAME', 'ASC')).toEqual(input);
  });
});
