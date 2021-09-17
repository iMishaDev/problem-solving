class Solution {
    static fibonacci(number){
        if(number === 0)
            return 0;
        if(number === 1)
            return 1;
        
        return this.fibonacci(number - 1) + this.fibonacci(number - 2)
    }


    static fibonacciIterative(number){
        let sum = 0;
        let stack = [0, 1];

        let i = number - 2;

        while(i > -1){
            let num1 = stack.pop();
            let num2 = stack.pop();

            sum = num1 + num2;

            stack.push(num1);
            stack.push(sum);
            i -= 1
        }

        return sum;
    }
}

console.log('fibonacci', Solution.fibonacciIterative(10))
