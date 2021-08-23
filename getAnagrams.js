class Solution {
    static getWordsAnagrams(words){
        let sheet = {
            "a": 1,
            "b": 2,
            "c": 3,
            "d": 4,
            "e": 5,
            "f": 6,
            "g": 7
        };
        let wordsSheet = {};
        let results = [];

        for(let word of words){
            let wordValue = 0;
            word = word.split('');
            for (const letter of word){
                wordValue += sheet[letter];
            }
            if(!wordsSheet[wordValue])
                wordsSheet[wordValue] = [word.join('')];
            else wordsSheet[wordValue].push(word.join(''))
        }

        for (const key in wordsSheet){
            results.push(wordsSheet[key]);
        }

        return results;
    }
}

console.log('get word Anagrams', Solution.getWordsAnagrams(['abc', 'bcd', 'cba', 'cbd','efg']))