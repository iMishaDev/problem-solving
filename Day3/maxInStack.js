import { negativeIndexedArray } from '../helpers.js'
class Stack {

    constructor(){
        this.stack = [];
        this.maxes = negativeIndexedArray();
    }

    
    push(value){
        if (this.maxes && this.maxes[-1] > value)
            this.maxes.push(this.maxes[-1]);
        else this.maxes.push(this.maxes[-1]);
        return this.stack.push(value);
    }

    pop(){
        if (this.maxes)
            this.maxes.pop();
        return this.stack.pop();
    }

    max_1(){
        return Math.max(...this.stack);
    }

    max_2(){
        return Math.max(...this.stack);
    }
}

let stack = new Stack([2,4,5,6,10,1]);
stack.push(20);
console.log('Max in stack', stack.max_1());