console.table(WORLDBANK)
var slideIndex = 1;
showSlides(slideIndex);

<<<<<<< HEAD
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
=======
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
>>>>>>> 2547c29648f7ea92062b2e044291ec22ef7ccd24
