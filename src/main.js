
const botonInicial = document.getElementById('boton-inicio');
const botonPeru = document.getElementById('btn-peru');
const botonMexico = document.getElementById('btn-mexico');
const botonChile = document.getElementById('btn-chile');
const botonBrasil = document.getElementById('btn-brasil');

const paginaInicio = document.getElementById('Pagina-Inicio');
const paginaPeru = document.getElementById('Pagina-Peru');
const paginaMexico = document.getElementById('Pagina-Mexico');
const paginaChile = document.getElementById('Pagina-Chile');
const paginaBrasil = document.getElementById('Pagina-Brasil');
const dataPeru = document.getElementById("mostrarData");

paginaPeru.style.display = 'none';
paginaMexico.style.display = 'none';
paginaChile.style.display = 'none';
paginaBrasil.style.display = 'none';


botonPeru.addEventListener('click', () => {
  paginaInicio.style.display = 'none';
  paginaPeru.style.display = 'block';
  paginaMexico.style.display = 'none';
  paginaChile.style.display = 'none';
  paginaBrasil.style.display = 'none';

  dataPeru.innerHTML = population.join();


});

botonMexico.addEventListener('click', () => {
  paginaInicio.style.display = 'none';
  paginaPeru.style.display = 'none';
  paginaMexico.style.display = 'block';
  paginaPeru.style.display = 'none';
  paginaChile.style.display = 'none';
  paginaBrasil.style.display = 'none';
});

botonChile.addEventListener('click', () => {
  paginaMexico.style.display = 'none';
  paginaChile.style.display = 'block';
  paginaPeru.style.display = 'none';
  paginaBrasil.style.display = 'none';
  paginaInicio.style.display = 'none';
});

botonBrasil.addEventListener('click', () => {
  paginaBrasil.style.display = 'block';
  paginaMexico.style.display = 'none';
  paginaPeru.style.display = 'none';
  paginaChile.style.display = 'none';
  paginaInicio.style.display = 'none';
});

botonInicial.addEventListener('click', () => {
  paginaInicio.style.display = 'block';
  paginaMexico.style.display = 'none';
  paginaPeru.style.display = 'none';
  paginaChile.style.display = 'none';
  paginaBrasil.style.display = 'none';
});