'use strict';

const { Queue } = require('../stack-and-queue/index');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// useful for a later code challenge
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

// useful for a later code challenge
class KaryTree {
  constructor() {
    this.root = null;
  }
}

// binary tree
class Tree {
  constructor() {
    this.root = null;
  }

  // Accounts for null values in array
  breadthBinaryTreeBuild(arr) {
    const queue = new Queue();
    this.root = new Node();
    this.root.value = arr.shift();

    const traverse = (node) => {
      for (const key of Object.keys(node)) {
        if (key !== 'value' && arr.length > 0) {
          if (arr[0]) {
            const newNode = new Node();
            newNode.value = arr.shift();
            node[key] = newNode;
            queue.enqueue(newNode);
          } else {
            arr.shift();
          }
        }
      }
      if (!queue.isEmpty()) {
        const nextNode = queue.dequeue();
        traverse(nextNode);
      }
    };

    traverse(this.root);
  }

  // root - left - right
  preOrder() {
    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  // left - root - right
  inOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      results.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  // left - right - root
  postOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }

      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }
}

let tree = new Tree();

tree.breadthBinaryTreeBuild(['A', 'B', 'C', 'D', 'E', 'F']);

const inResults = tree.inOrder();
const postResults = tree.postOrder();
const preResults = tree.preOrder();
console.log('D, B, E, A, F, C', inResults);
console.log('D, E, B, F, C, A', postResults);
console.log('A, B, D, E, C, F', preResults);

tree.breadthBinaryTreeBuild(['A', 'B', 'C', null, 'D', 'E', 'F']);

const inResults2 = tree.inOrder();
const postResults2 = tree.postOrder();
const preResults2 = tree.preOrder();
console.log('B, D, A, E, C, F', inResults2);
console.log('D, B, E, F, C, A', postResults2);
console.log('A, B, D, C, E, F', preResults2);

module.exports = { Node, Tree };
