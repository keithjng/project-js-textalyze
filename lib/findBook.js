function findBook(input) {
  if (input === 'Tale-Of-Two-Cities') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/tale-of-two-cities.txt');
    return file;
  } else if (input === 'Moby-Dick') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/moby-dick.full.txt');
    return file;
  } else if (input === 'Great-Gatsby') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/great-gatsby.txt');
    return file;
  } else if (input === 'Faust') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/faust.de.txt');
    return file;
  } else if (input === 'Don-Quijote') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/don-quijote.es.txt');
    return file;
  } else if (input === 'Dom-Casmurro') {
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/dom-casmurro.pt.txt');
    return file;
  } else {
    console.log('Book not found!');
    let file = ('/Users/Keith/Desktop/CompSci/project-js-textalyze/sample_data/error-message.txt');
    return file;
  }
}
module.exports = findBook;
