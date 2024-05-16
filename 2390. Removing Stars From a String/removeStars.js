/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    
    // Initialize variables
    let arrayOfChars = [];

    // Iterate through chars
    for (let i = 0; i < s.length; i++) {
        let thisChar = s[i];
        let nextChar = s[i + 1];

        if (thisChar !== '*') {
            arrayOfChars.push(thisChar); // We collect the char as long as the char is not a *
        }
        
        if (nextChar === '*') {
            arrayOfChars.pop(); // However, if the next char is a *, then we must remove a letter
        }
    }
    
    return (arrayOfChars.join(""));
    
};

// // Testing
// s1 = "leet**cod*e" // Output: "lecoe"
// console.log(removeStars(s1));
// s2 = "erase*****" // Output: ""
// console.log(removeStars(s2));