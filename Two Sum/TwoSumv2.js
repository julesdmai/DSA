 // O(n^2)
 // Input: array (of nums), integer (target)
 // Output: array (of 2 indices)
 const twoSum = function(nums, target) {
    // check edge cases
    // construct an object

    // go through the input nums array once to construct a cache object
    // where the element is the key and the index is the value
    cache[element] = index;
    const valueNeeded = target - element;
    if (cache[valueNeeded]) return [cache[valueNeeded], cache[element]];
    if (element - target)
    // also construct an opposite 









    // initialize results array
    const results = [];

    // loop through input nums array
    for (let i = 0; i < nums.length; i++) {
        // initialize valueNeeded (target - current element)
        const valueNeeded = target - nums[i];

        // loop through the input array once again
        for (let j = 0; j < nums.length; j++) {
            // if j is equal to i, meaning that this element is the one we locked onto previously, then skip this element
            if (j === i) continue;
            // check if array includes valueNeeded
            if (nums[j] === valueNeeded) { // push
                results.push(j); // index of nums[j]
                results.push(i); // index of nums[i]
                return results;
            }
        }
    }

    // at end of loop
    // return condition that we were unable to satisfy the search query
    // in this case we do nothing
    throw new Error('should never see this');
};

// testing for twoSum()
const test = [1,3,5,8,];
const target = 8;
console.log(twoSum(test, target));