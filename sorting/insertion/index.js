'use strict';

function insert(sortedArray, value) {
  let i = 0;
  while(value > sortedArray[i]) {
    i++;
  }
  while(i < sortedArray.length) {
    const temp = sortedArray[i];
    sortedArray[i] = value;
    value = temp;
    i++;
  }

  sortedArray.push(value);
}

function insertionSort(inputArray) {
  const sorted = [];
  sorted[0] = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    insert(sorted, inputArray[i]);
  }

  return sorted;
}

module.exports = insertionSort;
