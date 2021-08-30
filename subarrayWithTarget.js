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

    static getSubArrayV2(numbers, target){
        let sheet = {};
        let sum = 0;

        for(let i =0; i<numbers.length; i++){

            sum += numbers[i];
            if(sheet[sum - target])
                return numbers.slice(numbers[sheet[sum - target]], numbers[i]);
            sheet[sum] = i;
        }

    }
}

console.log('get sub array', Solution.getSubArrayV2([1, 3, 2, 5, 7, 2], 14))