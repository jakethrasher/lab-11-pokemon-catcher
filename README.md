# lab-11-pokemon-catcher
HTML
 * A div containing three unique pokemon images
 * hard code html with images before creating element in js
 * A results page 

 Plan
 ### generate 3 new pokemon
  * write a function that uses Math.floor(Math.random()* pokemon.length) to generate a random pokemon from the pokemon array
  * check that they are unique (using '_id' property), if not, keep generating random pokemon until the are all unique using a while loop

### on load
  * initialize stats with function getPokeStats
  * this function returns stats or empty array
  * write a function setPokeStats that stringifys the stats
  * write an incrementSeen function that takes in the pokemon '_id' propertyas a parameter.
  *In the cool zone, call getPokeStats() and store in a variable. 
  * use a findByUnderScoreId(_id, stats) function to see if this pokemon has been seen. If not,
  ``` 
  newStat{
      _id: _id,
      seen: 1,
      caught: 0
  }
   stats.push(newStat)“;
  ```
Else, setPokeStats(stats)
### on click
* increment the caught property
* write a function that takes in the 'pokemon' property and using findByUnderscoreId(_id, stats) grabs the pokemon and increments caught.
Then setPokeStats(stats)
* after ten rounds, redirect to results page, otherwise load three more pokemon and repeat