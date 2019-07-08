/**
 * This code must return if the given text is a palindrome. Attention for the text, is not only a word
 * Can be more than a word that's a palindrome (maximum of two words)
 * To test, just run 'npm run palindrome' in the console
 * @param text
 * @returns {boolean}
 */
module.exports = function (text) {
    let lowCaseText = text.replace(' ', '').toLowerCase();
    let reversedArray = lowCaseText.split('').reverse().join('');

    return lowCaseText === reversedArray;
}