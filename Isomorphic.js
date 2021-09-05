class Solution {
    static isIsomorphic(text1 , text2){

        if(text1.length !== text2.length)
            return false;
        
        let sheet = new Map();
        let text = '';
        for (let i = 0; i< text1.length; i++){
            sheet.set(text1[i], text2[i]);
        }
        
        for(let i = 0; i < text1.length; i++){
            text += sheet.get(text1[i]);
        }
        return text == text2;
    }

    
}

console.log(Solution.isIsomorphic('atlatl','tartar'))
console.log(Solution.isIsomorphic('atlatlpa', 'tartarqb'))