class Solution {
    static getWordsAnagrams(words){
        let wordsSheet = {};
        
        function hashFun(word){
            let wordValue = 0;

            for (const letter of [...word]){
                wordValue += letter.charCodeAt(0);
            }
            return wordValue;
        }

        for(let word of words){
            let wordValue = hashFun(word)
            if(!wordsSheet[wordValue])
                wordsSheet[wordValue] = [word];
            else wordsSheet[wordValue].push(word)
        }

        return Object.values(wordsSheet);
    }
}

console.log('get word Anagrams', Solution.getWordsAnagrams(['abc', 'bcd', 'cba', 'cbd','efg']))