'use strict';

const { Stack } = require('../index');

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
    stack.push('third');
    const firstPoppedValue = stack.pop();
    const secondPoppedValue = stack.pop();

    expect(firstPoppedValue).toEqual('third');
    expect(secondPoppedValue).toEqual('second');
    expect(stack.top.value).toEqual('first');
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
