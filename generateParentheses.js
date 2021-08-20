class Solution {
    static generateParentheses(n){
        return this.generateParenthesesHelper(n, 0, 0, '');
    }

    static generateParenthesesHelper(n, left, right, str){
        if ( left+right === 2 * n)
            return [str]
        let result = [];
        if(left < n)
            result = [...result, ...this.generateParenthesesHelper(n, left + 1, right, str+'(')];
        if(right < left)
            result = [...result, ...this.generateParenthesesHelper(n, left, right + 1, str+')')];
        return result;
    };


}

console.log('Generate ', Solution.generateParentheses(3))