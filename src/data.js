// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
}; */
const containerList = document.getElementById('container-list');
const containerType=document.getElementById('container-list-tipo');
const btnPoison=document.getElementById('btn-poison');

const listData = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((personaje) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${personaje.img }" />
          <div class="article-details">
            <h4 class="post-category">${personaje.name }</h4>
            <h3 class="post-title">${ personaje.type }</h3>        
           
          </div>
        </article>
      </div>
    `;
    // vamos concatenando cada li 
    templateListOfCards += card;
  })
  containerList.innerHTML = templateListOfCards;
}

// ejecuntado funciona para pintar la data en mi html
listData(POKEMON.pokemon)

//función filtrar
const filterData=(data,condition)=>{
let templateListType='';

data.filter((condition =>(condition.type[0]==='Poison'|| condition.type[1]==='Poison')));
const cardPoison= `<img class="post-image" src="${condition.img }" /> 
                  <h4 class="post-category">${condition.name }</h4>
                  <h3 class="post-title">${ condition.type }</h3>`;
templateListType+=cardPoison;
}
containerType.innerHTML=templateListType;




/* filterData(data, condition)
sortData(data, sortBy, sortOrder)
computeStats(data) */

window.listData=listData;
window.filterData=filterData;
//window.example = example;

