/**
 * Given a list of integers, 
 * write a function that returns the largest sum of non-adjacent numbers. 
 * Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, 
since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, 
since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
 */

class Solution {
    largestSum(numbers){
        let sum = 0;
        let current = 0;
        


        while(current < numbers.length){
            sum += numbers[current];

            if(current+2 === numbers.length -1){
                sum += numbers[current + 2];
                return sum;
            }

            if(numbers[current + 2] > numbers[current+3])
                current += 2;
            else current += 3;

        }

        return sum;
    }

    largestSumRec(numbers){
        return this.#largestHelper(numbers, 0, 0);
    }

    #largestHelper(numbers, current, sum){
        if(current > numbers.length)
            return 0;
        
        sum += numbers[current] + this.#largestHelper(numbers, current + 2, sum)

        return sum;
    }
}

console.log(new Solution().largestSum([2, 4, 6, 2, 5, 4, 3, 2, 1]))
console.log(new Solution().largestSumRec([2, 4, 6, 2, 5]))
console.log(new Solution().largestSum([5, 1, 1, 5]))