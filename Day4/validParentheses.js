class Solution {
    static validParentheses(text){
        let stack = [];
        let parenthesesList = [...text];
        const shiftedParentheses = new Set(['}', ')', ']']);

        const shiftedParenthesesSheet =  {
            '}':'{',
            ')': '(',
            ']':'['
        };

        for (const letter of parenthesesList){
            if(shiftedParentheses.has(letter)){
                if (stack.pop() !== shiftedParenthesesSheet[letter])
                    return false;
            } else stack.push(letter);
        }
        return stack.length === 0;
    }
}

console.log('valid parentheses', Solution.validParentheses('(){([])}'))
console.log('valid parentheses', Solution.validParentheses('(){(['))