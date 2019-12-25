import { pokemonByType, pokemonByName } from '../src/data';

describe('data', () => {
  it('pokemonByType debería ser una función', () => {
    expect(typeof pokemonByType).toBe('function');
  });

  const pokeArray = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
  },
  {
    id: 4,
    num: '004',
    name: 'Charmander',
    type: ['Fire'],
  },
  ];

  it('Debería retornar Charmander para pokeArray y Fire', () => {
    expect(pokemonByType(pokeArray, 'Fire')).toMatchObject([
      {
        id: 4, name: 'Charmander', num: '004', type: ['Fire'],
      },
    ]);
  });

  it('pokemonByName debería ser una función', () => {
    expect(typeof pokemonByName).toBe('function');
  });

  it('Debería retornar array en orden "Bulbasaur, Charmander" para aToZ', () => {
    expect(pokemonByName(pokeArray, 'name', 'aToZ')).toEqual([{
      id: 1,
      num: '001',
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    },
    {
      id: 4,
      num: '004',
      name: 'Charmander',
      type: ['Fire'],
    },
    ]);
  });

  it('Debería retornar array en orden "Charmander, Bulbasaur" para zToA', () => {
    expect(pokemonByName(pokeArray, 'name', 'zToA')).toEqual([{
      id: 4,
      num: '004',
      name: 'Charmander',
      type: ['Fire'],
    },
    {
      id: 1,
      num: '001',
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    },
    ]);
  });
});
