/**
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

 */

class Solution {
    grouping(words){
        let sheet = {};
        let res = [];

        for(const word of words){
            let count = new Array(26).fill(0);

            for(const letter of word){
                count[letter.charCodeAt() - 'a'.charCodeAt()] += 1;
            }
            if(sheet[count])
                sheet[count].push(word)
            else  sheet[count] = [word]
        }
        for(const key in sheet){
            res.push(sheet[key])
        }

        return res;
    }
}

console.log(new Solution().grouping(["eat","tea","tan","ate","nat","bat"]))