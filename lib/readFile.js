const fs = require('fs');

function text(fileDir) {
  let book = fs.readFileSync(fileDir, 'utf-8');
  return book;
}

module.exports = text;
