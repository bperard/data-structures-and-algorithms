'use strict';

const { Node, Tree } = require('../index');

describe('Tree', () => {
  // it('', () => {

  // });

  it('Can successfully instantiate an empty tree with single root node', () => {
    const tree = new Tree();

    expect(tree).toBeTruthy();
    expect(tree.root).toBeNull();
  });

  const traversalTree = new Tree();
  traversalTree.breadthBinaryTreeBuild(['A', 'B', 'C', 'D', 'E', 'F']);

  const nullTraversalTree = new Tree();
  nullTraversalTree.breadthBinaryTreeBuild(['A', 'B', 'C', null, 'D', 'E', 'F']);

  it('Can successfully return a collection from a preorder traversal', () => {
    const results = traversalTree.preOrder();
    const nullResults = nullTraversalTree.preOrder();

    expect(results).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    expect(nullResults).toEqual(['A', 'B', 'D', 'C', 'E', 'F']);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    const results = traversalTree.inOrder();
    const nullResults = nullTraversalTree.inOrder();

    expect(results).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
    expect(nullResults).toEqual(['B', 'D', 'A', 'E', 'C', 'F']);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const results = traversalTree.postOrder();
    const nullResults = nullTraversalTree.postOrder();

    expect(results).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
    expect(nullResults).toEqual(['D', 'B', 'E', 'F', 'C', 'A']);
  });

  it('Accepts a tree as input and outputs a new tree with "FizzBuzz" adjusted values', () => {
    const fizzBuzzStarterTree = new Tree();
    fizzBuzzStarterTree.breadthBinaryTreeBuild([38, 36, 105, 7, 43, 55, 41, 108, 202, 305]);
    const resultsTree = fizzBuzzStarterTree.treeFizzBuzzPreOrder();
    const resultsArray = resultsTree.preOrder();

    expect(resultsArray).toEqual([38, 'Fizz', 7, 'Fizz', 202,
      43, 'Buzz', 'FizzBuzz', 'Buzz', 41]);
  });

  it('Finds the maximum value stored in the tree', () => {
    const maxTree = new Tree();
    maxTree.breadthBinaryTreeBuild([38, 3, 14, 7, 28, 46]);
    const foundMax = maxTree.findMaxValuePreOrder();

    expect(foundMax).toEqual(46);
  });

  it('Returns all values in tree layer by layer, left to right', () => {
    const checkTree = new Tree();
    checkTree.breadthBinaryTreeBuild(['A', 'W', 'E', 'S', '0', 'M', 'e']);
    const results = checkTree.breadthFirst();

    expect(results).toEqual(['A', 'W', 'E', 'S', '0', 'M', 'e']);
  });
});

// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Returns true	false for the contains method, given an existing or non-existing node value
