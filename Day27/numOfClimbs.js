/**
 * There exists a staircase with N steps, 
 * and you can climb up either 1 or 2 steps at a time. 
 * Given N, write a function that returns the number 
 * of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, 
you could climb any number from a set of positive integers X? 
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

class Solution {
    numOfUnique(n){
        return this.#numOfUniqueHelper(n, 0);
    }

    #numOfUniqueHelper(n, sum){
        if(sum > n)
            return 0;
        if(sum === n)
            return 1;
        
        return this.#numOfUniqueHelper(n, sum + 1) + this.#numOfUniqueHelper(n, sum + 2)
    }


    numOfUniqueV2(n, steps){
        return this.#numOfUniqueHelperV2(n, 0,  steps, 0);
    }

    #numOfUniqueHelperV2(n, sum, steps){
        if(sum > n)
            return 0;
        
        if(sum === n)
            return 1;
        let count = 0;
        
        for (const step of steps){
            count += this.#numOfUniqueHelperV2(n, sum + step, steps)
        }

        return count;
    }
}

console.log(new Solution().numOfUnique(4))
console.log(new Solution().numOfUniqueV2(4, [1, 3, 5]))