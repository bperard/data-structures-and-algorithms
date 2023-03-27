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
      if (element) {
        keys.push(index);
      }
    });

    return keys;
  }

  repeatedWord(string) {
    const words = string.split(' ');
    let i = 0;
    let match = '';

    while (i < words.length) {
      const key = this.hash(words[i]);
      if (this.buckets[key] === words[i]) {
        match = words[i];
      }

      this.buckets[key] = words[i];
      i++;
    }

    if(match) {
      return match;
    } else {
      return 'No match';
    }
  }

}


const newHash = new Hashtable(1024);
console.log(newHash.repeatedWord('Once upon as the het the time, there was a brave princess who...'));

module.exports = Hashtable;
