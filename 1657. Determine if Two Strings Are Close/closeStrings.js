/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function equalArray(a, b) {
    if (a.length === b.length) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

var closeStrings = function(word1, word2) {
    const lettersOfWord1 = {}
    for (letter of word1) {
        (!lettersOfWord1[letter]) ? lettersOfWord1[letter] = 1 : lettersOfWord1[letter]++;
    }
    const letterFrequencyWord1 = Object.values(lettersOfWord1);
    const letters1 = Object.keys(lettersOfWord1);
    letters1.sort();

    const lettersOfWord2 = {}
    for (letter of word2) {
        (!lettersOfWord2[letter]) ? lettersOfWord2[letter] = 1 : lettersOfWord2[letter]++;
    }
    const letterFrequencyWord2 = Object.values(lettersOfWord2);
    const letters2 = Object.keys(lettersOfWord2);
    letters2.sort();

    console.log('1:', letters1);
    console.log('2:', letters2);
    if (!equalArray(letters1, letters2)) return false;

    letterFrequencyWord1.sort((a,b) => a - b)
    letterFrequencyWord2.sort((a,b) => a - b)
    console.log('1:', letterFrequencyWord1);
    console.log('2:', letterFrequencyWord2);

    return (equalArray(letterFrequencyWord1, letterFrequencyWord2))
};