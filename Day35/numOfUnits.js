/**
 * You are given an array of non-negative integers that represents 
 * a two-dimensional elevation map where each element is unit-width wall 
 * and the integer is the height. Suppose it will rain and all spots between
 *  two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index,
2 in the second, and 3 in the fourth index (we cannot hold 5 since it would 
run off to the left), so we can trap 8 units of water.
 */

class Solution {
    numOfUnits(arr){
        let units = 0;
        let maxHeight = arr[0];

        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i - 1]){
                let amount = Math.min(arr[i], maxHeight);
                
                for(let j = i-1; j > 0; j--){
                    if(amount > arr[j]){
                        units += amount - arr[j];
                        arr[j] = (amount - arr[j]) + arr[j]
                    }
                }

                if(arr[i] > maxHeight)
                    maxHeight = arr[i];
            }
        }
        return units;
    }
}
console.log(new Solution().numOfUnits([2, 1, 2]))
console.log(new Solution().numOfUnits([3, 0, 1, 3, 0, 5]))