class Solution {
    static getSubArray(numbers, target){
        let start = 0;
        let end = 0;
        let sum = 0;

        while(end < numbers.length){
            sum += numbers[end];
            while(sum > target){
                sum -= numbers[start];
                start += 1;
            }
            end += 1;
        }

        return numbers.slice(start, end);
    }
}

console.log('get sub array', Solution.getSubArray([1, 3, 2, 5, 7, 2], 14))