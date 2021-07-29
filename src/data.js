
export const sortData = (data, sortBy, sortOrder) => {
  let newData = [];
  if (sortBy === "name"){
    //ordena de la A a la Z
    data.sort((a,b) => {
      //------operador terniario-------
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
    return newData;
  }
};
