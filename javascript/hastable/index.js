'use strict';

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    const chars = key.split('');
    const asciiSum = chars.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    const primeProduct = asciiSum * 599;
    return primeProduct % this.size;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    this.buckets[hashedKey] = value;
  }

  get(key) {
    const hashedKey = this.hash(key);

    return this.buckets[hashedKey] ? this.buckets[hashedKey] : null;
  }

  has(key) {
    const hashedKey = this.hash(key);

    return this.buckets[hashedKey] ? true : false;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((element, index) => {
      if(element) {
        keys.push(index);
      }
    });

    return keys;
  }

}


module.exports = Hashtable;
