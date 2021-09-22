/**
 * You are given an array 𝑎 consisting of 𝑛 integer numbers.

Let instability of the array be the following value: max𝑖=1𝑛𝑎𝑖−min𝑖=1𝑛𝑎𝑖.

You have to remove exactly one element from this array to minimize instability
of the resulting (𝑛−1)-elements array. Your task is to calculate 
the minimum possible instability.

4
1 3 3 7

 */

class Solution {
    stabilize(n , numbers){

        numbers =  numbers.sort((a, b) => a - b )
        return Math.min(
                        numbers[n - 2] - numbers[0], 
                        numbers[n - 1] - numbers[1], 
                        numbers[n - 1] - numbers[0])
    }
}


console.log(new Solution().stabilize(4, [1,3,3,7]))
console.log(new Solution().stabilize(2, [1,1000]))