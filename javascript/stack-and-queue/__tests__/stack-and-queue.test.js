'use strict';

const { Stack, Queue, PseudoQueue } = require('../index');

describe('Stack', () => {
  it('push(value) sets stack.top to node with passed value', () => {
    const stack = new Stack();
    stack.push('first');
    stack.push('second');

    expect(stack.top.value).toEqual('second');
    expect(stack.top.next.value).toEqual('first');
  });

  it('pop() raises exception on empty stack', () => {
    const stack = new Stack();

    expect(() => stack.pop()).toThrow('STACK IS EMPTY');
  });

  it('pop() returns the value of the node on the top of the stack, and sets the new top value to the following node', () => {
    const stack = new Stack();

    stack.push('first');
    stack.push('second');
    const firstPoppedValue = stack.pop();
    const secondPoppedValue = stack.pop();

    expect(firstPoppedValue).toEqual('second');
    expect(secondPoppedValue).toEqual('first');
    expect(stack.top).toBeNull();
  });

  it('peek() raises exception on empty stack', () => {
    const stack = new Stack();

    expect(() => stack.peek()).toThrow('STACK IS EMPTY');
  });

  it('peek() returns the value of the top node without altering stack.top value', () => {
    const stack = new Stack();

    stack.push('first');
    stack.push('second');
    const peekedValue = stack.peek();

    expect(peekedValue).toEqual('second');
    expect(stack.top.value).toEqual('second');
    expect(stack.top.next.value).toEqual('first');
  });

  it('isEmpty() returns "true" if empty & "false" if stack contains nodes', () => {
    const stack = new Stack;

    stack.push('I have filled the void.');
    const contentStack = stack.isEmpty();
    stack.pop();
    const emptyStack = stack.isEmpty();

    expect(emptyStack).toEqual(true);
    expect(contentStack).toEqual(false);
  });
});

describe('Queue', () => {
  it('enqueue(value) adds a node to the queue with passed value and updates the queue.front & queue.back values', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');

    expect(queue.front.value).toEqual('first');
    expect(queue.front.next.value).toEqual('second');
    expect(queue.back.value).toEqual('third');
  });

  it('dequeue() raises an exception when called on an empty queue', () => {
    const queue = new Queue();

    expect(() => queue.dequeue()).toThrow('QUEUE IS EMPTY');
  });

  it('dequeue() returns value from front node and updates queue.front', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');
    const firstDequeue = queue.dequeue();
    const secondDequeue = queue.dequeue();

    expect(firstDequeue).toEqual('first');
    expect(secondDequeue).toEqual('second');
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('peek() raises an exception when called on an empty queue', () => {
    const queue = new Queue();

    expect(() => queue.peek()).toThrow('QUEUE IS EMPTY');
  });

  it('peek() returns value of front node with altering queue.front', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');
    const peekedValue = queue.peek();

    expect(peekedValue).toEqual('first');
    expect(queue.front.value).toEqual('first');
    expect(queue.back.value).toEqual('second');
  });

  it('isEmpty() returns "true" if queue is empty & "false" if queue contains nodes', () => {
    const queue = new Queue();

    queue.enqueue('I have filled the void');
    const contentQueue = queue.isEmpty();
    queue.dequeue();
    const emptyQueue = queue.isEmpty();

    expect(contentQueue).toEqual(false);
    expect(emptyQueue).toEqual(true);
  });
});

describe('PseudoQueue', () => {

});
