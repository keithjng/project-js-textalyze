/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */

function stringToCharacters(string) {
  let array = string.split('');
  return array;
}

function itemCounts(array) {
  let counts = {};

  // Your code here.
  // Run 'npm test' to see what tests need to pass.
  // See README.md for a written description.

  /*  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      var1 = var1 + 1
    }
  } */

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
  console.log(itemCounts(stringToCharacters('kayden loote gryffin kayden slander loote nghtmare kayden')));
  console.log(itemCounts(stringToCharacters('burger fries sandwich chips fries')));
/* if (require.main === module) {
  let artists = [];
  artists = ['kayden', 'loote', 'gryffin', 'kayden', 'slander', 'loote', 'nghtmare', 'kayden'];
  let food = [];
  food = ['burger', 'fries', 'sandwich', 'chips', 'fries'];
  console.log('The counts for [' + artists + '] are:');
  console.log(itemCounts(artists));
  console.log('The counts for [' + food + '] are:');
  console.log(itemCounts(food));
} */
}
module.exports = itemCounts;