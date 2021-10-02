/**
 * Implement regular expression matching with the following special characters:

. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element
That is, implement a function that takes in a string and a valid regular expression 
and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function
 should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return
 true. The same regular expression on the string "chats" should return false.
 */
class Solution {
    test(re, text){
        
        return this.regexHelper(re, text);
    }


    regexHelper(reg, text){
        if(reg == '')
            return text === '';
        
        if(reg[0] == '.' && isNaN(text[0]))
            return true && this.regexHelper(reg.slice(1), text.slice(1))
        if(reg[0] == '*' && isNaN(text[0])){
            if(reg[1] == text[1] && reg[2] == text[2])
                return true && this.regexHelper(reg.slice(1), text.slice(1))
            return true && this.regexHelper(reg, text.slice(1))
        }
        if(reg[0] == text[0])
            return true && this.regexHelper(reg.slice(1), text.slice(1))

        return false && this.regexHelper(reg.slice(1), text.slice(1))
    }

}

console.log(new Solution().test('ra.', 'ray'))
console.log(new Solution().test('ra.', 'raymond'))

console.log(new Solution().test('.*at', 'chat'))
console.log(new Solution().test('.*at', 'chats'))
console.log(new Solution().test('.*at', 'chaaat'))
