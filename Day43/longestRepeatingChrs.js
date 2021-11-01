/**
 * You are given a string s and an integer k. 
 * You can choose any character of the string and change it to any other
 *  uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you c
an get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 
 */

class Solution {
    longest(text, k){
        let sheet = new Map();
        let res = 0;

        let start = 0;
        let end = 0;
        while(end < text.length){
            sheet.set(text[end], 1 + (sheet.get(text[end])|| 0)) 
            while((end - start + 1) - Math.max(...sheet.values()) > k ){
                sheet.set(text[start], sheet.get(text[start]) - 1)
                start += 1;
            }

            res = Math.max(res, (end - start + 1))
            end += 1;
        }

        return res;
    }
}

console.log(new Solution().longest('ABAB', 2))
console.log(new Solution().longest('AABABBA', 1))