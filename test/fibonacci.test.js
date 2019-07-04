const assert = require('chai').assert
const f = require('../src/fibonacci')

describe('Fibonacci tests', () => {
    it('should return [0,1,1,2]', function () {
        assert.deepEqual(f(3), [0, 1, 1, 2])
    })

    it('should return [0,1,1,2,3,5,8,13,21]', function () {
        assert.deepEqual(f(8), [0, 1, 1, 2, 3, 5, 8, 13, 21])
    })

    it('should return [0,1]', function () {
        assert.deepEqual(f(1), [0, 1])
    })
})
