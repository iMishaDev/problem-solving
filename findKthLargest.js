import { Heap } from './helpers.js'


class Solution {
    /**
     * find the Kth element using Heap Data Structure 
     * @param {Array} numbers 
     * @param {Integer} k 
     * @returns 
     */
    static findKthLargest(numbers, k){
        let heap = new Heap(numbers);
        return heap.findTheHighestKthElement(k)
    }


    /**
     * find the Kth element using JS sort function which uses (MergeSort).
     * @param {Array} numbers 
     * @param {Integer} k 
     * @returns 
     */
    static iterativeFindKthElement_1(numbers, k){
        numbers = numbers.sort((a,b) => a-b);
        return numbers[k];
    }

    
}


console.log('Kth Largest Element: ', Solution.iterativeFindKthElement_1([3, 5, 2, 4, 6, 8], 3))