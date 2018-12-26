//createTable();
// aca estamos jalando el nombre del elemento del array dado en la base de datos previamente//
//getDataByCountry("BRA");
printData();
/**
 * Funcion que crea la tabla a partir de los datos
 */
function createTable() {
    const data = getAllData();
    // se recorre el objeto
    for (var key in data) {
            console.log(key);
            console.log(data[key]);
            addElementToTable(data[key]);
    }
}
