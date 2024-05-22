/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    // Initialie two stacks for rightboundAsteroids and leftboundAsteroids
    const rightboundAsteroids = [];
    const leftboundAsteroids = [];

    // Iterate through to form memory
    for (let asteroid of asteroids) {
        if (asteroid > 0) {
            rightboundAsteroids.push(asteroid);
        } else if (asteroid < 0) {
            leftboundAsteroids.push(asteroid);
        }
    }

    // Explode the opposing asteroids until all asteroids are heading one way
    while (rightboundAsteroids.length > 0 && leftboundAsteroids.length > 0) {
        let leftAsteroid = Math.abs(rightboundAsteroids[rightboundAsteroids.length - 1]);
        let rightAsteroid = Math.abs(leftboundAsteroids[leftboundAsteroids.length - 1]);

        // Logic to see which asteroid exploded (shifted out of memory)
        // Need to compare the position as well
        if (rightAsteroid > leftAsteroid) {
            rightboundAsteroids.pop();
        } else if (rightAsteroid < leftAsteroid) {
            leftboundAsteroids.pop();
        } else if (rightAsteroid === leftAsteroid) {
            rightboundAsteroids.pop();
            leftboundAsteroids.pop();
        }
    }

    // console.log(leftboundAsteroids);
    // console.log(rightboundAsteroids);
    

    // Return the array with asteroids remaining
    if (rightboundAsteroids.length === 0) {
        return leftboundAsteroids;
    }
    else {
        return rightboundAsteroids;
    }
    };

// testing
// console.log(asteroidCollision([5,10,-5])); // Output: [5,10]
// console.log(asteroidCollision([8,-8])); // Output: []
// console.log(asteroidCollision([10,2,-5])); // Output: [10]