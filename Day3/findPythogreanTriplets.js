class Solution {
    /**
     * Time Complexity: O(n^2)
     * @param {Array} numbers 
     * @returns {Array}
     */
    static findTriplets(numbers){
        let sheet = new Set(numbers.map((number) => Math.pow(number, 2)));
        console.log(sheet)
        for(let i = 0; i < numbers.length; i++){
            for (let j = numbers.length - 1; j > -1; j--){
                if(sheet.has(Math.pow(numbers[i], 2) + Math.pow(numbers[j], 2)))
                    return [numbers[i], numbers[j]];
            }
        }
    }
}

console.log('find Pythogrean Triplets ', Solution.findTriplets([3, 5, 12, 5, 13]));