'use strict';

const insertionSort = require('../index');

describe('Insertion Sort', () => {
  it('Takes an array and returns an array sorted least to greatest', () => {
    const sortedArray = insertionSort([8,4,23,42,16,15]);

    expect(sortedArray).toEqual([4,8,15,16,23,42]);
  });
});
