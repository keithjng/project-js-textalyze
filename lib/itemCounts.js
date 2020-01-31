/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */

let text = require('./readFile.js');

let sanitize = require('./sanitize.js');

let stringToCharacters = require('./stringToCharacters');

function itemCounts(array) {
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    if (counts.hasOwnProperty(array[i]) === false) {
      counts[array[i]] = 1;
    } else {
      counts[array[i]] += 1;
    }
  }
  return counts;
}

if (require.main === module) {
  console.log('Running sanity checks!');
  //  console.log(itemCounts(stringToCharacters(sanitize('I lOvE iT wHeN pEoPlE tYpE lIkE tHiS'))));
  //  console.log(itemCounts(stringToCharacters(sanitize('kayden loote gryffin kayden slander loote nghtmare kayden'))));
  //  console.log(itemCounts(stringToCharacters(sanitize('burger fries sandwich chips fries'))));
  console.log(itemCounts(stringToCharacters(sanitize(text('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/moby-dick.txt')))));
  console.log(itemCounts(stringToCharacters(sanitize(text('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/tale-of-two-cities.txt')))));
}
module.exports = itemCounts;
