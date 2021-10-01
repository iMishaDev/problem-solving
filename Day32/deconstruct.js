/**
Given a dictionary of words and a string made up of those words (no spaces),
return the original sentence in a list. 
If there is more than one possible reconstruction, 
return any of them. If there is no possible reconstruction, then return null.

For example, 
given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox",
you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond",
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].


 */

class Solution {

    /**
     * breaks on scenario 2
     * @param {Array} dict 
     * @param {String} sentence 
     * @returns {Array}
     */
    deconstruct(dict, sentence){
        let results = [];
        for (const word of dict){
            let exist = new RegExp(`${word}*`).test(sentence)
            if(exist) results.push(word)
        }

        return results;
    }

}

console.log(new Solution().deconstruct(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox'))
console.log(new Solution().deconstruct(['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond'))