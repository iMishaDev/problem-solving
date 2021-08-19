class Solution {
    static uniquePath(m, n){
        if(m === 1 || n === 1)
            return 1;
        return this.uniquePath(m-1,n ) + this.uniquePath(m, n-1);
    }
}

console.log('Number of Unique Paths to the target:', Solution.uniquePath(5, 3))