import { BinaryTreeNode, Queue } from '../helpers.js';
class Solution {
    

    static getAllValuesInDepth(root, depth){
            return this.#getValuesHelper(root, 0, depth);
    }

    static #getValuesHelper(root, currentDepth, targetDepth){
        if(currentDepth === targetDepth)
            return [root.value];

        return [...this.#getValuesHelper(root.leftChild, currentDepth + 1, targetDepth),
        ...this.#getValuesHelper(root.rightChild, currentDepth + 1, targetDepth)];
    }
}
const node = new BinaryTreeNode(10,
                    new BinaryTreeNode(5,
                        new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, 
                        new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));

console.log('get values in depth ', Solution.getAllValuesInDepth(node, 2));