//convirtiendo objeto a ARRAY
var arrayDatos = Object.entries(WORLDBANK);

//clonando ARRAY
const clonandoDatos = (dato) => {
    let newArray = [];

for (var i = 0; i < dato.length; i++){

    newArray.push(Object.assign({},dato[i]))
    //console.log(dato[i])

    } return newArray
} 

const dataCopia = clonandoDatos(arrayDatos);
const valoresData = Object.values(dataCopia);

//valores por PAÍS

const PERU = Object.values(valoresData[0]);
const valuePeru = Object.values(PERU[1]);

const MEXICO = Object.values(valoresData[1]);
const valueMex = Object.values(MEXICO[1])

const CHILE = Object.values(valoresData[3]);
const valueChil = Object.values(CHILE[1]);


const indicadoresPER = Object.values(valuePeru[0]);
const data = Object.values(indicadoresPER[0]);
const dataForYear = Object.values(data[0])

let resultsPERU = dataForYear.filter(number => number > 1);
console.log(resultsPERU)