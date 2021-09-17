import {BinaryTreeNode} from '../helpers.js'

class Solution {
    static serialize(node){
        return this.#serializeHelper(node);
    }

    static #serializeHelper(node){
        if(!node) return '/,';

        return `${node.value},` + this.#serializeHelper(node.leftChild) + this.#serializeHelper(node.rightChild);

    }
    static deserialize(str){
        return this.#deserializeHelper(str.split(','));
    }

    static #deserializeHelper(chars){
        if(chars.length === 0)
            return;
        
        if(chars[0] === '/' || chars[0] === ''){
            chars.shift()
            return null;
        }
        
        let node = new BinaryTreeNode(chars.shift());
        node.leftChild = this.#deserializeHelper(chars);
        node.rightChild = this.#deserializeHelper(chars);

        return node;
    }
}

const node = new BinaryTreeNode(10,
                    new BinaryTreeNode(5,
                        new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, 
                        new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));

let serializedTree = Solution.serialize(node)
console.log('serialize a tree', serializedTree)

console.log('serialize a tree', Solution.deserialize(serializedTree))