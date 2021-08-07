
//------------ Permite navegar por la galeria -------------------------
/*verifica si la cantidad de datos en el array es divisible por 6
  de lo contrario agrega datos vacios hasta se se cumpla la condicion*/
export const check = (pokeData) => {
  while(pokeData.length % 6 != 0){
    pokeData.push('');
  }
  //copia de la data principal, elimina elemntos vacios
  let pokeDataInfo = pokeData.filter(el => el != '');
  //Retorna los datos que se usaran paa crear la galeria y la info de cada card
  return {pokeData, pokeDataInfo};
}

export const sortData = (data, sortBy, sortOrder) => {
  let newData = [];
  if (sortBy === "name"){
    //ordena de la A a la Z
    data.sort((a,b) => {
      //------operador ternario-------
      //(condicion) ? resultado_cierto : resultado_falso
      return (a.name < b.name) ? -1 : 1;
      });
      //Ordenar por grupos alfabeticos para el navBar
      if(sortOrder.length === 4){
        /*startsWith(): busca en el array el elemento que comience por la
        letra/parametro que se le indique*/
        /*charAt(): permite tomar cada caracter de un string segun su posicion */
        newData = data.filter(el => el.name.startsWith(sortOrder.charAt(0)) ||
                                    el.name.startsWith(sortOrder.charAt(1)) ||
                                    el.name.startsWith(sortOrder.charAt(2)) ||
                                    el.name.startsWith(sortOrder.charAt(3)));
        }
        else {
          newData = data.filter(el => el.name.startsWith(sortOrder.charAt(0)) ||
                                      el.name.startsWith(sortOrder.charAt(1)) ||
                                      el.name.startsWith(sortOrder.charAt(2)));
        }
  }

  //Busqueda por nombre
  if (sortBy === "searchName") {
    //array.filter(elemnto => condicion)
    newData = data.filter(el => el.name.includes(sortOrder.toLowerCase()));
  }

  //ordenar de mayor a menor las estadísticas base
  if (sortBy === "basic-stats") {
    newData = computeStats(data);
    newData.sort((a,b) => {
      return (a[sortOrder] < b[sortOrder]) ? 1 : -1;
      });
  }
  return newData;
};

//Recorre todo el array hasta encontrar el elemento que cumple la condicion
export const filterData = (data, condition) => {
  let newData = data.filter(el => el.name == condition);
  return newData;
}

export const computeStats = (data) => {
  let basicStats = data.map(item => {
    let attack = Number(item.stats["base-attack"]);
    let defense = Number(item.stats["base-defense"]);
    let stamina = Number(item.stats["base-stamina"]);
   return  [attack, defense, stamina];
  });

  let sum = basicStats.map(item => {
   return  item.reduce((a, b) => a + b, 0);
  });

  let average = sum.map(item => {
   return  item / 3;
  });

  let newData = data.map((item, i) => {
    sum.map(element => {
      item['sum'] = sum[i];
      item['average'] = average[i].toFixed(2);
    })
    return item
  });

  return newData;
}
