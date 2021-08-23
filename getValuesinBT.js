import { TreeNode, Queue } from './helpers.js';
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
const node = new TreeNode(10,
                    new TreeNode(5,
                        new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, 
                        new TreeNode(18,null),new TreeNode(24, null)));

console.log('get values in depth ', Solution.getAllValuesInDepth(node, 2));