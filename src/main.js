const worldBankIndicators = WORLDBANK.PER.indicators;

// obtener lista de indicadores que se van a pintar en <ul>
let getPopulationList = '';
worldbank.population(worldBankIndicators).forEach(populationElement => {
  const populationList = `<div><a href=#> ${populationElement.indicatorName} </a></div>`;
  getPopulationList += populationList;
});
const ulContainerPoblacion = document.getElementById('container-list-population');
ulContainerPoblacion.innerHTML = getPopulationList;// pintamos lista de indicadores poblacion

let getEducationList = '';
worldbank.education(worldBankIndicators).forEach(educationElement => {
  const educationList = `<div><a href=#> ${educationElement.indicatorName} </a></div>`;
  getEducationList += educationList;
});
const ulContainerEducation = document.getElementById('container-list-education');
ulContainerEducation.innerHTML = getEducationList;// pintamos lista indicadores ed. terciaria

let getSecondaryEducationList = '';
worldbank.secondaryEducation(worldBankIndicators).forEach(secondaryEducationElement => {
  const secondaryEducationList = `<div><a href=#> ${secondaryEducationElement.indicatorName} </a></div>`;
  getSecondaryEducationList += secondaryEducationList;
});
const ulContainerSecondaryEducation = document.getElementById('container-list-secondary-education');
ulContainerSecondaryEducation.innerHTML = getSecondaryEducationList;// pintamos lista indicadores ed. secundaria

let getEmploymentList = '';
worldbank.employment(worldBankIndicators).forEach(employmentElement => {
  const employmentList = `<div><a href=#> ${employmentElement.indicatorName} </a></div>`;
  getEmploymentList += employmentList;
});
const ulContainerEmployment = document.getElementById('container-list-employment');
ulContainerEmployment.innerHTML = getEmploymentList;// pintamos lista de indicadores empleo

let getUnemploymentList = '';
worldbank.unemployment(worldBankIndicators).forEach(unemploymentElement => {
  const unemploymentList = `<div><a href=#> ${unemploymentElement.indicatorName} </a></div>`;
  getUnemploymentList += unemploymentList;
});
const ulContainerUnemployment = document.getElementById('container-list-unemployment');
ulContainerUnemployment.innerHTML = getUnemploymentList;// pintamos lista de indicadores desempleo


// mostrando por tipo de indicador que pide el usuario
document.getElementById('two').style.display = 'none';
document.getElementById('three').style.display = 'none';
document.getElementById('four').style.display = 'none';
document.getElementById('five').style.display = 'none';
document.getElementById('six').style.display = 'none';


const indicatorSelect = document.getElementById('select-indicator');

const showIndicator = () => {
  if (indicatorSelect.selectedIndex === 0) {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 1) {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 2) {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'block';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 3) {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'block';
    document.getElementById('six').style.display = 'none';
  } else {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'block';
  }
};
indicatorSelect.addEventListener('click', showIndicator);
