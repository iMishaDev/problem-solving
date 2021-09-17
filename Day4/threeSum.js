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


    static threeSum_2(numbers){
        numbers = numbers.sort((a, b) => a - b);
        let result = [];
        numbers.forEach((number, index) => {
            result = [...result, ...this.#twoSum(number*-1, index+1, numbers, [])];
        });

        return result;
    }

    static #twoSum(target, index, numbers, result){
        let front = index;
        let back = numbers.length - 1;
        while(front < back){
            if(numbers[front] + numbers[back] < target)
                front++;
            else if(numbers[front] + numbers[back] > target)
                back--;
            else if(numbers[front] + numbers[back] === target){
                result.push([numbers[front], numbers[back], target * -1]);
                front++;
                back--;
            }
        }
        return result;

    }


}

console.log('Three sum equals 0', Solution.threeSum_2([-1, 0, 1, 2, -4, -3]))