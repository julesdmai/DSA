/**
 * @param {number[]} deck
 * @return {number[]}
 */

// Strategy: Sort the deck in ascending order, create a queue for the indices, iterate through the cards in the sorted deck, assign the card to the index, move the next index to the bottom of the deck
// O(nlogn) // spaceO(n)
// Input: Array of numbers
// Output: Array of numbers
var deckRevealedIncreasing = function(deck) {
    // Sort the deck in ascending order
    deck.sort((a, b) => a - b);

    // Create a queue for the indices
    const queue = [];
    for (let i = 0; i < deck.length; i++) {
        queue.push(i);
    }

    const result = new Array(deck.length);
    // Iterate through the cards in the sorted deck
    for (let card of deck) {
        let index = queue.shift();
        result[index] = card; // Assign the card to the appropriate index
        
        // Move the next card to the back of the queue
        if (queue.length > 0) {
            queue.push(queue.shift());
        }
    }
    // End loop return result array
    return result;
};

// // testing
// console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));