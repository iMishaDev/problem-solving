class Solution {
    static calc(stack){
        let clone = [];
        let result = 0;

        while(stack.length){
            let num1 = stack.shift();

            if(isNaN(num1)){
                let n2 = clone.shift();
                let n1 = clone.shift();
                let r = 0;
                
                if(num1 == '+'){
                    r = n1 + n2;
                }
                else if(num1 == '*')
                    r = n1 * n2;
                else r = n1 - n2;
                result = r;
                stack.unshift(r)

                while(clone.length > 0){
                    stack.unshift(clone.shift());
                }
            } else clone.unshift(num1);
        }
        return result;
    }
}

console.log(Solution.calc([1, 2, 3, '+', 2, '*', '-']))