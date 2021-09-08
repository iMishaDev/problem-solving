import {BinaryTreeNode} from './helpers.js';
const operators = {
        '+': (a, b) => (a + b),
        '-': (a, b) => (a - b),
        '/': (a, b) => (a / b),
        '*': (a, b) => (a * b),
    }


class Solution {
    evaluate(node){
        return this.#evaluateHelper(node);
    }


    #evaluateHelper(node){
        if(!isNaN(node.value))
            return node.value;
        
        let fun = operators[node.value];
        return fun(this.#evaluateHelper(node.leftChild), this.#evaluateHelper(node.rightChild))
    }
}

let node = new BinaryTreeNode('*')
node.leftChild = new BinaryTreeNode('+')
node.rightChild = new BinaryTreeNode('+')
node.leftChild.leftChild = new BinaryTreeNode(3)
node.leftChild.rightChild = new BinaryTreeNode(2)
node.rightChild.leftChild = new BinaryTreeNode(4)
node.rightChild.rightChild = new BinaryTreeNode(5)

console.log(new Solution().evaluate(node))

