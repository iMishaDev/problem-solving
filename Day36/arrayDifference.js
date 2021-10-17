class Solution {
    getDifference(arr1, arr2){
        let sheet1 = {};
        let sheet2 = {};

        for(const number of arr1){
            if(sheet1[number]>=0){
                sheet1[number] += 1;
            } else  sheet1[number] = 1;
        }

        for(const number of arr2){
            if(sheet2[number]>=0){
                sheet2[number] += 1;
            } else  sheet2[number] = 1;
        }
        
        for(const key in sheet1){
            if(sheet2[key] >= 0){
                delete sheet2[key];
                delete sheet1[key];
            }
        }
        
        return [...Object.keys(sheet1), ...Object.keys(sheet2)]
    }
}

console.log(new Solution().getDifference([1, 1, 2], [3, 2, 4]))