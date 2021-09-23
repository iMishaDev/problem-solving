import { BinaryTreeNode } from '../helpers.js';

class Solution {
    isUniversal(root){
        return this.#helper(root);
    }


    #helper(root){
        if(!root.leftChild && !root.rightChild)
            return 1;
        
        return root.value + this.#helper(root.leftChild) + this.#helper(root.rightChild);
    }
}


const validBinaryTree = new BinaryTreeNode(0,
                    new BinaryTreeNode(1,
                        new BinaryTreeNode(1),
                        new BinaryTreeNode(1)),
                    new BinaryTreeNode(0, 
                            new BinaryTreeNode(1,
                                new BinaryTreeNode(1),
                                new BinaryTreeNode(1)),
                            new BinaryTreeNode(0)));


console.log(new Solution().isUniversal(validBinaryTree))