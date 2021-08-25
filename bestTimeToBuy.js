class Solution{
    static getBestTime(prices){
        let max_price = Number.MIN_VALUE;
        let max_profit = 0;

        for( let i = prices.length - 1 ; i > -1; i--){
            max_price = Math.max(prices[i], max_price);
            max_profit = Math.max(max_profit, max_price - prices[i])
        }
        return max_profit;
    }
}

console.log('best time to buy stock', Solution.getBestTime([9, 11, 8, 5, 7, 10]))