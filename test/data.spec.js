require('../src/data.js');

const input =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Hierba', 'Veneno'], 'egg': '2 km'},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Hierba', 'Veneno'], 'egg': 'Not in Eggs'},
  {'id': 3, 'name': 'Venusaur', 'type': ['Hierba', 'Veneno'], 'egg': 'Not in Eggs'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fuego'], 'egg': '2 km'}
];

const inputOrderName =
[
  {'id': 63, 'name': 'Abra', 'type': ['Psiquico'], 'egg': '5 km'},
  {'id': 69, 'name': 'Bellsprout', 'type': ['Hierba', 'Veneno'], 'egg': '5 km'},
  {'id': 10, 'name': 'Caterpie', 'type': ['Bicho'], 'egg': '2 km'},
  {'id': 87, 'name': 'Dewgong', 'type': ['Agua', 'Hielo'], 'egg': 'Not in Eggs'}
];

const ouputOrderNameAZ =
[
  {'id': 63, 'name': 'Abra', 'type': ['Psiquico'], 'egg': '5 km'},
  {'id': 69, 'name': 'Bellsprout', 'type': ['Hierba', 'Veneno'], 'egg': '5 km'},
  {'id': 10, 'name': 'Caterpie', 'type': ['Bicho'], 'egg': '2 km'},
  {'id': 87, 'name': 'Dewgong', 'type': ['Agua', 'Hielo'], 'egg': 'Not in Eggs'}
];

const ouputOrderNameZA =
[
  {'id': 87, 'name': 'Dewgong', 'type': ['Agua', 'Hielo'], 'egg': 'Not in Eggs'},
  {'id': 10, 'name': 'Caterpie', 'type': ['Bicho'], 'egg': '2 km'},
  {'id': 69, 'name': 'Bellsprout', 'type': ['Hierba', 'Veneno'], 'egg': '5 km'},
  {'id': 63, 'name': 'Abra', 'type': ['Psiquico'], 'egg': '5 km'}
];


const inputOrder =
[
  {'id': 1, 'num': '001', 'name': 'Bulbasaur'},
  {'id': 2, 'num': '002', 'name': 'Ivysaur'},
  {'id': 3, 'num': '003', 'name': 'Venusaur'},
  {'id': 4, 'num': '004', 'name': 'Charmander'}
];

const ouputOrderAsc =
[
  {'id': 1, 'num': '001', 'name': 'Bulbasaur'},
  {'id': 2, 'num': '002', 'name': 'Ivysaur'},
  {'id': 3, 'num': '003', 'name': 'Venusaur'},
  {'id': 4, 'num': '004', 'name': 'Charmander'}
];

const ouputOrderDesc =
[
  {'id': 4, 'num': '004', 'name': 'Charmander'},
  {'id': 3, 'num': '003', 'name': 'Venusaur'},
  {'id': 2, 'num': '002', 'name': 'Ivysaur'},
  {'id': 1, 'num': '001', 'name': 'Bulbasaur'},
];

const ouput4 =
[
  {'id': 4, 'name': 'Charmander', 'type': ['Fuego'], 'egg': '2 km'},
];

const ouput5 =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Hierba', 'Veneno'], 'egg': '2 km'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fuego'], 'egg': '2 km'},
];

describe('data', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('data.sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.sortData).toBe('function');
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera ascendente', () => {
    expect(window.data.sortData(inputOrder, 0, 0)).toEqual(ouputOrderAsc);
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera descendente', () => {
    expect(window.data.sortData(inputOrder, 0, 1)).toEqual(ouputOrderDesc);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la A a la Z', () => {
    expect(window.data.sortData(inputOrderName, 1, 0)).toEqual(ouputOrderNameAZ);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la Z a la A', () => {
    expect(window.data.sortData(inputOrderName, 1, 1)).toEqual(ouputOrderNameZA);
  });
});

describe('data.filterbyType', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.filterbyType).toBe('function');
  });
  it('Debería retornar un array de objetos con los pokemones que sean de tipo Fuego', () => {
    expect(window.data.filterbyType(input, 'Tipo', 'Fuego')).toEqual(ouput4);
  });
  it('Debería retornar un array de objetos con los pokemones que se encuentren en Huevos de 2 km', () => {
    expect(window.data.filterbyType(input, 'Huevo', '2 km')).toEqual(ouput5);
  });
});

describe('data.filterData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.filterData).toBe('function');
  });
});