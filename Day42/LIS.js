/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or
 no elements without changing the order of the remaining elements. 
 For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

 */

class Solution {
    get_longest(nums){
        return this.get_longest_helper(nums, nums.length - 1);
    }

    get_longest_helper(nums, n){
        if (n === 0)
            return 1;
        
        let max = 1;

        for(let i = 0; i <= n ; i++){
            if(nums[i] < nums[n]){
                let com = this.get_longest_helper(nums, i);
                max = Math.max(max,com + 1)

            }
        }
        return max;
    }
    

    get_longest_dynamic_programming(nums){
        let calcs = new Array(nums.length).fill(1);
        calcs[nums.length -1] = 1;

        for(let i = nums.length - 1; i > -1; i--){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] < nums[j]){
                    calcs[i] = Math.max(calcs[j] + 1, calcs[i]);
                }
            }
        }
        return Math.max(...calcs);
    }
}

console.log(new Solution().get_longest([10,9,2,5,3,7,101,18]))
console.log(new Solution().get_longest([0,1,0,3,2,3]))
console.log(new Solution().get_longest([7,7,7,7,7,7,7]))
console.log(new Solution().get_longest([4,10,4,3,8,9]))

console.log(new Solution().get_longest_dynamic_programming([4,10,4,3,8,9]))
