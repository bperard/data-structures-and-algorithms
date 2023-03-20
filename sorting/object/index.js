'use strict';


function sortYear(arr) {
  arr.sort((a, b) => compareYear(a, b));

  return arr;
}


function compareYear(movieA, movieB) {
  return movieA.year < movieB.year ? 1 :
    movieA.year > movieB.year ? -1 : 0;
}

function sortTitle(arr) {
  arr.sort((a, b) => compareTitle(a, b));

  return arr;
}


function compareTitle(movieA, movieB) {
  movieA = movieA.title.replace(/^(The|A|An)\s/g, '');
  movieB = movieB.title.replace(/^(The|A|An)\s/g, '');

  return movieA < movieB ? -1 :
    movieA > movieB ? 1 : 0;
}


module.exports = { sortYear, compareYear, sortTitle, compareTitle };
