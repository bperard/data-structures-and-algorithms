'use strict';

const { Movies } = require('../movies');
const { sortTitle, sortYear, compareTitle, compareYear } = require('../index');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club'
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie'
    ]);
  });
});

describe('Comparers', () => {
  it('can compare years', () => {
    const yearGreater = compareYear({year: 2003}, {year: 2005});
    const yearEqual = compareYear({year: 2004}, {year: 2004});
    const yearLess = compareYear({year: 2005}, {year: 2003});

    expect(yearGreater).toEqual(1);
    expect(yearEqual).toEqual(0);
    expect(yearLess).toEqual(-1);
  });

  it('can compare titles', () => {
    const titleGreater = compareTitle({title: 'The Journey'}, {title: 'The Destination'});
    const titleEqual = compareTitle({title: 'An Horse'}, {title: 'A Horse'});
    const titleLess = compareTitle({title: 'An Afterthought'}, {title: 'The Premonition'});

    expect(titleGreater).toEqual(1);
    expect(titleEqual).toEqual(0);
    expect(titleLess).toEqual(-1);
  });
});
