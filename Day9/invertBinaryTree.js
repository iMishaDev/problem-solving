import { BinaryTreeNode } from '../helpers.js';

class Solution {
    static invertBT(root){
        let stack = [root];
        let inverted = root;

        while(stack.length){
            let node = stack.pop();
            [node.rightChild, node.leftChild] = [node.leftChild,node.rightChild ];
            if(node.rightChild)
                stack.push(node.rightChild);
            if(node.leftChild)
                stack.push(node.leftChild);
        }
        return inverted;
    }

    static invertBTRecursive(root){
        if(!root) return;
        let left = this.invertBTRecursive(root.leftChild);
        let right = this.invertBTRecursive(root.rightChild);

        root.leftChild = right;
        root.rightChild = left;

        return root;
    }
}

const node = new BinaryTreeNode(10,
                    new BinaryTreeNode(5,
                        new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, 
                        new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));
console.log(node)
console.log('Invert BT ', Solution.invertBTRecursive(node))