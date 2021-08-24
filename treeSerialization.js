import {TreeNode} from './helpers.js'

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
        
        let node = new TreeNode(chars.shift());
        node.leftChild = this.#deserializeHelper(chars);
        node.rightChild = this.#deserializeHelper(chars);

        return node;
    }
}

const node = new TreeNode(10,
                    new TreeNode(5,
                        new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, 
                        new TreeNode(18,null),new TreeNode(24, null)));

let serializedTree = Solution.serialize(node)
console.log('serialize a tree', serializedTree)

console.log('serialize a tree', Solution.deserialize(serializedTree))