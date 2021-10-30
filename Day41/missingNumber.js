/**
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range 
[0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range 
[0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range
 [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range 
[0,1]. 1 is the missing number in the range since it does not appear in nums.
 
 */

class Solution {
    get_missing(nums){
        nums.sort((a, b) => a - b);
        let missing = 1;
        for(const num of nums){
            if (num == missing)
                missing += 1;
        }

        return missing;
    }

    get_missing_2(nums){
        let sheet = {}
        let max = Math.max(...nums)
        for(let i = 0; i < max; i++){
            sheet[i] = 1
        }

        for(const num of nums){
            if (sheet[num])
                delete sheet[num]
        }

        return Object.keys(sheet)[0];
    }

    get_missing_3(nums){
        let sum = nums.length;
        for(let i = 0; i < nums.length; i++){
            sum += (i - nums[i])
        }
        
        return sum;
    }

    get_missing_4(nums){
        let xor = 0;

        for(let i = 0; i <= nums.length; i++){
            xor^= (i ^ nums[i])
        }
        return xor ;
    }
}

console.log(new Solution().get_missing([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))
console.log(new Solution().get_missing_2([9,6,4,2,3,5,7,0,1]))
console.log(new Solution().get_missing_3([9,6,4,2,3,5,7,0,1]))
console.log(new Solution().get_missing_4([9,6,4,2,3,5,7,0,1]))