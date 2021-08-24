class Solution {
    static findIntersections(arr1, arr2){
        let sheet = {};
        let results = [];
        for(const element of arr1){
            if(!sheet[element]) 
                sheet[element] = 1
            else sheet[element] += 1
        }
        for(const element of arr2){
            if(!sheet[element]) 
                sheet[element] = 1
            else sheet[element] += 1
        }
        
        for(const key in sheet){
            if(sheet[key] > 1)
                results.push(key)
        }

        return results
    }


}

console.log('intersections between two arrays', Solution.findIntersections([4, 9, 5], [9, 4, 9, 8, 4]))