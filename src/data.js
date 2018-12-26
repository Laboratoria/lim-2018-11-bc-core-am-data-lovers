
const arrayDatos = Object.entries(WORLDBANK);
const valoresData = Object.values(arrayDatos);

// valores por PAÍS

const PERU = Object.values(valoresData[0]);
const valuePeru = Object.values(PERU[1]);
const MEXICO = Object.values(valoresData[1]);
const valueMex = Object.values(MEXICO[1]);
const CHILE = Object.values(valoresData[3]);
const valueChil = Object.values(CHILE[1]);


const indicadoresPER = Object.values(valuePeru[0]);
const data = Object.values(indicadoresPER[0]);
const dataForYear = Object.entries(data[0]);


let resultsPERU = dataForYear.filter(number => number > 1);


const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const indicatorName = WORLDBANK.PER.indicators.map(indicator => indicator.indicatorName);
indicatorName.forEach((elemento) => {
  document.getElementById("lista").innerHTML = elemento;
    console.log(elemento);
});



const violence = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});
const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
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

const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});
const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});
const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});
const secondEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});
const thirdEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});
const inscriptionsEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});
const unemploymentMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

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


