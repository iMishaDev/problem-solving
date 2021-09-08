import { BinaryTreeNode } from './helpers.js';


class Solution {
    findCousins(root, n){
        let queue = [root];
        while(queue.length){
            let node = queue.shift();
        
            if(node == n){
                if(queue.length > 2)
                    queue.shift();
                return queue;
            }

            if(node.rightChild)
                queue.push(node.rightChild)

            if(node.leftChild)
                queue.push(node.leftChild)
            
        }

        return [];
    }


    findCousins2(root, n){
        let [height, parent] = this.#findHeight(root, null, n, 0)
        let cousins = this.#getNodeWithHeight(root, 0, height, parent);

        return cousins;
    }

    #getNodeWithHeight(root, height, target, exclude){
        if(!root || root === exclude)
            return [];
        if(height === target)
            return [root];
        return [...this.#getNodeWithHeight(root.leftChild, height + 1, target, exclude), ...this.#getNodeWithHeight(root.rightChild, height + 1, target, exclude)]
    }


    #findHeight(root, parent, n, height){
        if(!root)
            return;
        if(root === n)
            return [height, parent];
        return (this.#findHeight(root.leftChild, root, n, height + 1) || this.#findHeight(root.rightChild, root, n, height + 1))
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
root.rightChild.leftChild = new BinaryTreeNode(7)

console.log(new Solution().findCousins(root, root.rightChild.rightChild))
console.log(new Solution().findCousins2(root, root.rightChild.rightChild))