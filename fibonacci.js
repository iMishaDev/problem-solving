class Solution {
    static fibonacci(number){
        if(number === 0)
            return 0;
        if(number === 1)
            return 1;
        
        return this.fibonacci(number - 1) + this.fibonacci(number - 2)
    }

}

console.log('fibonacci', Solution.fibonacci(10))
