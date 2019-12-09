//sort y filter

//Filtrar por TIPOS
export let pokemonByType = (POKEMON, types) => {
  return POKEMON.filter(pokeTypes => pokeTypes.type.includes(types));
};

// Ordenar por NOMBRE

export let pokemonByNames = (POKEMON, names) => {
  return POKEMON.sort(pokeNames => pokeNames.name.includes(names));
};

