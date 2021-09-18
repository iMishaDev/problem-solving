/**
Given an array of integers. 
Find a peak element in it.
An array element is a peak if it is NOT smaller than its neighbors. 
For corner elements, we need to consider only one neighbor. 
 */

class Solution {

    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     * @param {Array} arr 
     * @returns {Array}
     */
    hasPeak(arr){

        if(arr[1] < arr[0])
            return arr[0];
        if(arr[arr.length - 2] < arr[arr.length - 1])
            return arr[arr.length - 1];
        
        for (let i = 1; i < arr.length - 1; i++){
            if(arr[i-1] < arr[i] && arr[i+1] < arr[i])
                return arr[i];
        }
        return [];
    }



    /**
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     * @param {Array} arr 
     * @returns {Array}
     */
    hasPeak_2(arr){
        return this.#hasPeakHelper(arr, 0, arr.length-1);
    }

    #hasPeakHelper(arr, low, high){
        if(low > high)
            return [];
        let mid = Math.floor((low + high)/2);
        if(arr[mid] >= arr[mid+1] && arr[mid] >= arr[mid-1])
            return arr[mid];
        else if(arr[mid] < arr[mid+1])
            return this.#hasPeakHelper(arr, mid, high)
        else if(arr[mid] < arr[mid-1]) 
            return this.#hasPeakHelper(arr, low, mid)
    }
}

console.log(new Solution().hasPeak([5, 10, 20, 15]))
console.log(new Solution().hasPeak([10, 20, 15, 2, 23, 90, 67]))

console.log(new Solution().hasPeak_2([5, 10, 20, 15]))
console.log(new Solution().hasPeak_2([10, 20, 15, 2, 23, 90, 67]))
console.log(new Solution().hasPeak_2([10, 20, 23, 3, 2, 90, 67]))