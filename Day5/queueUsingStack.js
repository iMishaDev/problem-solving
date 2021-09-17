class Stack {
    constructor(stack){
        this.stack = stack;
        this.stackClone = [];
    }


    queue(element){
        if(this.stackClone.length !== 0){
            while(this.stackClone.length)
                this.stack.push(this.stackClone.pop());
            
        }
        this.stack.push(element)
    }

    dequeue(){
        while(this.stack.length){
            this.stackClone.push(this.stack.pop());
        }
        return this.stackClone.pop()
    }
}
let stack = new Stack([1,2,3,4]);
console.log(stack.stack)
console.log('queue 5',stack.queue(5))
console.log('dequeue ',stack.dequeue())
console.log('dequeue',stack.dequeue())
console.log('dequeue',stack.dequeue())
console.log('queue 5',stack.queue(5))
console.log(stack.stack)