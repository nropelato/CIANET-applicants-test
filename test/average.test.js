const assert = require('assert')
const avg = require('../src/average')

describe('Average tests', () => {
    it('should return 2.5', function () {
        const a = (2 + 3) / 2
        assert.strictEqual(avg(2, 3), a)
    });

    it('should return 3', function () {
        const a = (3 + 3) / 2
        assert.strictEqual(avg(3, 3), a)
    });

    it('should return 6', function () {
        const a = (10 + 2) / 2
        assert.strictEqual(avg(10, 2), a)
    });
})
