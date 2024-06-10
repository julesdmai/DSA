/*
Description:

Given a string s, find the length of the longest substring without repeating characters.

Example:
s = "abcabcbb" -> Output: 3
s = "bbbbb" -> Output: 1
s = "pwwkew" -> Output: 3
Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.

*/

// Strategy: two pointers, iterate through once, store running leader
// O(n) // spaceO(n)
// Input: string
// Output: number
const longestSubstringWithoutRepeats = (s) => {
    // Edge case
    if (s.length <= 1) return s.length; 

    let longestSubLength = 0; // Return this value

    // Initialize window
    let leftPointer = 0;
    let rightPointer = 0;
    const set = new Set(); // Use to store letters in current window

    // Itereate through string
    while (rightPointer < s.length) {

        // If our window includes this current letter, move the left pointer until it is out of our window
        while (set.has(s[rightPointer])) {
            set.delete(s[leftPointer]);
            leftPointer++;
        }

        // There is no longer this letter in our window, so we add it to the window
        set.add(s[rightPointer]);
        rightPointer++;

        // Update record
        longestSubLength = Math.max(longestSubLength, rightPointer - leftPointer)
    }

    return longestSubLength;
    

}

// // // testing
// console.log(longestSubstringWithoutRepeats('abcabcbb'));
// console.log(longestSubstringWithoutRepeats('bbbbb'));
// console.log(longestSubstringWithoutRepeats('pwwkew'));
// console.log(longestSubstringWithoutRepeats(''));
// console.log(longestSubstringWithoutRepeats('au'));