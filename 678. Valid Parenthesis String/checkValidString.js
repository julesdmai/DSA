/**
 * @param {string} s
 * @return {boolean}
 */

// Strategy: Scan for balance left to right and right to left
// O(n) // spaceO(1)
// Input: String
// Output: Boolean
var checkValidString = function(s) {
    let openParensCount = 0;
    let starCount = 0;
    for (let char of s) {
        if (char === '(') {
            openParensCount++;
        }
        else if (char === '*') {
            starCount++;
        }
        else if (char === ')') {
            if (openParensCount > 0) {
                openParensCount --;
                continue;
            }
            if (starCount > 0) {
                starCount--;
                continue;
            }
            return false;
        }
    }
    // End loop, any remaining open parens can be closed by wildcard '*'
    console.log({openParensCount}, {starCount});
    return (openParensCount <= starCount);
};

// // testing
// console.log(checkValidString('(()()())'));
// console.log(checkValidString('()'))
// console.log(checkValidString('(*)'))
// console.log(checkValidString('(*))'))