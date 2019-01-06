/* eslint-disable no-undef */

// FUNCIONALIDAD DEL MENÚ EN RESPONSIVE
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

// ------------------------ INDICADORES DE PERÚ ------------------------ //
const wbIndicators = WORLDBANK.PER.indicators;

// LISTA DE INDICADORES DE CADA CATEGORÍA IMPRESOS EN HTML (literal templates)

// población
let populationInList = '';
worldbank.population(wbIndicators).forEach(populationElement => {
  const showPopulation = `<li ><a class="indicator-name"> ${populationElement.indicatorName} </a></li>`;
  populationInList += showPopulation;
});
const popContainer = document.getElementById('population-container');
popContainer.innerHTML = populationInList;

// educación primaria
let EduInList = '';
worldbank.education(wbIndicators).forEach(educationElement => {
  const EducationList = `<li><a class="indicator-name"> ${educationElement.indicatorName} </a></li>`;
  EduInList += EducationList;
});
const ulContainerEducation = document.getElementById('education-container');
ulContainerEducation.innerHTML = EduInList;

// educación secundaria
let secEduInList = '';
worldbank.secondEducation(wbIndicators).forEach(secEducationElement => {
  const secEducationList = `<li><a class="indicator-name">${secEducationElement.indicatorName} </a></li>`;
  secEduInList += secEducationList;
});
const secEduContainer = document.getElementById('second-education-container');
secEduContainer.innerHTML = secEduInList;

// educación terciaria
let terEduInList = '';
worldbank.thirdEducation(wbIndicators).forEach(terEducationElement => {
  const terEducationList = `<li><a class="indicator-name">${terEducationElement.indicatorName} </a></li>`;
  terEduInList += terEducationList;
});
const terEduContainer = document.getElementById('third-education-container');
terEduContainer.innerHTML = terEduInList;

// violencia
let vioInList = '';
worldbank.violence(wbIndicators).forEach(vioElement => {
  const vioList = `<li><a class="indicator-name"> ${vioElement.indicatorName} </a></li>`;
  vioInList += vioList;
});
const vioContainer = document.getElementById('violence-container');
vioContainer.innerHTML = vioInList;

// trabajo
let jobInList = '';
worldbank.job(wbIndicators).forEach(jobElement => {
  const jobList = `<li><a class="indicator-name"> ${jobElement.indicatorName} </a></li>`;
  jobInList += jobList;
});
const jobContainer = document.getElementById('job-container');
jobContainer.innerHTML = jobInList;

// desempleo
let unempInList = '';
worldbank.unemployment(wbIndicators).forEach(unemploymentElement => {
  const unemploymentList = `<li><a class="indicator-name">${unemploymentElement.indicatorName} </a></li>`;
  unempInList += unemploymentList;
});
const unemploymentContainer = document.getElementById('unemployment-container');
unemploymentContainer.innerHTML = unempInList;

// alfabetización
let literacyInList = '';
worldbank.literacy(wbIndicators).forEach(literacyElement => {
  const literacyList = `<li><a class="indicator-name">${literacyElement.indicatorName} </a></li>`;
  literacyInList += literacyList;
});
const literacyContainer = document.getElementById('literacy-container');
literacyContainer.innerHTML = literacyInList;

// ACCIONES EN PAGINA PRINCIPAL
const home = document.getElementById('pagina-inicio');
const pagePeru = document.getElementById('all-data');

const bHome = document.getElementById('inicio');
const bPeru = document.getElementById('peru-menu');

bHome.addEventListener('click', () => {
  home.style.display = 'block';
  pagePeru.style.display = 'none';
});

bPeru.addEventListener('click', () => {
  home.style.display = 'none';
  pagePeru.style.display = 'block';
});

// MOSTRADO Y OCULTADO DE CADA PANEL DE INDICADOR
document.getElementById('menu').style.display = 'block';
document.getElementById('one').style.display = 'block';
document.getElementById('two').style.display = 'block';
document.getElementById('three').style.display = 'none';
document.getElementById('four').style.display = 'none';
document.getElementById('five').style.display = 'none';
document.getElementById('six').style.display = 'none';
document.getElementById('seven').style.display = 'none';
document.getElementById('eight').style.display = 'none';
document.getElementById('nine').style.display = 'none';
document.getElementById('countries').style.display = 'none';
document.getElementById('section-data').style.display = 'none';

// ACCIONES DE CADA OPCIÓN DE SELECT
const indicatorSelect = document.getElementById('select-indicator');

const showIndicator = () => {
  if (indicatorSelect.selectedIndex === 0) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 1) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 2) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'block';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 3) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'block';
    document.getElementById('six').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 4) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'block';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 5) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'block';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 6) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'block';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 7) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'block';
    document.getElementById('nine').style.display = 'none';
  } else if (indicatorSelect.selectedIndex === 8) {
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
    document.getElementById('seven').style.display = 'none';
    document.getElementById('eight').style.display = 'none';
    document.getElementById('nine').style.display = 'block';
  }
};

indicatorSelect.addEventListener('click', showIndicator);
let searchData = [];
let hijos = document.querySelectorAll('ol.padre > li > a.indicator-name');

for (let unHijo of hijos) {
  unHijo.addEventListener('click', (event) => {
    const hijo = event.target;
    const nameTypeIndicator = document.getElementById('name-type-indicator');
    const name = hijo.innerText.trim();
    nameTypeIndicator.innerHTML = name;
    searchData[0] = name;
    document.getElementById('countries').style.display = 'block';
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    document.getElementById('six').style.display = 'none';
  });
}
const groupFlags = document.getElementById('group-flags');
groupFlags.addEventListener('click', (event) => {
  const country = event.target.value;
  searchData[1] = country;
  document.getElementById('section-data').style.display = 'block';
  const staticData = document.getElementById('static-data');
  const descData = document.getElementById('desc-data');
  staticData.style.display = 'block';
  descData.style.display = 'none';

  let getPopulationList = '';

  worldbank.getAndShowData(WORLDBANK, searchData[1], searchData[0]).forEach((element) => {
    element.forEach((element1) => {
      const populationList = `<li ><a class='indicator-name'> ${element1} </a></li>` ;
      getPopulationList += populationList;
    });
  });

  staticData.innerHTML = getPopulationList;
  const showAverage = document.getElementById('show-average');
  showAverage.innerHTML = calculateAverage(worldbank.getAndShowData(WORLDBANK, searchData[1], searchData[0]));
});

const btnSortDataDown = document.getElementById('btn-sort-data-down');
btnSortDataDown.addEventListener('click', () => {
  let getDescDataList = '';

  worldbank.sortData(getAndShowData(WORLDBANK, searchData[1], searchData[0])).forEach((element) => {
    element.forEach((element1) => {
      const descDataList = `<li ><a class='indicator-name'> ${element1} </a></li>` ;
      getDescDataList += descDataList;
    });
  });
  const staticData = document.getElementById('static-data');
  const descData = document.getElementById('desc-data');
  staticData.style.display = 'none';
  descData.style.display = 'block';
  descData.innerHTML = getDescDataList;
});
