'use strict';

function merge(leftArr, rightArr, mergedArr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      mergedArr[k] = leftArr[i];
      i++;
    } else {
      mergedArr[k] = rightArr[j];
      j++;
    }

    k++;
  }

  if (i === leftArr.length) {
    for (; j < rightArr.length; j++) {
      mergedArr[k] = rightArr[j];
      k++;
    }
  } else {
    for (; i < leftArr.length; i++) {
      mergedArr[k] = leftArr[i];
      k++;
    }
  }

  return mergedArr;
}

function mergeSort(inputArray) {
  let mergedArr = [];

  if(inputArray.length > 1) {
    const mid = Math.floor(inputArray.length / 2);
    let leftArr = inputArray.slice(0,mid);
    let rightArr = inputArray.slice(mid);

    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);

    mergedArr = merge(leftArr, rightArr, mergedArr);
  } else {
    mergedArr = inputArray;
  }

  return mergedArr;
}

module.exports = mergeSort;
