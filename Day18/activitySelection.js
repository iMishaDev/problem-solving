class Solution {
    static select(activities){
        let stack = [];
        activities.sort((a, b) => a[1] - b[1]);
        stack.push(activities[0]);
        let i = 1;
        while(i < activities.length){
            let lastActivity = stack[stack.length -1 ];
            if(activities[i][0] >= lastActivity[1]){
                stack.push(activities[i]);
            }
            i += 1;
        }
        return stack;
    }
}

console.log(Solution.select([[1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]]));
