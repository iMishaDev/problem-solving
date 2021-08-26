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

    static iterativeFindKthElement_2(numbers, k){
        let largest = [Number.MIN_VALUE, -1];

        while(k){
            largest = [Number.MIN_VALUE, -1];
            for(const [key, number] of numbers.entries()){
                largest = [Math.max(largest[0], number), key];
            }
            numbers.splice(largest[1], 1)
            k -= 1;
        }
        return largest[0];
    }


}


console.log('Kth Largest Element: ', Solution.iterativeFindKthElement_3([3, 5, 2, 4, 6, 8], 3))