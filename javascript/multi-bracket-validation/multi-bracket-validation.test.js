'use strict';

const validateBrackets = require('./index');

describe('Multi-Bracket Validation', () => {
  it('should be able to determin if brackets are balanced', () => {
    let str1 = '(){}[]';
    let str2 = '(()';
    expect(validateBrackets(str1)).toBeTruthy();
    expect(validateBrackets(str2)).toBeFalsy();
  });
});
