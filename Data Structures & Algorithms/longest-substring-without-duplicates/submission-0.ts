class Solution {
    lengthOfLongestSubstring(s: string): number {
        const lastIndex = new Map<string, number>();
        let left = 0;
        let max = 0;
        for (let right = 0; right < s.length; right++) {
            const seen = lastIndex.get(s[right]);
            if (seen !== undefined && seen >= left) {
                const length = right - 1 - left + 1;
                max = Math.max(max, length);
                left = seen + 1;
            }
            lastIndex.set(s[right], right);
        }
        const lastLength = s.length - 1 - left + 1;
        return Math.max(max, lastLength);
    }
}
