class Solution {
    static climbingStairs(n){
        if(n <= 1)
            return 1;
        
        return this.climbingStairs(n-1) + this.climbingStairs(n-2);
    }

}

console.log('number of ways to reach to an n stair', Solution.climbingStairs(5))