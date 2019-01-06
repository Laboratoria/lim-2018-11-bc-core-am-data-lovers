/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global WORLDBANK*/
// FILTRO DE INDICADORES EN PERÚ POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN Y EMPLEO.

const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const sortDataPop = population.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const violence = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const sortDataVio = violence.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const sortDataEdu = primaryEducation.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});


const thirdEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const secondEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const inscriptionsEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemployment = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const sortDataUnem = unemployment.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const literacy = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

const sortDataLit = literacy.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

// FILTRO DE INDICADORES POR MEXICO

const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const sortDataPopMex = populationMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const sortDataVioMex = violenceMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});


const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const sortDataEduMex = primaryEducationMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

/*
const secondEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});
*/

const unemploymentMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const sortDataUnemMex = unemploymentMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const literacyMex = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

const sortDataLitMex = literacyMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

// FILTRO DE INDICADORES EN CHILE


const populationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violenceChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const secondEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemploymentChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacyChl = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

// FILTRO DE INDICADORES EN BRASIL

const populationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violenceBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const secondEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemploymentBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacyBrasil = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

window.Worldbank = {
  population,
};
