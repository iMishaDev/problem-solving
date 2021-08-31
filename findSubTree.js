import { BinaryTreeNode } from './helpers.js';

class Solution {
    static findSubTree(tree, subtree){
        return this.findSubTreeHelper(tree, subtree)
    }

    static findSubTreeHelper(tree, subtree){
        if(!tree )
            return false;
        if(tree.value === subtree.value){
            return ((!tree.leftChild || !subtree.leftChild) || this.findSubTreeHelper(tree.leftChild, subtree.leftChild)) 
            && ((!tree.rightChild || !subtree.rightChild)  || this.findSubTreeHelper(tree.rightChild, subtree.rightChild))
        }

        return  this.findSubTreeHelper(tree.leftChild, subtree) || this.findSubTreeHelper(tree.rightChild, subtree)
    }
}


const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));

const tree2 = new BinaryTreeNode(5,
                    new BinaryTreeNode(3, null), 
                    new BinaryTreeNode(2, null));
console.log('find subtree', Solution.findSubTree(tree1, tree2))