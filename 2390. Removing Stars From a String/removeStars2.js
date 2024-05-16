/**
 * @param {string} s
 * @return {string}
 */
// O(n) // spaceO(n)
var removeStars = function(s) {
    let stack = []; // Stack structure allows us to efficiently remove the last element (LIFO)

    for (let char of s) {
        if (char === '*') {
            stack.pop(); // If current char is a '*' then we remove last non-star char
        } else {
            stack.push(char); // If current char is not a '*' then we collect this char
        }
    }

    return stack.join('');
};

// // Testing
// s1 = "leet**cod*e" // Output: "lecoe"
// console.log(removeStars(s1));
// s2 = "erase*****" // Output: ""
// console.log(removeStars(s2));