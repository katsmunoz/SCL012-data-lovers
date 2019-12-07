import POKEMON from './data/pokemon/pokemon.js'

//Cambiar de HOME PAGE a SECOND PAGE al hacer click en el boton de la imagen 
document.getElementById('elegirPokeBtn').addEventListener('click', () => {
    homePage.style.display="none";
    secondPage.style.display="block";
        for (let i = 0; i < POKEMON.length; i++) {
    container.innerHTML += `<div class= 'pokeCards'>
    <p class = "name"  id=${POKEMON[i].name}> ${POKEMON[i].name} </p>
    <img class= "pokePic" src= '${POKEMON[i].img}' alt='imagesPoke' >
    </div>`;
    }
});

//volver al Home apretando HOME
document.getElementById('pokeHomeBtn').addEventListener('click', home);

function home () {
    window.location.reload();    
};
