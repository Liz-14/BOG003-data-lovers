
export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name"){
    data.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
  }
};

export const anotherExample = () => {
  return 'OMG';
};
