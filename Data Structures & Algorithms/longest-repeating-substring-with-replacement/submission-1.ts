class Solution {
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>();
        let left = 0;
        let maxFreq = 0;
        let best = 0;
        for (let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[right])!);
            if (right - left + 1 - maxFreq > k) {
                count.set(s[left], count.get(s[left])! - 1);
                left++;
            }
            best = Math.max(best, right - left + 1);
        }
        return best;
    }
}
