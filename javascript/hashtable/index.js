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

}


module.exports = Hashtable;
