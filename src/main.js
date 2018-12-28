const inputSearchText = document.getElementById('input-search-text');
const btnSearch = document.getElementById('btn-search');
const pokemonCardContainer = document.getElementById('pokemon-container');
const filtersByCategories = document.getElementById('pokemon-filters');
const sortBy = document.getElementById('pokemon-order');
const eggPokemon = document.getElementById('filtrar-huevos');
const typePokemon = document.getElementById('pokemon-type');
const typeData = window.POKEMON.pokemon;


const filterInArray = (inputArray) => {
  return inputArray.map(element => {
    return `<label class="badge-${element}">${element}</label>`;
  }).join(' ');
};

const functionfilter = (pokemones) => {
  let templateList = '';

  pokemones.forEach((pokemon) => {
    const card = 
    `
    <article class="col-md-3 col-sm-4 col-xs-6">
        <div class="card-link col-md-12 col-sm-12 col-xs-12">
          <div class="article-details ">
            <img class="post-image " src="${pokemon.img}" />
              <h3 class="post-title">${pokemon.name}</h3>
              <p class="post-description">#${pokemon.num} </p>
              <p class="holo">${filterInArray(pokemon.type)}</p>
          </div>
        </div>
      </article>
      `;
    templateList += card;
  });

  pokemonCardContainer.innerHTML = templateList;
};

const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = window.data.filterData(window.POKEMON.pokemon, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  functionfilter(window.data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
};

typePokemon.addEventListener('change', () => {
  const typeofFilter = 'Tipo';
  const arrTemp = window.data.filterbyType(typeData, typeofFilter, typePokemon.value);
  functionfilter(window.data.filterbyType(arrTemp, typeofFilter, typePokemon.value));
});

eggPokemon.addEventListener('change', () => {
  const typeofFilter = 'Huevo';
  const arrTemp = window.data.filterbyType(typeData, typeofFilter, eggPokemon.value);
  functionfilter(window.data.filterbyType(arrTemp, 'Tipo', typePokemon.value));
});


const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener('change', functionListenFilterOrder);
  sortBy.addEventListener('change', functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
};

functionMain();