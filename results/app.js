import { clearLocalStorage } from '../localStorageUtils.js';
import { makeCaughtArray, makeLabelsArray, makeSeenArray } from './mungeUtils.js';
import { pokeStats } from './renderRow.js';
var ctx = document.getElementById('myChart').getContext('2d');

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    clearLocalStorage();
});

var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(pokeStats),
        datasets: [
            {
                label: 'Number of Appearances',
                data: makeSeenArray(pokeStats),
                backgroundColor: 'yellow',
                borderColor: 'none',
                borderWidth: 2
            },
            {
                label: 'Number of Times Caught',
                data: makeCaughtArray(pokeStats),
                backgroundColor: 'lightpink',
                borderColor: 'none',
                borderWidth: 2
            }
        ]
    }, 
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
