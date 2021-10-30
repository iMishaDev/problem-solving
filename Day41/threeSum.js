/**
 * Given an integer array nums, 
 * return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


 */
/**
 * Time Complexity: O(n^3)
 */
class Solution {
    three_sum_1(nums){
        let result = [];
        let visited = {};
        nums.sort((a, b) => a - b);
        for(let i =0; i < nums.length; i++){
            if(i > 0 && nums[i - 1] === nums[i])
                continue;
            for(let j = i + 1; j < nums.length; j++){
                for(let k = j + 1; k < nums.length; k++){
                    if(nums[i] + nums[j] + nums[k] === 0 && !visited[[nums[i] , nums[j] , nums[k]]]){
                        result.push([nums[i] , nums[j] , nums[k]]);
                        visited[[nums[i] , nums[j] , nums[k]]] = 1;
                    }
                }
            }
        }

        return result;
    }




/**
 * Time Complexity: O(n^2)
 */
    three_sum_2(nums){
        nums.sort((a, b) => a - b);
        let result = [];
        for(const [index, number] of nums.entries()){
            if(index > 0 && nums[index - 1] === number)
                continue;
            result = [...result, ... this.two_sum(number * -1, index + 1, nums)];
        }

        return result;

    }

    two_sum(target, index, nums){
        let start = index;
        let end = nums.length -1;

        let result = [];

        while(end > start){


            if(nums[start] + nums[end] === target){
                result.push([nums[start] , nums[end], target * -1])
                start += 1;
                while(nums[start] === nums[start - 1] && start < end)
                    start += 1
            }
            else if (nums[start] + nums[end] >  target)
                end -= 1;
            else start += 1;
        }
        return result;
    }
}

console.log(new Solution().three_sum_1([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
console.log(new Solution().three_sum_2([-1,0,1,2,-1,-4,-2,-3,3,0,4]))