/**
 * Given an integer array nums, 
 * find a contiguous non-empty subarray within 
 * the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

class Solution {
    maxProduct(nums){
        let end = 0;
        let max = 1;
        let min = 1;
        let result = Math.max(...nums);

        for(const number of nums){
            if(number == 0){
                max = 1;
                min = 1;
                continue;
            }
            let tempMax = max * number;
            max = Math.max(max * number, min * number, number)
            min = Math.max(tempMax, min * number, number)
            result = Math.max(result, min, max)
            end += 1;
        }

        return result;
    }
}


console.log(new Solution().maxProduct([2,3,-2,4]));
console.log(new Solution().maxProduct([-2,0,-1]));