/**
 * You are given an integer array coins representing coins of
 *  different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.
 If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2
 */

class Solution {
    get_change(coins, amount){
        let total = 0;
        let count = 0;
        let coin  = 0;
        coins.sort((a, b) => a - b)
        while(total < amount){
            coin = this.get_coin(coins, amount - total);
            total += coin;
            console.log(total, coin)
            count += 1;
        } 

        return count;
    }

    get_coin(coins, amount){
        let i = coins.length - 1;
        while(coins[i] > amount)
            i -= 1
        return coins[i];
    }
}

console.log(new Solution().get_change([1,2,5], 11))