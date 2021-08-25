class Solution {
    static makeWords(numbers){
        let validWords = ['dog', 'fish', 'cat', 'fog'];
        let result = [];
        for (const word of validWords){
            if(this.canBeWritten(word, numbers))
                result.push(word);
        }

        return result;
    }

    static canBeWritten(word, numbers){
        let size = 0;
        let canBeWritten = true;
        const lettersMaps = {
            1: [],
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
            0: []
        }
        while(size < numbers.length){
            canBeWritten = canBeWritten && new Set(lettersMaps[Number(numbers[size])]).has(word[size]);
            size += 1;
        }
        return canBeWritten
    }
}

console.log('make words of 364', Solution.makeWords('364'))