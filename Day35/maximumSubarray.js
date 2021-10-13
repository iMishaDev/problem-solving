/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */

class Solution {

    maxSubarray(nums){
        let sum = 0;
        let start = 0;
        let end = 0;
        let max = 0;

        while(end < nums.length){
            sum += nums[end];
            if(sum <= 0){
                sum -= nums[start];
                start += 1
            }
            max = Math.max(sum, max)
            end += 1;
        }

        console.log(max)
    }

}

console.log(new Solution().maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(new Solution().maxSubarray([1]))
console.log(new Solution().maxSubarray([5,4,-1,7,8]))