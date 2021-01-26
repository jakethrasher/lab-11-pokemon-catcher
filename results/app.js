import { clearLocalStorage, getPokeStats } from '../localStorageUtils.js';
import { findByUnderScoreId } from '../utils.js';
import pokemon from '../pokemon.js';

const tableElement = document.querySelector('table');

export function renderRow(pokemonCaught, pokemon) {

    const tableRow = document.createElement('tr');

    const tdPokeMon = document.createElement('td');
    tdPokeMon.textContent = pokemon.pokebase;
    tableRow.append(tdPokeMon);

    const tdCaughtPoke = document.createElement('td');
    tdCaughtPoke.textContent = pokemonCaught.seen;
    tableRow.append(tdCaughtPoke);

    const tdSeenPoke = document.createElement('td');
    tdSeenPoke.textContent = pokemonCaught.caught;
    tableRow.append(tdSeenPoke);

    return tableRow;

}

const pokeStats = getPokeStats();
for (let item of pokeStats) {
    const pokeItem = findByUnderScoreId(item._id, pokemon);
    const tableRow = renderRow(item, pokeItem);
    tableElement.append(tableRow);
}

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', ()=>{
    clearLocalStorage();
});
