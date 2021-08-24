class Solution {
    static maxSubArray(numbers){
        let start = 0; 
        let end = 0;
        let maxSum = 0;
        let sum = 0;

        while(end < numbers.length){
            sum += numbers[end];
            while(sum < 0){
                sum -= numbers[start];
                start +=1
            }
            maxSum = Math.max(sum, maxSum)
            end += 1;
        }
        return maxSum;
    }
}

console.log('Max sub array sum', Solution.maxSubArray([-1, -4, 3, 8, 1]))
console.log('Max sub array sum', Solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
