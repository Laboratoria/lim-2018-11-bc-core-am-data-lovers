require('../src/data.js');

const input = [
  { 'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25, 'spawn_chance': 0.69 },
  { 'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100, 'spawn_chance': 0.042 }
];

const output = [
  { 'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25, 'spawn_chance': 0.69 },
  { 'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100, 'spawn_chance': 0.042 }
];

const output2 = [
  { 'id': 2, 'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'candy_count': 100 },
  { 'id': 1, 'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'candy_count': 25 }
];

const output3 = [
  { 'id': 16, 'num': '016', 'name': 'Pidgey', 'type': ['Normal', 'Flying'], 'candy_count': 12, 'spawn_chance': 15.98 }
];


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
    expect(window.dataPokemon.sortData(input, 'NAME', 'ASC')).toEqual(output);
  });
  it('debería retornar un nuevo array con los pokemones de Z-A', () => {
    expect(window.dataPokemon.sortData(input, 'NAME', 'DESC')).toEqual(output2);
  });
  it('debería retornar un nuevo array y no modificar el array original', () => {
    expect(window.dataPokemon.sortData(input, 'NAME', 'ASC')).toEqual(input);
  });
});

describe('dataPokemon.computeStats', () =>  {
  it('debería ser una función', () => {
    expect(typeof window.dataPokemon.computeStats).toBe('function');
  });
  it('debería retornar una nuevo array con el pokemon de')
}
