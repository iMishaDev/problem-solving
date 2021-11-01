/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 *  determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 


Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 */

class Solution {
    constructor(){
        this.close= ['}', ']', ')']
        this.sheet = {')' : '(', ']': '[', '}':'{' }
    }

    is_valid(text){
        let stack = [];
        for(const symbol of text){
            if(this.close.includes(symbol)){
                let p = stack.pop();
                if(p !== this.sheet[symbol])
                    return false;
            } else  stack.push(symbol);
        }
        return stack.length == 0;
    }
}

console.log(new Solution().is_valid('()'))
console.log(new Solution().is_valid('()[]{}'))
console.log(new Solution().is_valid('(]'))
console.log(new Solution().is_valid('([)]'))
console.log(new Solution().is_valid('{[]}'))