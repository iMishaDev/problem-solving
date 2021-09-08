import { BinaryTreeNode } from './helpers.js';


class Solution {
    findCousins(root, n){
        let queue = [root];
        while(queue.length){
            let node = queue.shift();
        
            if(node == n){
                return queue;
            }

            if(node.rightChild)
                queue.push(node.rightChild)

            if(node.leftChild)
                queue.push(node.leftChild)
            
        }

        return [];
    }
}
//      1
//     / \
//    2   3
//   / \    \
//  4   6    5
const root = new BinaryTreeNode(1)
root.leftChild = new BinaryTreeNode(2)
root.leftChild.leftChild = new BinaryTreeNode(4)
root.leftChild.rightChild = new BinaryTreeNode(6)
root.rightChild = new BinaryTreeNode(3)
root.rightChild.rightChild = new BinaryTreeNode(5)


console.log(new Solution().findCousins(root, root.rightChild.rightChild))