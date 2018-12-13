//conversión object=>array
let nuevoArray = Object.entries(WORLDBANK)
/*console.log(newArray)*/
//copia de array
const copyArray = (arr) => {
  let newArray = [];
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
    newArray.push(Object.assign({}, arr[i]))
  }
  return newArray;
}
copyArray(nuevoArray);
let llaves = nuevoArray.filter(nuevoArray => nuevoArray.length > 1) 
console.log(llaves)
