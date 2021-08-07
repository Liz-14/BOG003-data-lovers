import { check, sortData, filterData } from '../src/data.js';

const initialData = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'}, {name:'lugia'}, {name: 'arbok'},
                    {name: 'mew'}, {name: 'celebi'}, {name: 'ditto'}, {name: 'eevee'}, {name: 'golbat'},
                    {name: 'natu'}, {name: 'pichu'}, {name: 'seel'}, {name: 'tauros'}, {name: 'kakuna'},
                    {name: 'umbreon'}, {name: 'zapdos'}, {name: 'vulpix'}, {name: 'sentret'}]

const dataGallery = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'}, {name:'lugia'}]

const dataStats = [{num: '178', name: 'xatu', 'stats':{'base-attack':'192', 'base-defense': '146', 'base-stamina': '163' }},
                  {num: '135', name: 'jolteon', 'stats':{'base-attack':'232', 'base-defense': '182', 'base-stamina': '163' }},
                  {num: '026', name: 'raichu', 'stats':{'base-attack':'193', 'base-defense': '151', 'base-stamina': '155' }},
                  {num: '249', name:'lugia', 'stats':{'base-attack':'193', 'base-defense': '310', 'base-stamina': '235' }}]

describe ('check: ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof check).toBe('function');
  });

  const galleryResult = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'},
                        {name:'lugia'}, '', ''];
  it('Deberia retornar la lista pokemon con los correspondientes datos vacios', () => {
      expect(check(dataGallery).pokeData).toEqual(galleryResult);
    });

  const galleryResult2 = [{name: 'xatu'}, {name: 'jolteon'}, {name: 'raichu'}, {name:'lugia'}];
  it('Deberia retornar la lista pokemon sin datos vacios', () => {
      expect(check(dataGallery).pokeDataInfo).toEqual(galleryResult2);
    });
});

describe('sortData: ', () => {
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

        const orderSV = [{name: 'seel'}, {name: 'sentret'}, {name: 'tauros'},
                        {name: 'umbreon'}, {name: 'vulpix'}]

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

         const sumStats = [{average:'246.00', name:'lugia', num: '249', 'stats':{'base-attack':'193', 'base-defense': '310', 'base-stamina': '235' }, sum: 738},
                          {average:'192.33', name: 'jolteon', num: '135', 'stats':{'base-attack':'232', 'base-defense': '182', 'base-stamina': '163'}, sum: 577},
                          {average:'167.00', name: 'xatu', num: '178', 'stats':{'base-attack':'192', 'base-defense': '146', 'base-stamina': '163' }, sum: 501},
                          {average:'166.33', name: 'raichu', num: '026', 'stats':{'base-attack':'193', 'base-defense': '151', 'base-stamina': '155' }, sum: 499}]

        it('retorna la data con el calculo de la suma de los stats integrado, de mayor a menor', () => {
            expect(sortData(dataStats, 'basic-stats', 'sum')).toEqual(sumStats);
          });
});


describe('filterData: ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData).toBe('function');
  });
  const result = [{name: 'eevee'}]
  it('Deberia retornar el pokemon especifico', () => {
      expect(filterData(initialData, 'eevee')).toEqual(result);
    });
});
