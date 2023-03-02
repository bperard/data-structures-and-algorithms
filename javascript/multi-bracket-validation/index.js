'use strict';

const { Stack } = require('../stack-and-queue/index');

function validateBrackets(str) {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];

    if (temp === '(' || temp === '[' || temp === '{') {
      stack.push(temp);
    }

    if (stack.length === 0) {
      return false;
    }

    if (temp === ')') {
      let check = stack.pop();
      if (check !== '(') {
        return false;
      }
    }

    if (temp === ']') {
      let check = stack.pop();
      if (check !== '[') {
        return false;
      }
    }

    if (temp === '}') {
      let check = stack.pop();
      if (check !== '{') {
        return false;
      }
    }
  }

  if (stack.pop() !== null) {
    return false;
  }

  return true;
}

module.exports = { validateBrackets };
