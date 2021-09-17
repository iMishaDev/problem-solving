import { BinaryTreeNode, createSheet } from '../helpers.js';

class Solution {
    getMostFrequentSum(node){
        let k = 0;
        let freq = createSheet();
        
        this.#mostFrequentHelper(node,freq );
        
        for (const element in freq){
            if(freq[element] > freq[k]){
                k = element
            }
        };

        return k;
    }

    #mostFrequentHelper(node, freq){
        if(!node)
            return 0;
        
        let sum = node.value + this.#mostFrequentHelper(node.leftChild, freq) + this.#mostFrequentHelper(node.rightChild, freq)
        
        freq[sum] += 1;

        return sum;        
    }
}


const tree1 = new BinaryTreeNode(2,
                    new BinaryTreeNode(2, 
                        new BinaryTreeNode(2),
                        new BinaryTreeNode(2)),
                    new BinaryTreeNode(-3));
console.log(new Solution().getMostFrequentSum(tree1))