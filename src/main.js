const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');
const btnCalculate = document.getElementById('btn-calculateMax');
const typePokemon = document.getElementById('pokemon-type');

const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((pokemon) => {
    const card = `
   <div class="card-link">
    <article class="blog-card">
      <img class="post-image" src="${ pokemon.img}" />
        <div class="article-details">
        <h3 class="post-name">${ pokemon.name}</h3>
        <div class="post-number">Num: ${ pokemon.num}</div>
        <div class="post-type">Tipo: ${ pokemon.type} </div>       
        <div class="post-cady-count">Spawn Chance: ${ pokemon.spawn_chance}</div>
       </div>
    </article>
   </div>`;
    templateListOfCards += card;
  });
  containerList.innerHTML = templateListOfCards;
};
listData(window.POKEMON.pokemon);

const getOrderValue = () => {
  const pokemonData = window.POKEMON.pokemon;
  const valueOrder = selectOrder.value;
  const valueSelectOrder = (valueOrder.split('-'));
  const selectByOrder = window.dataPokemon.sortData(pokemonData, valueSelectOrder[1], valueSelectOrder[0]);
  listData(selectByOrder);
};
selectOrder.addEventListener('change', getOrderValue);

const getCalculateValue = () => {
  const pokemonData = window.POKEMON.pokemon;
  const pokemon = window.dataPokemon.computeStats(pokemonData);
  listData([pokemon]);
};
btnCalculate.addEventListener('click', getCalculateValue);

const typePokemonValue = () => {
  const typeData = window.POKEMON.pokemon;
  const filterCondicion = 'Tipo';
  const typePokemonValue = typePokemon.value;
  const selectByType = window.dataPokemon.filterData(typeData, filterCondicion, typePokemonValue);
  listData(selectByType);
};
typePokemon.addEventListener('change', typePokemonValue);
