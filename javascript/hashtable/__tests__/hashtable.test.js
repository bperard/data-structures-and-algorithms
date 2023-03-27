'use strict';

const Hashtable = require('../index');

describe('Hashtable', () => {
  it('Sets a value', () => {
    const newHash = new Hashtable(38);
    newHash.set('thisKey', 'yollo');

    const key = newHash.hash('thisKey');

    expect(newHash.buckets[key]).toEqual('yollo');
  });

  it('Get retrieves a value or returns null', () => {
    const key = 'findKey';
    const newHash = new Hashtable(38);
    newHash.set(key, 'findMe');

    const found = newHash.get(key);
    const nope = newHash.get('nope');

    expect(found).toEqual('findMe');
    expect(nope).toBeNull();
  });

  it('Returns existing keys', () => {
    const newHash = new Hashtable(38);
    const key1 = 'firstOne';
    const key2 = 'seconds';
    newHash.set(key1, 'start');
    newHash.set(key2, 'finish');

    const hashedKeys = [newHash.hash(key1), newHash.hash(key2)];
    hashedKeys.sort((a, b) => a - b);

    expect(newHash.keys()).toEqual(hashedKeys);
  });

  it('Replaces value during collision, and retrieves it', () => {
    const newHash = new Hashtable(38);
    const key = 'crash';
    newHash.set(key, 'before');
    newHash.set(key, 'after');

    const collided = newHash.get(key);

    expect(collided).toEqual('after');
  });

  it('Hashes a key to a bucket index', () => {
    const newHash = new Hashtable(38);
    const key = 'key';

    const keyHash = (329 * 599) % 38;

    expect(newHash.hash(key)).toEqual(keyHash);
  });

});
