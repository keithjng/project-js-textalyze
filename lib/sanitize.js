function sanitize(string) {
  let lower = string.toLowerCase();
  return lower;
}

if (require.main === module) {
  console.log(sanitize('I lOvE iT wHeN pEoPlE tYpE lIkE tHiS'));
}
module.exports = sanitize;
