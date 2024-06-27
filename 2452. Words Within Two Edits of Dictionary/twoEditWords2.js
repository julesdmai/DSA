/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */

// Strategy: iterate through queries, iterate through dictionary, compare word to dictionaryWord using helper function, return results
// O(n^2) // spaceO(1)
// Input: Array of strings, array of strings
// Output: Array of strings

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word, maxEdits) {
        const dfs = (node, index, edits) => {
            if (edits > maxEdits) return false;
            if (index === word.length) return node.isEndOfWord;
            
            for (let char in node.children) {
                if (dfs(node.children[char], index + 1, edits + (char === word[index] ? 0 : 1))) {
                    return true;
                }
            }
            return false;
        }
        
        return dfs(this.root, 0, 0);
    }
}

var twoEditWords = function(queries, dictionary) {
    const trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }
    
    const results = [];
    for (let word of queries) {
        if (trie.search(word, 2)) {
            results.push(word);
        }
    }
    
    return results;
};

// // testing
console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]));
console.log(twoEditWords(["yes"], ["not"]));