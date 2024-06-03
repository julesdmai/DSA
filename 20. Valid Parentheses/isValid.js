/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openParens = ['(', '{', '['];
    const closeParens = [')', '}', ']'];

    const stack = []; // LIFO

    for (let char of s) {
        // If opening, add to stack
        if (openParens.includes(char)) {
            stack.push(char);
        }
        // If closing, check top of stack
        if (closeParens.includes(char)) {
            let topStack = stack.pop();
            for (let i = 0; i < openParens.length; i++) {
                if (closeParens[i] === char) {
                    if (topStack !== openParens[i]) return false;
                }
            }
        }
    }

    if (stack.length > 0) return false;
    else if (stack.length === 0) return true;
};

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));