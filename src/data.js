// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/**
 * Retorna todos los datos de la muestra
 */
const getAllData = () => {
 var arrayDatos = Object.entries(WORLDBANK);
 //console.log(arrayDatos);
  return arrayDatos;
};
const getDataByCountry = (countryCode) => {
//recuperamos la data convertida en array previamente//
 var arrayDatos = getAllData();
 //console.log(arrayDatos);
// filtramos por codigo de pais(main js) y devolvemos la data
var toReturn = arrayDatos.filter(el => {
  return el[0] == countryCode } );
console.log(toReturn);
  return toReturn;
};
function printData() {
 var arrayDatos = getAllData();
console.log(arrayDatos)
for ( const index in arrayDatos) { // sintaxis de for each //
  const obj = arrayDatos[index]; // obteniendo objeto en el index
  console.log(obj[0] + " " + obj[1].indicators.length); //mostrando codigo y cantidad de indicadores
}
}
//window.getAllData = getAllData;
