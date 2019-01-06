/* global worldbank*/
require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

const input =
    [
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}
    ];

const outputPopulation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}];
const outputEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'}];
const outputSecondaryEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'}];
const outputEmployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'}];
const outputUnemployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'}];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.population', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.population).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SP.POP', () => {
      expect(worldbank.population(input)).toEqual(outputPopulation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.population(input)).not.toEqual(input);
    });
  });
  describe('worldbank.education', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.education).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SE.TER', () => {
      expect(worldbank.education(input)).toEqual(outputEducation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.education(input)).not.toEqual(input);
    });
  });
  describe('worldbank.secondaryEducation', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.secondaryEducation).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SE.SEC', () => {
      expect(worldbank.secondaryEducation(input)).toEqual(outputSecondaryEducation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.secondaryEducation(input)).not.toEqual(input);
    });
  });
  describe('worldbank.employment', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.employment).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SL.EMP', () => {
      expect(worldbank.employment(input)).toEqual(outputEmployment);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.employment(input)).not.toEqual(input);
    });
  });
  describe('worldbank.unemployment', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.unemployment).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SL.UEM', () => {
      expect(worldbank.unemployment(input)).toEqual(outputUnemployment);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.unemployment(input)).not.toEqual(input);
    });
  });
});

const inputDataBra = [
  {
    'data': {
      '1960': 36255477,
      '1961': 37321829,
      '1962': 38427687,
      '1963': 39564454,
      '1964': 40719864
    },
    'indicatorName': 'Población, mujeres'
  },
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': ''
    },
    'indicatorName': 'Educación terciaria, profesores (% de mujeres)'
  }
];
/* const inputDataChl = [
        {
        'data': {
            '1960': 3919393,
            '1961': 4008265,
            '1962': 4098796,
            '1963': 4190911,
            '1964': 4284523
        },
        'indicatorName': 'Población, mujeres'
        },
        {
        'data': {
            '1960': '',
            '1961': '',
            '1962': '',
            '1963': '',
            '1964': ''
        },
        'indicatorName': 'Educación terciaria, profesores (% de mujeres)'
        }
    ];
    const inputDataMex = [
        {
        'data': {
            '1960': '',
            '1961': '',
            '1962': '',
            '1963': '',
            '1964': ''
        },
        'indicatorName': 'transición a la escuela secundaria, mujeres (%)'
        },
        {
        'data': {
            '1960': '',
            '1961': '',
            '1962': '',
            '1963': '',
            '1964': ''
        },
        'indicatorName': 'Empleo vulnerable, mujeres (% del empleo femenino)'
        }
    ];
    const inputDataPer = [
        {
        'data': {
            '1960': '',
            '1961': '',
            '1962': '',
            '1963': '',
            '1964': ''
        },
        'indicatorName': 'Empleo vulnerable, mujeres (% del empleo femenino)'
        },
        {
        'data': {
            '1960': '',
            '1961': '',
            '1962': '',
            '1963': '',
            '1964': ''
        },
        'indicatorName': 'Personas desempleadas con educación avanzada, mujeres'
        }
    ];*/

const outputBraPob = [[1960, 36255477], [1961, 37321829], [1962, 38427687], [1963, 39564454], [1964, 40719864]];
const outputSortBraPob =
    [ [ 1964, 40719864 ],
      [ 1963, 39564454 ],
      [ 1962, 38427687 ],
      [ 1961, 37321829 ],
      [ 1960, 36255477 ] ];

const WORLDBANK = {
  'PER': {
    'indicators': [
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'Empleo vulnerable, mujeres (% del empleo femenino)'
      },
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'Personas desempleadas con educación avanzada, mujeres'
      }
    ]
  },
  'MEX': {
    'indicators': [
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'transición a la escuela secundaria, mujeres (%)'
      },
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'Empleo vulnerable, mujeres (% del empleo femenino)'
      }
    ]
  },
  'BRA': {
    'indicators': [
      {
        'data': {
          1960: 36255477,
          1961: 37321829,
          1962: 38427687,
          1963: 39564454,
          1964: 40719864
        },
        indicatorName: 'Población, mujeres'
      },
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'Educación terciaria, profesores (% de mujeres)'
      }
    ]
  },
  'CHL': {
    'indicators': [
      {
        'data': {
          1960: 3919393,
          1961: 4008265,
          1962: 4098796,
          1963: 4190911,
          1964: 4284523
        },
        indicatorName: 'Población, mujeres'
      },
      {
        'data': {
          1960: '',
          1961: '',
          1962: '',
          1963: '',
          1964: ''
        },
        indicatorName: 'Educación terciaria, profesores (% de mujeres)'
      }
    ]
  }
};

const inputSort = [[1964, 40719864], [1963, 39564454], [1962, 38427687], [1961, 37321829], [1960, 36255477]];
/*
    const inputCompare1 = [1960, 36255477];
    const inputCompare2 = [1961, 37321829];

    const outputCompare1 = 1;
    const outputCompare2 = -1;
    const outputCompare3 = 0;
    */
describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.getAndShowData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.getAndShowData).toBe('function');
    });
    it('deberia retornar un objeto cuyo key es el pais y el value un objeto', () => {
      expect(worldbank.getAndShowData(WORLDBANK, 'BRA', 'Población, mujeres')).toEqual(outputBraPob);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.getAndShowData(WORLDBANK, 'BRA', 'Población, mujeres')).not.toEqual(inputDataBra);
    });
  });
});

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.sortData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.sortData).toBe('function');
    });
    it('deberia retornar un array con la data ordenada descendentemente', () => {
      expect(worldbank.sortData(inputSort)).toEqual(outputSortBraPob);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.calculateAverage(inputSort)).not.toEqual(inputSort);
    });
  });
});

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.calculateAverage', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.calculateAverage).toBe('function');
    });
    it('deberia retornar el promedio de la data', () => {
      expect(worldbank.calculateAverage(inputSort)).toEqual(38457862.2);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.calculateAverage(inputSort)).not.toEqual(inputSort);
    });
  });
});

/*
    describe('worldbank.compare', () => {
        it('deberia ser una funcion', () => {
        expect(typeof compare).toBe('function');
        });
        it('deberia retornar el promedio de la data', () => {
        expect(worldbank.compare(inputCompare1, inputCompare2)).toEqual(outputCompare1);
        });
        it('deberia retornar el promedio de la data', () => {
        expect(worldbank.compare(inputCompare2, inputCompare1)).toEqual(outputCompare2);
        });
        it('deberia retornar el promedio de la data', () => {
        expect(worldbank.compare(inputCompare1, inputCompare1)).toEqual(outputCompare3);
        });
        it('deberia retornar un nuevo array, no modificar el original', () => {
        expect(worldbank.compare(inputDataBra)).not.toEqual(inputDataBra);
        });
    });
    */
