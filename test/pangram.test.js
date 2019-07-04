const assert = require('chai').assert
const isPangram = require('../src/pangram')

describe('Pangram tests', () => {
  it('should be false with empty sentence', () => {
    assert.isFalse(isPangram(''))
  })

  it('should recognizes a perfect lower case pangram', () => {
    assert.isTrue(isPangram('abcdefghijklmnopqrstuvwxyz'))
  })

  it('pangram with only lower case', () => {
    assert.isTrue(isPangram('the quick brown fox jumps over the lazy dog'))
  })

  it('missing character \'x\'', () => {
    assert.isFalse(isPangram('a quick movement of the enemy will jeopardize five gunboats'))
  })
})
