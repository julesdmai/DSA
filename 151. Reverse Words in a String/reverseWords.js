/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split s into array of words
    const arrayOfWords = s.split(' ');
    console.log(arrayOfWords);
    
    const arrayOfWordsTrimmed = [];
    // Clean up the elements
    arrayOfWords.forEach((word) => {
        word.trimStart();
        word.trimEnd();
        if (word !== '') arrayOfWordsTrimmed.push(word);
    });
    console.log(arrayOfWordsTrimmed);

    // Reverse
    const reversed = arrayOfWordsTrimmed.reverse();
    console.log(reversed);

    // Return
    const joined = reversed.join(' ');
    console.log(joined);

    return joined;
};

// Testing for reverseWords()
// const s1 = "the sky is blue";
// console.log(reverseWords(s1)); // Output: "blue is sky the"

// const s2 = "  hello world  ";
// console.log(reverseWords(s2)); // Output: "world hello"

const s3 = "a good   example";
console.log(reverseWords(s3)); // Output: "example good a"