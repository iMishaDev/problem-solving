class Solution {
    /**
     * Time Complexity: o(n^3)
     * Brute Force Approach 
     * @param {Array} numbers 
     * @returns {Array}
     */
    static threeSum_1(numbers){
        let result = [];
        for(let i = 0; i < numbers.length; i++)
            for(let j = i + 1; j < numbers.length; j++)
                for(let k = j + 1; k < numbers.length; k++){
                    if((numbers[i] + numbers[j] + numbers[k]) === 0)
                        result.push([numbers[i],  numbers[j],  numbers[k]]);
                }
        return result;
    }




}

console.log('Three sum equals 0', Solution.threeSum_1([-1, 0, 1, 2, -4, -3]))