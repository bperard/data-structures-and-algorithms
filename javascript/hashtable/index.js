'use strict';

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    key = key.toString();
    const chars = key.split('');
    const asciiSum = chars.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    const primeProduct = asciiSum * 599;
    return primeProduct % this.size;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    this.buckets[hashedKey] = {[key]: value};
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
    this.buckets.forEach((element) => {
      if (element) {
        keys.push(Object.keys(element));
      }
    });

    return keys;
  }

  repeatedWord(string) {
    const words = string.split(' ');
    let i = 0;
    let match = '';

    while (i < words.length) {
      const hashKey = this.hash(words[i]);
      if (this.buckets[hashKey] === words[i]) {
        match = words[i];
      }

      this.buckets[hashKey] = words[i];
      i++;
    }

    if (match) {
      return match;
    } else {
      return 'No match';
    }
  }

  treeIntersection(tree1, tree2) {
    let add = true;
    const sharedArray = [];

    const traverseAddOrCheck = (node) => {
      const key = this.hash(node.value);

      if (add) {
        if (!this.buckets[key]) {
          this.buckets[key] = [];
        }
        this.buckets[key].push(node.value);
      } else if (this.buckets[key] && this.buckets[key].includes(node.value)) {
        sharedArray.push(node.value);
      }

      if (node.left) {
        traverseAddOrCheck(node.left);
      }
      if (node.right) {
        traverseAddOrCheck(node.right);
      }
    };

    traverseAddOrCheck(tree1.root);
    add = false;
    traverseAddOrCheck(tree2.root);

    return sharedArray;
  }

  leftJoin(hash1, hash2) {
    for (let hashKey in hash1.buckets) {
      this.buckets[hashKey] = [];

      const key = Object.keys(hash1.buckets[hashKey])[0];
      const value = hash1.buckets[hashKey][key];
      this.buckets[hashKey].push(key, value);

      if (hash2.buckets[hashKey]) {
        this.buckets[hashKey].push(hash2.buckets[hashKey][key]);
      } else {
        this.buckets[hashKey].push(null);
      }
    }

    return this.buckets.filter(element => element);
  }

}

// const hash1 = {
//   diligent: 'employed',
//   fond: 'enamored',
//   guide: 'usher',
//   outfit: 'garb',
//   wrath: 'anger'
// };

// const hash2 = {
//   diligent: 'idle',
//   fond: 'averse',
//   guide: 'follow',
//   flow: 'jam',
//   wrath: 'delight'
// };

let hash1 = new Hashtable(1024);
hash1.set('diligent', 'employed');
hash1.set('fond', 'enamored');
hash1.set('guide', 'usher');
hash1.set('outfit', 'garb');
hash1.set('wrath', 'anger');

let hash2 = new Hashtable(1024);
hash2.set('diligent', 'idle');
hash2.set('fond', 'averse');
hash2.set('guide', 'follow');
hash2.set('flow', 'jam');
hash2.set('wrath', 'delight');

const joinHash = new Hashtable(1024);
console.log(joinHash.leftJoin(hash1, hash2));

module.exports = Hashtable;
