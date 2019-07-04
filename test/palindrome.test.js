const assert = require('chai').assert
const p = require('../src/palindrome')

describe('Palindrome tests', () => {
  it('should be equals to level', function () {
    assert.isTrue(p('level'))
  })

  it('should be equals to Mom', function () {
    assert.isTrue(p('Mom'))
  })

  it('should be equals to My gym', function () {
    assert.isTrue(p('My gym'))
  })
})
