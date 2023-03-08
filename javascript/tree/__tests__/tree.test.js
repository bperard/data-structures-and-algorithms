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

    expect(results).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
    expect(nullResults).toEqual([ 'A', 'B', 'D', 'C', 'E', 'F' ]);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    const results = traversalTree.inOrder();
    const nullResults = nullTraversalTree.inOrder();

    expect(results).toEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ]);
    expect(nullResults).toEqual([ 'B', 'D', 'A', 'E', 'C', 'F' ]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const results = traversalTree.postOrder();
    const nullResults = nullTraversalTree.postOrder();

    expect(results).toEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
    expect(nullResults).toEqual([ 'D', 'B', 'E', 'F', 'C', 'A' ]);
  });
});

// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Returns true	false for the contains method, given an existing or non-existing node value
