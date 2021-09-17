class Solution {
    static calculateRecursive(equation){
        return this.#recursiveHelper(equation, 0)[0];
        
    }

    static #recursiveHelper(expression, index){
        let result = 0;
        let operator = '+';
        
        while(index < expression.length){
            let letter = expression[index];
            if (letter == '+' || letter == '-')
                operator = letter;
            else {
                let value = 0;
                if (!isNaN(letter)){
                    value += Number(letter);
                }
                else if (letter == '(')
                    [value, index] =  this.#recursiveHelper(expression, index + 1);
                
                
                if(operator == '-')
                    result -= value;
                if(operator == '+')
                    result += value;
            }
            index += 1;
        }
        return [result, index];


    }
}

console.log('calculate : \'(1 + (2 + (3 + (4 + 5))))\'', Solution.calculateRecursive('(1 + (2 + (3 + (4 + 5))))'))