import { BinaryTreeNode } from './helpers.js';

class Solution {
    static inOrderSuccessor(root){
        return this.#inOrderSuccessorHelper(root);
    }

    static #inOrderSuccessorHelper(root){
        if(!root.parent)
            return root.value;
        
        if(root.value < root.parent.value)
            return root.parent.value;

        
        return  Math.max(root.parent.value, this.#inOrderSuccessorHelper(root.parent));
        
    }
}



const tree  = new BinaryTreeNode(4)
tree.leftChild = new BinaryTreeNode(2)
tree.rightChild = new BinaryTreeNode(8)
tree.leftChild.parent = tree
tree.rightChild.parent = tree
tree.leftChild.leftChild = new BinaryTreeNode(1)
tree.leftChild.leftChild.parent = tree.leftChild
tree.rightChild.rightChild = new BinaryTreeNode(7)
tree.rightChild.rightChild.parent = tree.rightChild
tree.rightChild.leftChild = new BinaryTreeNode(5)
tree.rightChild.leftChild.parent = tree.rightChild
tree.rightChild.leftChild.rightChild = new BinaryTreeNode(7)
tree.rightChild.leftChild.rightChild.parent = tree.rightChild.leftChild
tree.rightChild.rightChild = new BinaryTreeNode(9)
tree.rightChild.rightChild.parent = tree.rightChild

console.log(Solution.inOrderSuccessor(tree.leftChild.leftChild))
console.log(Solution.inOrderSuccessor(tree.rightChild.leftChild.rightChild))