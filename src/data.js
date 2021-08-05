
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
        data.forEach((item, i) => {
          /*startsWith(): busca en el array el elemento que comience por la
          letra/parametro que se le indique*/
          /*charAt(): permite tomar cada caracter de un string segun su posicion */
            if(item.name.startsWith(sortOrder.charAt(0)) ||
            item.name.startsWith(sortOrder.charAt(1)) ||
            item.name.startsWith(sortOrder.charAt(2)) ||
            item.name.startsWith(sortOrder.charAt(3))){
              newData.push(data[i]);
            }
          });
        }
        else {
          data.forEach((item, i) => {
              if(item.name.startsWith(sortOrder.charAt(0)) ||
              item.name.startsWith(sortOrder.charAt(1)) ||
              item.name.startsWith(sortOrder.charAt(2))){
                newData.push(data[i]);
              }
          });
        }
  }


  //Busqueda por nombre
  if (sortBy === "searchName") {
    data.forEach((item, i) => {
      if (item.name.includes(sortOrder)) {
        newData.push(data[i]);
      }
    });
  }
  return newData;
};

export const filterData = (data, condition) => {
  let newData = [];
  data.forEach((item) => {
    if (condition == item.name) {
      newData.push(item);
    }
  });
  return newData;
}
