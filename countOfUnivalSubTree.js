import { TreeNode } from './helpers.js';
class Solution {
    static getCount(root){
        return this.#getCountHelper(root);
    }

    static #getCountHelper(root){
        if(!root )
            return [0, true];
    
        const leftResult = this.#getCountHelper(root.leftChild);
        const rightResult = this.#getCountHelper(root.rightChild);

        if (leftResult[1] && rightResult[1] &&
            ( !root.leftChild  ||  root.value == root.leftChild.value) &&
            (!root.rightChild  ||  root.value == root.rightChild.value))
                return [leftResult[0] + rightResult[0] + 1, true];
        
        return [leftResult[0] + rightResult[0], false]
    }
}
const node = new TreeNode(0,
                    new TreeNode(1, null),
                    new TreeNode(0, 
                        new TreeNode(0,null),
                        new TreeNode(1, 
                            new TreeNode(1,null),
                            new TreeNode(1, null))));
console.log('get count of unival subtrees', Solution.getCount(node))