import { sortData } from '../src/data.js';

const initialData = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'}, {name: 'arbok'}, {name: 'mew'}]

describe('Para sortData: ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof sortData).toBe('function');
  });

   const orderAlphabet = [{name: 'arbok'}, {name: 'jolteon'}, {name: 'mew'}, {name: 'raichu'}, {name: 'xatu'}]

  it('Deberia retornar los pokemon ordenados alfabeticamente de a-z', () => {
      expect(sortData(initialData, 'name')).toEqual(orderAlphabet);
    });
});




/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
