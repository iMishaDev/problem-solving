/**
 * Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.

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

 */

class Solution {
    maxSubArray(nums){
        let start = 0; 
        let end = 0;
        let sum = 0;
        let max = sum;

        while(end < nums.length){
            sum += nums[end];
            if(sum <= 0){
                sum -= nums[start];
                start += 1;
            }
            max = Math.max(max, sum)

            end += 1;
        }

        return max;
    }
}

console.log(new Solution().maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(new Solution().maxSubArray([1]))
console.log(new Solution().maxSubArray([5,4,-1,7,8]))