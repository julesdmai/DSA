/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split s into array of words
    // const arrayOfWords = s.trim().split(/\s+/); // regex method
    // console.log(arrayOfWords);

    const arrayOfWords = s.split(' ');
    console.log(arrayOfWords);
    const filteredArray = arrayOfWords.filter((word) => word.length > 0); // Remove elements that are just white space

    // Reverse, join, return
    return filteredArray.reverse().join(' ');
};

// Testing for reverseWords()
// const s1 = "the sky is blue";
// console.log(reverseWords(s1)); // Output: "blue is sky the"

// const s2 = "  hello world  ";
// console.log(reverseWords(s2)); // Output: "world hello"

// const s3 = "a good   example";
// console.log(reverseWords(s3)); // Output: "example good a"