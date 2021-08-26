import {TreeNode} from './helpers.js';

class Solution {
    static findNode(tree, cloneTree , n){
        return this.#findNodeHelper(tree, cloneTree, n);
    }

    static #findNodeHelper(tree, cloneTree, node){
        if(node == tree)
            return cloneTree;
        
        if(cloneTree.leftChild && tree.leftChild)
            return this.#findNodeHelper(tree.leftChild, cloneTree.leftChild,  node)
        if(cloneTree.rightChild && tree.rightChild)
            return this.#findNodeHelper(tree.rightChild, cloneTree.leftChild, node)

        return null;
    }

    static findNodeIterative(tree, cloneTree, n){
        let stack = [tree];
        let stackClone = [cloneTree];

        while(stack.length && stackClone.length){
            let node = stack.pop();
            let clonedNode = stackClone.pop();

            if(node == n)
                return clonedNode;
            
            if(node.leftChild && clonedNode.leftChild){
                stack.push(node.leftChild);
                stackClone.push(clonedNode.leftChild);
            }

            if(node.rightChild && clonedNode.rightChild){
                stack.push(node.rightChild);
                stackClone.push(clonedNode.rightChild);
            }
        }
        return null;
    }
}

const validBinaryTree = new TreeNode(10,
                    new TreeNode(5, new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, new TreeNode(18,null),new TreeNode(24, new TreeNode(22, null))));

const validBinaryTreeClone = new TreeNode(10,
                    new TreeNode(5, new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, new TreeNode(18,null),new TreeNode(24, new TreeNode(22, null))));

console.log('find the cloned node', Solution.findNodeIterative(validBinaryTree, validBinaryTreeClone , validBinaryTree.leftChild.leftChild))