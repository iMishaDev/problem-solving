/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
 * For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]]
1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
 */

class Solution {
    find_min(nums){
        return this.find_min_helper(nums, 0, nums.length - 1, nums[0]);
    }


    find_min_helper(nums, start, end, min){
        if(start > end)
            return min;
        if(nums[start] < nums[end])
            return  Math.min(nums[start], min);
        
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] >= nums[start])
            return this.find_min_helper(nums, mid + 1, end, Math.min(nums[mid], min))
        return this.find_min_helper(nums, start, mid - 1, Math.min(nums[mid], min))
    }
}

console.log(new Solution().find_min([4,5,6,7,0,1,2]))