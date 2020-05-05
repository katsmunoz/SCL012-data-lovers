import POKEMON from './data/pokemon/pokemon.js';

// Importar funcion POKEMON BY TYPE de data
import { pokemonByType, pokemonByName } from './data.js';

// Variable del div donde se muestran las cartas
const pokeBase = document.getElementById('contentOfCards');

// Función para crear CARDS por pokemon
function createCards(data) {
  const pokeCards = document.createElement('button');
  pokeCards.setAttribute('class', 'pokeCardsStyle');
  pokeCards.setAttribute('id', 'pokeButton');
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
for (let i = 0; i < POKEMON.length; i += 1) {
  createCards(POKEMON[i]);
}

// Filtrar por TIPO
const pokeSelect = document.getElementById('select1');
pokeSelect.addEventListener('change', filterPokes);

function filterPokes() {
  const finalFilter = pokemonByType(POKEMON, pokeSelect.value);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalFilter.length; i += 1) {
    createCards(finalFilter[i]);
  }
}


// Ordenar por NOMBRE

function showSelect2() {
  const pokeValue = document.getElementById('select2').value;
  const finalSortName = pokemonByName(POKEMON, 'name', pokeValue);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalSortName.length; i += 1) {
    createCards(finalSortName[i]);
  }
}
const pokeNames = document.getElementById('select2');
pokeNames.addEventListener('change', showSelect2);

// Ordenar por NÚMERO

function showSelect3() {
  const pokeValueNum = document.getElementById('select3').value;
  const finalSortNum = pokemonByName(POKEMON, 'num', pokeValueNum);
  document.getElementById('contentOfCards').innerHTML = '';
  for (let i = 0; i < finalSortNum.length; i += 1) {
    createCards(finalSortNum[i]);
  }
}
const pokeNumbers = document.getElementById('select3');
pokeNumbers.addEventListener('change', showSelect3);

// Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
  homePage.style.display = 'none';
  secondPage.style.display = 'block';
});

// Cambiar de HOME PAGE a SECOND PAGE al hacer click en la imagen
document.getElementById('pokePic1').addEventListener('click', () => {
  homePage.style.display = 'none';
  secondPage.style.display = 'block';
});

// const forosBtn = document.getElementById('pokeAboutBtn');
// forosBtn.addEventListener('click', openForum);


// Volver al Home apretando HOME
document.getElementById('pokeHomeBtn2').addEventListener('click', home);
function home() {
  window.location.reload();
}
