/*
Description:
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note:

A sequence of non-space characters forms a word.
Your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.

1 <= s.length <= 10^4
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
*/


// Strategy: Split, trim white space, reverse, join, return
// O(n) // spaceO(n)
// Input: string
// Output: string
const reverseStr = (s) => {
    // Edge case
    if (s.length === 0) return '';
    if (s.length === 1) return s;

    const arrayOfWords = s.split(' '); // split by spaces
    // [ ' ', ' ', ' ', 'h', ...]

    const filteredArrayOfWords = arrayOfWords.filter((el) => el.length > 0);
    // ['h', 'e', 'l', ...]
    
    const arrayOfWordsReversed = filteredArrayOfWords.reverse();
    const reversedString = arrayOfWordsReversed.join(' ');
    return reversedString;
}

// // testing
// console.log(reverseStr("the sky is blue")); // "blue is sky the"
// console.log(reverseStr("  hello world  ")); // "world hello"
// console.log(reverseStr("a good   example")); // "example good a"
