class Solution {
    maxProfit(prices: number[]): number {
        let buyPrice = prices[0];
        let bestProfit = 0;
        for (const sellPrice of prices) {
            buyPrice = Math.min(buyPrice, sellPrice);
            const profit = sellPrice - buyPrice;
            bestProfit = Math.max(bestProfit, profit);
        }
        return bestProfit;
    }
}
