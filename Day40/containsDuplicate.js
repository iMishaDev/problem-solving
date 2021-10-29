/**
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 */

class Solution {
    containsDuplicate(nums){
        let sheet = {};
        for (const num of nums){
            if(sheet[num])
                return true;
            sheet[num] = 1;
        }
        return false;
    }
}


console.log(new Solution().containsDuplicate([1,2,3,1]))
console.log(new Solution().containsDuplicate([1,2,3,4]))
console.log(new Solution().containsDuplicate([1,1,1,3,3,4,3,2,4,2]))