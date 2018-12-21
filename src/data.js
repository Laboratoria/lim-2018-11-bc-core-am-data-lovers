const sortData = (data, sortBy, sortOrder) => {
  const newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));
  }
  if (sortBy === 'NAME') { // nombre
    if (sortOrder === 'ASC') { // ascendente
      newArraySort.sort((elementA, elementB) => {
        if (elementB.name > elementA.name) {
          return -1;
        }
        if (elementB.name < elementA.name) {
          return 1;
        }
        return 0;
      });
    }
    if (sortOrder === 'DESC') { // descendente
      newArraySort.sort((elementA, elementB) => {
        if (elementA.name > elementB.name) {
          return -1;
        }
        if (elementA.name < elementB.name) {
          return 1;
        }
        return 0;
      });
    }
  }
  return newArraySort;
};

/* const filterData = (data, condition) => {
  return data.filter(tipo => {
    if (tipo.type[0] === condition || tipo.type[1] === condition) {
      console.log('Es true');
    }
    return (tipo.type[0] === condition || tipo.type[1] === condition);
  });
};
 */
// const computeStats = (data) => {}

const filterData = (data, filterBy, condition) => {
  let newArrayFilter = [];
  if (filterBy) {
    newArrayFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition || compare.type[2] === condition));
  }
  return newArrayFilter;
};

window.dataPokemon = {
  sortData,
  filterData,
};
