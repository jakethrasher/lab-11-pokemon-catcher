import { incrementCaught, incrementSeen, getPokeStats } from './localStorageUtils.js';
import pokemon from './pokemon.js';

getPokeStats();
export function getRandomPokemon() {
    let index = Math.floor(Math.random() * pokemon.length);

    return pokemon[index];
}

export function findByUnderScoreId(id, array) {
    for (let item of array) {
        if (id === item._id) return item;
    }
}

let poke1 = getRandomPokemon();
let poke2 = getRandomPokemon();
let poke3 = getRandomPokemon();

while (poke1._id === poke2._id || poke2._id === poke3.id || poke1._id === poke3._id) {
    poke1 = getRandomPokemon();
    poke2 = getRandomPokemon();
    poke3 = getRandomPokemon();
}
const div = document.querySelector('#poke-container');
div.append(renderPokeImage(poke1));
div.append(renderPokeImage(poke2));
div.append(renderPokeImage(poke3));






function renderPokeImage(pokeItem) {
    const image = document.createElement('img');
    image.src = pokeItem.url_image;
    image.classList.add('poke-image');
    image.addEventListener('click', () => {
        incrementSeen(pokeItem._id);
    
    });

    return image;
}
