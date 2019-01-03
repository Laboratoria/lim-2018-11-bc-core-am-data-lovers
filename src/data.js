// Filtrar
function filterData(data, filterBy, condition) {
  let arrFilter = [];
  switch (filterBy) {
  case 'Type':
    if (condition === 'all') {
      arrFilter = data;
    } else {
      arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    }
    break;
  case 'Egg':
    if (condition === 'all') {
      arrFilter = data;
    } else {
      arrFilter = data.filter(compare => (compare.egg === condition));
    }
    break;
  default:
  }
  return arrFilter;
}

const filterNum = (data, dataFilter) => {
  let dataCopy = [];
  let arrFilter = [];
  for (let i = 0; i < data.length; i++) dataCopy.push(Object.assign({}, data[i]));
  arrFilter = data.filter(
    element => element.num.indexOf(dataFilter) > -1);
  return arrFilter;
}; 

// Buscar
const searchByFilter = (data, dataFilter, condition) => {
  let dataCopy = [];
  let arrFilter = [];
  let saveObject = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if (dataFilter.length === 0)
    return dataCopy;

  switch (condition) {
  case 0:
    arrFilter = data.filter(
      element => element.num.indexOf(dataFilter) > -1);
    break;
  case 1:
    arrFilter = dataCopy.filter(
      element => element.name.toUpperCase().indexOf(dataFilter.toUpperCase()) !== -1);
    break;
  case 2:
    arrFilter = dataCopy.filter(
      element => element.type.filter(ele => ele.toUpperCase().indexOf(dataFilter.toUpperCase()) !== -1).length);
    break;
  case 3:
    arrFilter = dataCopy.filter(
      element => element.weaknesses.filter(ele => ele.toUpperCase().indexOf(dataFilter.toUpperCase()) !== -1).length);
    break; 
  case 4:
    saveObject = filterNum(dataCopy, dataFilter);
    arrFilter = Object.keys(saveObject[0]).map(element => { 
      if (element === 'prev_evolution') {
        return (saveObject[0].prev_evolution.map(element => {
          const newObject = {};
          newObject.name = filterNum(dataCopy, element.num)[0].name;
          newObject.img = filterNum(dataCopy, element.num)[0].img;
          newObject.num = filterNum(dataCopy, element.num)[0].num;
          return newObject;
        }));
      }
    }).filter(element => element);
    return arrFilter;
    
  case 5:
    saveObject = filterNum(dataCopy, dataFilter);
    arrFilter = Object.keys(saveObject[0]).map(element => {
      if (element === 'next_evolution') {
        return (saveObject[0].next_evolution.map(element => {
          const newObject = {};
          newObject.name = filterNum(dataCopy, element.num)[0].name;
          newObject.img = filterNum(dataCopy, element.num)[0].img;
          newObject.num = filterNum(dataCopy, element.num)[0].num;
          return newObject;
        }));
      }
    }).filter(element => element);
    return arrFilter;
  default: 
  }
  return arrFilter;
};

// Ordenar
const sortData = (data, sortBy, sortOrder) => {
  let arrFilter = [];

  for (let i = 0; i < data.length; i++)
    arrFilter.push(Object.assign({}, data[i]));
  if (sortBy === 0) {
    arrFilter.sort((idA, idB) => {
      if (sortOrder === 0) return idA.id - idB.id;
      else return idB.id - idA.id;
    });
  } else {
    arrFilter.sort((nameA, nameB) => {
      if (sortOrder === 0) {
        if (nameA.name > nameB.name) return 1 ;
        else return -1;
      } else {
        if (nameA.name < nameB.name) return 1 ;
        else return -1;
      }
    });
  }
  return arrFilter ;
};

// % de Pokemon x tipo
/* const cantXType = arrFilterPokemonType.length;
   const porcentaje = ((cantXType / 151) * 100);
   arrPorcentaje.push(porcentaje); 
*/
function stats(data, condition) {
  let arrPorcentaje = [];
  for (let i = 0; i < condition.length; i++) { 
    const arrFilterPokemonType = data.filter(compare => (compare.type[0] === condition[i] || compare.type[1] === condition[i]));    
    const cantXType = arrFilterPokemonType.length;
    arrPorcentaje.push(cantXType);   
  }
  return arrPorcentaje; 
}

window.data = {
  searchByFilter,
  sortData,
  filterData,
  stats,
};