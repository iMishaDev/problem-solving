/**
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, 
nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is
 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 
 */

class Solution {
    search(nums, target){
        return this.search_helper(nums, 0, nums.length, target);
    }

    search_helper(nums, start, end, target){
        if(start >= end)
            return -1;
        
        let mid = Math.floor((start + end)/2);
        if(nums[mid] === target)
            return mid;
        
        if(nums[start] <= nums[mid]){
            if(target > nums[mid] || target < nums[start])
                return this.search_helper(nums, mid + 1, end , target)
            else  return this.search_helper(nums, start, mid , target)

        } else {
            if(target < nums[mid] || target > nums[end])
                return this.search_helper(nums, start, mid - 1 , target)
            else  return this.search_helper(nums, mid + 1, end , target)
        }
    }
}

console.log(new Solution().search([4,5,6,7,0,1,2], 0))
console.log(new Solution().search([4,5,6,7,0,1,2], 3))
console.log(new Solution().search([1], 0))