'use strict';

const Hashtable = require('../index');
const { Tree } = require('../../tree/index');

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

  it('Returns the first repeated word or no match', () => {
    const newHash = new Hashtable(1024);
    const match = newHash.repeatedWord('Once upon a time, there was a brave princess who...');
    const nope = newHash.repeatedWord('Yo what is up?');

    expect(match).toEqual('a');
    expect(nope).toEqual('No match');
  });

  it('Returns shared values between two trees', () => {
    const tree1 = new Tree();
    tree1.breadthBinaryTreeBuild([150,100,250,75,160,200,350,125,175,300,500]);

    const tree2 = new Tree();
    tree2.breadthBinaryTreeBuild([42,100,600,15,160,200,350,125,175,4,500]);

    const newHash = new Hashtable(44455);
    const sharedArray = newHash.treeIntersection(tree1, tree2);
    sharedArray.sort((a, b) => a - b);

    expect(sharedArray).toEqual([100,125,160,175,200,350,500]);
  });

});
