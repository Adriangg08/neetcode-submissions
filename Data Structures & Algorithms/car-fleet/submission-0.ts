class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position
            .map((p, i) => [p, (target - p) / speed[i]])
            .sort((a, b) => a[0] - b[0]);
        const stack: number[] = [];
        for (const [, time] of cars) {
            while (stack.length > 0 && time >= stack[stack.length - 1]) {
                stack.pop();
            }
            stack.push(time);
        }
        return stack.length;
    }
}
