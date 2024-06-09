/**
 * @param {string} s
 * @return {string}
 */

// O(nlogn) // spaceO(n)
var sortVowels = function(s) {
    if (s.length < 2) return s;

    const t = Array.from(s);
    const vowelsFound = [];
    const vowelIndices = [];

    const vowels = new Set([
        'a', 'A',
        'e', 'E',
        'i', 'I',
        'o', 'O',
        'u', 'U'
    ]);

    // Collect vowels and record their position
    for (let i = 0; i < s.length; i++) {
        const thisLetter = s[i];
        if (vowels.has(thisLetter)) {
            vowelsFound.push(thisLetter);
            vowelIndices.push(i); // Record the indices where the vowels have been found
        }
    }

    // Sort the vowels // nlogn
    vowelsFound.sort();

    // Replace vowels at recorded indices
    for (let i = 0; i < vowelIndices.length; i++) {
        const vowelIndex = vowelIndices[i];
        t[vowelIndex] = vowelsFound[i];
    };

    return t.join('');
};

// // Testing
// console.log(sortVowels("lEetcOde"));