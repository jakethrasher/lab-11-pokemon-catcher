import { findByUnderScoreId } from './utils.js';

const POKESTATS = 'POKESTATS';

export function getPokeStats() {
    const stats = JSON.parse(localStorage.getItem(POKESTATS));

    //do stats exist? 
    if (stats) {
        return stats;
    } else {
        localStorage.setItem(POKESTATS, JSON.stringify([]));
    }
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementSeen(_id) {

    const stats = getPokeStats();

    const poke = findByUnderScoreId(_id, stats);

    if (!poke) {
        const newStat = {
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
}