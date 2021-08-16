import { createSheet } from './helpers.js'
class Solution {
    static findNoneDuplicateNumber(numbers){
        let numSheet = createSheet(numbers);
        for (const num of numbers){
            numSheet[num] += 1;
        }

        return Object.entries(numSheet).find((numbers) => numbers[1] === 1)[1]
    }
}

console.log('Find Non Duplicate number in list ', Solution.findNoneDuplicateNumber([4, 3, 2, 4, 1, 3, 2]))