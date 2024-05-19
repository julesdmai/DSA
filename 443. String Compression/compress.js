/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (!chars.length) return 0;

    let index = 0; // This is the index to insert the compressed characters
    let i = 0; // This is the index to iterate through the chars array

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count the number of times we see the current character
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Store the character
        chars[index] = char;
        index++;

        // If the character count is more than 1, store the count as a characters
        if (count > 1) {
            let countStr = count.toString();
            for (let digit of countStr) {
                chars[index] = digit;
                index++;
            }
        }
    }
    
    return index;
};