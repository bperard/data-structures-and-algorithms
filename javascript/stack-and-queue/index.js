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

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }

    this.back = newNode;
  }

  dequeue() {
    if (!this.front) {
      throw 'QUEUE IS EMPTY';
    }

    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return value;
  }

  peek() {
    if (!this.front) {
      throw 'QUEUE IS EMPTY';
    }

    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    }

    return false;
  }
}

module.exports = { Stack, Queue };
