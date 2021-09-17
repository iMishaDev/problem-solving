import { TreeNode, Queue } from '../helpers.js';


class Solution {

    static printLevelByLevel(node){
        let queue = new Queue();
        queue.enqueue(node);

        while(queue.size()){
            let n = queue.dequeue();
            console.log(n.value)
            for(const child of n.children){
                queue.enqueue(child);
            }
        }
    }
}

const validBinaryTree = new TreeNode(10,
                    [
                        new TreeNode(5, 
                            [   new TreeNode(4, []), 
                                new TreeNode(8, [])
                            ]),
                        new TreeNode(20, 
                            [
                                new TreeNode(18, []),
                                new TreeNode(24, [
                                    new TreeNode(22, [])
                                ])
                            ])
                    ]);

console.log('find the cloned node', Solution.printLevelByLevel(validBinaryTree,))