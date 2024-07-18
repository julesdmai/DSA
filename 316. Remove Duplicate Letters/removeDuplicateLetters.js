/**
 * @param {string} s
 * @return {string}
 */

// Strategy: Find lastOccurence of each char in string s, iterate through s, construct a stack that fits the criteria, use a set to keep track of which chars have been added to the set, join and return
// O(n) // spaceO(n)
// Input: string
// Output: string
var removeDuplicateLetters = function(s) {
    // Find last occurence of each character in the string
    const lastOccurence = {};
    for (let i = 0; i < s.length; i++) {
        lastOccurence[s[i]] = i;
    }

    const stack = [];
    const seen = new Set();

    // Iterate through s constructing stack according to prompt
    for (let i = 0; i < s.length; i++) {
        let thisChar = s[i];
        if (seen.has(thisChar)) continue;

        while (stack.length && stack[stack.length - 1] > thisChar && lastOccurence[stack[stack.length - 1]] > i) {
            seen.delete(stack.pop());
        }

        stack.push(thisChar);
        seen.add(thisChar);
    }

    return stack.join('');
};

// testing
// console.log(removeDuplicateLetters('bcabc'));
// console.log(removeDuplicateLetters('cbacdcbc'));
// console.log(removeDuplicateLetters('ecbacba'));