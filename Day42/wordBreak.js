/**
 * Given a string s and a dictionary of strings wordDict,
 *  return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 */

class Solution {
    contained_in_dict(word, dict){
        let start = 0;
        let end = 0;

        let w = '';
        while(end < word.length){
            w += word[end];
            
            if(dict.includes(w)){
                start = end + 1;
                w = '';
            }
            end += 1;
        }
        if(w !== '')
            return false;

        return true;
    }

    contained_in_dict_2(word, dict){
        let result = new Array(word.length + 1).fill(false);
        result[word.length] = true;

        for(let i = word.length - 1; i > -1; i--){
            for(const text of dict){
                if(i + text.length <= word.length && text === word.substr(i, text.length))
                    result[i] = result[i + text.length]
                if(result[i])
                    break;
            }
        }

        return result[0];
    }
}

console.log(new Solution().contained_in_dict('leetcode', ['leet', 'code']))
console.log(new Solution().contained_in_dict('applepenapple', ["apple","pen"]))
console.log(new Solution().contained_in_dict('catsandog', ["cats","dog","sand","and","cat"]))


console.log(new Solution().contained_in_dict_2('leetcode', ['leet', 'code']))
console.log(new Solution().contained_in_dict_2('applepenapple', ["apple","pen"]))
console.log(new Solution().contained_in_dict_2('catsandog', ["cats","dog","sand","and","cat"]))