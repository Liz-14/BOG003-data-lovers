
export const sortData = (data, sortBy, sortOrder) => {
  let newData = [];
  if (sortBy === "name"){
    data.sort((a,b) => {
      //------operador terniario-------
      //(condicion) ? resultado_cierto : resultado_falso
      return (a.name < b.name) ? -1 : 1;
      });

      if(sortOrder.length === 4){
        data.forEach((item, i) => {
            if(item.name.startsWith(sortOrder.charAt(0)) ||
            item.name.startsWith(sortOrder.charAt(1)) ||
            item.name.startsWith(sortOrder.charAt(2)) ||
            item.name.startsWith(sortOrder.charAt(3))){
              newData.push(data[i]);
            };
          });
        }
        else {
          data.forEach((item, i) => {
              if(item.name.startsWith(sortOrder.charAt(0)) ||
              item.name.startsWith(sortOrder.charAt(1)) ||
              item.name.startsWith(sortOrder.charAt(2))){
                newData.push(data[i]);
              };
          });
        }


    return newData;
  }
};



/*export const anotherExample = () => {
  return 'OMG';
};*/
