//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(data.pokemon[0].name);
console.log(data.pokemon.length);

for (let i = 0; i < data.pokemon.length; i++) {
  console.log(data.pokemon[i].name);


  let h2 = document.createElement("h2");
  const div = document.getElementById("root");
  //div.appendChild(h2);

  let pokeCard = document.createElement("div");
  pokeCard.className = "pokeCard";
  div.appendChild(pokeCard);
  pokeCard.appendChild(h2);

  let h1 = document.createElement("h1");
  h1.textContent = data.pokemon[i].name;
  pokeCard.appendChild(h1);
}


  











/*let pokemonSearch;

const container = document.querySelector('.container');

window.onload = complet(); //cada vez que se recargue la pagina

function complet() {
  let pokemonSearch = pokemon.results; //llama data completa
  let start = 0;
  let end = 50;
  page()
}

//funcion de paginacion
function page() {
   //console.log(dataSearch);
  //console.log("entra page");
  let dataSlice = pokemonSearch;
  container.innerHTML = pokemonSlice.slice(start, end).map((item) => `
  <div class="card">
  <button class="cardImage">
      <img src="${item.image}" />
      <h1 class="nameCard">${item.name}</h1>
      </button>        
</div>
    `).join("");
  //console.log(start, end);
  if (cross === 1) {
    window.scrollTo(0, 0);
  }
  moreInfo();
}*/
