/**
 * A phrase is a palindrome if, after converting all 
 * uppercase letters into lowercase letters and removing all
 *  non-alphanumeric characters, it reads the same forward and backward.
 *  Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
 */

class Solution {
    is_valid(text){
        text = text.replace(/[^A-Za-z]/gi, '')
        text = text.toLowerCase()
        return this.validate(text, 0, text.length -1)
    }

    validate(text, start, end){
        if(start >= end) return true
        return text[start] === text[end] && this.validate(text, start + 1, end - 1)
    }
}

console.log(new Solution().is_valid('A man, a plan, a canal: Panama'))
console.log(new Solution().is_valid('race a car'))
console.log(new Solution().is_valid(' '))