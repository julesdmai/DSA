/*
Problem: Daily Temperatures
Prompt:
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

*/

// Strategy: Maintain a monotonic ascending stack
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Array of numbers representing how many days to wait until a higher temperature
const dailyTemperatures = (temperatures) => {
    const stack = []; // Manage monotonic ascending stack
    const daysUntilWarmer = new Array(temperatures.length).fill(0); // Return this

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const indexTopStack = stack.pop();
            daysUntilWarmer[indexTopStack] = i - indexTopStack;
        };

        stack.push(i);
    }

    return daysUntilWarmer;
}