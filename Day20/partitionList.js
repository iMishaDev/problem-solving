class Solution {
    partition(list, k){
        let start = 0;
        let leftIndex = 0; 
        let rightIndex = list.length - 1;
        
        while(rightIndex >= leftIndex){
            if(list[start] > k){
                [list[start], list[rightIndex]] = [list[rightIndex], list[start]];
                rightIndex -= 1;
            } 
            if(list[start] < k){
                [list[start], list[leftIndex]] = [list[leftIndex], list[start]];
                leftIndex += 1;
            }
            start += 1;
        }
        return list;
    }
}

console.log(new Solution().partition([8, 9, 9, 2, 4, 1, 1, 0], 3))