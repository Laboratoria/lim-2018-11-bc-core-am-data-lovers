
function filterbyType(data, filterBy, condition) {
  let listIdPokemonType = [];
  switch (filterBy) {
  case 'Tipo':
    listIdPokemonType = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition || compare.type[2] === condition));
    break;
  case 'Huevo':
    listIdPokemonType = data.filter(compare => (compare.egg === condition));
    break;
  default:
  }
  return listIdPokemonType;
}

const filterDataFunction = (data, dataFilter, condition) => {
  let dataCopy = [];
  let arrayFilter = [];
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if (dataFilter.length === 0)
    return dataCopy;

  switch (condition) {
  case 0:
    for (let i = 0; i < dataCopy.length; i++) {
      arrayFilter.push(dataCopy[i].num);
      if (arrayFilter[i].indexOf(dataFilter) !== -1)
        newArrayFilter.push(dataCopy[i]);
    } break;
  case 1:
    for (let i = 0; i < dataCopy.length; i++) {
      arrayFilter.push(dataCopy[i].name.toLowerCase());
      if (arrayFilter[i].indexOf(dataFilter.toLowerCase()) !== -1)
        newArrayFilter.push(dataCopy[i]);
    }
    break;
  case 2:
    for (let i = 0; i < dataCopy.length; i++) {
      for (let j = 0; j < dataCopy[i].type.length; j++) {
        arrayFilter.push(dataCopy[i].type[j].toLowerCase());
        if (arrayFilter[j].indexOf(dataFilter.toLowerCase()) !== -1)
          newArrayFilter.push(dataCopy[i]);
      }
      arrayFilter = [];
    }
    break;
  case 3:
    for (let i = 0; i < dataCopy.length; i++) {
      for (let j = 0; j < dataCopy[i].weaknesses.length; j++) {
        arrayFilter.push(dataCopy[i].weaknesses[j].toLowerCase());
        if (arrayFilter[j].indexOf(dataFilter.toLowerCase()) !== -1)
          newArrayFilter.push(dataCopy[i]);
      }
      arrayFilter = [];
    }
    break;
  default: alert('No existe opcion');
  }
  return newArrayFilter;
};


const sortDataFunction = (data, sortBy, sortOrder) => {

  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));

  if (sortBy === 0) {
    //Ordenar por ID
    newArrayFilter.sort(
      function (a, b) {
        if (sortOrder === 0) return a.id - b.id;
        else return b.id - a.id;
      }
    );
  }
  else {
    //Ordenar por A-Z
    newArrayFilter.sort(
      function (a, b) {
        if (sortOrder === 0) {
          if (a.name > b.name) return 1;
          else return -1;
        }
        else {
          if (a.name < b.name) return 1;
          else return -1;
        }
      }
    );
  }
  return newArrayFilter;
}

window.data = {
  filterData: filterDataFunction,
  sortData: sortDataFunction,
  filterbyType,
}

