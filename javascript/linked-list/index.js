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
    while (current) {

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

    while (current && !found) {
      if (current.value === value) {
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

  removeValue(remVal) {
    let prevNode = null;
    let currNode = this.head;

    while (!prevNode && currNode) {
      if (currNode.value === remVal) {
        currNode = currNode.next;
      } else {
        this.head = currNode;
        prevNode = currNode;
        currNode = currNode.next;
        prevNode.next = null;
      }
    }

    while (currNode) {
      if (currNode.value === remVal) {
        currNode = currNode.next;
      } else {
        prevNode.next = currNode;
        prevNode = currNode;
        currNode = currNode.next;
        prevNode.next = null;
      }
    }

    if (!prevNode) {
      this.head = null;
    }
  }

  getMidpoint(mid = 'low') {
    if (!this.head) {
      return null;
    }

    let midpoint = this.head;
    let endpoint = this.head.next;
    let steps = 1;

    while (endpoint) {
      if (steps % 2 === 0) {
        midpoint = midpoint.next;
      }

      endpoint = endpoint.next;
      steps++;
    }

    if (steps % 2 === 0) {
      return mid === 'high' ? midpoint.next :
        mid === 'both' ? [midpoint, midpoint.next] : midpoint;
    }

    return midpoint;
  }

  getKthFromEnd(kVal) {
    let kNode = null;
    let endpoint = this.head;
    let steps = 0;

    while (endpoint) {
      if (steps < kVal) {
        steps++;
      } else if (steps === kVal) {
        kNode = this.head;
        steps++;
      } else if (steps > kVal) {
        kNode = kNode.next;
      }
      endpoint = endpoint.next;
    }

    return kNode;
  }

}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
