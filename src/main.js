//convirtiendo objeto a ARRAY
var arrayDatos = Object.entries(WORLDBANK);


//clonando ARRAY
const clonandoDatos = (dato) => {
    let newArray = [];

for (var i = 0; i < dato.length; i++){

    newArray.push(Object.assign({},dato[i]))
    console.log(dato[i])

    } return newArray
} 

clonandoDatos(arrayDatos);


