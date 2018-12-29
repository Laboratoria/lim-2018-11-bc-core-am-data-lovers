const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');
const btnCalculate = document.getElementById('btn-calculateMax');
const selectPokemonType = document.getElementById('select-pokemon-type');

const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((pokemon) => {
    const card = `
   <div class="card-link">
    <article class="blog-card">
      <img class="post-image" src="${ pokemon.img}" />
        <div class="article-details">
        <h3 class="post-name">${ pokemon.name}</h3>
        <p class="post-number">Num: ${ pokemon.num}</p>
        <p class="post-type">Tipo: ${ pokemon.type} </p>       
        <p class="post-spaw-chance">Spawn Chance: ${ pokemon.spawn_chance} %</p>
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
  const selectByOrder = window.dataPokemon.sortData(pokemonData, valueSelectOrder[0], valueSelectOrder[1]);
  listData(selectByOrder);
};
selectOrder.addEventListener('change', getOrderValue);

const typePokemonValue = function() {
  const typeData = window.POKEMON.pokemon;
  const filterCondicion = 'Tipo';
  const typePokemonValue = selectPokemonType.value;
  const selectByType = window.dataPokemon.filterData(typeData, filterCondicion, typePokemonValue);
  listData(selectByType);
};
selectPokemonType.addEventListener('change', typePokemonValue);

const getCalculateValue = () => {
  const pokemonData = window.POKEMON.pokemon;
  const pokemon = window.dataPokemon.computeStats(pokemonData);
  listData([pokemon]);
};
btnCalculate.addEventListener('click', getCalculateValue); 

 
