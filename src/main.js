const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');

const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((pokemon) => {
    const card = `
   <div class="card-link">
    <article class="blog-card">
      <img class="post-image" src="${ pokemon.img}" />
        <div class="article-details">
        <h3 class="post-name">${ pokemon.name}</h3>
        <h4 class="post-number">Id num: ${ pokemon.num}</h4>
        <h4 class="post-type">tipo: ${ pokemon.type} </h4>
        <h4 class="post-cady-count">candy ${ pokemon.candy_count}</h4>
       </div>
    </article>
   </div>`;
    templateListOfCards += card;
  }),
  containerList.innerHTML = templateListOfCards;
}
listData(POKEMON.pokemon);

const getOrderValue = () => {
  const valueOrder = selectOrder.value;
  const valueOrder1=(valueOrder.split('-')); 
  const selectByOrder = dataPokemon.sortData(POKEMON.pokemon,valueOrder1[1],valueOrder1[0]);
  listData(selectByOrder);
 }
selectOrder.addEventListener("change", getOrderValue);
