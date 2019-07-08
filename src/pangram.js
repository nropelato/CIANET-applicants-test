/**
 * Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter")
 * is a sentence using every letter of the alphabet at least once. The best known English pangram is:
 * The quick brown fox jumps over the lazy dog.
 * The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive.
 * Input will not contain non-ASCII symbols.
 * To test, just run 'npm run pangram' in the console
 * @param sentence
 * @returns {boolean}
 */

module.exports = function (sentence) {
    if(sentence.trim() == '') return false;
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowCaseSentence = sentence.toLowerCase();

    for(let i=0; i<alphabet.length; i++) {
        if(lowCaseSentence.indexOf(alphabet[i]) == -1) 
            return false;
    }

    return true;
}
