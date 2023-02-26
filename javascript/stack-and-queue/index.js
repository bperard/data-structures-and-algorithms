'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw 'STACK IS EMPTY';
    }

    const value = this.top.value;
    this.top = this.top.next;

    return value;
  }

  peek() {
    if (!this.top) {
      throw 'STACK IS EMPTY';
    }

    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }

    return false;
  }
}

module.exports = { Stack };
