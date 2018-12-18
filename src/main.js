const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');

const listData = (data) => {
 let templateListOfCards = '';
 data.forEach((pokemon) => {
   const card = `
   <div>
   <ul>
     <li><img class="post-image" src="${ pokemon.img}" /> </li>
       <li>${ pokemon.name}</li>
       <li>Id num: ${ pokemon.num}</li>
       <li>tipo: ${ pokemon.type} </p>
       <li>candy ${ pokemon.candy_count}</li>
   </ul>
   </div>`;
   templateListOfCards += card;
 })
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
