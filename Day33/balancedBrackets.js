/**
 * Given a string of round, curly, and square open and closing brackets,
 *  return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
 */

class Solution {
    isBalanced(brackets){
        let stack = [];

        for(const element of brackets){
            if(element === '(' || element === '[' || element === '{')
                stack.push(element);
            else if (element === ')'){
                if(stack[stack.length - 1] === '(')
                    stack.pop();
            }
            else if (element === ']'){
                if(stack[stack.length - 1] === '[')
                    stack.pop();
            }
            else if (element === '}'){
                if(stack[stack.length - 1] === '{')
                    stack.pop();
            }
        }
        
        return stack.length == 0;
    }


    isBalancedV2(brackets){
        let stack = [];
        let br = {')': '(', '}': '{', ']':'['};

        for(const element of brackets){
            if(element === '(' || element === '[' || element === '{')
                stack.push(element);
            else if (br[element] === stack[stack.length - 1])
                stack.pop();
        }
        
        return stack.length == 0;
    }
}

console.log(new Solution().isBalanced('([])[]({})'))
console.log(new Solution().isBalanced('([)]'))


console.log(new Solution().isBalancedV2('([])[]({})'))
console.log(new Solution().isBalancedV2('([)]'))