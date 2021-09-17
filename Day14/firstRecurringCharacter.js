class Solution {
    static firstRecurringCharacter(text){
        let sheet = {};

        for (const letter of [...text]){
            if(sheet[letter])
                return letter;
            sheet[letter] = 1;
        }
    }
}

console.log('First Recurring Character', Solution.firstRecurringCharacter('qwertty'))