import { BinaryTreeNode } from './helpers.js'
class Solution {
    static cartesian(arr){
        return this.#cartesianHelper(arr);
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
}

console.log(Solution.cartesian([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]));