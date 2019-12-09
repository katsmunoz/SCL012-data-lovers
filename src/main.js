import POKEMON from './data/pokemon/pokemon.js'

// Importar funcion POKEMON BY TYPE de data
import { pokemonByType } from './data.js';
  
// Variable del div donde se muestran las cartas
let pokeBase = document.getElementById('contentOfCards');

// Función para crear CARDS por pokemon
function createCards (data) {
  let pokeCards = document.createElement('button');
  pokeCards.setAttribute('class', 'pokeCardsStyle');
  // console.log(pokeCards);
  let pokePic = document.createElement('img');
  pokePic.setAttribute('class', 'pokeCardsPic');
  let pokeImagen = data.img;
  pokePic.setAttribute('src', pokeImagen);
  pokeCards.appendChild(pokePic);
  let pokeName = document.createElement('p');
  pokeName.setAttribute('class', 'pokeCardsName');
  let pokemonName = document.createTextNode(data.name);
  pokeName.appendChild(pokemonName);
  pokeCards.appendChild(pokeName);
  let pokeLine = document.createElement('hr');
  pokeLine.setAttribute('class', 'pokeCardsLine');
  pokeCards.appendChild(pokeLine);
  let pokeNum = document.createElement('p');
  pokeNum.setAttribute('class', 'pokeCardsNum');
  let pokeNumber = document.createTextNode(data.num);
  pokeNum.appendChild(pokeNumber);
  pokeCards.appendChild(pokeNum);

  pokeBase.appendChild(pokeCards);
}
// Recorre todo el ARRAY de la data y se muestra en consola
for (let i = 0; i < POKEMON.length; i++) {
  createCards(POKEMON[i]);
};

// Filtrar por tipo
let pokeSelect = document.getElementById('select1');
//console.log(pokeSelect);
pokeSelect.addEventListener('change', filterPokes);
function filterPokes () {
    let finalFilter = pokemonByType(POKEMON, pokeSelect.value);
    document.getElementById('contentOfCards').innerHTML = "";
    for (let i = 0; i < finalFilter.length; i++) {
    createCards(finalFilter[i]);
  }
};


//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
  homePage.style.display = "none";
  secondPage.style.display = "block";
});


//volver al Home apretando HOME
document.getElementById('pokeHomeBtn').addEventListener('click', home);
function home() {
  window.location.reload();
};
