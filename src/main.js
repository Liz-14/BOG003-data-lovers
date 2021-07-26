import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

/*verifica si la cantidad de datos en el array es divisible por 6
  de lo contrario agrega datos vacios hasta se se cumpla la condicion*/
const check = (pokeData) => {
  while(pokeData.length % 6 != 0){
    pokeData.push('');
  }
  //copia de la data principal, elimina elemntos vacios
  let pokeDataType = pokeData.filter(el => el != '');
  return {pokeData, pokeDataType};
}

//Funcion que permite crear las card de cada pokemon
const pokeTemplate = (pokeData) => {
  //Contenedor que mostrara la list de pokemon
  const list = document.getElementById('pokemonList');

  /*Funcion que permite obtener la lista de pokemon del data y mostrarlo
    en el index.html*/
  check(pokeData).pokeData.forEach((item, i) => {
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
    div.appendChild(imagen);
    div.appendChild(h2);
    /*verifica si existe un dato vacio dentro del array y pone con opacidad 0
      el div que lo contiene*/
    if(item == ""){
      div.style.opacity = '0';
    }
  });

  //Poner Tipo/elemento con sus respectivos estilos
  check(pokeData).pokeDataType.forEach((item, i) => {
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
}

//se inicia contador
let num = 6
// se muestran los primeros 6 pokemon de la lista
const pokeGallery = () => {
  for(let i = num - 6; i < num; i++){
    document.getElementsByClassName('poke-div')[i].style.display = 'block';
  }
}

//Limpia galeria
const galleryClean = () =>{
  //nodo padre
  let pokeList = document.getElementById('pokemonList');
  //ciclo que permite eliminar los nodos hijos
  //----------Mientras exista "poke-div" se repite el ciclo---------"
  while (document.getElementsByClassName('poke-div').length != 0) {
    pokeList.removeChild(document.getElementsByClassName('poke-div')[0]);
  }
}

/*Funcion que permite mostrar los siguientes 6 pokemon de la lista, y
oculta los anteriores 6*/
const following = () => {
  //Sale de la funcion si se supera el tamaño del array
  if(num == document.getElementsByClassName('poke-div').length){
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

//Funciones que muestra los grupos de pokemon organizados alfabéticamente
const groupAD = () => {
  //Se hace el llamado para limpiar la galeria
  galleryClean();
  //Se crea la lista vacia que contendra la nueva lista de pokemon ordenada A-D
  let pokeAD = [];
  //se crea la lista verificada para poder ser mostrada en la galeria
  let iniData = check(data.pokemon).pokeDataType;
  //Se organiza alfabéticamente la lista
  sortData(iniData, 'name');
  //Se ingresan lo pokemon al array "pokeAD" de acuerdo a los criterios
  iniData.forEach((item, i) => {
      if(item.name.startsWith('a') || item.name.startsWith('b') ||
      item.name.startsWith('c') || item.name.startsWith('d')){
        pokeAD.push(iniData[i]);
      };
    });
    //se crean las card con la nueva lista
    pokeTemplate(pokeAD);
    //se muestran las card por pantalla
    pokeGallery();
  }
  // grupo E-H Navbar 
  const groupEH = () => {
    galleryClean();
    let pokeEH = [];
    let iniData = check(data.pokemon).pokeDataType;
    sortData(iniData, 'name');
    iniData.forEach((item, i) => {
        if(item.name.startsWith('e') || item.name.startsWith('f') ||
        item.name.startsWith('g') || item.name.startsWith('h')){
          pokeEH.push(iniData[i]);
        };
      });
      pokeTemplate(pokeEH);
      pokeGallery();
    }

    //grupo I-L navBar 
 const groupIL = () => {
  galleryClean();
  let pokeIL = [];
  let iniData = check(data.pokemon).pokeDataType;
  sortData(iniData, 'name');
  iniData.forEach((item, i) => {
      if(item.name.startsWith('i') || item.name.startsWith('j') ||
      item.name.startsWith('k') || item.name.startsWith('l')){
        pokeIL.push(iniData[i]);
      };
    });
    pokeTemplate(pokeIL);
    pokeGallery();
  }

  //Grupo M-P navBar
  const groupMP = () => {
    galleryClean();
    let pokeMP = [];
    let iniData = check(data.pokemon).pokeDataType;
    sortData(iniData, 'name');
    iniData.forEach((item, i) => {
        if(item.name.startsWith('m') || item.name.startsWith('n') ||
        item.name.startsWith('o') || item.name.startsWith('p')){
          pokeMP.push(iniData[i]);
        };
      });
      pokeTemplate(pokeMP);
      pokeGallery();
    }

// Grupo Q-T navBar
const groupQT = () => {
  galleryClean();
  let pokeQT = [];
  let iniData = check(data.pokemon).pokeDataType;
  sortData(iniData, 'name');
  iniData.forEach((item, i) => {
      if(item.name.startsWith('q') || item.name.startsWith('r') ||
      item.name.startsWith('s') || item.name.startsWith('t')){
        pokeQT.push(iniData[i]);
      };
    });
    pokeTemplate(pokeQT);
    pokeGallery();
  }
//Grupo U-W navBar
  const groupUW = () => {
    galleryClean();
    let pokeUW = [];
    let iniData = check(data.pokemon).pokeDataType;
    sortData(iniData, 'name');
    iniData.forEach((item, i) => {
        if(item.name.startsWith('u') || item.name.startsWith('v') ||
        item.name.startsWith('w')){
          pokeUW.push(iniData[i]);
        };
      });
      pokeTemplate(pokeUW);
      pokeGallery();
    }

    // Grupo X-Z navBar
  const groupXZ = () => {
    galleryClean();
    let pokeXZ = [];
    let iniData = check(data.pokemon).pokeDataType;
    sortData(iniData, 'name');
    iniData.forEach((item, i) => {
        if(item.name.startsWith('x') || item.name.startsWith('y') ||
        item.name.startsWith('z')){
          pokeXZ.push(iniData[i]);
        };
      });
      pokeTemplate(pokeXZ);
      pokeGallery();
    }

//Se llama el template de las card y se crea la galeria
pokeTemplate(data.pokemon);
pokeGallery();

//Evento que permite el funcionamiento del boton "adelante"
let btnFollowing = document.getElementById('following');
btnFollowing.addEventListener("click", following);

//Evento que permite el funcionamiento del boton "atras"
let btnBehind = document.getElementById('behind');
btnBehind.addEventListener("click", behind);

//Eventos que permite el funcionamiento del navBar
let navAD = document.getElementById('ad');
navAD.addEventListener("click", groupAD);

let navEH = document.getElementById('eh');
navEH.addEventListener("click", groupEH);

let navIL = document.getElementById('il');
navIL.addEventListener("click", groupIL);
 
let navMP = document.getElementById('mp');
navMP.addEventListener("click", groupMP);
 
let navQT = document.getElementById('qt');
navQT.addEventListener("click", groupQT);
 
let navVW = document.getElementById('uw');
navVW.addEventListener("click", groupUW);
 
let navXZ = document.getElementById('xz');
navXZ.addEventListener("click", groupXZ)

