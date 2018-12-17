//conversión object=>array
let nuevoArray = Object.entries(WORLDBANK)

const copyArray = (arr) => {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    
    newArray.push(Object.assign({}, arr[i]))
  }
  return newArray;
}

window.copyArray = copyArray;

console.log(nuevoArray)
//copia de array
const copyArray = (arr) => {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    
    newArray.push(Object.assign({}, arr[i]))
  }
  return newArray;
}
//PERÚ
const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SP.POP';
});
console.log(population);
const violence = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SG.VAW';
});
console.log(violence)
const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.PRM';
});
const thirdEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.TER';
});
const secondEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.SEC';
});
 const inscriptionsEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.ENR';
});
const unemployment = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SL.UEM'
});

//MÉXICO
const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SP.POP'
});
const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SG.VAW'
});
const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.PRM'
});
const secondEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.SEC'
});
const thirdEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.TER'
});
const inscriptionsEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.ENR'
});
const unemploymentMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SL.UEM'
});

//CHILE
const populationChl = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SP.POP'
});
const violenceChl = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SG.VAW'
});
const primaryEducationChl = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.PRM'
});
const secondEducationChl= WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.SEC'
});
const thirdEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.TER'
});
const inscriptionsEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SE.ENR'
});
const unemploymentChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0,6) === 'SL.UEM'
});


