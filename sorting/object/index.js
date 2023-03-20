'use strict';

const { Movies } = require('./movies');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort((a, b) => compareYear(a, b));

  return arr;
}


function compareYear(movieA, movieB) {
  //do the thing
  return movieA.year < movieB.year ? 1 :
    movieA.year > movieB.year ? -1 : 0;
}

function sortTitle(arr) {
  arr.sort((a, b) => compareTitle(a, b));

  return arr;
}


function compareTitle(movieA, movieB) {
  //do the thing

  return movieA.title < movieB.title ? -1 :
    movieA.title > movieB.title ? 1 : 0;
}


console.log(sortYear(Movies));
module.exports = { sortYear, compareYear, sortTitle, compareTitle };
