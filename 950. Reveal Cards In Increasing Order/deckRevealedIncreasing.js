/**
 * @param {number[]} deck
 * @return {number[]}
 */

// Strategy: Sort the dec
// 
// Input: Array of numbers
// Output: Array of numbers
var deckRevealedIncreasing = function(deck) {
    const returnDeck = new Array(deck.length).fill(null);
    deck.sort((a, b) => a - b);
    let sortedIdx = 0;
    for (let i = 0; i < returnDeck.length; i += 2) {
        returnDeck[i] = deck[sortedIdx];
        sortedIdx++;
    };

    return returnDeck;
};

// // testing
// console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));