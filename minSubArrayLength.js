class Solution {
    /**
     * Time complexity: O(n)
     * Space Complexity: O(1)
     * @param Array numbers 
     * @param {Integer} target 
     * @returns 
     */
    static minSubArray(numbers, target){
        let start = 0;
        let end = 0;
        let result = Number.MAX_VALUE;
        let sum = 0;

        while(end < numbers.length){
            sum += numbers[end];
            while(sum >= target){
                result = Math.min(result, ((end-start) + 1));
                sum -= numbers[start];
                start += 1;
            }
            end += 1;
        }
        return result;
    }
}

console.log('min sub array', Solution.minSubArray([2, 3, 1, 2, 4, 3], 7))