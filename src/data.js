const sortData = (data, sortBy, sortOrder) => {
  let newArraySort = [];
  switch (sortOrder) {
  case 'asc':
    if (sortBy === 'name') {
      newArraySort = data.sort((elementA, elementB) => (elementA.name > elementB.name ? 1 : -1));
    }
    break;
  case 'desc':
    if (sortBy === 'name') {
      newArraySort = data.sort((elementA, elementB) => (elementA.name < elementB.name ? 1 : -1));
    }
    break;
  }
  return newArraySort;
};

const filterData = (data, filterBy, condition) => {
  let newArrayFilter = [];
  if (filterBy) {
    newArrayFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition || compare.type[2] === condition));
  }
  return newArrayFilter;
};

const computeStats = (data) =>
  data.reduce((acum, element) =>
    (acum.spawn_chance > element.spawn_chance)
      ? acum :
      element);

window.dataPokemon = {
  sortData,
  filterData,
  computeStats,
};
