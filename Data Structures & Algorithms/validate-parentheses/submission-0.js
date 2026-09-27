class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack = [];
        const symbolDict = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (let c of s) {
            if (symbolDict[c]) {
                if (
                    stack.length > 0 && stack[stack.length - 1] === symbolDict[c]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;

    }
}
