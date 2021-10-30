/**
 * Given an integer n, return an array ans of length n + 1 such 
 * that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 


 */

class Solution {
    count(n){
        let count = 0;

        while(n){
            n &= n - 1;
            count += 1;
        }

        return count;
    }

    countBits(n){
        let i = 0;
        let res = [];
        while(i <= n){
            res[i] = this.count(i)
            i += 1;
        }

        return res;
    }


}

console.log(new Solution().countBits(2))
console.log(new Solution().countBits(5))