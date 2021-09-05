import {BinaryTreeNode} from './helpers.js'
class Solution {
    static generate(n){
        let numbers = [];
        for(let i = 1; i <= n; i++){
            numbers.push(i)
        }
        return this.gen(numbers).map((tree) => this.dfs(tree));
    }

    static dfs(root){
        if(!root)
            return [];

        return [root.value].concat(this.dfs(root.leftChild).concat(this.dfs(root.rightChild)))
    }


    static gen(numbers){
        if(!numbers.length)
            return [null];
        if(numbers.length === 1)
            return [new BinaryTreeNode(numbers[0])];
        
        let bts = [];
        for(let i =0; i< numbers.length; i++){
            let leftChildren = this.gen(numbers.slice(0, i));
            let rightChildren = this.gen(numbers.slice(i + 1 , numbers.length ));

            for(let i = 0; i < leftChildren.length; i++){
                for(let j = 0; j < rightChildren.length; j++){
                    let root = new BinaryTreeNode(numbers[i], leftChildren[i], rightChildren[j]);

                    bts.push(root)
                }
            }
        
        }

        return bts;
    }
}

console.log(Solution.generate(3))