/* eslint-disable no-undef */

// FILTRO DE INDICADORES EN PERÚ POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN Y EMPLEO.

const population = WORLDBANK.PER.indicators.filter((pop) => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

for (indicador of population) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}
for (indicador of violence) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

for (indicador of primaryEducation) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

const thirdEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

for (indicador of thirdEducation) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

const secondEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

for (indicador of secondEducation) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

const inscriptionsEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

for (indicador of inscriptionsEducation) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

const unemployment = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

for (indicador of unemployment) {
  document.getElementById('table-container').innerHTML += indicador.indicatorName;
}

// FILTRO DE INDICADORES POR MEXICO

const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

for (indicador of populationMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

for (indicador of violenceMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

for (indicador of primaryEducationMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const secondEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

for (indicador of secondEducationMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const thirdEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

for (indicador of thirdEducationMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const inscriptionsEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

for (indicador of inscriptionsEducationMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

const unemploymentMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

for (indicador of unemploymentMex) {
  document.getElementById('table-containerMex').innerHTML += indicador.indicatorName;
}

// FILTRO DE INDICADORES EN CHILE


const populationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

for (indicador of populationChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const violenceChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

for (indicador of violenceChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const primaryEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

for (indicador of primaryEducationChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const secondEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

for (indicador of secondEducationChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const thirdEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

for (indicador of thirdEducationChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const inscriptionsEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

for (indicador of inscriptionsEducationChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

const unemploymentChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

for (indicador of unemploymentChl) {
  document.getElementById('table-containerChile').innerHTML += indicador.indicatorName;
}

// FILTRO DE INDICADORES EN BRASIL

const populationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

for (indicador of populationBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const violenceBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

for (indicador of violenceBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const primaryEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

for (indicador of primaryEducationBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const secondEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

for (indicador of secondEducationBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const thirdEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

for (indicador of thirdEducationBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const inscriptionsEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

for (indicador of inscriptionsEducationBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}

const unemploymentBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

for (indicador of unemploymentBrasil) {
  document.getElementById('table-containerBra').innerHTML += indicador.indicatorName;
}
window.example = {


};

