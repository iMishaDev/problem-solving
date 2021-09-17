import { createSheet } from '../helpers.js'
class Solution {
    static findAnagrams(text, anagram){
        let sheet = createSheet();
        let iterator = 0; 
        let results = [];
        
        for (const letter of [...anagram]){
            sheet[letter] = 1;
        }
        console.log(sheet)
        console.log('text', text)
        console.log('anagram length', anagram.length)
        while(iterator < text.length){
            console.log('out of if', sheet)

            if (iterator >= anagram.length){
                console.log('iterator', iterator)
                let c_old = text[iterator - anagram.length]
                console.log('text', text)
                console.log('c_old', c_old)
                console.log('inside sheet', sheet)
                sheet[c_old] += 1
                console.log('inside sheet', sheet)
                if (sheet[c_old] == 0)
                    delete sheet[c_old]
                console.log('inside sheet', sheet)
            }

            sheet[text[iterator]] -= 1
            if(sheet[text[iterator]] == 0)
                delete sheet[text[iterator]];

            if (Object.keys(sheet).length == 0){
                results.push((iterator - anagram.length) + 1)
            }
            console.log('while end ', sheet)
            iterator += 1
        }

        return results;
    }
}

console.log(Solution.findAnagrams('acdbacdacb', 'abc'))