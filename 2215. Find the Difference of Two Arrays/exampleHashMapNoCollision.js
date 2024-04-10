class SimpleHashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null);
    }

    // Supplied // Input: key // Output: index
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }
        return Math.abs(hash % this.size);
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        this.buckets[index] = [key, value]; // Directly insert, without handling collisions
    }

    search(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        if (bucket && bucket[0] === key) {
            return bucket[1]; // Key found
        }
        return null; // Key not found or collision occurred
    }

    delete(key) {
        const index = this.hashFunction(key);
        if (this.buckets[index] && this.buckets[index][0] === key) {
            this.buckets[index] = null; // Delete key-value pair
            return true;
        }
        return false; // Key not found or collision occurred
    }
}

// Usage example
const hashMap = new SimpleHashMap();
hashMap.insert("apple", 5);
hashMap.insert("banana", 3); // This might overwrite "apple" if they hash to the same index
hashMap.insert("orange", 8);

console.log(hashMap.search("apple"));  // Outputs: null or 5, depending on collision
console.log(hashMap.search("banana")); // Outputs: 3
console.log(hashMap.delete("apple"));  // Outputs: true or false, depending on collision
console.log(hashMap.search("apple"));  // Outputs: null
