/**
 * Given an array of strictly the characters 'R', 'G', and 'B', 
 * segregate the values of the array so that all the Rs come first, 
 * the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], 
it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
 */

class Solution {
    sort(arr){
        let rIndex = 0;
        let bIndex = arr.length - 1;
        let iter = 0;
        while(iter <= bIndex){
            if(arr[iter] === 'R'){
                [arr[rIndex] , arr[iter]] = [arr[iter] , arr[rIndex]];
                rIndex += 1;
            } 
            if(arr[iter] === 'B'){
                [arr[bIndex] , arr[iter]] = [arr[iter] , arr[bIndex]];
                bIndex -= 1;
            }
            if(arr[iter] === 'G'){
                iter += 1;
            }
        }

        return arr;
    }
}

console.log(new Solution().sort(['G', 'B', 'R', 'R', 'B', 'R', 'G']))