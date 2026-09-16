class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);   // ⚠️ el comparador es obligatorio, ver nota final
        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // Capa 2 (dedup del número fijo)
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Optimización: ordenado ⇒ si nums[i] > 0, nada puede sumar 0
            if (nums[i] > 0) break;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);

                    // Capa 3 (dedup de los punteros)
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
            }
        }
        return res;
    }
}
