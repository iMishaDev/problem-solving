/**
 * you are given three arrays of integers a, b 
 * and c. your task is to find the 
 * longest contiguous subarray of a 
 * containing only elements that appear
 *  in b but not appear in c
 */

class Solution {
    static find(a, b, c){
        let results = {};
        let start = -1;
        let end = 0; 
        let largest = [-1, -1];
        let subarray = [];

        while(end < a.length){
            if(b.indexOf(a[end]) > -1 && c.indexOf(a[end]) < 0){
                if(start < 0)
                    start = end
            } else {
                results[start] = end - 1;
                start = -1;
            }

            end += 1;
        }

        for (const key in results){
            if(results[key] - key > largest[0])
                largest = [results[key] - key, key, results[key]];
        }


        for(let i = Number(largest[1]); i <= largest[2]; i++){
            subarray.push(a[i]);
        }

        return subarray;
    }
}

let a = [2,1,7,1,1,5,3,5,2,1,1,1];
let b = [1,3,5];
let c = [2,3];
console.log('a', a)
console.log('b', b)
console.log('c', c)
console.log('find the longest of contiguous subarray of a, exists in b but not c ', Solution.find(a, b, c))