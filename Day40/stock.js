/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to 
buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 */

class Solution {
    maxProfit(prices){
        let end = prices.length - 1;
        let min = Math.min(...prices);
        let index = prices.indexOf(min);
        
        let profit = 0;

        while(end > index){
            if(prices[end] - prices[min] > profit)
                profit = prices[end] - prices[min];
            end -= 1;
        }
        return profit;
    }


    maxProfit2(prices){
        let left = 0;
        let right = 1;
        let profit = 0;
        let maxProfit = 0;

        while(right < prices.length){
            if( prices[left] < prices[right]){
                profit = prices[right] - prices[left];
                maxProfit = Math.max(profit, maxProfit);
            }
            else 
                left += 1;

            right += 1;
        }
        return maxProfit;
    }


    maxProfit3(prices){
        let max_price = Number.MIN_VALUE;
        let max_profit = 0;

        for( let i = prices.length - 1 ; i > -1; i--){
            max_price = Math.max(prices[i], max_price);
            max_profit = Math.max(max_profit, max_price - prices[i])
        }
        return max_profit;
    }
}


console.log(new Solution().maxProfit([7,1,5,3,6,4]))
console.log(new Solution().maxProfit([7,6,4,3,1]))



console.log(new Solution().maxProfit2([7,1,5,3,6,4]))
console.log(new Solution().maxProfit2([7,6,4,3,1]))



console.log(new Solution().maxProfit3([7,1,5,3,6,4]))
console.log(new Solution().maxProfit3([7,6,4,3,1]))