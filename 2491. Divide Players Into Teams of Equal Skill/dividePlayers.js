/**
 * @param {number[]} skill
 * @return {number}
 */

// Strategy: Sort ASC, two pointers, initialize skillLevel, Iterate through array, check for skillLevel match - short-circuit, calculate chemistry and add to chemistrySum, end loop return chemistrySum
// O(nlogn) due to the sorting // spaceO(n)
// Input: Array of numbers
// Output: Number representing chemistry sum
var dividePlayers = function(skill) {
    // Sort the skill array in ascending numerical value
    skill.sort((a, b) => a - b);

    // Two pointers for forming teams
    let left = 0
    let right = skill.length - 1

    // Calculate skill level - all teams must equal this summed skill level
    const requiredSkillLevel = skill[left] + skill[right];

    // Calculate and return chemistrySum
    let chemistrySum = 0;

    // Iterate through array using two pointers
    while (left < right) {
        // Check for skill level match - all teams must equal this skill level
        if (skill[left] + skill[right] !== requiredSkillLevel) return -1;

        // Calculate chemistry and add to chemistrySum
        chemistrySum += (skill[left] * skill[right]);

        // Advance the pointers
        left++;
        right--;
    }

    // End loop return total sum of team chemistries
    return chemistrySum;
};

// // testing
// console.log(dividePlayers([3,2,5,1,3,4]));
// console.log(dividePlayers([3,4]));
// console.log(dividePlayers([1,1,2,3]));