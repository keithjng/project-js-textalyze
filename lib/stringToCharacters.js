function stringToCharacters(string) {
  let array = string.split('');
  return array;
}

if (require.main === module) {
  console.log('Running sanity checks!');
  console.log(stringToCharacters('kayden loote gryffin kayden slander loote nghtmare kayden'));
  console.log(stringToCharacters('burger fries sandwich chips fries'));
}
module.exports = stringToCharacters;
