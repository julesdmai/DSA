/**
 * @param {string} s
 * @return {boolean}
 */

// Strategy: Low is minimum possible number of unmatched open parens, high is maximum possible number of unmatched open parens
// O(n) // spaceO(1)
// Input: String
// Output: Boolean
var checkValidString = function(s) {
    let low = 0;
    let high = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            low++;
            high++;
        } else if (s[i] === ')') {
            low--;
            high--;
        } else { // s[i] === '*'
            low--;
            high++;
        }

        if (high < 0) {
            return false; // There are more ')' than '(' and '*' combined
        }

        // To ensure low doesn't go below 0
        low = Math.max(low, 0);
    }

    return low === 0;
};

// // testing
// console.log(checkValidString('(()()())'));
// console.log(checkValidString('()'))
// console.log(checkValidString('(*)'))
// console.log(checkValidString('(*))'))
// console.log(checkValidString('('))
// console.log(checkValidString('(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'))