class Solution {
    static twoSum(numbers, target){
        let numSheet = {};
        let indices = [];
        for(let i = 0; i < numbers.length; i++){
            if (numSheet[target - numbers[i]] !== undefined)
                indices = [i, numSheet[target - numbers[i]]];
            else numSheet[numbers[i]] = i;
        }
        return indices;
    }
}

console.log('Two Sum ' ,Solution.twoSum([2, 7, 11, 15], 9))