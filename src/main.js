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
  // Div q contendra #pokedex y tipo/elemnto
  let divInfo = document.createElement('div');
  divInfo.className = 'info-div'
  //Se crean lo elemento que contendran la info pokemon
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let imagen = document.createElement('img');

  //se obtiene el nombre, numero e imagen de la data
  h2.textContent = item.name;
  h3.textContent = '# ' + item.num;
  imagen.src = item.img;

  //se agrega cada div al index.html
  list.appendChild(div);
  div.appendChild(divInfo);
  divInfo.appendChild(h3);
  //divInfo.appendChild(elemento);
  div.appendChild(imagen);
  div.appendChild(h2);
  console.log("Nombre poke: " + item.name + " " + i);
  /*verifica si existe un dato vacio dentro del array y pone con opacidad 0
    el div que lo contiene*/
  if(item == ""){
    div.style.opacity = '0';
  }
});

//copia de la data principal, elimina elemntos vacios
const data2 = data.pokemon.filter(el => el != '');
//Poner Tipo/elemento con sus respectivos estilos
data2.forEach((item, i) => {
  item.type.forEach((element, j) => {
    let type = document.createElement('span');
    type.className = 'type';
    //---------------- primera letra mayuscula "capitalize" desde .js -----
    type.textContent = element[0].toUpperCase() + element.substring(1);
    document.getElementsByClassName('info-div')[i].appendChild(type);
    //Se agregan estilos de acuerdo al tipo/elemento
    if(element == "grass"){
      type.style.backgroundColor = '#73B050';
    }
    if(element == "poison"){
      type.style.backgroundColor = '#663366';
    }
    if(element == "fire"){
      type.style.backgroundColor = '#FF6900';
    }
    if(element == "flying"){
      type.style.background = 'linear-gradient(to bottom, #4079BF 40%, #424556 70%)';
    }
    if(element == "water"){
      type.style.backgroundColor = '#4079BF';
    }
    if(element == "bug"){
      type.style.backgroundColor = '#567F3B';
    }
    if(element == "normal"){
      type.style.backgroundColor = '#474851';
    }
    if(element == "electric"){
      type.style.backgroundColor = '#FFB600';
    }
    if(element == "ground"){
      type.style.background = 'linear-gradient(to bottom, #725003 40%, #FFB600 70%)';
    }
    if(element == "fighting"){
      type.style.backgroundColor = '#732222';
    }
    if(element == "psychic"){
      type.style.backgroundColor = '#C4377E';
    }
    if(element == "rock"){
      type.style.backgroundColor = '#725003';
    }
    if(element == "ice"){
      type.style.backgroundColor = '#95D6F9';
      type.style.color = 'black';
    }
    if(element == "ghost"){
      type.style.backgroundColor = '#5A4A77';
    }
    if(element == "dragon"){
      type.style.background = 'linear-gradient(to bottom, #474851 40%, #732222 70%)';
    }
    if(element == "fairy"){
      type.style.backgroundColor = '#C15B93';
    }
    if(element == "dark"){
      type.style.backgroundColor = '#1D1E21';
    }
    if(element == "steel"){
      type.style.background = 'linear-gradient(to bottom, #474851, white)';
      type.style.color = 'black';
    }
  });
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
