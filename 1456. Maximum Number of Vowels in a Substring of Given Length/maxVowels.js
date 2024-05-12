/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

var maxVowels = function(s, k) {
    let currentCount = 0;
    let maxVowels = 0;

    // Initialize window // ex. if k = 3, first window is positions s[0], s[1], s[2]
    for (let i = 0; i < k; i++) {
        if (VOWELS.has(s[i])) {
            currentCount++;
        }
    }
    maxVowels = currentCount;

    // Slide the window over the string // i = k meaning i = 3 or s[3]
    for (let i = k; i < s.length; i++) {
        // If a vowel leaves the window, decrement the count
        if (VOWELS.has(s[i - k])) {
            currentCount--; // i = 3, k = 3 meaning s[0] is leaving the window. Next iteration i = 4, k = 3 meaning s[1] is leaving the window. Etc. 
        }
        // If a vowel enters the window, increment the count
        if (VOWELS.has(s[i])) {
            currentCount++; // if s[3] is a vowel, then increment
        }

        // Update the max vowels count
        maxVowels = Math.max(maxVowels, currentCount);

        // Short circuit if we hit the max possible count
        if (maxVowels === k) return maxVowels;
    }

    return maxVowels;
};

// // Testing for maxVowels()
// s1 = "abciiidef", k1 = 3 // Output: 3
// console.log(maxVowels(s1, k1));

// s2 = "aeiou", k2 = 2 // Output: 2
// console.log(maxVowels(s2, k2));

// s3 = "leetcode", k3 = 3 // Output: 2
// console.log(maxVowels(s3, k3));