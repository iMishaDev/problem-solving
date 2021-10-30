/**
 * Given n non-negative integers a1, a2, ..., an ,
 *  where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of
 *  the line i is at (i, ai) and (i, 0). Find two lines, which, 
 * together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 */

class Solution {
    max_area(nums){
        let area = 0;
        let max = 0;
        let height = 0;

        for(let i = 0; i < nums.length; i ++){
            for (let j =  i + 1; j < nums.length; j++){
                height = Math.min(nums[i], nums[j]);
                area = height * (j - i);
                max = Math.max(max, area);
            }
        }

        return max;
    }

    max_area_2(nums){
        let start = 0;
        let end = nums.length - 1;
        let area = 0;
        let max = 0;
        let height = 0;

        while(end > -1){
            height = Math.min(nums[start], nums[end]);
            area = height * (end - start);
            
            max = Math.max(max, area);
            if(nums[start] < nums[end])
                start += 1;
            else end -= 1;
        }
        return max;
    }
}

console.log(new Solution().max_area([1,8,6,2,5,4,8,3,7]))
console.log(new Solution().max_area_2([1,8,6,2,5,4,8,3,7]))
console.log(new Solution().max_area_2([4,3,2,1,4]))
console.log(new Solution().max_area_2([1,2,1]))
console.log(new Solution().max_area_2([1,1]))