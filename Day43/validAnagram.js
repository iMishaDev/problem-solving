/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

 */

class Solution {
    is_anagram(s, t){
        if(s.length !== t.length)
            return false;
        let sheet = new Map();
        for(const letter of s){
            sheet.set(letter, 1 + (sheet.get(letter) || 0));
        }

        for(const letter of t){
            if(sheet.get(letter) > 1)
                sheet.set(letter, sheet.get(letter) - 1);
            else if(sheet.get(letter) == 1) delete sheet.delete(letter)
            else sheet.set(letter, 1 + (sheet.get(letter) || 0));
        }

        return sheet.size == 0;
    }
}

console.log(new Solution().is_anagram('anagram', 'nagaram'))
console.log(new Solution().is_anagram('rat', 'car'))