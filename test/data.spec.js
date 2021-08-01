import { sortData } from '../src/data.js';

const initialData = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'}, {name:'lugia'}, {name: 'arbok'},
                    {name: 'mew'}, {name: 'celebi'}, {name: 'ditto'}, {name: 'eevee'}, {name: 'golbat'},
                    {name: 'natu'}, {name: 'pichu'}, {name: 'seel'}, {name: 'tauros'}, {name: 'kakuna'},
                    {name: 'umbreon'}, {name: 'zapdos'}, {name: 'vulpix'},]

describe('Para sortData: ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof sortData).toBe('function');
  });

   const orderAD = [{name: 'arbok'}, {name: 'celebi'}, {name: 'ditto'}]

  it('Deberia retornar los pokemon ordenados alfabeticamente de a-d', () => {
      expect(sortData(initialData, 'name', 'abcd')).toEqual(orderAD);
    });

    const orderEH = [{name: 'eevee'}, {name: 'golbat'}]

   it('Deberia retornar los pokemon ordenados alfabeticamente de e-h', () => {
       expect(sortData(initialData, 'name', 'efgh')).toEqual(orderEH);
     });

     const orderIL = [{name: 'jolteon'}, {name: 'kakuna'}, {name: 'lugia'}]

    it('Deberia retornar los pokemon ordenados alfabeticamente de i-l', () => {
        expect(sortData(initialData, 'name', 'ijkl')).toEqual(orderIL);
      });

      const orderMO = [{name: 'mew'}, {name: 'natu'}]

     it('Deberia retornar los pokemon ordenados alfabeticamente de m-p', () => {
         expect(sortData(initialData, 'name', 'mno')).toEqual(orderMO);
       });

       const orderPR = [{name: 'pichu'}, {name: 'raichu'}]

      it('Deberia retornar los pokemon ordenados alfabeticamente de q-t', () => {
          expect(sortData(initialData, 'name', 'pqr')).toEqual(orderPR);
        });

        const orderSV = [{name: 'seel'}, {name: 'tauros'}, {name: 'umbreon'}, {name: 'vulpix'}]

       it('Deberia retornar los pokemon ordenados alfabeticamente de u-w', () => {
           expect(sortData(initialData, 'name', 'stuv')).toEqual(orderSV);
         });

         const orderWZ = [{name: 'xatu'}, {name: 'zapdos'}]

        it('Deberia retornar los pokemon ordenados alfabeticamente de x-z', () => {
            expect(sortData(initialData, 'name', 'wxyz')).toEqual(orderWZ);
          });

          const pokeSearch = [{name: 'jolteon'}, {name: 'umbreon'}]

         it('Deberia retornar los pokemon que contengan el parametro "eon"', () => {
             expect(sortData(initialData, 'searchName', 'eon')).toEqual(pokeSearch);
           });
});
