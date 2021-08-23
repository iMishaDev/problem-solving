import { TreeNode } from './helpers.js';

class Solution {
    static maxDepth(root){
        let stack = [[root, 1]];
        let maxDepth = 0;
        while(stack.length){

            let [node, depth] = stack.pop();
            maxDepth = Math.max(depth, maxDepth)
            if(node.leftChild)
                stack.push([node.leftChild, depth + 1])
            if(node.rightChild)
                stack.push([node.rightChild, depth + 1])
        }
        return maxDepth;
    }
}

const node = new TreeNode(0,
                    new TreeNode(1, null),
                    new TreeNode(0, 
                        new TreeNode(0,null),
                        new TreeNode(1, 
                            new TreeNode(1,null),
                            new TreeNode(1, null))));
let n = new TreeNode(1)
n.leftChild = new TreeNode(2)
n.rightChild = new TreeNode(3)
n.leftChild.leftChild = new TreeNode(4)

const node2 = new TreeNode(0,
                    new TreeNode(1, new TreeNode(1, null)),
                    new TreeNode(0, null)); 
                    
const node3 = new TreeNode(0, new TreeNode(1, null), null);  
console.log('max depth of a tree', Solution.maxDepth(node))
console.log('max depth of a tree', Solution.maxDepth(node2))
console.log('max depth of a tree', Solution.maxDepth(n))