import { findByUnderScoreId } from './utils.js';
import pokemon from './pokemon.js';

const POKESTATS = 'POKESTATS';

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));
    
    //do stats exist? 
    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
        
    }
    
    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementSeen(_id) {

    const stats = getPokeStats();

    const poke = findByUnderScoreId(_id, stats);

    if (!poke) {

        const pokeData = findByUnderScoreId(_id, pokemon);
        const newStat = {
            name: pokeData.pokebase,
            _id: _id,
            seen: 1,
            caught: 0
        };
       
        stats.push(newStat);
    } else poke.seen++;

    setPokeStats(stats);
}
export function incrementCaught(_id) {
    const stats = getPokeStats();
    
    const caughtPoke = findByUnderScoreId(_id, stats);

    caughtPoke.caught++;

    setPokeStats(stats);
}

export function clearLocalStorage(){
    const emptyStats = [];
    localStorage.setItem(POKESTATS, JSON.stringify(emptyStats)); 
    window.location = '../';
}