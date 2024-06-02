/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Initialize values
    let longestLength = 0;

    // Find the shorter text to iterate over
    const shorterText = (text1.length < text2.length) ? text1 : text2;
    const longerText = (shorterText === text1) ? text2 : text1;

    console.log('shorterText: ', shorterText);
    console.log('longerText: ', longerText);
    

    for (let i = 0; i < shorterText.length; i++) {
        let currentLength = 0;

        // Initialize string as just the current char we are iterating over
        let string = shorterText[i];

        // Short circuit if the text2 does not include this char
        if (!longerText.includes(string)) continue;

        let left = i;
        let right = 0;

        // Iterate through both words
        while (left < shorterText.length && right < longerText.length) {
            if (shorterText[left] === longerText[right]) { // We have found the letter, so we look for the next letter
                left++;
                currentLength++;
            }
            right++; // We always advance through the longerText
        }
        // Calculate the max we've found so far
        longestLength = Math.max(currentLength, longestLength);
    }

    return longestLength
};

// // Testing
// console.log(longestCommonSubsequence("abcde", 'ace'));
// console.log(longestCommonSubsequence("abc", 'abc'));
// console.log(longestCommonSubsequence("abc", 'def'));