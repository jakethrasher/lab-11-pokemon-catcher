import { incrementCaught, incrementSeen } from './localStorageUtils.js';
import pokemon from './pokemon.js';

let numberOfTurns = 0;



export function getRandomPokemon() {
    let index = Math.floor(Math.random() * pokemon.length);

    return pokemon[index];
}

export function findByUnderScoreId(id, array) {
    for (let item of array) {
        if (id === item._id) return item;
    }
}
export function setThreePokemon() {
    numberOfTurns++;

    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();


    while (poke1._id === poke2._id || poke2._id === poke3._id || poke1._id === poke3._id) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }


    incrementSeen(poke1._id);
    incrementSeen(poke2._id);
    incrementSeen(poke3._id);

    const div = document.querySelector('#poke-container');

    div.textContent = '';

    div.append(renderPokeImage(poke1));
    div.append(renderPokeImage(poke2));
    div.append(renderPokeImage(poke3));

}


export function renderPokeImage(pokeItem) {
    const image = document.createElement('img');
    image.src = pokeItem.url_image;
    image.classList.add('poke-image');

    image.addEventListener('click', () => {

        incrementCaught(pokeItem._id);

        if (numberOfTurns < 10) {

            setThreePokemon();

        } else {

            window.location = 'results';
        }

    });

    return image;
}

