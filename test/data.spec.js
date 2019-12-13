import { pokemonByType } from '../src/data';

import { pokemonByName } from '../src/data';

describe('pokemonByType', () => {
  it('debería ser una función', () => {
    expect(typeof pokemonByType).toBe('function');
  })
});

const pokeArray = [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  type: [
    'Grass',
    'Poison',
  ]},
  {
    id: 4,
    num: '004',
    name: 'Charmander',
    type: [
      'Fire',
  ]}
]

describe('pokemonByType', () => {
  it('Debería retornar "Charmander" para pokemon y "Fire"', () => {
  expect(pokemonByType(pokeArray,'Fire')).toMatchObject([{"id": 4, "name": "Charmander", "num": "004", "type": ["Fire"]}]);
  })
});

describe('pokemonByName', () => {
  it('debería ser una función', () => {
    expect(typeof pokemonByName).toBe('function');
  })
});
