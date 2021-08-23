import { createSheet } from "./helpers.js";

class Solution {
    static sortColors_1(colors){
        let sorted = [];
        let sheet = createSheet();
        for (const color of colors){
            sheet[color] += 1;
        }
        for (const color in sheet){
            sorted = [...sorted, ...new Array(sheet[color]).fill(color)];
        }
        return sorted;
    }

}

console.log('Sort Colors', Solution.sortColors_1([1,2,3,3,2,1,2,1]))