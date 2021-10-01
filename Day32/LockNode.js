/**
Implement locking in a binary tree. 
A binary tree node can be locked or unlocked only if all of its descendants or 
ancestors are not locked.

Design a binary tree node class with the following methods:

`is_locked`, which returns whether the node is locked
`lock`, which attempts to lock the node. If it cannot be locked,
then it should return false. Otherwise, it should lock it and return true.
`unlock`, which unlocks the node. If it cannot be unlocked, then it should return false. 
Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other 
property you would like.
You may assume the class is used in a single-threaded program,
so there is no need for actual locks or mutexes. 
Each method should run in O(h), where h is the height of the tree.
 */


class BinaryTreeNode {
    constructor(value, left=null, right=null, parent=null, isLocked=false){
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
        this.isLocked = isLocked;
    }
}


class Solution {
    isLocked(node){
        return node.isLocked;
    }

    lock(node){
        if(node.isLocked)
            return false; // already locked
        
        if(this.isLockable(node)){
            node.isLocked = true;
            return true;
        } else return false;
    }


    unlock(node){
        if(!node.isLocked)
            return false; // already unlocked
        
        if(this.isLockable(node)){
            node.isLocked = false;
            return true;
        } else return false;
    }

    ancestors(node){
        if(!node)
            return true;
        
        return !node.isLocked && this.descendants(node.parent);
    
    }


    descendants(node){
        if(!node)
            return true;
        
        return !node.isLocked && this.descendants(node.left) && this.descendants(node.right);
    }

    isLockable(node){
        return this.descendants(node) || this.ancestors(node);
    }
}



const tree  = new BinaryTreeNode(4)
tree.left = new BinaryTreeNode(2)
tree.right = new BinaryTreeNode(8)
tree.left.parent = tree
tree.right.parent = tree

console.log(new Solution().lock(tree))