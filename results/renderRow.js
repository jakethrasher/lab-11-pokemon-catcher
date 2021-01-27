import { getPokeStats } from '../localStorageUtils.js';
export function renderRow(pokemonCaught) {

    const tableRow = document.createElement('tr');

    const tdPokeMon = document.createElement('td');
    tdPokeMon.textContent = pokemonCaught.name;
    tableRow.append(tdPokeMon);

    const tdCaughtPoke = document.createElement('td');
    tdCaughtPoke.textContent = pokemonCaught.seen;
    tableRow.append(tdCaughtPoke);

    const tdSeenPoke = document.createElement('td');
    tdSeenPoke.textContent = pokemonCaught.caught;
    tableRow.append(tdSeenPoke);

    return tableRow;
}

const tableElement = document.querySelector('table');

export const pokeStats = getPokeStats();

for (let item of pokeStats) {
    // const pokeItem = findByUnderScoreId(item._id, pokemon);
    const tableRow = renderRow(item);
    tableElement.append(tableRow);
}