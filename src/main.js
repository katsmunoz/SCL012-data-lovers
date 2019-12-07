import POKEMON from './data/pokemon/pokemon.js'

//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
    homePage.style.display="none";
    secondPage.style.display="block";
});

  for (let i = 0; i < POKEMON.length; i++) {
    // console.log(POKEMON[i].name);
    const namePokemon = POKEMON[i].name;
    const imgPokemon = POKEMON[i].img;
    const numPokemon = POKEMON[i].num;
    // console.log(namePokemon);
    console.log(imgPokemon);
    // console.log(numPokemon);

     let card = document.createElement('div');
     card.classList.add('pokeCard');
     card.innerHTML +=`<img src = ${POKEMON[i].img} alt ='imgCard'><p${POKEMON[i].num}</p><p>${POKEMON[i].name}</p><p>${POKEMON[i].num}</p>`
     document.getElementById('container').appendChild(card);
 
}; 


//volver al Home apretando HOME
document.getElementById('pokeHomeBtn').addEventListener('click', home);

function home () {
    window.location.reload();    
};

