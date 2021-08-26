import {BinaryTreeNode} from './helpers.js';

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

const validBinaryTree = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, new BinaryTreeNode(22, null))));

const validBinaryTreeClone = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, new BinaryTreeNode(22, null))));

console.log('find the cloned node', Solution.findNodeIterative(validBinaryTree, validBinaryTreeClone , validBinaryTree.leftChild.leftChild))