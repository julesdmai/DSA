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
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash % this.size);
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing key
                return;
            }
        }
        bucket.push([key, value]); // Insert new key
    }

    search(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (const [k, v] of bucket) {
            if (k === key) {
                return v; // Key found
            }
        }
        return null; // Key not found
    }

    delete(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Delete key-value pair
                return true;
            }
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
