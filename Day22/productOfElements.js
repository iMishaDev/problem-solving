/**
Given an array of integers, 
return a new array such that each element at index i of the new array 
is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 */

class Solution {
    product(arr){
        let results = new Array(arr.length).fill(1);
        let total = 1;

        let i = 0;

        while(i < arr.length - 1){
            total *= arr[i];
            results[i + 1] = total;
            i += 1;
        }

        total = 1;
        i = arr.length - 1;

        while(i > 0){
            total *= arr[i];
            results[i - 1] *= total;
            i -= 1;
        }
        
        return results;
    }
}

console.log(new Solution().product([1, 2, 3, 4, 5]))