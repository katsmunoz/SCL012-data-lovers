import POKEMON from './data/pokemon/pokemon.js'

let pokemonByType = POKEMON.filter(POKEMON => POKEMON.type);
console.log(pokemonByType);

let pokemonNames = POKEMON.filter(POKEMON => POKEMON.name);
console.log(pokemonNames);
