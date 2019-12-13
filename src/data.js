// Filtrar por TIPOS
export const pokemonByType = (POKEMON, types) => {
  return POKEMON.filter(pokeTypes => pokeTypes.type.includes(types));
};

// Ordenar por NOMBRE y NÚMERO
export const pokemonByName = (POKEMON, sortBy, sortOrder) => {
  const compare = POKEMON.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  if (sortOrder === 'aToZ') {
    return compare;
  }
  if (sortOrder === 'zToA') {
    return compare.reverse();
  }
  if (sortOrder === 'menorMayor') {
    return compare;
  }
  if (sortOrder === 'mayorMenor') {
    return compare.reverse();
  }
}