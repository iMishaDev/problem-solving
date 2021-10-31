/**
 * Given two strings text1 and text2, 
 * return the length of their longest common subsequence. 
 * If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original 
string with some characters (can be none) deleted without changing the 
relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 
 */

class Solution {
    find_lcs(word1, word2){
        if(word1.length == 0 || word2.length == 0)
            return 0;
        return word1[0] === word2[0] ?  this.find_lcs(word1.slice(1), word2.slice(1)) + 1: Math.max(this.find_lcs(word1.slice(1), word2),this.find_lcs(word1, word2.slice(1)))
    }

    find_lcs_dynamic_programming(word1, word2){
        let matrix = new Array(word1.length + 1).fill(0).map((el) => new Array(word2.length + 1).fill(0))
        for(let i = word1.length - 1; i > -1; i--){
            for(let j = word2.length  - 1; j > -1; j--){
                if(word1[i] === word2[j]){
                    matrix[i][j] = 1 + matrix[i + 1][j + 1]
                } else {
                    matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j + 1])
                }

            }
        }
        return matrix[0][0]
    }
}

console.log(new Solution().find_lcs('abcde', 'ace'))
console.log(new Solution().find_lcs('abc', 'abc'))
console.log(new Solution().find_lcs('abc', 'def'))


console.log(new Solution().find_lcs_dynamic_programming('abcde', 'ace'))
console.log(new Solution().find_lcs_dynamic_programming('abc', 'abc'))
console.log(new Solution().find_lcs_dynamic_programming('abc', 'def'))