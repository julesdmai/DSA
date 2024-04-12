/* -- THIS IS A MORE JS WAY OF DOING THIS HASHMAP ITERATION USING FINDINDEX - */
class SimpleHashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    // Hash function: Input: key // Output: index
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char; // Create hash
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash % this.size);
    }

    // Insert method with findIndex
    insert(key, value) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const foundIndex = bucket.findIndex(([k, _v]) => k === key);
    
        if (foundIndex !== -1) {
            bucket[foundIndex][1] = value; // Update existing key
        } else {
            bucket.push([key, value]); // Insert new key
        }
    }
    
    // Search method using findIndex for consistency
    search(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const foundIndex = bucket.findIndex(([k, _v]) => k === key);
        
        if (foundIndex !== -1) {
            return bucket[foundIndex][1]; // Key found, return value
        }
        return null; // Key not found
    }

    // Delete method using findIndex
    delete(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const foundIndex = bucket.findIndex(([k, _v]) => k === key);

        if (foundIndex !== -1) {
            bucket.splice(foundIndex, 1); // Delete key-value pair
            return true;
        }
        return false; // Key not found
    }
}

// Usage example
const hashMap = new SimpleHashMap();
hashMap.insert("apple", 5);
hashMap.insert("banana", 3);
hashMap.insert("orange", 8);

console.log(hashMap.search("apple"));  // Outputs: 5
console.log(hashMap.search("banana")); // Outputs: 3
console.log(hashMap.delete("apple"));  // Outputs: true
console.log(hashMap.search("apple"));  // Outputs: null
