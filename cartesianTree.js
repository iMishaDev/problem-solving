import { BinaryTreeNode } from './helpers.js'
class Solution {
    static cartesian(arr){
        return this.#cartesianHelper2(arr, 0, arr.length - 1);
    }

    static #cartesianHelper(arr){
        if(!arr.length)
            return null;
            
        let smallest = Math.min(...arr)
        let first = arr.slice(0, arr.indexOf(smallest));
        let second = arr.slice(arr.indexOf(smallest) + 1, arr.length);
        let root = new BinaryTreeNode(smallest);

        root.leftChild = this.#cartesianHelper(first);
        root.rightChild = this.#cartesianHelper(second);

        return root;
    }

    static #findMin(arr, start, end){
        let min = arr[start];
        for(let i = start; i < arr.length; i++){
            min = Math.min(min, arr[i]);
        }
        return arr.indexOf(min);
    }

    static #cartesianHelper2(arr, start, end){
        if(!arr.length)
            return null;
            
        let smallest = this.#findMin(arr, start, end);
        let root = new BinaryTreeNode(arr[smallest]);

        root.leftChild = this.#cartesianHelper(arr, start, smallest - 1);
        root.rightChild = this.#cartesianHelper(arr, smallest + 1, end);

        return root;
    }
}

console.log(Solution.cartesian([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]));