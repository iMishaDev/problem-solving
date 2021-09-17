class Solution {
    getConcatenatedWords(words){
        let sheet = {};
        let result = [];

        for(const word of words){
            sheet[word] = 1;
        }

        for(let i = 0; i < words.length; i++){
            for(let j = 0; j < words.length; j++){
                let concatenated = words[i] + words[j];
                if(sheet[concatenated])
                    result.push(concatenated)
            }
        }

        return result;
    }
}

console.log(new Solution().getConcatenatedWords(['cat', 'cats', 'dog', 'catsdog']))