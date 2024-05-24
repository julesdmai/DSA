/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiantQueue = [];
    let direQueue = [];
    const n = senate.length;

    // Initailize queues with indices of Radiant and Dire senators
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    // Process the rounds of voting until one party is eliminated
    while (radiantQueue.length > 0 && direQueue.length > 0) {
        let rIndex = radiantQueue.shift();
        let dIndex = direQueue.shift();
        
        if (rIndex < dIndex) {
            radiantQueue.push(rIndex + n); // Radiant senator bans the Dire Senator
        } else {
            direQueue.push(dIndex + n); // Dire senator bans the Radiant senator
        }
    }

    // Return winning party
    return radiantQueue.length > 0 ? 'Radiant' : 'Dire';
};

// Testing
// console.log(predictPartyVictory('RD'));
// console.log(predictPartyVictory('RDD'));
// console.log(predictPartyVictory("DDRRRR"));