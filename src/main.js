const inputSearchText = document.getElementById('input-search-text');
const btnSearch = document.getElementById('btn-search');
const pokemonCardContainer = document.getElementById('pokemon-container');
const filtersByCategories = document.getElementById('pokemon-filters');
const sortBy = document.getElementById('pokemon-order');
const eggPokemon = document.getElementById('egg-filter');
const typePokemon = document.getElementById('type-filter');
const typeData = window.POKEMON.pokemon;
const arrkeys = Object.values(window.POKEMON.pokemon);

const filterInArray = (inputArray) => {
  return inputArray.map(element => {
    return `<label class="badge-${element}">${element}</label>`;
  }).join(' ');
};

const filterEvolution = (data, arrayEvolution) => {
  let stringLabelSrc = [];
  let saveObjectPreEvolution = [];
  let saveObjectNextEvolution = [];

  saveObjectPreEvolution = window.data.searchByFilter(data, arrayEvolution, 4);
  if (saveObjectPreEvolution) {
    saveObjectPreEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`
        <div class="poke-evolution col p-2">
        <img src=${ele.img} alt=${ele.name}/>
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  saveObjectNextEvolution = window.data.searchByFilter(data, arrayEvolution, 5);
  if (saveObjectNextEvolution) {
    saveObjectNextEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`
        <div class="poke-evolution col p-2">
        <img src=${ele.img} alt={name} />
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  return stringLabelSrc.join('');
};

const functionfilter = (pokemones) => {
  let data = [];
  let newGrill = [];
  pokemonCardContainer.value = '';

  
  for (let i = 0; i < pokemones.length; i++)
    data.push(Object.assign({}, pokemones[i]));

  for (let i = 0; i < data.length; i++) {
    newGrill.push(`

    <article class="col-md-3 col-sm-4 col-xs-6">
        <a href="#modal${i}">
        <div class="card-link col-md-12 col-sm-12 col-xs-12">
              <div class="article-details">
                <img class="post-image " src="${data[i].img}" />
                  <h3 class="post-title">${data[i].name}</h3>
                  <p class="post-description">#${data[i].num} </p>
                  <p class="type-labels">${filterInArray(data[i].type)}</p>
              </div>
            </div>
            </a>
          </article>
        </a>
        <section id="modal${i}" class="modal-window">
        <section class="modal-container">
        <a href="#" class="arrow fixed-top text-primary m-2 ml-md-4 px-2 py-1"><</a>
          <section class="text-center">
          <h2 class="title-modal text-center mt-2">${data[i].name}</h2>
          <figure class="mb-2">
          <img src="${data[i].img}" alt="${data[i].name}">
          </figure>
          <div class="col-md-6 text-center text-md-center">
          <article class="mb-2">
          <h5> Número en la pokedex: </h5>
          <span class="text-size"> # ${data[i].num}</span>
          </article>
          <article class="mb-2">
          <h5 class="mb-0">Tipo:</h5>
          <p> ${filterInArray(data[i].type)}</p>
          </article>
          <article class="mb-2">
          <h5>Nombre de caramelos:</h5>
          <span class="text-size">${data[i].candy}</span>
          </article>
          <article class="mb-2">
          <h5 class="mb-0">Debilidades:</h5>
          <p> ${filterInArray(data[i].weaknesses)}</p>
          </article>
          </section>
          <section class="text-center">
          <h5>Evoluciones</h5>
          <div class="col p-2">
          <div>${filterEvolution(window.POKEMON.pokemon, data[i].num)}
          </div>
          </div>
          </div>
          </section>
          </section>
          </section>`
    );
  }
  pokemonCardContainer.innerHTML = newGrill.join('');
};
functionfilter(arrkeys);


const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = window.data.searchByFilter(arrkeys, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  functionfilter(window.data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
};

typePokemon.addEventListener('change', () => {
  const typeofFilter = 'Type';
  const arrTemp = window.data.filterData(typeData, typeofFilter, typePokemon.value);
  functionfilter(window.data.filterData(arrTemp, typeofFilter, typePokemon.value));
});

eggPokemon.addEventListener('change', () => {
  const typeofFilter = 'Egg';
  const arrTemp = window.data.filterData(typeData, typeofFilter, eggPokemon.value);
  functionfilter(window.data.filterData(arrTemp, 'Type', typePokemon.value));
});


const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener('change', functionListenFilterOrder);
  sortBy.addEventListener('change', functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
};

functionMain();