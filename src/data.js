
export const sortData = (data, sortBy /*sortOrder*/) => {
  if (sortBy === "name"){
    data.sort((a,b) => {
      //------operador terniario-------
      //(condicion) ? resultado_cierto : resultado_falso
      return (a.name < b.name) ? -1 : 1;
    });
    return data;
  }
};

/*export const anotherExample = () => {
  return 'OMG';
};*/
