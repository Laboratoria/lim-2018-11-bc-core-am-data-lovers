
function filterbyType(data, filterBy, condition) {
  let listIdPokemonType = [];
  switch (filterBy) {
  case 'Tipo':
    if (condition === 'all') {
      listIdPokemonType = data;
    } else {
      listIdPokemonType = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition ||
          compare.type[2] === condition));
    }
    break;
  case 'Huevo':
    if (condition === 'all') {
      listIdPokemonType = data;
    } else {
      listIdPokemonType = data.filter(compare => (compare.egg === condition));
    }
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
  default: 
  }
  return newArrayFilter;
};


const sortDataFunction = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
  if (sortBy === 0) {
    newArrayFilter.sort((idOne, idTwo) => {
      if (sortOrder === 0) return idOne.id - idTwo.id;
      else return idTwo.id - idOne.id;
    });
  } else {
    newArrayFilter.sort((namea, nameb) => {
      if (sortOrder === 0) {
        if (namea.name > nameb.name) return 1 ;
        else return -1;
      } else {
        if (namea.name < nameb.name) return 1 ;
        else return -1;
      }
    });
  }
  return newArrayFilter ;
};

window.data = {
  filterData: filterDataFunction,
  sortData: sortDataFunction,
  filterbyType,
};

