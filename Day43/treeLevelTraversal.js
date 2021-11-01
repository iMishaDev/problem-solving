/**
 * Given the root of a binary tree, 
 * return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    get_by_level(node){
        let queue = [node];
        let levels = [];
        let level = [];

        while(queue.length){
            let length = queue.length
            level = []

            while(length){
                let n = queue.shift();
                if (n) {
                    level.push(n)
                    queue.push(n.leftChild)
                    queue.push(n.rightChild)
                }
                length -= 1;
            }
            levels.push(level);
        }

        return levels.map((l) => l.map((ll) => ll.value));
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));
console.log(new Solution().get_by_level(tree1))