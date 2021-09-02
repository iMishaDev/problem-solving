import { BinaryTreeNode } from './helpers.js';

class Solution {
    static inOrderSuccessor(root, target){
        return this.#inOrderSuccessorHelper(root, root.value, target);
    }

    static #inOrderSuccessorHelper(root, largest, target){
        if(!root)
            return -1;

        if(root.leftChild && root.leftChild.value === target)
            if(root.value > root.leftChild.value)
                return root.value;
            else return largest;

        if(root.rightChild && root.rightChild.value === target)
            if(root.value > root.rightChild.value)
                return root.value;
            else return largest;


        return Math.max(this.#inOrderSuccessorHelper(root.leftChild, Math.max(root.value, largest), target),
        this.#inOrderSuccessorHelper(root.rightChild, Math.max(root.value, largest), target))
    }
}


const tree1 = new BinaryTreeNode(4,
                    new BinaryTreeNode(2, new BinaryTreeNode(1, null), null),
                    new BinaryTreeNode(8, 
                        new BinaryTreeNode(5, null, new BinaryTreeNode(7,null)),
                        new BinaryTreeNode(9, null)));
console.log(Solution.inOrderSuccessor(tree1, 1 ))
console.log(Solution.inOrderSuccessor(tree1, 7))