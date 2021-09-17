class Solution {
    static merge(...intervals){
        intervals = intervals.sort((a, b) => a[0] - b[0]);

        for(let i = 1; i < intervals.length; i++){
            console.log(intervals[i][0], i)
            if(intervals[i][0] < intervals[i -1][1] && intervals[i][1] < intervals[i -1][1]){
                intervals.splice(i, 1);
            }
        }
        console.log(intervals)
    }
}

console.log('merge intervals', Solution.merge([1, 3], [5, 8], [4, 10], [20, 25]))