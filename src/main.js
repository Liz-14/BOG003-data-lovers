import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//Contenedor que mostrara la list de pokemon
const list = document.getElementById('pokemonList');

console.log("Total pokemon: " + data.pokemon.length);

/*verifica si la cantidad de datos en el array es divisible por 6
  de lo contrario agrega datos vacios hasta se se cumpla la condicion*/
while(data.pokemon.length % 6 != 0){
  data.pokemon.push('');
}

/*Funcion que permite obtener la lista de pokemon del data y mostrarlo
  en el index.html*/
data.pokemon.forEach((item, i) => {
  //se crea un div por cada pokemon
  let div = document.createElement('div');
  div.className = 'poke-div';

  let divInfo = document.createElement('div');
  divInfo.className = 'info-div'
  //Se crea el h2 q contendra el nombre del pokemon
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let imagen = document.createElement('img');
  let elemento = document.createElement('span');
  //se obtiene el nombre, numero e imagen de la data
  h2.textContent = item.name;
  h3.textContent = '# ' + item.num;
  imagen.src = item.img;
  elemento.textContent = item.type;
  //se agrega cada div al index.html
  list.appendChild(div);
  div.appendChild(divInfo);
  divInfo.appendChild(h3);
  divInfo.appendChild(elemento);
  div.appendChild(imagen);
  div.appendChild(h2);
  console.log("Nombre poke: " + item.name + " " + i);
  /*verifica si existe un dato vacio dentro del array y pone con opacidad 0
    el div que lo contiene*/
  if(item == ""){
    div.style.opacity = '0';
  }
});

let num = 6
// se muestran los primeros 6 pokemon de la lista
for(let i = num - 6; i < num; i++){
  document.getElementsByClassName('poke-div')[i].style.display = 'block';
}

/*Funcion que permite mostrar los siguientes 6 pokemon de la lista, y
oculta los anteriores 6*/
const following = () => {
  //Sale de la funcion si se supera el tamaño del array
  if(num == data.pokemon.length){
    return
  }
  else {
    //Contador que permite avanzar por el array
    num += 6;
    //permite mostrar solo 6 pokemon en la pantalla
    for(let i = num - 6; i < num; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'block';
    }
    for(let i = num - 12; i < num - 6; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'none';
    }
  }
}
/*Funcion que permite mostrar los anteriores 6 pokemon de la lista, y
oculta los siguientes 6*/
const behind = () => {
  //Sale de la funcion si es menos de lo mostrado en pantalla
  if (num == 6){
    return
  }
  else{
    //Contador que permite retroceder por el array
    num -= 6;
    //permite mostrar solo 6 pokemon en la pantalla
    for(let i = num - 6; i < num; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'block';
    }
    for(let i = num; i < num + 6; i++){
      document.getElementsByClassName('poke-div')[i].style.display = 'none';
    }
  }
}

//Evento que permite el funcionamiento del boton "adelante"
let btnFollowing = document.getElementById('following');
btnFollowing.addEventListener("click", following);

//Evento que permite el funcionamiento del boton "atras"
let btnBehind = document.getElementById('behind');
btnBehind.addEventListener("click", behind);

//console.log(data.pokemon);
