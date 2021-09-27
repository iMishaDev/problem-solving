/**
 * Given an array of integers and a number k,
 * where 1 <= k <= length of the array,
 * compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3,
we should get: [10, 7, 8, 8], since:

    10 = max(10, 5, 2)
    7 = max(5, 2, 7)
    8 = max(2, 7, 8)
    8 = max(7, 8, 7)
    Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results.
    You can simply print them out as you compute them.
 */


class Solution {
    maxSubArray(arr, k){
        let start = 0;
        let end = 0;
        let maxes = [];
        let currentMax = Number.MIN_VALUE;


        while(end < arr.length){
            currentMax = Math.max(currentMax, arr[end]);
            if(end - start === k - 1){
                currentMax = Math.max(currentMax, arr[end]);
                maxes.push(currentMax);
                start += 1;
                end = start;

                currentMax = arr[end]
            }

            end += 1;
        }

        return maxes;
    }



    maxSubArrayV2(arr, k){
        let currentMax = Number.MIN_VALUE;
        let r = [];
        let end = 0;
        let start = 0;
        let maxes = [];

        while(end <= arr.length){
            if(end - start === k ){
                currentMax = Math.max(...r);
                maxes.push(currentMax);
                start += 1;
                r.shift();
            }

            r.push(arr[end])

            end += 1;
        }

        return maxes;
    }
}

console.log(new Solution().maxSubArray([10, 5, 2, 7, 8, 7], 3))
console.log(new Solution().maxSubArrayV2([10, 5, 2, 7, 8, 7], 3))