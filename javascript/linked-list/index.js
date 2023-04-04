'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);

    // const oldHead = this.head;
    // this.head = new Node(value, this.head);
    // this.head.next = oldHead;

  }

  toString() {
    let current = this.head;
    let text = '';

    // walk around
    while(current) {

      // do something
      text += `{ ${current.value} } -> `;

      current = current.next;
    }
    // return '{ banana } -> { apple } -> NULL';

    return text + 'NULL';
  }

  includes(value) {
    let current = this.head;
    let found = false;

    while(current && !found) {
      if(current.value === value) {
        found = true;
      }

      current = current.next;
    }

    return found;
  }

  reverse() {
    let prevNode = null;
    let currNode = this.head;

    while (currNode) {
      const temp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = temp;
    }

    this.head = prevNode;
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
