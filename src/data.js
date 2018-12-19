const sortData = (data, sortBy, sortOrder) => {
  const newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));
  }
  if (sortBy === 'NAME') { // nombre
    if (sortOrder === 'ASC') { // ascendente
      newArraySort.sort((a, b) => {
        if (b.name > a.name) {
          return -1;
        }
        if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    } else if (sortOrder === 'DESC') { // descendente
      newArraySort.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    }
  } else if (sortBy === 'ID') {// id
    if (sortOrder === 'ASC') { // ascendente
      newArraySort.sort((a, b) => {
        if (b.id - a.id) {
          return -1;
        }
        if (a.id - b.id) {
          return 1;
        }
        return 0;
      })
    }
    else if (sortOrder === 'DESC') { // descendente
      newArraySort.sort((a, b) => {
        if (a.id - b.id) {
          return -1;
        }
        if (b.id - a.id) {
          return 1;
        }
        return 0;
      })
    }
  }
  return newArraySort;
}

/* const filterData=(data)=>{
  const newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));
  }
} */
const filterData = (data, condition) => {
  /* const filterTipo=POKEMON.pokemon.filter(tipo=>tipo.type[0]==='Poison' || tipo.type[1]==='Poison');
  console.log(filterTipo) */
  //console.log(condition);  
  return data.filter(tipo => {
    if (tipo.type[0] === condition || tipo.type[1] === condition) {
      console.log('Es true');
    }
    return (tipo.type[0] === condition || tipo.type[1] === condition);
  });
}

window.dataPokemon = {
  sortData,
  filterData,
}
