/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */

const fs = require('fs');

function text(fileDir) {
  let book = fs.readFileSync(fileDir, 'utf-8');
  return book;
}

function sanitize(string) {
  let lower = string.toLowerCase();
  return lower;
}

function stringToCharacters(string) {
  let array = string.split('');
  return array;
}

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
  console.log(itemCounts(stringToCharacters(sanitize('I lOvE iT wHeN pEoPlE tYpE lIkE tHiS'))));
  console.log(itemCounts(stringToCharacters(sanitize('kayden loote gryffin kayden slander loote nghtmare kayden'))));
  console.log(itemCounts(stringToCharacters(sanitize('burger fries sandwich chips fries'))));
  console.log(itemCounts(stringToCharacters(sanitize(text('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/moby-dick.txt')))));
}
module.exports = itemCounts;
