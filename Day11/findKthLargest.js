import { Heap } from '../helpers.js'


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


    static partitioning(numbers, left, right){
        let pivot = numbers[right];
        let i = left; 

        for (let j =0; j < numbers.length; j++){
            if(numbers[j] <= pivot){
                [numbers[i],  numbers[j]] = [numbers[j],  numbers[i]];
                i += 1;
            }
        }
        [numbers[i],  numbers[right]] = [numbers[right],  numbers[i]];

        return i;
    }

    /**
     * find the Kth element using Quick Sort 
     * @param {Array} numbers 
     * @param {Integer} k 
     * @returns 
     */
    static iterativeFindKthElement_3(numbers, k){
        k = numbers.length - k;
        let left  = 0;
        let right = numbers.length - 1;

        while(left < right){
            let pivot = this.partitioning(numbers, left, right)
            if(pivot === k)
                return numbers[pivot];
            else if(pivot > k){
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }
        return -1;
    }
}


console.log('Kth Largest Element: ', Solution.iterativeFindKthElement_3([3, 5, 2, 4, 6, 8], 3))