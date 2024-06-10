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
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let longestSubLength = 0; // Return this value
    let currentSubLength = 0; // What we increase and decrease
    let leftPointer = 0; // Use to iterate through s
    let rightPointer = 0;
    const set = new Set(s[0]); // Use to store letters in currentSubstring

    while (rightPointer < s.length - 1) {
        rightPointer++;
        currentSubLength++;

        // Move left pointer until we eliminate this character from the set
        while (set.has(s[rightPointer])) {
            // If we currently have this character in our substring, we shrink the window until the char has left the window
            set.delete(s[leftPointer]);
            leftPointer++;
            currentSubLength--;
        }

        set.add(s[rightPointer]); // Add this character to the set

        // Update leader
        longestSubLength = Math.max(longestSubLength, currentSubLength);
    }

    return longestSubLength;
    

}

// // testing
// console.log(longestSubstringWithoutRepeats('abcabcbb'));
// console.log(longestSubstringWithoutRepeats('bbbbb'));
// console.log(longestSubstringWithoutRepeats('pwwkew'));
// console.log(longestSubstringWithoutRepeats(''));