class Solution {
    static twoSum(numbers, target){
        let numSheet = {};
        let indices = [];
        numbers.forEach((number, index) => {
            if (numSheet[target - number])
                indices = [index, numSheet[target - number]];
            else numSheet[number] = index;
        });
        return indices;
    }
}

console.log('Two Sum ' ,Solution.twoSum([2, 7, 11, 15], 18))