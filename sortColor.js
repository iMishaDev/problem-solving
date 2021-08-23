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

    static sortColors_2(colors){
        let blackIndex = 0; 
        let blueIndex = colors.length - 1; 
        let index = 0;

        while(index <= blueIndex){
            console.log(colors)
            if (colors[index] === 3){
                [[colors[index]], [colors[blueIndex]]] = [[colors[blueIndex]], [colors[index]]];
                blueIndex--;
            }
            else if (colors[index] === 1){
                [[colors[index]], [colors[blackIndex]]] = [[colors[blackIndex]], [colors[index]]];
                index++;
                blackIndex++;
            }
            else if (colors[index] === 2){
                index++;
            }
        }

        return colors;
    }
}

console.log('Sort Colors', Solution.sortColors_2([1,2,3,3,2,1,2,1]))