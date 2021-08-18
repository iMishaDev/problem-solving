import { createSheet, Heap } from './helpers.js';
class Solution {
    static topKFrequentNumber(numbers, k){
        let sheet = createSheet();
        for(const number of numbers){
            sheet[number] += 1;
        }

        let heap =  new Heap();
        for (const key in sheet){
            heap.add({[key]: sheet[key]});
        }
        return heap.findTheHighestKthElements(k)
    }
}

console.log('Top 2 frequent numbers', Solution.topKFrequentNumber([1, 1, 1, 2, 2, 3, ], 2))