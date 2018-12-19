const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');
const btnTipo=document.getElementById('btn-grass');

const listData = (data) => {
 let templateListOfCards = '';
 //console.log('elemento[0]= '+data[1].name);
 
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

btnTipo.addEventListener('click', ()=>{ 
const dataInput=POKEMON.pokemon;
const valueType=btnTipo.value;
const valueTipo=dataPokemon.filterData(dataInput, valueType);

//console.log(valueTipo);
listData(valueTipo);
});

/* document.getElementById("btn-acero").onclick = displayDate;
function displayDate() {
  document.getElementById("container-list").innerHTML = dataPokemon.arrayTipo(POKEMON.pokemon, valueType);
} */