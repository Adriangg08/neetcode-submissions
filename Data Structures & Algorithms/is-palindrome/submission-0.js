class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => {
            const code = char.charCodeAt(0);
            return (
                (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0)) ||
                (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
                (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0))
            );
        };

        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            while (start < end && !isAlphanumeric(s[start])) start++;
            while (start < end && !isAlphanumeric(s[end])) end--;

            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

            start++;
            end--;
        }

        return true;
    }
}
