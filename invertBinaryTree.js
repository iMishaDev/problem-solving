import { TreeNode } from './helpers.js';

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

        return inverted
        
    }
}

const node = new TreeNode(10,
                    new TreeNode(5,
                        new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, 
                        new TreeNode(18,null),new TreeNode(24, null)));
console.log(node)
console.log('Invert BT ', Solution.invertBT(node))