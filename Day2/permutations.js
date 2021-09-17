class Solution {
    static getPermutations(numbers){
        return this.permuteHelper(numbers,0)
    }

    static permuteHelper(numbers, iterator){
        let result = [];
        if (iterator === numbers.length-1)
            return [...numbers]

        for(let i = iterator; i < numbers.length; i++){
            [numbers[i], numbers[iterator]] =  [numbers[iterator], numbers[i]];
            result.push(this.permuteHelper(numbers, iterator+1, result));
            [numbers[i], numbers[iterator]] =  [numbers[iterator], numbers[i]];
        }
        return result;
    }
}

console.log('Permutations: ', Solution.getPermutations([1,2,3]))