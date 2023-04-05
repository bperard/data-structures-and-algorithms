'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });

  it('should insert at beginning of empty list', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });

  it('should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{ banana } -> { apple } -> NULL');

  });

  it('should know when value is included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('apple')).toBe(true);
  });

  it('should know when value is not included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('cucumber')).toBe(false);
  });

  it('reverses the linked list', () => {
    const testLink = new LinkedList();
    testLink.insert('A');
    testLink.insert('B');
    testLink.insert('C');
    testLink.insert('D');

    testLink.reverse();
    const revString = testLink.toString();

    expect(revString).toEqual('{ A } -> { B } -> { C } -> { D } -> NULL');
  });

  it('removes values from list', () => {
    const testLink = new LinkedList();
    testLink.insert('A');
    testLink.insert('B');
    testLink.insert('C');
    testLink.insert('D');
    testLink.insert('A');


    testLink.removeValue('C');
    const strDBA = testLink.toString();
    testLink.removeValue('A');
    const strDB = testLink.toString();
    testLink.removeValue('D');
    testLink.removeValue('B');
    const nope = testLink.toString();

    expect(strDBA).toEqual('{ A } -> { D } -> { B } -> { A } -> NULL');
    expect(strDB).toEqual('{ D } -> { B } -> NULL');
    expect(nope).toEqual('NULL');
  });

  it('returns midpoint', () => {
    const testLink = new LinkedList();
    testLink.insert('E');
    testLink.insert('D');
    testLink.insert('C');
    testLink.insert('B');
    testLink.insert('A');

    const trueMid = testLink.getMidpoint().value;
    testLink.removeValue('C');

    const lowMid = testLink.getMidpoint().value;
    const highMid = testLink.getMidpoint('high').value;
    let midArr = testLink.getMidpoint('both');
    midArr = [midArr[0].value, midArr[1].value];

    expect(trueMid).toEqual('C');
    expect(lowMid).toEqual('B');
    expect(highMid).toEqual('D');
    expect(midArr).toEqual(['B', 'D']);
  });

  it('returns kth node from end', () => {
    const testLink = new LinkedList();
    const emptyList = testLink.getKthFromEnd(0);

    testLink.insert('E');
    testLink.insert('D');
    testLink.insert('C');
    testLink.insert('B');
    testLink.insert('A');

    const tail = testLink.getKthFromEnd(0).value;
    const within = testLink.getKthFromEnd(4).value;
    const greaterThan = testLink.getKthFromEnd(5);

    expect(emptyList).toBeNull();
    expect(tail).toEqual('E');
    expect(within).toEqual('A');
    expect(greaterThan).toBeNull();
  });

});
