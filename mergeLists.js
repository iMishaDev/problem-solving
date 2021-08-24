class Solution {
    static mergeListToRanges(numbers){
        let start = 0;
        let end = 1; 
        let ranges = {}

        while(end < numbers.length){
            if(numbers[end] - numbers[end-1] > 1){
                ranges[numbers[start]] = numbers[end - 1];
                start = end;
            }
            if(end === numbers.length -1 ){
                ranges[numbers[start]] = numbers[end];
            }
            end += 1;
        }
        return ranges;
    }
}

console.log('list of ranges', Solution.mergeListToRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]))