/**
 * Given two integers a and b, 
 * return the sum of the two integers without using the operators + and -.


Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5


 */

class Solution {
    sum(a, b){

        while(b !== 0){
            let temp = ( a & b) << 1;
            a = a ^ b;
            b = temp;
        }

        return a;
    }

    /**
    * ref: Neet code
    */
}


console.log(new Solution().sum(1, 2))
console.log(new Solution().sum(2, 3))