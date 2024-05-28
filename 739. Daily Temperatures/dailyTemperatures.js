/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Input: array of numbers
// Output: array of numbers representing how many days until a warmer day

// temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]


var dailyTemperatures = function(temperatures) {
    const numberOfDaysWait = new Array(temperatures.length).fill(0);
    const stack = []; // Store indices of temperatures array

    for (let i = 0; i < temperatures.length; i++) {
        // While the stack is not empty and the current temperature is greater than the tempearture at the index stored at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            numberOfDaysWait[prevIndex] = i - prevIndex;
        }

        // Push the current index to the stack
        stack.push(i);
    }
    return numberOfDaysWait;
};

// testing
// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));