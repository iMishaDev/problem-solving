import { Heap } from './helpers.js'


class Solution {
    static findKthLargest(numbers, k){
        let heap = new Heap(numbers);
        return heap.findTheHighestKthElement(k)
    }
}


console.log('Kth Largest Element: ', Solution.findKthLargest([3, 5, 2, 4, 6, 8], 3))