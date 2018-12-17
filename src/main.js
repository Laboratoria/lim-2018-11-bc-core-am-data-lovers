const inputSearchText = document.getElementById('input-search-text');
const btnSearch = document.getElementById('btn-search');
const pokemonCardContainer = document.getElementById('pokemon-container');
const filtersByCategories = document.getElementById("pokemon-filters");
const sortBy = document.getElementById("pokemon-order");

const functionfilter = (pokemones) => {
  let templateList = '';

  pokemones.forEach((pokemon) => {

    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${pokemon.img}" />
          <div class="article-details">
            <h3 class="post-title">${pokemon.name}</h3>
            <p class="post-description">
              ID: #${pokemon.num}
              </p>
            <p class="pokemon-type">
             ${pokemon.type}</p>
            <p class="candy">${pokemon.candy}</p>
          </div>
        </article>
      </div>
    `;
    templateList += card;
  })

  pokemonCardContainer.innerHTML = templateList;
}
const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = data.filterData(POKEMON.pokemon, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  functionfilter(data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
}

const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener("change", functionListenFilterOrder);
  sortBy.addEventListener("change", functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
}

functionMain();