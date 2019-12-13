import POKEMON from './data/pokemon/pokemon.js';

//import * as modulo from './data.js';

// Importar funcion POKEMON BY TYPE de data
import { pokemonByType } from './data.js';

// Importar funcion POKEMON BY NAME de data
import { pokemonByName } from './data.js';

// Variable del div donde se muestran las cartas
const pokeBase = document.getElementById('contentOfCards');

// Función para crear CARDS por pokemon
function createCards (data) {
  const pokeCards = document.createElement('button');
  pokeCards.setAttribute('class', 'pokeCardsStyle');
// console.log(pokeCards);
  const pokePic = document.createElement('img');
  pokePic.setAttribute('class', 'pokeCardsPic');
  const pokeImagen = data.img;
  pokePic.setAttribute('src', pokeImagen);
  pokeCards.appendChild(pokePic);
  const pokeName = document.createElement('p');
  pokeName.setAttribute('class', 'pokeCardsName');
  const pokemonName = document.createTextNode(data.name);
  pokeName.appendChild(pokemonName);
  pokeCards.appendChild(pokeName);
  const pokeLine = document.createElement('hr');
  pokeLine.setAttribute('class', 'pokeCardsLine');
  pokeCards.appendChild(pokeLine);
  const pokeNum = document.createElement('p');
  pokeNum.setAttribute('class', 'pokeCardsNum');
  const pokeNumber = document.createTextNode(data.num);
  pokeNum.appendChild(pokeNumber);
  pokeCards.appendChild(pokeNum);
  pokeBase.appendChild(pokeCards);
}

// Recorre todo el ARRAY de la data y se muestra en consola
for (let i = 0; i < POKEMON.length; i++) {
  createCards(POKEMON[i]);
};

// Filtrar por TIPO
const pokeSelect = document.getElementById('select1');
console.log(pokeSelect);
pokeSelect.addEventListener('change', filterPokes);

function filterPokes () {
  const finalFilter = pokemonByType(POKEMON, pokeSelect.value);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalFilter.length; i++){
    createCards(finalFilter[i]);
  } 
};

// Ordenar por NOMBRE
const pokeNames = document.getElementById ('select2');
pokeNames.addEventListener ('change', showSelect2);
function showSelect2 (){
  const pokeValue = document.getElementById ('select2').value;
  const finalSortName = pokemonByName(POKEMON, 'name', pokeValue);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalSortName.length; i++) {
    createCards(finalSortName[i]);
  }
};

// Ordenar por NÚMERO
const pokeNumbers = document.getElementById ('select3');
pokeNumbers.addEventListener ('change', showSelect3);
function showSelect3 (){
  const pokeValueNum = document.getElementById ('select3').value;
  const finalSortNum = pokemonByName(POKEMON, 'num', pokeValueNum);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalSortNum.length; i++) {
    createCards(finalSortNum[i]);
  }
};

//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
  homePage.style.display = 'none';
  secondPage.style.display = 'block';
});

// // volver al Home apretando HOME
document.getElementById('pokeHomeBtn2').addEventListener('click', home);
function home() {
  window.location.reload();
};

