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
// /**
//  * better approach
//  * @param {*} n 
//  * @returns 
//  */
//     #numOfUniqueHelper(n){
//         if(n < 0)
//             return 0;
        
//         if(n === 0)
//             return 1;
        
//         return this.#numOfUniqueHelper(n - 1) + this.#numOfUniqueHelper(n - 2)
//     }


    numOfUniqueV2(n, steps){
        return this.#numOfUniqueHelperV2(n,  steps);
    }

    #numOfUniqueHelperV2(n, steps){
        if(n < 0)
            return 0;
        
        if(n === 0)
            return 1;
        
        let count = 0;
        
        for (const step of steps){
            count += this.#numOfUniqueHelperV2(n - step, steps)
        }


        return count;
    }



    numOfUniqueV2C(n, steps){
        return this.#numOfUniqueHelperV2C(n,  steps, new Array(n + 1).fill(0));
    }
    
    #numOfUniqueHelperV2C(n, steps, cache){
        cache[0] = 1
        
        let sum = 0;
        for (let i = 1; i <= n; i++){
            sum = 0;
            for(const step of steps){
                if(i - step >= 0)
                    sum += cache[i - step];
            }
            cache[i] += sum;
        }

        return cache[n];
    }
}

console.log(new Solution().numOfUnique(4))
console.log(new Solution().numOfUniqueV2(4, [1, 3, 5]))
console.log(new Solution().numOfUniqueV2C(4, [1, 3, 5]))