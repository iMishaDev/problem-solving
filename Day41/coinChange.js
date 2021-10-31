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

    /**
     * Greedy approach
     * @param {Array} coins 
     * @param {Integer} amount 
     * @returns 
     */
    get_change(coins, amount){
        let total = 0;
        let count = 0;
        let coin  = 0;
        coins.sort((a, b) => a - b)
        while(total < amount){
            coin = this.get_coin(coins, amount - total);
            if(!coin) return -1;
            if(total + coin > amount){
                return -1;
            }else {
                total += coin;
                count += 1;
            }
        } 

        return count;
    }

    get_coin(coins, amount){
        let i = coins.length - 1;
        while(coins[i] > amount)
            i -= 1
        return coins[i];
    }


    /**
     * Optimal Solution
     * @param {*} coins 
     * @param {*} amount 
     * @returns 
     */

    get_change_dynamic_programming(coins, amount){
        let calcs = new Array(amount + 1).fill(amount + 1);
        calcs[0] = 0;

        for(let i = 1; i < amount + 1; i++){
            for(const coin of coins){

                if (i - coin >= 0){
                    calcs[i] = Math.min(calcs[i], 1 + calcs[i - coin]);
                }
            }
        }

        return calcs[amount]
    }
}


console.log(new Solution().get_change_dynamic_programming([1, 3, 4, 5], 7))
console.log(new Solution().get_change([2], 3))
console.log(new Solution().get_change([1], 0))
console.log(new Solution().get_change([1], 1))
console.log(new Solution().get_change([1], 2))
console.log(new Solution().get_change([186,419,83,408], 6249))
console.log(new Solution().get_change_dynamic_programming([186,419,83,408], 6249))



