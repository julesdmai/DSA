/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for (let asteroid of asteroids) {
        if (asteroid > 0) {
            stack.push(asteroid); // Rightbound asteroids
        } else if (asteroid < 0) {
            // This asteroid is leftbound. Handle all collisions with rightbound asteroids
            while (true) {
                if (stack.length === 0) {
                    stack.push(asteroid);
                    break;
                }

                let top = stack[stack.length - 1];

                // If top is already a leftbound asteroid, then just add this current asteroid
                if (top < 0) {
                    stack.push(asteroid);
                    break;
                }

                // If asteroid is smaller
                else if (Math.abs(asteroid) < Math.abs(top)) {
                    break;
                }
                // If asteroid is same size
                else if (Math.abs(asteroid) === Math.abs(top)) {
                    stack.pop();
                    break;
                }
                // Asteroid is larger, we rampage
                else {
                    stack.pop();
                }
            }
        }
    }
    return stack;
};

// testing
// console.log(asteroidCollision([5,10,-5])); // Output: [5,10]
// console.log(asteroidCollision([8,-8])); // Output: []
// console.log(asteroidCollision([10,2,-5])); // Output: [10]