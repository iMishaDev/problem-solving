class Solution {
    static hasCharacterMap(st1, st2){
        let sheet = {};

        for(let i = 0; i < st1.length; i++){
            sheet[st1[i]] = st2[i];
        }

        return Object.keys(sheet).length === st1.length;
    }
}


console.log('characters map', Solution.hasCharacterMap('abc', 'def'))
console.log('characters map', Solution.hasCharacterMap('aac', 'def'))