/*

Description:

Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent with C's strstr() and Java's indexOf().

Example:

haystack = "hello", needle = "ll" -> 2
haystack = "aaaaa", needle = "bba" -> -1
haystack = "", needle = "" -> 0

Constraints:

0 <= haystack.length, needle.length <= 5 * 10^4
haystack and needle consist of only lowercase English characters.
*/

// Strategy: Iterate through, then iterate through again
// O(n^2) // spaceO(1)
const strStr = (haystack, needle) => {
    // Edge case: if needle is an empty string
    if (needle.length === 0) return 0;

    // Iterate through haystack up to the point where the remaining substring can still be as long as needle
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Assume needle is found, and try to disprove this
        let j;
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        // If we completed the loop without breaking, we found the needle
        if (j === needle.length) {
            return i;
        }
    }

    // At the end of the loop, return -1 if needle is not found
    return -1;
}

// // Testing
// console.log(strStr("hello", "ll")) // 2
// console.log(strStr("aaaaa", "bba")) // -1
// console.log(strStr("", "")) // 0
// console.log(strStr("aaaaa", "a")) // 0
// console.log(strStr("mississippi", "issip")) // 4
