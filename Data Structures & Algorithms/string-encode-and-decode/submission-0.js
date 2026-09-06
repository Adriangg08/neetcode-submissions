class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((word) => word.length + "#" + word).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encoded) {
        const result = [];
        let i = 0;

        while (i < encoded.length) {
            // Find the # that ends the length
            const delimiter = encoded.indexOf("#", i);

            // Convert the characters before # into a number
            const length = Number(encoded.slice(i, delimiter));

            // The word starts immediately after #
            const start = delimiter + 1;
            const end = start + length;

            // Extract exactly length characters
            result.push(encoded.slice(start, end));

            // Move to the next encoded string
            i = end;
        }

        return result;
    }
}
