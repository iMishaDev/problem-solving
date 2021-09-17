class ListFastSum {

    constructor(numbers){
        this.numbers = numbers;
        this.sums = this.#constructSums(numbers)
    }
    
    #constructSums(numbers){
        let sum = 0;
        return numbers.map((number) => sum += number)
    }

/**
 * Time complexity: O(n)
 * Space Complexity: O(1)
 * @param {Integer} start 
 * @param {Integer} end 
 * @returns Integer
 */
    sum(start, end){
        let sum = 0;
        for(let i = start; i < end; i++){
            sum += this.numbers[i];
        }

        return sum;
    }



/**
 * Time complexity: O(1)
 * Space Complexity: O(n)
 * @param {Integer} start 
 * @param {Integer} end 
 * @returns Integer
 */
    sum2(start, end){
        return this.sums[end - 1] - this.sums[start - 1];
    }
}


console.log('List Fast Sum', new ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 5))
console.log('List Fast Sum', new ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum2(2, 5))