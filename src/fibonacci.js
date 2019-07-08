/**
 * This function should return the first n Fibonacci numbers in an array
 * To test this function run 'npm run fibonacci' in the console
 * @param n
 * @returns {number[]}
 */
const fibonacciSeries = function (n) {
    let current=0, next=1, temp=0, sequence=[];
    sequence.push(current);

    while(n) {
        temp = next;
        next += current;
        current = temp;
        sequence.push(current);
        n--;
    }
    return sequence;
};

module.exports = fibonacciSeries
