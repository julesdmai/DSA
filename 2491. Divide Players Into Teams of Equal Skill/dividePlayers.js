/**
 * @param {number[]} skill
 * @return {number}
 */

// Strategy: Sort ASC, two pointers, initialize skillLevel, Iterate through array, check for skillLevel match - short-circuit, calculate chemistry and add to chemistrySum, end loop return chemistrySum
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Number representing chemistry sum
var dividePlayers = function(skill) {
    // Sort ASC
    skill.sort((a, b) => a - b);

    // Two Pointers
    let left = 0
    let right = skill.length - 1

    // Initialize skillLevel
    const skillLevel = skill[left] + skill[right];

    let chemistrySum = 0;
    // Iterate through array using two pointers
    while (left < right) {
        // Check for skillLevel match
        if (skill[left] + skill[right] !== skillLevel) return -1;

        // Calculate chemistry and add to chemistrySum
        chemistrySum += (skill[left] * skill[right]);
        left++;
        right--;
    }

    // End loop return chemistrySum
    return chemistrySum;
};

// testing
console.log(dividePlayers([3,2,5,1,3,4]));
console.log(dividePlayers([3,4]));
// console.log(dividePlayers([3,2,5,1,3,4]));