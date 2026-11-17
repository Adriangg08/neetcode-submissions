class Solution {
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>();
        let left = 0;
        let best = 0;
        for (let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) ?? 0) + 1);
            let windowLength = right - left + 1;
            let maxFreq = Math.max(...count.values());
            while (windowLength - maxFreq > k) {
                count.set(s[left], count.get(s[left])! - 1);
                left++;
                windowLength = right - left + 1;
                maxFreq = Math.max(...count.values());
            }
            best = Math.max(best, windowLength);
        }
        return best;
    }
}
