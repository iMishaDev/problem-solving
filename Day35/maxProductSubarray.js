/**
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

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

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
Accepted
563,528
Submissions

 */

class Solution {
    maxProductSubarray(nums){
        let result = Math.max(...nums);
        let max = 1;
        let end = 0;
        let min = 1;

        while(end < nums.length){
            if(nums[end] === 0){
                max = 1;
                min = 1;
                end += 1;
                continue;
            }
            let temp = max * nums[end];
            max = Math.max(nums[end] * max, nums[end] * min);
            min = Math.min(nums[end] * min, temp, nums[end]);

            result = Math.max(result, max);
            end += 1;
        }

        return result;
    }
}


console.log(new Solution().maxProductSubarray([2,3,-2,4]));
console.log(new Solution().maxProductSubarray([-2,0,-1]));
console.log(new Solution().maxProductSubarray([0,2]))
console.log(new Solution().maxProductSubarray([-2,3,-4]))
console.log(new Solution().maxProductSubarray([2,-5,-2,-4,3]))

