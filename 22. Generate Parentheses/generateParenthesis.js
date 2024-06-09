/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) return ['()'];

    const results = [];
    
    // Helper function to take open or close parens
    const dfs = (string, openParensCount, closeParensCount) => {
        // Base case
        if (string.length === n * 2) {
            results.push(string);
            return;
        }

        // Recursive case
        if (openParensCount < n) {
            dfs(string + '(', openParensCount + 1, closeParensCount);
        }
        if (closeParensCount < openParensCount) {
            dfs(string + ')', openParensCount, closeParensCount + 1);
        }
    }
    
    // Start the first invocation of recursive call, passing in n pairs and starting string ''
    dfs('', 0, 0);
    return results;
};

console.log(generateParenthesis(3));