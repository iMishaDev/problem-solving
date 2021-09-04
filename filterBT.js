import { BinaryTreeNode } from './helpers.js';


class Solution {
    static filter(root, value){
        return this.#filterHelper(root, value)
    }


    static #filterHelper(root, value){
        if(!root)
            return null;

        root.leftChild = this.#filterHelper(root.leftChild, value);
        root.rightChild = this.#filterHelper(root.rightChild, value);

        if(!root.leftChild && !root.rightChild && root.value !== value)
            return null
        
        return root;
        
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(2, new BinaryTreeNode(2, null), null),
                    new BinaryTreeNode(1, 
                        new BinaryTreeNode(1,null), null));
console.log('filter a tree', Solution.filter(tree1, 2))