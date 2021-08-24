class Solution {
    static climbingStairsRecursive(n){
        if(n <= 1)
            return 1;
        
        return this.climbingStairsRecursive(n-1) + this.climbingStairsRecursive(n-2);
    }

    static climbingStairsIterative(n){
        let prevprev = 1;
        let prev = 1;
        let current = 0;

        while(n > 1){
            current = prevprev + prev;

            prevprev = prev;
            prev = current;

            n -= 1;
        }

        return current;
    }

}

console.log('number of ways to reach to an n stair', Solution.climbingStairsIterative(5))